import kangarooTodo from "@public/kangaroo-todo.svg"
import Image from "next/image"

export default function AppLogo({ variant }: { variant: "large" | "medium" }) {
  return <Image
    src={kangarooTodo}
    alt="Kangaroo Todo"
    width={variant === "large" ? 181 : 113}
  />
}
