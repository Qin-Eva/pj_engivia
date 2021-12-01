import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'

type Props = {
  children: ReactNode
  layoutType?: string
  content: string
}

const RecoilProvider: VFC<Props> = ({ children, layoutType, content }) => {
  let layout = 'normal'
  if (layoutType === 'scroll') layout = 'scroll'

  return (
    <RecoilRoot>
      <Layout layout={layout} content={content}>{children}</Layout>
    </RecoilRoot>
  )
}

export default RecoilProvider
