import {
  query,
  collection,
  getFirestore,
  where,
  FirestoreError
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { app } from 'utils/firebase'

type Posts = {
  items: {
    1: Array<{
      docId: string
      docPostId: string
      docContent: string
      docFeatured: string
    }>
    2: Array<{
      docId: string
      docPostId: string
      docContent: string
      docFeatured: string
    }>
    3: Array<{
      docId: string
      docPostId: string
      docContent: string
      docFeatured: string
    }>
  }
  loading: boolean
  error: FirestoreError | undefined
}

export const usePostsData = (stream_id: number): Posts => {
  const [value, loading, error] = useCollection(
    query(
      collection(getFirestore(app), 'posts'),
      where('stream_id', '==', stream_id)
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  const data = value?.docs.map((doc) => {
    return {
      docId: doc.id,
      docPostId: doc.data().id,
      docContent: doc.data().content,
      docFeatured: doc.data().is_featured
    }
  })

  if (data != null) {
    data.sort(function (a, b) {
      if (a.docPostId > b.docPostId) {
        return 1
      } else {
        return -1
      }
    })
  }

  const items = {
    1: data?.filter((item) => item.docFeatured === '1') ?? [],
    2: data?.filter((item) => item.docFeatured === '2') ?? [],
    3: data?.filter((item) => item.docFeatured === '3') ?? []
  }

  return { items, loading, error }
}
