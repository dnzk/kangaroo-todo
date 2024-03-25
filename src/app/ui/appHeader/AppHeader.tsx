import style from "./appHeader.module.scss"
import AppLogo from "../logo/AppLogo"
import profile from "@public/profile.svg"
import Image from "next/image"

export default function AppHeader() {
  return (
    <div className={style['app-header']}>
      <h1><AppLogo variant="medium" /></h1>
      <Image src={profile} alt="Profile" />
    </div>
  )
}
