import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname !== '/login' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
export default MyApp
