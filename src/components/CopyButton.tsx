'use client'
import { ContentCopy } from '@mui/icons-material'

export default function CopyButton({ text }: { text: string }) {
  return (
    <button onClick={() => navigator.clipboard.writeText(text)}>
      <div className="bg-slate-800 p-1 rounded-full pl-2 pr-2 hover:bg-slate-900 ease-in-out duration-200">
        <ContentCopy className="text-yellow-400 text-base" />
      </div>
    </button>
  )
}
