import {
  DocumentData,
  FirestoreError,
  doc,
  getFirestore
} from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'
import { app } from 'utils/firebase'

export const useStream = (
  id: string
): {
  item: DocumentData | undefined
  loading: boolean
  error: FirestoreError | undefined
} => {
  const [value, loading, error] = useDocument(
    doc(getFirestore(app), 'streams', id),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  const item = value?.data()

  return { item, loading, error }
}
