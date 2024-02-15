import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './home.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benyaroot',
  description: 'Personal website of Benyaroot, Software Developer, Cloud Engineer and Business Administrator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
