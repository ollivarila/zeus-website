'use client'
import { allServers } from '@/lib/controller'
import Appear from './Appear'
import Server from './Server'
import { useEffect } from 'react'
import { useServerStore } from '@/lib/store'

type Props = {
  loggedIn: boolean
}

export function Servers({ loggedIn }: Props) {
  const { servers, setServers } = useServerStore((state) => ({
    servers: state.servers,
    setServers: state.setServers,
  }))

  useEffect(() => {
    allServers().then(setServers)
  }, [setServers])

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
