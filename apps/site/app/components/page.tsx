import type { Metadata } from 'next'
import { ComponentListTemplate } from '@/components/ComponentListTemplate'

export const metadata: Metadata = { title: 'Components' }

export default function ComponentsPage() {
  return <ComponentListTemplate locale="en" />
}
