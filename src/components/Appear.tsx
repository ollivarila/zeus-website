'use client'
import { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
}

export default function Appear({
  children,
  delay = 0,
  duration = 1000,
}: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={`transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      } ease-in duration-${duration}`}
    >
      {children}
    </div>
  )
}
