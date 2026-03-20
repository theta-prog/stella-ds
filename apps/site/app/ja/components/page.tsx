import type { Metadata } from 'next'
import { ComponentListTemplate } from '@/components/ComponentListTemplate'

export const metadata: Metadata = { title: 'コンポーネント' }

export default function JaComponentsPage() {
  return <ComponentListTemplate locale="ja" />
}
