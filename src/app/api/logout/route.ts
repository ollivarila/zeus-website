import config from "@/lib/config";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getIronSession(cookies(), config.sessionOptions);
  session.destroy();
  return Response.redirect(`${req.nextUrl.origin}/`, 303);
}