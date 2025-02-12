"use client"

import style from "./todoItem.module.scss"
import UtilityButton from "../buttons/UtilityButton"
import IconButton from "../buttons/IconButton"
import { useState } from "react"
import ItemDetail from "./ItemDetail"
import type { TodoItem } from "@/app/lib/api/types"

type ITodoItem = TodoItem & {
  onDone: () => void;
  onUndone: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export default function TodoItem(props: ITodoItem) {
  const [folded, setFolded] = useState<boolean>(true)
  const [hovering, setHovering] = useState<boolean>(false)

  function toggleFold() {
    setFolded(!folded)
  }

  function hoverIn() {
    setHovering(true)
  }

  function hoverOut() {
    setHovering(false)
  }

  return (
    <>
      <div className={style['todo-item']} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        <IconButton
          size="small"
          icon={folded ? "triangle-right" : "triangle-down"}
          onClick={toggleFold}
        />
        <div onClick={toggleFold}>
          <span className={`${props.done ? style['todo-item--done'] : ''}`}>{props.name}</span>
          {(hovering || !folded) && <span className={style['todo-item__separator']}>--</span>}
        </div>
        {(hovering || !folded) && <UtilityButton done={props.done} onDone={props.onDone} onUndone={props.onUndone} />}
      </div>
      {
        !folded &&
        <ItemDetail
          onDelete={props.onDelete}
          onEdit={props.onEdit}
          details={props.details}
        />
      }
    </>
  )
}
