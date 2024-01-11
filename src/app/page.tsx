import Title from '@/components/Title'
import ServerList from './ServerList'
import SessionButton from '@/components/SessionButton'
import { getSession } from '@/lib/session'

export default async function Home() {
  const session = await getSession()
  const loggedIn = session.username !== undefined
  return (
    <main className="w-full h-full flex justify-between flex-col">
      <div className="flex items-center flex-col gap-4">
        <div className="flex flex-row-reverse w-full pt-1 pr-1 pb-4">
          <SessionButton loggedIn={loggedIn} />
        </div>
        <Title />
        <ServerList />
      </div>
    </main>
  )
}
