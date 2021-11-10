import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname !== '/login' ? (
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
export default MyApp
