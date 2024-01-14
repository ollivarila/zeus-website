'use server'
import { z } from 'zod'
import config from './config'
import { getSession } from './session'
const baseUrl = `http://localhost:${config.CONTROLLER_PORT}` // Controller always running on localhost

const resSchema = z.object({
  message: z.string(),
})

const POST = { method: 'POST' }

type Result = { message: string; ok: boolean }

export async function start(name: string): Promise<Result> {
  const session = await getSession()
  if (!session.isLoggedIn) {
    return { message: 'Not logged in', ok: false }
  }

  const url = `${baseUrl}/pods/run?name=${name}`
  const data = await safeFetch(url, resSchema, POST)
  return data
    ? { message: data.message, ok: true }
    : { message: 'Error starting server', ok: false }
}

export async function shutdown(name: string): Promise<Result> {
  const session = await getSession()
  if (!session.isLoggedIn) {
    return { message: 'Not logged in', ok: false }
  }
  const url = `${baseUrl}/pods/shutdown?name=${name}`
  const data = await safeFetch(url, resSchema, POST)
  return data
    ? { message: data.message, ok: true }
    : { message: 'Error starting server', ok: false }
}

const serverInfoSchema = z.array(
  z.object({
    name: z.string(),
    status: z.string(),
    version: z.string(),
    description: z.string(),
    port: z.number(),
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
    console.error('Error: ', (error as Error).message)
    return null
  }
}
