import type { Metadata } from 'next'
import { GettingStartedTemplate } from '@/components/GettingStartedTemplate'

export const metadata: Metadata = { title: 'はじめかた' }

export default function JaGettingStartedPage() {
  return <GettingStartedTemplate locale="ja" />
}
