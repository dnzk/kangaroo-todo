import style from "./todoItem.module.scss"
import IconButton from "../buttons/IconButton"

interface IItemDetail {
  onEdit: () => void;
  onDelete: () => void;
  details?: string;
}

export default function ItemDetail(props: IItemDetail) {
  return (
    <div className={`${style['item-detail']}`}>
      <div className={style['item-detail__buttons']}>
        <IconButton size="small" icon="close" onClick={props.onDelete} />
        <IconButton size="small" icon="pencil" onClick={props.onEdit} />
      </div>
      {props.details &&
        <p>{props.details}</p>
      }
    </div>
  )
}
