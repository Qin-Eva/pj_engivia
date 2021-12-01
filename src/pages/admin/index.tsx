/* eslint-disable @typescript-eslint/no-floating-promises */
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Container } from 'components/dnd/container'
import RecoilProvider from 'components/RecoilProvider'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { UpdatePost } from 'lib/posts'
import { usePostsData } from 'hooks/usePostsData'

const AdminAll: NextPage = () => {
  const router = useRouter()
  const { items, loading, error } = usePostsData(2)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = ({ over, active }: DragEndEvent): void => {
    if (over == null) {
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
        alert('放送を開始してください')
      }
    }
  }

  const handleStream = (): void => {
    // TODO: streamのis_streamedを2に更新
    router.push('admin/posts')
  }

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="mx-36">
      <div className="flex relative justify-center items-center">
        <TitleWithLabel title="第n回エンジビアの泉" is_streamed={1} />
        <div className="object-right absolute right-0 z-10">
          <button
            onClick={handleStream}
            className="py-2 px-6 m-4 text-white bg-[#0284C7] rounded-md"
          >
            放送を開始する
          </button>
          <Link href="/">
            <a className="py-3 px-6 m-4 text-[#0369A1] bg-[#E0F2FE] rounded-md">
              編集する
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
  return <RecoilProvider layoutType="normal">{page}</RecoilProvider>
}
