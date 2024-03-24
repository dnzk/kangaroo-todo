import style from "./buttons.module.scss"
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface IUtilityButton {
  done: boolean;
  onDone: () => void;
  onUndone: () => void;
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IUtilityButton

export default function UtilityButton(props: ButtonProps) {
  return (
    <button
      className={style.utility}
      {...props}
      onClick={props.done ? props.onUndone : props.onDone}
    >
      {props.done ? 'Undone' : 'Done'}
    </button>
  )
}
