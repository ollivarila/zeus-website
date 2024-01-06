import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import config from "./config"
import { User } from "@/types"

export async function getSession() {
  const session = await getIronSession<User>(cookies(), config.sessionOptions)
  return session
}