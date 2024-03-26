import style from "./todoItem.module.scss"
import IconButton from "../buttons/IconButton"
import TodoItem from "./TodoItem"
import ModalBackdrop from "../modal/ModalBackdrop"
import ItemForm from "./ItemForm"
import { useState } from "react"
import { IItemEdit } from "./ItemForm"
import post from "@/app/lib/api/post"
import { setItems } from "@/app/lib/store/features/todo/todoSlice"
import { useDispatch } from "react-redux"

export interface ITodoItem {
  id: string;
  done: boolean;
  name: string;
  details?: string;
}

interface ITodoItems {
  items: ITodoItem[];
  onAddItem: () => void;
}

export default function TodoItems(props: ITodoItems) {
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false)
  const [itemTracker, setItemTracker] = useState<ITodoItem | undefined>()
  const dispatch = useDispatch()

  async function saveItem(item: IItemEdit) {
    if (item.id) {
      // TODO:
      // update
    } else {
      const response = await post('todo', {
        name: item.name,
        details: item.detail,
        done: false
      })
      if (response.ok) {
        const r = await response.json()
        dispatch(setItems(r.data))
      }
      hideModal()
    }
  }

  function showModal() {
    setShouldShowModal(true)
  }

  function hideModal() {
    setShouldShowModal(false)
  }

  function createItem() {
    setItemTracker(undefined)
    showModal()
  }

  function editItem(item: ITodoItem) {
    setItemTracker(item)
    showModal()
  }

  if (!props.items.length) {
    return (
      <div className={style['todo-items']}>
        <p>Hi!<br />You don&apos;t have anything left to do, good job on squashing those tasks! Let&apos;s add some more by pressing the plus button:</p>
        <div className={style['todo-items__button']}>
          <IconButton
            size="large"
            icon="plus"
            onClick={createItem}
          />
        </div>
        {shouldShowModal &&
          <ModalBackdrop>
            <ItemForm
              item={itemTracker}
              onCancel={hideModal}
              onSave={saveItem}
            />
          </ModalBackdrop>
        }
      </div>
    )
  }

  return (
    <>
      <div>
        <ol className={style['todo-items-list']}>
          {
            props.items.map(item => <li className={style['todo-items-list__item']} key={item.id}>
              <TodoItem
                done={item.done}
                name={item.name}
                detail={item.details}
                onDone={() => { }}
                onUndone={() => { }}
                onDelete={() => { }}
                onEdit={() => {
                  editItem(item)
                }}
              />
            </li>)
          }
        </ol>
        <div className={style['todo-items__button']}>
          <IconButton size="medium" icon="plus" onClick={createItem} />
        </div>
      </div>
      {shouldShowModal &&
        <ModalBackdrop>
          <ItemForm
            item={itemTracker}
            onCancel={hideModal}
            onSave={saveItem}
          />
        </ModalBackdrop>
      }
    </>
  )
}
