import { Id, toast } from 'react-toastify'

export function notify(message: string) {
  return toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: false,
    progressStyle: { background: '#7159c1' },
  })
}

export function createNotify(message: string) {
  return () => notify(message)
}

export function clearNotify(id: Id) {
  toast.dismiss(id)
}
