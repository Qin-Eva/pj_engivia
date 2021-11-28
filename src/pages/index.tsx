import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = ({ children }) => {
  const router = useRouter()
  useEffect(() => {
    router.push('/broadcasts')
  }, [])
  return <></>
}

export default Home
