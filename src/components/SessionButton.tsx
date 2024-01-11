import Link from 'next/link'

export default function SessionButton({ loggedIn }: { loggedIn: boolean }) {
  return loggedIn ? <LogoutButton /> : <LoginButton />
}

function LoginButton() {
  return (
    <Link
      href="/login"
      className="border-green-400 border-2 text-green-400 p-2 rounded hover:bg-slate-800 transition:bg ease-in duration-100"
    >
      Login
    </Link>
  )
}

async function LogoutButton() {
  return (
    <form action={'/api/logout'} method="POST">
      <button
        type="submit"
        className="border-red-400 border-2 p-2 text-red-400 rounded hover:bg-slate-800 transition:bg ease-in duration-100"
      >
        Logout
      </button>
    </form>
  )
}
