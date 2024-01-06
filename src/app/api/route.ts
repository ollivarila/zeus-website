import { getSession } from "@/lib/session";
import { NextApiRequest } from "next";

export async function GET(_req: NextApiRequest) {
  const data = {
    message: "Hello world",
  }
  const session = await getSession()
  console.log("Session", session)
  return Response.json(data, { status: 200 });
}