import React, { VFC } from 'react'
import { useRouter } from 'next/router'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { SortableItem } from './sortable_item'
import { NullItem } from './NullItemCard'

type Props = {
  id: string
  items: Array<{ docId: string; docContent: string; docFeatured: string }>
  title: string
}

export const Container: VFC<Props> = ({ id, items, title }) => {
  const router = useRouter()
  const { setNodeRef } = useDroppable({
    id
  })

  const contents: Array<string | { id: string }> = items.map((item) => {
    return item.docContent
  })

  return (
    <div className="flex-1 p-2 m-2">
      <h3 className="flex justify-center items-center h-12 font-semibold bg-gray-300 rounded-md">
        {title}
      </h3>
      <SortableContext
        id={id}
        items={contents}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef}>
          {items?.map((item) => (
            <SortableItem key={item.docId} id={item.docContent} />
          ))}

          {router.pathname === '/admin/posts' && <NullItem title={title} />}
        </div>
      </SortableContext>
    </div>
  )
}
