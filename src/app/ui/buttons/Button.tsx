import style from "./buttons.module.scss"
import font from "@/app/lib/font"
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { variant?: Variant }

export default function Button(props: ButtonProps) {
  const buttonVariant = props.variant || 'primary'
  const buttonStyle = buttonVariant === 'primary' ? style.primary : style.secondary

  return (
    <button className={`${font.className} ${buttonStyle}`} {...props}>{props.children}</button>
  )
}
