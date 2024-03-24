import style from "./inputs.module.scss"
import font from "@/app/lib/font"

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & { invalid?: boolean }

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea className={`${font.className} ${style.base} ${props.invalid ? style.error : ''}`} {...props} />
  )
}
