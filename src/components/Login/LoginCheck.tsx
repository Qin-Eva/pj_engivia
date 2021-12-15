import { VFC, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useResetRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { loginUserState } from 'store/auth'
import { auth } from 'utils/firebase'
import { useRouter } from 'next/router'

export const LoginCheck: VFC = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const setLoginUser = useSetRecoilState(loginUserState)
  const resetStatus = useResetRecoilState(loginUserState)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        const uid = user.uid
        const email = user.email
        const photoURL = user.photoURL
        setLoginUser({ uid, email, photoURL })
        // setIsLoaded(true)
      } else {
        resetStatus()
        if (router.pathname.split('/')[1] !== 'login') {
          router.push('/login')
        }
      }
    })
  }, [resetStatus, setLoginUser, router])

  // return <>{isLoaded ? { children } : <div>loading...</div>}</>
  return <>{children}</>
}
