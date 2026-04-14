import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ThemeInitScript from '@/components/ThemeInitScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Combat Veterans to Careers Organization',
  description: 'Empowering combat veterans to transition into successful civilian careers',
  icons: {
    icon: '/CVClogo.png',
    shortcut: '/CVClogo.png',
    apple: '/CVClogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeInitScript />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
