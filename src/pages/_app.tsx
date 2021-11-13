import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()


  return (
    <RecoilRoot>
      {router.pathname !== '/login' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </RecoilRoot>
  )
}
export default MyApp
