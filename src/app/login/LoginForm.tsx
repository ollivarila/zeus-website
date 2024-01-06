'use client'
import { useState } from 'react'
import { redirect } from 'next/navigation'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  if (loggedIn) {
    redirect('/')
  }

  return (
    <div className="h-auto w-fit bg-slate-800 p-8 rounded-sm shadow">
      <form
        className="flex flex-col gap-2"
        onSubmit={async (e) => {
          e.preventDefault()
          await login(username, password)
          setLoggedIn(true)
        }}
      >
        <label className="text-cyan-100">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="text-cyan-100">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

async function login(username: string, password: string) {
  try {
    const data = { username, password }
    await fetch('/api/login', {
      body: JSON.stringify({ ...data }),
      method: 'POST',
    })
  } catch (error) {
    alert('Login failed')
    console.error("Login didn't work", error)
  }
}
