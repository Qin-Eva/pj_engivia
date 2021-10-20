import React from "react";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item(props: any) {
  const { id } = props;

  const style = {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
    background: "white",
    borderRadius: "8px",
    padding: "16px",
  };

  const title = {
    fontSize: "14px",
  }

  const infoArea = {
    margin: "16px 0 0",
    fontSize: "12px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  }

  const name = {
    margin: "0 0 0 16px",
  }

  return (
    <div style={style}>
      <p style={title}>id: {id} HTMLにはポータルという便利な要素がある</p>
      <div style={infoArea}>
        <Image
          src="/Avatar.png"
          alt="ユーザー写真"
          width="24px"
          height="24px"
        ></Image>
        <span style={name}>松平 ケン</span>
      </div>
    </div>
  );
}

export default function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
