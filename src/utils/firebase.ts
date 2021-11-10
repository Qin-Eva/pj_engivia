import * as firebase from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore, collection, DocumentData, FirestoreError, QuerySnapshot } from 'firebase/firestore'
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
const app = firebase.initializeApp(config)

// export const auth = firebase.auth();
// export const Firebase = firebase;

const db = getDatabase(app)
export const auth = getAuth(app)

export const LoginWithGithub = (): void => {
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      const user = result.user
      location.assign('/')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GithubAuthProvider.credentialFromError(error)
    })
}

export const firebaseUser = (): User | null => {
  return auth.currentUser
}

// Logout
export const Logout = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  auth.signOut().then(() => {
    window.location.reload()
  })
}

// リアルタイム実装
export const FirestoreCollection = (
  col: string
): {
  value: QuerySnapshot<DocumentData> | undefined
  loading: boolean
  error: FirestoreError | undefined
} => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), col),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  return { value, loading, error }
}
