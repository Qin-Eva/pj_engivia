import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  limit,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where
} from '@firebase/firestore'
import { db } from 'utils/firebase'

export const createPostData = async (
  content: string,
  user: string
): Promise<void> => {
  await addDoc(collection(db, 'posts'), {
    id: 1,
    user_id: 1,
    stream_id: 1,
    content: content,
    is_featured: '1',
    created_at: new Date(),
    updated_at: new Date(),
    created_by: user,
    updated_by: user
  })
}

export const UpdatePost = async (
  docId: string,
  id: string,
  is_featured: string
): Promise<void> => {
  await updateDoc(doc(db, 'posts', docId), {
    id,
    is_featured
  })
}

export const postUrl = async (url: string, docId: string): Promise<void> => {
  await setDoc(
    doc(db, 'streams', 'yauxifvy2GdHQt7pALPu'),
    {
      is_streamed: 3,
      url: url,
      updated_at: Timestamp.fromDate(new Date())
    },
    { merge: true }
  )
}

export const getPost = async (
  streamDocId: string,
  userDocId: string | undefined
): Promise<DocumentData> => {
  const q = query(
    collection(db, 'posts'),
    where('stream_id', '==', streamDocId),
    where('created_by', '==', userDocId),
    limit(1)
  )

  const querySnapshot = await getDocs(q)
  const docs = querySnapshot.docs.map((doc: DocumentData) => doc)
  return docs[0]
}
