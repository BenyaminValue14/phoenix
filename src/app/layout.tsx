import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/globals.css'
import '@/src/home.css'
import Header from '@/src/app/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benyaroot',
  description: 'Personal website of Benyaroot, Software Developer, Cloud Engineer and Business Administrator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  params: { locale: string },
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
