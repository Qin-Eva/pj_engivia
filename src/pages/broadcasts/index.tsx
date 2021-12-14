import type { NextPage } from 'next'
import { Broadcasts } from 'components/Broadcasts'
import RecoilProvider from 'components/RecoilProvider'

const BroadcastsIndex: NextPage = () => {
  return (
    <>
      <Broadcasts isAdmin={false} />
    </>
  )
}

export default BroadcastsIndex

BroadcastsIndex.getLayout = (page) => {
  return <RecoilProvider title="放送一覧ページ">{page}</RecoilProvider>
}
