/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Head from 'next/head'
import { useSetRecoilState } from 'recoil'
import { isFeatureState } from 'store/auth'
import { usePostsData } from 'hooks/usePostsData'
import { UpdatePost } from 'lib/posts'
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DragOverEvent,
  DragEndEvent,
  DndContext
} from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { Container } from 'components/dnd/container'
import RecoilProvider from 'components/RecoilProvider'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { BroadcastStatusButton } from 'components/BroadcastStatusButton'
import { useStream } from 'hooks/useStream'
import { useRouter } from 'next/router'

const AdminAll: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string

  const {
    item: streamItem,
    loading: stramLoading,
    error: streamError
  } = useStream(id)

  const { items, loading, error } = usePostsData(id)
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
        if (streamItem?.is_streamed === 1) {
          alert('放送を開始してください！')
          return
        }
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

  if (loading || stramLoading) {
    return <div>loading...</div>
  }

  if (streamItem?.is_streamed === 3) {
    alert('この放送は終了しています！')
    router.push('/broadcasts')
  }

  return (
    <>
      <Head>
        <title>放送ステータスページ</title>
      </Head>
      <div className="relative mx-auto w-[1200px]">
        <TitleWithLabel
          title={streamItem?.title}
          is_streamed={streamItem?.is_streamed}
        />
        <BroadcastStatusButton is_streamed={streamItem?.is_streamed} id={id} />
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
    </>
  )
}

export default AdminAll

AdminAll.getLayout = (page) => {
  return <RecoilProvider>{page}</RecoilProvider>
}
