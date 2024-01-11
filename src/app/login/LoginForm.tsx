export default function LoginForm() {
  return (
    <div className="h-fit w-fit bg-slate-800 p-10 rounded-md shadow-lg">
      <h1 className="text-cyan-100 text-3xl text-center pb-8 pt-2">Login</h1>
      <form action={'/api/login'} method="POST" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input type="text" name="username" text="Username" />
          <Input type="password" name="password" text="Password" />
        </div>
        <button
          type="submit"
          className="bg-green-400 w-[69px] p-2 rounded-md hover:bg-green-500 self-center"
        >
          Login
        </button>
      </form>
    </div>
  )
}

function Input({
  type,
  name,
  text,
}: {
  type: string
  name: string
  text?: string
}) {
  return (
    <div className="flex flex-col ">
      <label className="text-cyan-100 mb-[2px]">{text}</label>
      <input
        type={type}
        name={name}
        className="transition-ring rounded-sm bg-slate-700 p-1 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-sm ease-linear duration-100"
      ></input>
    </div>
  )
}
