import style from "./inputs.module.scss"
import font from "@/app/lib/font"

type TextInputProps = React.HTMLProps<HTMLInputElement> & { invalid?: boolean }

const defaultProps = {
  type: "text",
}

export default function TextInput(props: TextInputProps) {
  const inputProps = { ...defaultProps, ...props }

  return (
    <input className={`${font.className} ${style.base} ${props.invalid ? style.error : ''}`} {...inputProps} />
  )
}
