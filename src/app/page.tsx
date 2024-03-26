"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader"
import TodoItems from "./ui/todoItems/TodoItems"
import { SWRConfig } from "swr"
import fetcher from "./lib/api/fetch"
import { selectItems } from "./lib/store/features/todo/todoSlice"
import { useAppSelector } from "./lib/store/hooks"

export default function Home() {
  const items = useAppSelector(selectItems)

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
            <TodoItems
              items={items}
              onAddItem={() => { }}
            />
          </div>
        </div>
      </div>
    </SWRConfig>
  );
}
