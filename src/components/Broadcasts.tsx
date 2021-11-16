import { BroadcastCard } from 'components/BroadcastCard'
import { getStreams } from 'lib/streamImpl'
import { useEffect, useState } from 'react'
import type { TCard } from 'components/BroadcastCard'

const ITEMS: TCard[] = [
  {
    id: '1',
    title: '第4回エンジビアの泉',
    date: '2021年9月8日',
    is_streamed: 1,
    hee_count: 1
  },
  {
    id: '2',
    title: '第3回エンジビアの泉',
    date: '2021年8月18日',
    is_streamed: 2,
    hee_count: 3
  },
  {
    id: '3',
    title: '第2回エンジビアの泉',
    date: '2021年7月12日',
    is_streamed: 3,
    hee_count: 6
  },
  {
    id: '4',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '5',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '6',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '7',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '8',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  }
]

export const initialState: TCard[] = []

const Broadcasts: React.VFC = () => {
  const [castsArray, setCastsArray] = useState<TCard[]>([])
  const [flg, setFlg] = useState<boolean>(false)

  // 放送の一覧取得
  useEffect(() => {
    ;(async (): void => {
      try {
        const streams = await getStreams()
        streams.forEach((stream) => {
          setCastsArray((prev) => [...prev, stream.data()])
        })
      } catch (e) {
        console.error(e)
      }
    })()
    return setFlg(true)
  }, [flg])

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
