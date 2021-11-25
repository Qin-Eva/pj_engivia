/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Link from 'next/link'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverEvent,
  DragEndEvent
} from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Container } from 'components/dnd/container'
import RecoilProvider from 'components/RecoilProvider'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { useCollection } from 'react-firebase-hooks/firestore'
import {
  collection,
  FirestoreError,
  getFirestore,
  query,
  where
} from '@firebase/firestore'
import { app, UpdatePost } from 'utils/firebase'
import { useSetRecoilState } from 'recoil'
import { isFeatureState } from 'store/auth'
import { useEffect } from 'react'

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

const usePostsData = (): Posts => {
  // TODO: stream_idを可変にする
  const [value, loading, error] = useCollection(
    query(collection(getFirestore(app), 'posts'), where('stream_id', '==', 2)),
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

  if (data) {
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

const AdminAll: NextPage = () => {
  const { items, loading, error } = usePostsData()
  const setIsFeature = useSetRecoilState(isFeatureState)

  useEffect(() => {
    if (items[2].length) {
      setIsFeature(true)
    } else {
      setIsFeature(false)
    }
  }, [items, setIsFeature])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragOver = ({ active, over }: DragOverEvent): void => {
    const overId = over?.id
    if (!overId) {
      return
    }

    const activeContainer = active.data.current?.sortable.containerId
    const overContainer = over.data.current?.sortable.containerId

    if (!overContainer) {
      return
    }

    if (activeContainer !== overContainer) {
      const activeDoc =
        items[activeContainer]?.filter(
          (item) => item.docContent === active.id
        ) ?? []
      const activeDocId = activeDoc[0]?.docId
      const activePostId = activeDoc[0]?.docPostId
      UpdatePost(activeDocId, activePostId, overContainer)
    }
  }

  const handleDragEnd = ({ over, active }: DragEndEvent): void => {
    if (!over) {
      return
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current?.sortable.containerId
      const overContainer = over.data.current?.sortable.containerId || over.id

      if (activeContainer === overContainer) {
        const activeDoc =
          items[activeContainer]?.filter(
            (item) => item.docContent === active.id
          ) ?? []
        const activeDocId = activeDoc[0]?.docId
        const activePostId = activeDoc[0]?.docPostId

        const overDoc =
          items[overContainer]?.filter((item) => item.docContent === over.id) ??
          []
        const overDocId = overDoc[0]?.docId
        const overPostId = overDoc[0]?.docPostId

        UpdatePost(activeDocId, overPostId, activeContainer)
        UpdatePost(overDocId, activePostId, activeContainer)
      } else {
        const activeDoc =
          items[activeContainer]?.filter(
            (item) => item.docContent === active.id
          ) ?? []
        const activeDocId = activeDoc[0]?.docId
        const activePostId = activeDoc[0]?.docPostId

        UpdatePost(activeDocId, activePostId, overContainer)
      }
    }
  }

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="mx-36">
      <div className="flex relative justify-center items-center">
        <TitleWithLabel title="第n回エンジビアの泉" is_streamed={2} />
        <div className="object-right absolute right-0 z-10">
          <Link href="/">
            <a className="py-3 px-6 m-4 text-[#0369A1] bg-[#E0F2FE] rounded-md">
              放送を終了する
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <DndContext
          sensors={sensors}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <Container id="1" items={items[1]} title="フィーチャー前" />
          <Container id="2" items={items[2]} title="フィーチャー中" />
          <Container id="3" items={items[3]} title="フィーチャー後" />
        </DndContext>
      </div>
    </div>
  )
}

export default AdminAll

AdminAll.getLayout = (page) => {
  return <RecoilProvider>{page}</RecoilProvider>
}