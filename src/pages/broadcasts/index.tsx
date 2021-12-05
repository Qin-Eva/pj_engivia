import type { NextPage } from 'next'
import { Broadcasts } from 'components/Broadcasts'
import RecoilProvider from 'components/RecoilProvider'

const BroadcastsIndex: NextPage = () => {
  return (
    <>
      <Broadcasts />
    </>
  )
}

export default BroadcastsIndex

BroadcastsIndex.getLayout = (page) => {
  return <RecoilProvider title="放送一覧ページ">{page}</RecoilProvider>
}
