import Link from 'next/link'

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="bg-green-400 p-2 rounded hover:bg-green-500 transition:bg ease-in duration-100"
    >
      Login
    </Link>
  )
}
