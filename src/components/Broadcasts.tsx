import { BroadcastCard } from 'components/BroadcastCard'
import { getStreams } from 'lib/streamImpl'
import { useEffect, useState } from 'react'
import type { TCard } from 'components/BroadcastCard'

export const initialState: TCard[] = []

const Broadcasts: React.VFC = () => {
  const [castsArray, setCastsArray] = useState<TCard[]>([])

  // 放送の一覧取得
  useEffect(() => {
    ;(async (): void => {
      try {
        const streams = await getStreams()
        streams.forEach((stream) => {
          const data = {
            ...stream.data(),
            id: stream.id
          }
          setCastsArray((prev) => [...prev, data])
        })
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div className="h-[calc(100vh-64px-5rem)]">
      <h2 className="mx-auto mb-5 w-3/5 text-4xl">放送一覧</h2>
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

export default Broadcasts
