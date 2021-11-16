import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'

type Props = {
  children: ReactNode
}

const RecoilProvider: VFC<Props> = (props) => {
  return (
    <RecoilRoot>
      <Layout>{props.children}</Layout>
    </RecoilRoot>
  )
}

export default RecoilProvider
