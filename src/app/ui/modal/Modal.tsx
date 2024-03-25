import React from "react"
import style from "./modal.module.scss"

type ModalProps = {
  children?: React.JSX.Element
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={style.modal}>
      {children}
    </div>
  )
}
