import style from "./todoItem.module.scss"
import Button from "../buttons/Button"
import TextArea from "../inputs/TextArea"
import TextInput from "../inputs/TextInput"
import { ChangeEvent, useEffect, useState } from "react"

export interface IItemEdit {
  name: string;
  details?: string;
  id?: string;
  done: boolean;
}

interface IItemForm {
  item?: IItemEdit;
  onCancel: () => void;
  onSave: (item: IItemEdit) => void;
}

export default function ItemForm({ item, onSave, onCancel }: IItemForm) {
  const [localName, setLocalName] = useState<string>('')
  const [localDetail, setLocalDetail] = useState<string>('')

  useEffect(() => {
    if (item) {
      if (item.name) {
        setLocalName(item.name)
      }
      if (item.details) {
        setLocalDetail(item.details)
      }
    }
  }, [item])

  function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLocalName(event.target.value)
  }

  function onDetailChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setLocalDetail(event.target.value)
  }

  return (
    <div className={style['item-form']}>
      <form>
        <div className={style['item-form__input']}>
          <TextInput
            placeholder="Name"
            aria-label="Name"
            value={localName}
            onChange={onNameChange}
          />
        </div>
        <div className={style['item-form__input']}>
          <TextArea
            placeholder="Details"
            aria-label="Details"
            value={localDetail}
            onChange={onDetailChange}
          />
        </div>
      </form>
      <div className={style['item-form__footer']}>
        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (item) {
              onSave({
                ...item,
                ...{
                  name: localName,
                  detail: localDetail
                }
              })
            } else {
              onSave({
                name: localName,
                details: localDetail,
                id: undefined,
                done: false
              })
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
