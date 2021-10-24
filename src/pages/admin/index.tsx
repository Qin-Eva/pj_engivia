import React, { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Container } from 'components/dnd/container'
import { Item } from 'components/dnd/sortable_item'

interface Items {
  root: string[]
  container1: string[]
  container2: string[]
}

const AdminAll = () => {
  const [items, setItems] = useState<Items>({
    root: ['1', '2', '3'],
    container1: ['4', '5', '6'],
    container2: ['7', '8', '9'],
  })
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const findContainer = (id: number) => {
    if (id in items) {
      return id
    }

    return Object.keys(items).find((key) =>
      items[key as keyof Items].includes(String(id))
    )
  }

  const handleDragStart = (event: any) => {
    const { active } = event
    const { id } = active
    setActiveId(id)
  }

  const handleDragOver = (event: any) => {
    const { active, over, draggingRect } = event
    const { id } = active
    const { id: overId } = over
    let Rect = event.over.rect

    // Find the containers
    const activeContainer = findContainer(id) as keyof Items
    const overContainer = findContainer(overId) as keyof Items

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer]
      const overItems = prev[overContainer]

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id)
      const overIndex = overItems.indexOf(overId)

      let newIndex
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          Rect.offsetTop > over.rect.offsetTop + over.rect.height

        const modifier = isBelowLastItem ? 1 : 0

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      }
    })
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    const { id } = active
    const { id: overId } = over

    const activeContainer = findContainer(id) as keyof Items
    const overContainer = findContainer(overId) as keyof Items

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return
    }

    const activeIndex = items[activeContainer].indexOf(active.id)
    const overIndex = items[overContainer].indexOf(overId)

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }))
    }

    setActiveId(null)
  }

  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center">
        <span>放送中</span>
        <h2>第4回エンジビアの泉</h2>
      </div>
      <div className="flex flex-row">
        <DndContext
          sensors={sensors}
          collisionDetection={(e) => closestCorners(e)}
          onDragStart={(e) => handleDragStart(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <Container id="root" items={items.root} title="フィーチャー前" />
          <Container
            id="container1"
            items={items.container1}
            title="フィーチャー中"
          />
          <Container
            id="container2"
            items={items.container2}
            title="フィーチャー後"
          />
        </DndContext>
      </div>
    </div>
  )
}

export default AdminAll
