import { addDoc, collection, doc, updateDoc } from '@firebase/firestore'
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
