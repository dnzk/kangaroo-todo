import style from "./loader.module.scss"

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
