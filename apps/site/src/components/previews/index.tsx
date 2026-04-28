import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

const previewComponents: Record<string, ComponentType> = {
  alert: dynamic(() => import('./feedback').then((mod) => mod.AlertPreview)),
  avatar: dynamic(() => import('./display').then((mod) => mod.AvatarPreview)),
  background: dynamic(() => import('./layout').then((mod) => mod.BackgroundPreview)),
  badge: dynamic(() => import('./display').then((mod) => mod.BadgePreview)),
  breadcrumb: dynamic(() => import('./navigation').then((mod) => mod.BreadcrumbPreview)),
  button: dynamic(() => import('./display').then((mod) => mod.ButtonPreview)),
  card: dynamic(() => import('./display').then((mod) => mod.CardPreview)),
  carousel: dynamic(() => import('./navigation').then((mod) => mod.CarouselPreview)),
  checkbox: dynamic(() => import('./forms').then((mod) => mod.CheckboxPreview)),
  dialog: dynamic(() => import('./overlay').then((mod) => mod.DialogPreview)),
  heading: dynamic(() => import('./typography').then((mod) => mod.HeadingPreview)),
  input: dynamic(() => import('./forms').then((mod) => mod.InputPreview)),
  radio: dynamic(() => import('./forms').then((mod) => mod.RadioPreview)),
  select: dynamic(() => import('./forms').then((mod) => mod.SelectPreview)),
  separator: dynamic(() => import('./layout').then((mod) => mod.SeparatorPreview)),
  skeleton: dynamic(() => import('./feedback').then((mod) => mod.SkeletonPreview)),
  stack: dynamic(() => import('./layout').then((mod) => mod.StackPreview)),
  switch: dynamic(() => import('./forms').then((mod) => mod.SwitchPreview)),
  tabs: dynamic(() => import('./navigation').then((mod) => mod.TabsPreview)),
  text: dynamic(() => import('./typography').then((mod) => mod.TextPreview)),
  tooltip: dynamic(() => import('./overlay').then((mod) => mod.TooltipPreview)),
}

interface ComponentPreviewProps {
  slug: string
}

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  const Preview = previewComponents[slug]
  if (!Preview) return null

  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--stella-color-starlight-primary)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
        Preview
      </h2>
      <div style={{
        background: 'var(--stella-color-void-surface)',
        border: '1px solid var(--stella-color-void-muted)',
        borderRadius: '0.5rem',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '120px',
      }}>
        <Preview />
      </div>
    </section>
  )
}
