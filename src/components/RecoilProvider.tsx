import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'

type Props = {
  children: ReactNode
  layoutType?: string
}

const RecoilProvider: VFC<Props> = ({ children, layoutType }) => {
  let layout = 'normal'
  if (layoutType === 'scroll') layout = 'scroll'

  return (
    <RecoilRoot>
      <Layout layout={layout}>{children}</Layout>
    </RecoilRoot>
  )
}

export default RecoilProvider
