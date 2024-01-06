import { NextApiRequest } from "next";
import {getIronSession} from "iron-session"
import {cookies} from 'next/headers'
import { NextRequest } from "next/server";
import config from "@/lib/config";
import { User } from "@/types";

export const POST = async (req: NextRequest) => {
  const { username, password }= await req.json()
  if (!username || !password) {
    return new Response(null, {status: 400})
  }
  
  const weCool = checkCreds(username, password)
  if (!weCool) {
    return new Response(null, {status: 401})
  }

  const session = await getIronSession<User>(cookies(), config.sessionOptions)
  session.username = username
  await session.save()
  return new Response(null, {status: 200})
}


function checkCreds(username: string, password: string) {
  const { USERNAME, PASSWORD } = process.env
  return username === USERNAME && password === PASSWORD
}