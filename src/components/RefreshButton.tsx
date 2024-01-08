'use client'

import { useRouter } from 'next/navigation'
import { Replay } from '@mui/icons-material'

export default function RefreshButton() {
  const router = useRouter()
  const refresh = () => router.refresh()
  return (
    <button
      className="bg-cyan-100 text-cyan-800 p-1 rounded-full shadow-md hover:bg-cyan-200"
      onClick={refresh}
    >
      <Replay />
    </button>
  )
}
