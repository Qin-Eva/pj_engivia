import Head from "next/head";
import type { NextPage } from "next";
import { BroadcastCard } from 'components/BroadcastCard';
import type { TCard } from 'components/BroadcastCard';

const ITEMS: TCard[] = [
  {
    id: "1",
    href: "/",
    title: "第4回エンジビアの泉",
    date: "2021年9月8日",
    status: 1,
    count: 1
  }, {
    id: "2",
    href: "/",
    title: "第3回エンジビアの泉",
    date: "2021年8月18日",
    status: 2,
    count: 3
  }, {
    id: "3",
    href: "/",
    title: "第2回エンジビアの泉",
    date: "2021年7月12日",
    status: 3,
    count: 6
  }, {
    id: "4",
    href: "/",
    title: "第1回エンジビアの泉",
    date: "2021年5月24日",
    status: 3,
    count: 4
  }
];

const broadcastIndex: NextPage = () => {
  return (
    <>
    <Head>
      <title>放送一覧ページ</title>
    </Head>
    <div className="bg-gray-200 h-screen">
      <h2 className="text-4xl w-3/5 mx-auto mb-5">放送一覧</h2>
        <div className="w-3/5 mx-auto">
          <ul>
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
)}

export default broadcastIndex;