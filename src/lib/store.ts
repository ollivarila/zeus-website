'use client'
import { Server } from '@/types'
import { create } from 'zustand'

interface ServerStore {
  servers: Server[]
  updateServer: (server: Server) => void
  setServers: (servers: Server[]) => void
  setStatus: (name: string, status: string) => void
}
const mockServers: Server[] = [
  {
    name: 'server 1',
    description: 'This is a server',
    port: 25565,
    status: 'Running',
    version: '1.16.5',
  },
]

export const useServerStore = create<ServerStore>((set, get) => ({
  servers: [],
  updateServer: (server: Server) => {
    const current = get().servers
    const servers = current.map((s) => (s.name === server.name ? server : s))
    set({ servers })
  },
  setServers: (servers: Server[]) => set({ servers }),
  setStatus: (name: string, status: string) => {
    console.log('setting status', name, status)
    const current = get().servers
    const servers = current.map((s) =>
      s.name === name ? { ...s, status: status } : s
    )
    set({ servers })
  },
}))
