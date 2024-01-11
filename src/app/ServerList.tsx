import Appear from '@/components/Appear'
import Server from '@/components/Server'
import { getSession } from '@/lib/session'
import { allServers } from '@/lib/controller'
import RefreshButton from '@/components/RefreshButton'
import { Suspense } from 'react'

export default async function ServerList() {
  return (
    <div className="md:w-auto w-full p-8">
      <Appear delay={200}>
        <div className="flex flex-row justify-between mb-2 gap-2 ">
          <p className="text-cyan-100">Game servers:</p>
          <RefreshButton />
        </div>
      </Appear>
      <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2">
        <Suspense fallback={<div className="text-cyan-100">Loading...</div>}>
          <Servers />
        </Suspense>
      </div>
    </div>
  )
}

async function Servers() {
  const session = await getSession()
  const loggedIn = session.username !== undefined
  const servers = await allServers()
  return (
    <>
      {servers.map((server, i) => (
        <Appear delay={200 + i * 50} key={server.name + i}>
          <Server {...server} loggedIn={loggedIn} />
        </Appear>
      ))}
    </>
  )
}
