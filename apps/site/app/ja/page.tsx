import type { Metadata } from 'next'
import { HomeTemplate } from '@/components/HomeTemplate'

export const metadata: Metadata = { title: 'Stella UI — ウェブ向けデザインシステム' }

export default function JaHomePage() {
  return <HomeTemplate locale="ja" />
}
