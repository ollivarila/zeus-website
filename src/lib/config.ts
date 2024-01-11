import z from 'zod'

const envSchema = z.object({
  COOKIE_SECRET: z.string().default('a-very-secret-cookie-secret-AAAAAAAAAA'),
  USER: z.string().default('test'),
  PASSWORD: z.string().default('test'),
  CONTROLLER_PORT: z.string().default('3001'),
})

const env = envSchema.parse(process.env)

const config = {
  ...env,
  sessionOptions: {
    password: env.COOKIE_SECRET,
    cookieName: 'session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
} as const

export default config
