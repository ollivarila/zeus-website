import config from "@/lib/config";
import { getIronSession } from "iron-session";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const GET = async (_req: NextApiRequest) => {
  const session = await getIronSession(cookies(), config.sessionOptions);
  session.destroy();
  redirect("/")
}