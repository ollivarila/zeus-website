import Appear from '@/components/Appear'
import { getSession } from '@/lib/session'
import RefreshButton from '@/components/RefreshButton'
import { Servers } from '@/components/Servers'

export default async function ServerList() {
  const session = await getSession()
  const loggedIn = session.isLoggedIn
  return (
    <div className="md:w-auto w-full p-8">
      <Appear delay={200}>
        <div className="flex flex-row justify-between mb-2 gap-2 ">
          <p className="text-cyan-100">Game servers:</p>
          <RefreshButton />
        </div>
      </Appear>
      <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2">
        <Servers loggedIn={loggedIn} />
      </div>
    </div>
  )
}
