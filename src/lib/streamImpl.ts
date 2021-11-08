import { collection, addDoc } from 'firebase/firestore'
import { db } from 'utils/firebase'

export type TStream = {
  hee_count: number
  is_streamed: number
  title: string
  created_at: string
  updated_at: string
}

export const addStream = async (data: TStream): void => {
  try {
    await addDoc(collection(db, 'Streams'), data)
  } catch (e) {
    console.error(e)
    throw new Error('放送は登録できませんでした。')
  }
}
