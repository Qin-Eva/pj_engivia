import { collection, addDoc, getDocs, query } from 'firebase/firestore'
import { db } from 'utils/firebase'
import { QuerySnapshot, DocumentData } from '@firebase/firestore'

export type TStream = {
  hee_count: number
  is_streamed: number
  title: string
  created_at: string
  updated_at: string
}

export const getStreams = async (): Promise<QuerySnapshot<DocumentData>> => {
  try {
    const q = query(collection(db, 'Streams'))
    return await getDocs(q)
  } catch (e: Error) {
    throw new Error('放送を取得できませんでした。')
  }
}

export const addStream = async (data: TStream): void => {
  try {
    await addDoc(collection(db, 'streams'), data)
  } catch (e: Error) {
    throw new Error('放送は登録できませんでした。')
  }
}
