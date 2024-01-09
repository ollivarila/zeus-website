import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(_req: NextRequest) {
  const data = {
    health: 'Ok',
  }
  return Response.json(data, { status: 200 })
}
