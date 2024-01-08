'use client'

import { shutdown, start } from '@/lib/controller'
import { notify } from '@/lib/toast'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

type ToggleProps = {
  status: string
  name: string
}

export default function Toggle({ status, name }: ToggleProps) {
  const isOn = status === 'Running'
  const [isPending, startTransition] = useTransition()
  const onClick = () => {
    startTransition(async () => {
      if (isPending) {
        return
      }
      let message = ''
      if (isOn) {
        const data = await shutdown(name.toLowerCase())
        message = data.message
      } else {
        const data = await start(name.toLowerCase())
        message = data.message
      }

      notify(message)
    })
  }

  if (isPending) {
    return <button disabled>...</button>
  }

  return (
    <button onClick={onClick}>
      {isOn ? (
        <ToggleOn className="text-green-300" />
      ) : (
        <ToggleOff className="text-slate-300" />
      )}
    </button>
  )
}

export const dynamic = 'force-dynamic'
