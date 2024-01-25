import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang="en">
        <body>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}