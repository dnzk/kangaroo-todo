import style from "./appHeader.module.scss"
import TextButton from "../buttons/TextButton"
import { useRouter } from "next/navigation"
import { useCookies } from "next-client-cookies"

export default function ProfileDropdown() {
  const cookies = useCookies()
  const router = useRouter()

  function logOut() {
    cookies.remove('token')
    router.replace('/login')
  }

  return (
    <div className={style['profile-dropdown']}>
      <TextButton onClick={logOut}>Log Out</TextButton>
    </div>
  )
}
