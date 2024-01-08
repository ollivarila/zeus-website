import Link from 'next/link'

export default function SessionButton({ loggedIn }: { loggedIn: boolean }) {
  return loggedIn ? <LogoutButton /> : <LoginButton />
}

function LoginButton() {
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
    <form action={'/api/logout'} method="POST">
      <button
        type="submit"
        className="bg-red-400 p-2 rounded hover:bg-red-500 transition:bg ease-in duration-100"
      >
        Logout
      </button>
    </form>
  )
}
