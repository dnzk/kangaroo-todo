"use client"

import style from "./page.module.scss"
import AppHeader from "./ui/appHeader/AppHeader";
import TodoItems from "./ui/todoItems/TodoItems";

export default function Home() {

  return (
    <div>
      <AppHeader />
      <div className={style.container}>
        <div className={style.content}>
          <TodoItems
            items={[]}
            onAddItem={() => { }}
          />
        </div>
      </div>
    </div>
  );
}
