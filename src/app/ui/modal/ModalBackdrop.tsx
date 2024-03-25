import style from "./modal.module.scss"
import Modal from "./Modal"

type BackdropProps = {
  children?: React.JSX.Element,
}

export default function ModalBackdrop({ children }: BackdropProps) {
  return (
    <>
      <div className={style.backdrop} />
      <Modal>
        {children}
      </Modal>
    </>
  )
}
