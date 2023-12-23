'use client'
import { useState } from 'react'

export default function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <button
      className="bg-slate-600 rounded p-2 shadow border-solid border-sky-900 border-2"
      onClick={() => setCount(count + 1)}
    >
      Count {count}
    </button>
  )
}
