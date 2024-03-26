import useSWR from "swr"
import { setItems } from "@/app/lib/store/features/todo/todoSlice"
import { useDispatch } from "react-redux"
import { selectItems } from "@/app/lib/store/features/todo/todoSlice"
import { useAppSelector } from "@/app/lib/store/hooks"
import TodoItems from "./TodoItems"

export default function TodoSection() {
  const { data, error } = useSWR('todo')
  const dispatch = useDispatch()
  const items = useAppSelector(selectItems)

  if (error) {
    return <p>There was an error when loading your data. Please reload.</p>
  }

  if (data?.data?.length) {
    dispatch(setItems(data.data))
  }

  return <TodoItems
    items={items}
    onAddItem={() => { }}
  />
}
