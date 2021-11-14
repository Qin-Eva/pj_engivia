import Head from 'next/head'
import type { NextPage } from 'next'
import { BroadcastCard } from 'components/BroadcastCard'
import type { TCard } from 'components/BroadcastCard'

const ITEMS: TCard[] = [
  {
    id: '1',
    href: '/',
    title: '第4回エンジビアの泉',
    date: '2021年9月8日',
    is_streamed: 1,
    hee_count: 1
  },
  {
    id: '2',
    href: '/',
    title: '第3回エンジビアの泉',
    date: '2021年8月18日',
    is_streamed: 2,
    hee_count: 3
  },
  {
    id: '3',
    href: '/',
    title: '第2回エンジビアの泉',
    date: '2021年7月12日',
    is_streamed: 3,
    hee_count: 6
  },
  {
    id: '4',
    href: '/',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '4',
    href: '/',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '4',
    href: '/',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '4',
    href: '/',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  },
  {
    id: '4',
    href: '/',
    title: '第1回エンジビアの泉',
    date: '2021年5月24日',
    is_streamed: 3,
    hee_count: 4
  }
]

const broadcastIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送一覧ページ</title>
      </Head>
      <div className="h-[calc(100vh-64px-5rem)]">
        <h2 className="mx-auto mb-5 w-3/5 text-4xl">放送一覧</h2>
        <div className="mx-auto w-3/5">
          <ul className="overflow-y-auto h-[calc(100vh-64px-150px)]">
            {ITEMS.map((item) => {
              return (
                <li key={item.id} className="mt-[2px]">
                  <BroadcastCard {...item} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default broadcastIndex
