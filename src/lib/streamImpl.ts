import { collection, addDoc, getDocs, query } from 'firebase/firestore'
import { db } from 'utils/firebase'
import {
  QuerySnapshot,
  DocumentData,
  Timestamp,
  updateDoc,
  doc,
  getDoc
} from '@firebase/firestore'

export type TStream = {
  hee_count: number
  is_streamed: number
  title: string
  stream_date: Timestamp
  created_at: Timestamp
  updated_at: Timestamp
}

export const getStreams = async (): Promise<QuerySnapshot<DocumentData>> => {
  try {
    const q = query(collection(db, 'streams'))
    return await getDocs(q)
  } catch (e: Error) {
    throw new Error('放送を取得できませんでした。')
  }
}

export const addStream = async (data: TStream): Promise<void> => {
  try {
    await addDoc(collection(db, 'streams'), data)
  } catch (e: Error) {
    throw new Error('放送は登録できませんでした。')
  }
}

export const updateStreamStatus = async (
  is_streamed: number,
  id: string
): Promise<void> => {
  try {
    await updateDoc(doc(db, 'streams', id), {
      is_streamed
    })
  } catch (e: Error) {
    throw new Error('放送の状態を更新できませんでした。')
  }
}

export const getStream = async (streamDocId: string): Promise<DocumentData> => {
  const docRef = doc(db, 'streams', streamDocId)
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()) {
    throw new Error('放送を取得できませんでした。')
  }
  return docSnap.data()
}
