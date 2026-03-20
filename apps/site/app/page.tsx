import type { Metadata } from 'next'
import { HomeTemplate } from '@/components/HomeTemplate'

export const metadata: Metadata = { title: 'Home' }

export default function HomePage() {
  return <HomeTemplate locale="en" />
}
