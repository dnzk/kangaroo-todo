"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader"
import TodoSection from "./ui/todoItems/TodoSection"
import { useCookies } from "next-client-cookies"
import { useRouter } from "next/navigation"
import { get } from "./lib/api/api"
import { useDispatch } from "react-redux"
import { setItems } from "./lib/store/features/todo/todoSlice"

export default function Home() {
  const cookies = useCookies()
  const token = cookies.get('token')
  const router = useRouter()
  const dispatch = useDispatch()

  if (!token) {
    router.replace('/login')
  }

  get('todo', token)
    .then((result) => {
      if (result?.data) {
        dispatch(setItems(result.data))
      }
    })


  return (
    <div>
      <AppHeader />
      <div className={style.container}>
        <div className={style.content}>
          <TodoSection />
        </div>
      </div>
    </div>
  );
}
