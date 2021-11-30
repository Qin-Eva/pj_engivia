import React, { VFC } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { SortableItem } from './sortable_item'

type Props = {
  id: string
  items: string[]
  title: string
}

export const Container: VFC<Props> = ({ id, items, title }) => {
  const { setNodeRef } = useDroppable({
    id
  })

  return (
    <div className="flex-1 p-2 m-2 bg-gray-100">
      <h3 className="flex justify-center items-center h-12 font-semibold bg-gray-300 rounded-md">
        {title}
      </h3>
      <SortableContext
        id={id}
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}
