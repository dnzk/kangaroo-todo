"use client"

import style from "./login.module.scss"
import AppLogo from "../ui/logo/AppLogo"
import TextInput from "../ui/inputs/TextInput"
import Button from "../ui/buttons/Button"
import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginPage() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function logIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO:
    // implement log in
  }

  return (
    <div className={style.container}>
      <div className={style.login}>
        <AppLogo variant="large" />
        <form onSubmit={logIn}>
          <TextInput
            placeholder="Username"
            style={{ marginBottom: '25px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            style={{ marginBottom: '50px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Button disabled={!username && !password}>Log In</Button>
        </form>
      </div>
    </div>
  )
}
