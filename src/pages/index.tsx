import type { NextPage } from 'next'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { loginUserState } from 'store/auth'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from 'utils/firebase'

const Home: NextPage = ({ children }) => {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)
  const resetStatus = useResetRecoilState(loginUserState)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setLoginUser(uid)
      } else {
        resetStatus()
      }
    })
  }, [])

  console.log(loginUser)

  return (
    <div className="min-h-screen">
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  )
}

export default Home
