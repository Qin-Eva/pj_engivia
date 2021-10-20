import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortable_item";

const containerStyle = {
  background: "#f3f4f6",
  padding: 8,
  margin: 8,
  flex: 1
};

const titleStyle = {
  background: "#D1D5DB",
  height: "52px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px"
}

export default function Container(props) {
  const { id, items, title } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
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
  );
}
