'use client'

import { shutdown, start } from '@/lib/controller'
import { useServerStore } from '@/lib/store'
import { notify } from '@/lib/toast'
import { ToggleOff, ToggleOn } from '@mui/icons-material'

type ToggleProps = {
  status: string
  name: string
}

export default function Toggle({ status, name }: ToggleProps) {
  const setStatus = useServerStore((state) => state.setStatus)
  const isOn = status === 'Running'

  const onClick = async () => {
    const res = isOn
      ? await shutdown(name.toLowerCase())
      : await start(name.toLowerCase())

    notify(res.message)
    if (res.ok) {
      const newStatus = isOn ? 'Stopped' : 'Running'
      setStatus(name.toLowerCase(), newStatus)
    }
  }

  return (
    <button onClick={onClick} className="hover:bg-slate-800">
      {isOn ? (
        <ToggleOn className="text-green-300" />
      ) : (
        <ToggleOff className="text-slate-300" />
      )}
    </button>
  )
}

export const dynamic = 'force-dynamic'
