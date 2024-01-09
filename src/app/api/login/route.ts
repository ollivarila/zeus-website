import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import config from '@/lib/config'
import { SessionData } from '@/types'

export const dynamic = 'force-dynamic'

export const POST = async (req: NextRequest) => {
  const formData = await req.formData()
  const username = formData.get('username')?.toString()
  const password = formData.get('password')?.toString()
  if (!username || !password) {
    return redirectHome(req)
  }

  const weCool = checkCreds(username, password)
  if (!weCool) {
    return redirectHome(req)
  }

  const session = await getIronSession<SessionData>(
    cookies(),
    config.sessionOptions
  )
  session.username = username
  session.isLoggedIn = true
  await session.save()

  return redirectHome(req)
}

function checkCreds(username: string, password: string) {
  const { USER, PASSWORD } = config
  return username === USER && password === PASSWORD
}

function redirectHome(req: NextRequest) {
  const prodUrl = 'https://skd.servegame.com/login' // TODO use config
  const devUrl = `${req.nextUrl.origin}/login`
  const url = process.env.NODE_ENV === 'production' ? prodUrl : devUrl
  return Response.redirect(url, 303)
}
