"use client"

import style from "./login.module.scss"
import AppLogo from "../ui/logo/AppLogo"
import TextInput from "../ui/inputs/TextInput"
import Button from "../ui/buttons/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { useCookies } from 'next-client-cookies'
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const cookies = useCookies()
  const router = useRouter()
  const token = cookies.get('token')

  if (token) {
    router.replace('/')
  }

  async function logIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const b = btoa(`${username}:${password}`)
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${b}`
      }
    })
    const result = await response.json()
    cookies.set('token', result.data)
    router.push('/')
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
            type="password"
            style={{ marginBottom: '50px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Button disabled={!username && !password}>Log In</Button>
        </form>
      </div>
    </div>
  )
}
