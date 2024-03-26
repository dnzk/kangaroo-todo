"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader"
import { SWRConfig } from "swr"
import TodoSection from "./ui/todoItems/TodoSection"
import { useCookies } from "next-client-cookies"
import { useRouter } from "next/navigation"

export default function Home() {
  const cookies = useCookies()
  const token = cookies.get('token')
  const router = useRouter()

  if (!token) {
    router.replace('/login')
  }

  const fetcher = (resource: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL
    return fetch(`${url}/${resource}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
  }

  return (
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <div>
        <AppHeader />
        <div className={style.container}>
          <div className={style.content}>
            <TodoSection />
          </div>
        </div>
      </div>
    </SWRConfig>
  );
}
