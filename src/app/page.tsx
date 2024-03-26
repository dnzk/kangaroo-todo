"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader"
import { SWRConfig } from "swr"
import fetcher from "./lib/api/fetch"
import TodoSection from "./ui/todoItems/TodoSection"

export default function Home() {

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
