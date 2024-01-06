import Title from '@/components/Title'
import ServerList from './ServerList'
import SessionButton from '@/components/SessionButton'
import { getSession } from '@/lib/session'

export default async function Home() {
  return (
    <main className="w-full h-screen flex justify-between flex-col">
      <div className="flex items-center mt-10 flex-col p-20 pt-0 gap-4">
        <div className="absolute top-6 right-10">
          <SessionButton />
        </div>
        <Title />
        <ServerList />
      </div>
    </main>
  )
}
