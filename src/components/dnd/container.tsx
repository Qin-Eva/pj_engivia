import React, { VFC } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { SortableItem } from './sortable_item'

interface Props {
  id: string
  items: string[]
  title: string
}

export const Container: VFC<Props> = ({ id, items, title }) => {
  const { setNodeRef } = useDroppable({
    id,
  })

  return (
    <div className="bg-gray-100 p-2 m-2 flex-1">
      <h3 className="bg-gray-300 h-12 flex justify-center items-center rounded-md font-semibold">
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
