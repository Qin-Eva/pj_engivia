import React, { VFC } from 'react'
import Image from 'next/image'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type Props = {
  id: string
}

export const Item: VFC<Props> = ({ id }) => {
  return (
    <div className="justify-center items-center p-4 my-2.5 w-full bg-white rounded-md shadow-md">
      <p className="text-base">{id}</p>
      <div className="flex justify-start items-center mt-4 text-sm">
        <Image
          src="/Avatar.png"
          alt="ユーザー写真"
          width="24px"
          height="24px"
        ></Image>
        <span className="ml-2">松平 ケン</span>
      </div>
    </div>
  )
}

export const SortableItem: VFC<Props> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={id} />
    </div>
  )
}
