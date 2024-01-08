'use client'

import { createNotify } from '@/lib/toast'

export default function ToastBtn() {
  return <button onClick={createNotify('hello')}>Notify !</button>
}
