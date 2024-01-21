import React from 'react'
import type { Metadata } from 'next'
import type { locale } from '@/app/[lang]/dictionaries'

interface RootLayoutProps {
  params: { lang: locale }
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'app',
  description: 'description'
}

export default function RootLayout({ children, params }: RootLayoutProps) {

  return (
    <html lang={params.lang}>
    <body>{children}</body>
    </html>
  )
}