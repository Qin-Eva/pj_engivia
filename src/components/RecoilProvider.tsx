import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'
import LayoutScroll from './LayoutScroll'

type Props = {
  children: ReactNode
  layoutType?: string
}

const RecoilProvider: VFC<Props> = ({ children, layoutType }) => {
  if (layoutType === 'scroll') return scroll(children)
  return normal(children)
}

const scroll = (children: Pick<Props, children>): Element.JSX => {
  return (
    <RecoilRoot>
      <LayoutScroll>{children}</LayoutScroll>
    </RecoilRoot>
  )
}

const normal = (children: Pick<Props, children>): ELement.JSX => {
  return (
    <RecoilRoot>
      <Layout>{children}</Layout>
    </RecoilRoot>
  )
}

export default RecoilProvider
