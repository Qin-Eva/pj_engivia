import * as firebase from 'firebase/app'
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import {
  collection,
  Timestamp,
  getFirestore,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

// !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export const app = firebase.initializeApp(config)

const auth = getAuth(app)
export const db = getFirestore(app)

export const LoginWithGithub = async (): Promise<void> => {
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // すでに登録済みかを確認
      const mailSnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('name', '==', result.user.displayName),
          where('mail', '==', result.user.email)
        )
      )
      let isSignup = false
      mailSnapshot.forEach((doc) => {
        if (doc.exists()) {
          return (isSignup = true)
        } else {
          return (isSignup = false)
        }
      })
      if (isSignup) {
        // サインアップしているのでこの先の処理は行わない
        return null
      }
      const docSnap = await getDocs(
        query(collection(db, 'users'), orderBy('created_at', 'desc'), limit(1))
      )
      let id: number = 0 // 初期化
      docSnap.forEach((doc) => {
        id = Number(doc.data().id) + 1
      })
      // mail追加
      await addDoc(collection(db, 'mail'), {
        name: result.user.displayName,
        adress: result.user.email
      })
      // users追加
      await addDoc(collection(db, 'users'), {
        created_at: Timestamp.fromDate(new Date()),
        id: id === 0 ? 1 : id,
        name: result.user.displayName,
        photo:result.user.photoURL,
        role_id: 2,
        mail: result.user.email
      })
      // location.assign('/')
    })
    .catch((error) => {
      console.error(error)
    })
}

// ログイン状態の検知
export const listenAuthState = (dispatch: any) => {
  return firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch({
        type: 'login',
        payload: {
          user
        }
      })
    } else {
      // User is signed out.
      // ...
      dispatch({
        type: 'logout'
      })
    }
  })
}

export const firebaseUser = () => {
  return firebase.auth().currentUser
}

// Logout
export const Logout = () => {
  auth.signOut().then(() => {
    window.location.reload()
  })
}

// リアルタイム実装
export const FirestoreCollection = (col: string) => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), col),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  return { value, loading, error }
}
