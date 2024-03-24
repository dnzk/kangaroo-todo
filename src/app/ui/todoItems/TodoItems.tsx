import style from "./todoItem.module.scss"
import IconButton from "../buttons/IconButton"
import TodoItem from "./TodoItem"

interface ITodoItem {
  id: string;
  done: boolean;
  name: string;
  detail?: string;
}

interface ITodoItems {
  items: ITodoItem[];
  onAddItem: () => void;
}

export default function TodoItems(props: ITodoItems) {
  if (!props.items.length) {
    return (
      <div className={style['todo-items']}>
        <p>Hi!<br />You don&apos;t have anything left to do, good job on squashing those tasks! Let&apos;s add some more by pressing the plus button:</p>
        <div className={style['todo-items__button']}>
          <IconButton size="large" icon="plus" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <ol className={style['todo-items-list']}>
        {
          props.items.map(item => <li className={style['todo-items-list__item']} key={item.id}>
            <TodoItem
              done={item.done}
              name={item.name}
              detail={item.detail}
              onDone={() => { }}
              onUndone={() => { }}
              onDelete={() => { }}
              onEdit={() => { }}
            />
          </li>)
        }
      </ol>
      <div className={style['todo-items__button']}>
        <IconButton size="medium" icon="plus" />
      </div>
    </div>
  )
}
