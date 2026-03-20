import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { components } from '@/data/components'
import { ComponentDetailTemplate } from '@/components/ComponentDetailTemplate'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comp = components.find((c) => c.slug === slug)
  return { title: comp?.name ?? 'コンポーネント' }
}

export default async function JaComponentPage({ params }: Props) {
  const { slug } = await params
  const comp = components.find((c) => c.slug === slug)
  if (!comp) notFound()

  const currentIndex = components.findIndex((c) => c.slug === slug)
  const prevComp = currentIndex > 0 ? components[currentIndex - 1] : null
  const nextComp = currentIndex < components.length - 1 ? components[currentIndex + 1] : null

  return <ComponentDetailTemplate comp={comp} prevComp={prevComp} nextComp={nextComp} locale="ja" />
}
