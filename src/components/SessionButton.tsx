import { getSession } from '@/lib/session'
import Link from 'next/link'

export default async function SessionButton() {
  const { username } = await getSession()
  console.log(username)
  return username ? <LogoutButton /> : <LoginButton />
}

async function LoginButton() {
  return (
    <Link
      href="/login"
      className="bg-green-400 p-2 rounded hover:bg-green-500 transition:bg ease-in duration-100"
    >
      Login
    </Link>
  )
}

async function LogoutButton() {
  return (
    <Link
      href="/api/logout"
      className="bg-red-400 p-2 rounded hover:bg-red-500 transition:bg ease-in duration-100"
    >
      Logout
    </Link>
  )
}
