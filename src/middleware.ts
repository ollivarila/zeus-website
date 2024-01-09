import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const log = formatMessage(req)
  console.log(log)
  return NextResponse.next()
}

function formatMessage(req: NextRequest) {
  const method = req.method
  const path = req.nextUrl.pathname
  const geo = getGeo(req.geo)
  const dateTime = new Date().toJSON()
  return `${dateTime} ${method} ${path} ${geo}`
}

function getGeo(geo: NextRequest['geo']): string {
  let props = []
  if (geo?.country) props.push(geo.country)
  if (geo?.city) props.push(geo.city)

  return props.join(', ')
}

export const config = {
  matcher: ['/login', '/', '/logout'],
}
