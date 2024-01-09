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
    return Response.redirect(`${req.nextUrl.origin}/login`, 303)
  }

  const weCool = checkCreds(username, password)
  if (!weCool) {
    return Response.redirect(`${req.nextUrl.origin}/login`, 303)
  }

  const session = await getIronSession<SessionData>(
    cookies(),
    config.sessionOptions
  )
  session.username = username
  session.isLoggedIn = true
  await session.save()

  return Response.redirect(`${req.nextUrl.origin}/`, 303)
}

function checkCreds(username: string, password: string) {
  const { USER, PASSWORD } = config
  return username === USER && password === PASSWORD
}
