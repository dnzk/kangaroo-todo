import style from "./buttons.module.scss"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function TextButton(props: ButtonProps) {
  return (
    <button
      {...props}
      className={style['text-button']}
    >
      {props.children}
    </button>
  )
}
