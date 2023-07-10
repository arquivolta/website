import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arquivolta',
  description: 'Arquivolta, the Linux distribution designed for developers using WSL2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
