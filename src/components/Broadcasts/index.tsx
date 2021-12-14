import { BroadcastCard } from 'components/BroadcastCard'
import { getStreams } from 'lib/streamImpl'
import { useEffect, useState } from 'react'
import type { TCard } from 'components/BroadcastCard'
import { formatDate } from 'utils/formatDate'
import Link from 'next/link'

export const initialState: TCard[] = []

type Props = {
  isAdmin: boolean
}

export const Broadcasts: React.VFC<Props> = ({ isAdmin }) => {
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
    <div className="mx-auto w-[700px]">
      {isAdmin ? adminTitle() : userTitle()}
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
  )
}

export const adminTitle: React.VFC = () => {
  return (
    <div className="flex justify-between mb-[30px] bg-gray-200">
      <div className="text-4xl">放送一覧</div>
      <div className="py-[7px] px-[10px] text-[14px] text-white bg-[#0284C7] rounded-md">
        <Link href="/admin/broadcasts/create">
          <a>放送を作成する</a>
        </Link>
      </div>
    </div>
  )
}

export const userTitle: React.VFC = () => {
  return (
    <div className="bg-gray-200">
      <div className="mb-[30px] w-3/5 text-4xl">放送一覧</div>
    </div>
  )
}
