import * as firebase from 'firebase/app'
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

export const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const app = firebase.initializeApp(config)

// export const auth = firebase.auth();
// export const Firebase = firebase;

const db = getDatabase(app)
const auth = getAuth(app)

export const LoginWithGithub = () => {
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      const user = result.user
      console.log(user)
      location.assign('/')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GithubAuthProvider.credentialFromError(error)
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
          user,
        },
      })
    } else {
      // User is signed out.
      // ...
      dispatch({
        type: 'logout',
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
