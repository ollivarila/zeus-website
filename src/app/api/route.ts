import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(_req: NextRequest) {
  const data = {
    message: 'Hello world',
  }
  return Response.json(data, { status: 200 })
}
