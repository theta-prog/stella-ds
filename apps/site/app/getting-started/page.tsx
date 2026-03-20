import type { Metadata } from 'next'
import { GettingStartedTemplate } from '@/components/GettingStartedTemplate'

export const metadata: Metadata = { title: 'Getting Started' }

export default function GettingStartedPage() {
  return <GettingStartedTemplate locale="en" />
}
