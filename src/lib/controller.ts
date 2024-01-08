'use server'
import { z } from 'zod'
import config from './config'
import { getSession } from './session'
const baseUrl = `http://localhost:${config.CONTROLLER_PORT}`

const resSchema = z.object({
  message: z.string(),
})

const POST = { method: 'POST' }

export async function start(name: string) {
  const session = await getSession()
  if (!session.isLoggedIn) {
    return { message: 'Not logged in' }
  }

  const url = `${baseUrl}/pods/run?name=${name}`
  const data = await safeFetch(url, resSchema, POST)
  return data ?? { message: 'Error starting server' }
}

export async function shutdown(name: string) {
  const session = await getSession()
  if (!session.isLoggedIn) {
    return { message: 'Not logged in' }
  }
  const url = `${baseUrl}/pods/shutdown?name=${name}`
  const data = await safeFetch(url, resSchema, POST)
  return data ?? { message: 'Error shutting down server' }
}

const serverInfoSchema = z.array(
  z.object({
    name: z.string(),
    status: z.string(),
    version: z.string(),
    description: z.string(),
  })
)

export async function allServers() {
  const url = `${baseUrl}/pods`
  const data = await safeFetch(url, serverInfoSchema)
  return data ?? []
}

async function safeFetch<T>(
  url: string,
  schema: z.ZodType<T>,
  options: RequestInit = {}
) {
  const defaults = {
    cache: 'no-store',
  }
  try {
    const res = await fetch(url, { ...defaults, ...options } as RequestInit)
    const data = await res.json()
    return schema.parse(data)
  } catch (error) {
    console.error('Error fetching: ', (error as Error).message)
    return null
  }
}

let running = false

export async function test() {
  running = !running
  await sleep(1000)

  return true
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
