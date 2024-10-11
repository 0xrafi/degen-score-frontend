import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import './globals.css'
import { AztecAccountProvider } from '@/contexts/AztecAccountContext'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <AztecAccountProvider>
          {children}
        </AztecAccountProvider>
      </body>
    </html>
  )
}