import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import IconPlus from "@public/plus.svg"
import Image from "next/image"
import style from "./buttons.module.scss"

type Size = "large" | "medium"

type IconButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { size?: Size }

export default function PlusButton(props: IconButtonProps) {
  const imageSize = props.size === "large" ? {} : { width: 30 }

  return (
    <button {...props} className={style.icon}>
      <Image
        src={IconPlus}
        alt="Plus button"
        aria-label="Plus button"
        {...imageSize}
      />
    </button>
  )
}
