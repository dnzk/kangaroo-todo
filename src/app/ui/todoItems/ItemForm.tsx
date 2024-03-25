import style from "./todoItem.module.scss"
import Button from "../buttons/Button"
import TextArea from "../inputs/TextArea"
import TextInput from "../inputs/TextInput"
import { ChangeEvent, useEffect, useState } from "react"

interface IItemForm {
  name?: string;
  detail?: string;
  onCancel: () => void;
  onSave: (name: string, detail?: string) => void;
}

export default function ItemForm({ name, detail, onCancel, onSave }: IItemForm) {
  const [localName, setLocalName] = useState<string>('')
  const [localDetail, setLocalDetail] = useState<string>('')

  useEffect(() => {
    if (name) {
      setLocalName(name)
    }
    if (detail) {
      setLocalDetail(detail)
    }
  }, [name, detail])

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
          onClick={() => onSave(localName, localDetail)}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
