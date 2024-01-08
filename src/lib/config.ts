import z from "zod"

const envSchema = z.object({
  COOKIE_SECRET: z.string().default("a-very-secret-cookie-secret-AAAAAAAAAA"),
  USERNAME: z.string().default("admin"),
  PASSWORD: z.string(),
  CONTROLLER_PORT: z.string(),
})

const env = envSchema.parse(process.env)

const config = {
  ...env,
  sessionOptions: {
    password: env.COOKIE_SECRET,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    }
  },
} as const

export type Config = typeof config

export default config