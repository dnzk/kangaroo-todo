import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import iconPlus from "@public/plus.svg"
import iconClose from "@public/close.svg"
import iconPencil from "@public/pencil.svg"
import Image from "next/image"
import style from "./buttons.module.scss"

type Size = "small" | "medium" | "large"
type Icon = "plus" | "close" | "pencil"

const icons = {
  plus: iconPlus,
  close: iconClose,
  pencil: iconPencil,
}

const sizes = {
  small: {
    width: 15
  },
  medium: {
    width: 30
  },
  large: {
    width: 60
  }
}

type IconButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { size: Size, icon: Icon }

export default function IconButton(props: IconButtonProps) {
  return (
    <button {...props} className={style.icon}>
      <Image
        src={icons[props.icon]}
        alt="Plus button"
        aria-label="Plus button"
        {...sizes[props.size]}
      />
    </button>
  )
}
