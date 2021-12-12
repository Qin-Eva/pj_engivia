import { doc, DocumentData, getDoc } from '@firebase/firestore'
import { db, firebaseUser } from 'utils/firebase'

export const getLoginUser = async (): Promise<DocumentData | undefined> => {
  const user = firebaseUser()
  if (user != null) {
    const userDocId = user?.uid
    const docRef = doc(db, 'users', userDocId)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }
}
