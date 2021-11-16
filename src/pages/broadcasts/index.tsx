import Head from 'next/head'
import type { NextPage } from 'next'
import Broadcasts from 'components/Broadcasts'

const BroadcastsIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送一覧ページ</title>
      </Head>
      <Broadcasts />
    </>
  )
}

export default BroadcastsIndex
