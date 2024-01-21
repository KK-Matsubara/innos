import type { Metadata } from 'next'
import { Header } from '@/components/unit/Header'

export const metadata: Metadata = {
  title: 'Home',
  description: 'ホームです'
}

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Header />
      {params.lang}
    </>
  )
}