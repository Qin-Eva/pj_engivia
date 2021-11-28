import Head from 'next/head'
import type { NextPage } from 'next'
import { Broadcasts, UserLink } from 'components/Broadcasts'
import RecoilProvider from 'components/RecoilProvider'

const BroadcastsIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送一覧ページ</title>
      </Head>
      <UserLink />
      <Broadcasts />
    </>
  )
}

export default BroadcastsIndex

BroadcastsIndex.getLayout = (page) => {
  return <RecoilProvider>{page}</RecoilProvider>
}
