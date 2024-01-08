import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './animations.css'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeus',
  description: 'Zeus cluster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' bg-gray-900 h-screen flex flex-col justify-between'
        }
      >
        {children}
        <div className="justify-end">
          <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
