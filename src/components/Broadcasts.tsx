import { BroadcastCard } from 'components/BroadcastCard'
import { getStreams } from 'lib/streamImpl'
import { useEffect, useState } from 'react'
import type { TCard } from 'components/BroadcastCard'
import { formatDate } from 'utils/formatDate'

export const initialState: TCard[] = []

export const Broadcasts: React.VFC = () => {
  const [castsArray, setCastsArray] = useState<TCard[]>([])

  // 放送の一覧取得
  useEffect(() => {
    ;(async (): void => {
      try {
        const streams = await getStreams()
        const docs = streams.docs.map((stream) => {
          const streamDate = formatDate(stream.data().stream_date.toDate())
          const data = {
            ...stream.data(),
            id: stream.id,
            stream_date: streamDate
          }
          return data
        })
        setCastsArray(docs)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div className="h-[calc(100vh-64px-5rem)]">
      <div className="mx-auto w-3/5">
        <ul className="overflow-y-auto h-[calc(100vh-64px-150px)]">
          {castsArray.map((item) => {
            return (
              <li key={item.id} className="mt-[2px]">
                <BroadcastCard {...item} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
