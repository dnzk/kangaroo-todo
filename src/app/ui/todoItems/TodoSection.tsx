import { selectItems } from "@/app/lib/store/features/todo/todoSlice"
import { useAppSelector } from "@/app/lib/store/hooks"
import TodoItems from "./TodoItems"

export default function TodoSection() {
  const items = useAppSelector(selectItems)

  return <TodoItems items={items} />
}
