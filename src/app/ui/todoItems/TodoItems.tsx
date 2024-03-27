import style from "./todoItem.module.scss"
import IconButton from "../buttons/IconButton"
import TodoItem from "./TodoItem"
import ModalBackdrop from "../modal/ModalBackdrop"
import ItemForm from "./ItemForm"
import { useState } from "react"
import { IItemEdit } from "./ItemForm"
import { post } from "@/app/lib/api/requests"
import { selectItems, setItems } from "@/app/lib/store/features/todo/todoSlice"
import { useDispatch } from "react-redux"
import { put, del } from "@/app/lib/api/requests"
import { useCookies } from 'next-client-cookies'
import { useAppSelector } from "@/app/lib/store/hooks"
import type { TodoItem as ITodoItem } from "@/app/lib/api/types"

export default function TodoItems() {
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false)
  const [itemTracker, setItemTracker] = useState<ITodoItem | undefined>()
  const dispatch = useDispatch()
  const cookies = useCookies()
  const token = cookies.get('token')
  const items = useAppSelector(selectItems)

  async function saveItem(item: IItemEdit) {
    if (item.id) {
      updateItem(item)
    } else {
      const response = await post('todo', {
        name: item.name,
        details: item.details,
        done: false
      }, token)
      dispatch(setItems(response.data))
    }
    hideModal()
  }

  async function updateItem(item: IItemEdit) {
    const response = await put(`todo/${item.id}`, {
      name: item.name,
      details: item.details,
      done: item.done
    }, token)
    dispatch(setItems(response.data))
  }

  function markAsDone(item: IItemEdit) {
    const updated = { ...item, ...{ done: true } }
    updateItem(updated)
  }

  function markAsUndone(item: IItemEdit) {
    const updated = { ...item, ...{ done: false } }
    updateItem(updated)
  }

  async function deleteItem(item: IItemEdit) {
    const response = await del(`todo/${item.id}`, token)
    dispatch(setItems(response.data))
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

  if (!items.length) {
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
        <p className={style['todo-items__header']}>Looks like we&apos;ve got things to do!</p>
        <ol className={style['todo-items-list']}>
          {
            items.map(item => <li
              className={style['todo-items-list__item']}
              key={item.id}
            >
              <TodoItem
                {...item}
                onDone={() => {
                  markAsDone(item)
                }}
                onUndone={() => {
                  markAsUndone(item)
                }}
                onDelete={() => {
                  deleteItem(item)
                }}
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
