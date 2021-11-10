import type { NextPage } from 'next'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { loginUserState } from 'store/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from 'utils/firebase'

const Home: NextPage = ({ children }) => {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)
  const resetStatus = useResetRecoilState(loginUserState)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        const uid = user.uid
        setLoginUser(uid)
      } else {
        resetStatus()
      }
    })
  }, [resetStatus, setLoginUser])

  return <div className="min-h-screen"></div>
}

export default Home
