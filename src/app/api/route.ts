import { NextApiRequest } from 'next'

export async function GET(_req: NextApiRequest) {
  const data = {
    message: 'Hello world',
  }
  return Response.json(data, { status: 200 })
}
