export default function LoginForm() {
  return (
    <div className="h-auto w-fit bg-slate-800 p-8 rounded-sm shadow">
      <form className="flex flex-col gap-2">
        <label className="text-cyan-100">Username</label>
        <input type="text"></input>
        <label className="text-cyan-100">Password</label>
        <input type="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
