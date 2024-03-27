"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader"
import { useCookies } from "next-client-cookies"
import { useRouter } from "next/navigation"
import { get } from "./lib/api/requests"
import { useDispatch } from "react-redux"
import { setItems } from "./lib/store/features/todo/todoSlice"
import TodoItems from "./ui/todoItems/TodoItems"
import { useState } from "react"
import Loader from "./ui/loader/Loader"

export default function Home() {
  const cookies = useCookies()
  const token = cookies.get('token')
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(true);

  if (!token) {
    router.replace('/login')
  }

  get('todo', token)
    .then((result) => {
      if (result?.data) {
        dispatch(setItems(result.data))
        setLoading(false)
      }
    })

  return (
    <div>
      <AppHeader />
      <div className={style.container}>
        <div className={style.content}>
          {loading ? <Loader /> : <TodoItems />}
        </div>
      </div>
    </div>
  );
}
