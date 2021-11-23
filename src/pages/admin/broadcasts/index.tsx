import Head from 'next/head'
import type { NextPage } from 'next'
import { Broadcasts } from 'components/Broadcasts'
import RecoilProvider from 'components/RecoilProvider'
import Link from 'next/link'

const BroadcastsIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送一覧ページ</title>
      </Head>
      <div className="flex justify-center bg-gray-200">
        <div className="mb-[30px] w-1/2 text-4xl">放送一覧</div>
        <div className="py-[13px] px-[25px] w-[162px] h-[50px] text-[16px] text-white bg-[#0284C7] rounded-md">
          <Link href="/admin/broadcasts/create">
            <a>放送を作成する</a>
          </Link>
        </div>
      </div>
      <Broadcasts />
    </>
  )
}

export default BroadcastsIndex

BroadcastsIndex.getLayout = (page) => {
  return <RecoilProvider>{page}</RecoilProvider>
}
