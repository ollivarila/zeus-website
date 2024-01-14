import Image from 'next/image'
import { ToastContainer } from 'react-toastify'

export default function Footer() {
  return (
    <footer className="text-center pb-1 flex flex-row justify-center gap-16">
      <ToastContainer />
      <div className="flex flex-row gap-6">
        {/* <p className="text-cyan-100">Powered by:</p> */}
        <Image src="next.svg" alt="Next.js" width="86" height="86" />
        <Image src="kubernetes.svg" alt="Kubernetes" width="32" height="32" />
      </div>
      <p className="text-cyan-100 self-end">Made with ❤️</p>
    </footer>
  )
}
