import { allServers } from './lib/controller'

export type SessionData = {
  username: string
  isLoggedIn: boolean
}
export type Server = Awaited<ReturnType<typeof allServers>>[number]
