import { ReactNode, VFC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'
import { LoginCheck } from 'components/Login/LoginCheck'

type Props = {
  children: ReactNode
  layoutType: string
}

const RecoilProvider: VFC<Props> = ({ children, layoutType }) => {
  let layout = null
  if (layoutType === 'normal') layout = 'normal'
  if (layoutType === 'scroll') layout = 'scroll'

  return (
    <RecoilRoot>
      <LoginCheck>{showLayout({ layout, children })}</LoginCheck>
    </RecoilRoot>
  )
}

type showLayoutProps = {
  layout: string | null
}

const showLayout: JSX.Element<showLayoutProps> = ({ layout, children }) => {
  return layout !== null ? (
    <Layout layout={layout}>{children}</Layout>
  ) : (
    <>{children}</>
  )
}

export default RecoilProvider
