import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import config from './config'
import { SessionData } from '@/types'

export async function getSession() {
  const session = await getIronSession<SessionData>(
    cookies(),
    config.sessionOptions
  )
  return session
}
