import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ToasterContext from '../context/toaster-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All eyes',
  description: 'be cool bro website for sos rwanda 2050',
  icons: {
    icon: {
      href: "/boy.svg",
      url: "/boy.svg",    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider 
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
          >
            <ToasterContext/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
