import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'

type Props = {
  children: ReactNode
  layoutType?: string
  title: string
}

const RecoilProvider: VFC<Props> = ({ children, layoutType, title }) => {
  let layout = 'normal'
  if (layoutType === 'scroll') layout = 'scroll'

  return (
    <RecoilRoot>
      <Layout layout={layout} title={title}>{children}</Layout>
    </RecoilRoot>
  )
}

export default RecoilProvider
