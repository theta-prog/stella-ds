import type { Metadata } from 'next'
import { components } from '@/data/components'

export const metadata: Metadata = { title: 'Components' }

const categories = ['inputs', 'display', 'feedback', 'layout', 'navigation', 'overlay', 'typography'] as const

const categoryLabels: Record<string, string> = {
  inputs: 'Inputs',
  display: 'Display',
  feedback: 'Feedback',
  layout: 'Layout',
  navigation: 'Navigation',
  overlay: 'Overlay',
  typography: 'Typography',
}

const categoryDescriptions: Record<string, string> = {
  inputs: 'Form controls and interactive inputs',
  display: 'Visual display components',
  feedback: 'Status messages, skeletons, and notifications',
  layout: 'Structural and layout primitives',
  navigation: 'Navigation patterns and breadcrumbs',
  overlay: 'Modals, dialogs, and tooltips',
  typography: 'Text and heading primitives',
}

export default function ComponentsPage() {
  const totalCount = components.length

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ color: '#818cf8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Docs</div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Components
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
          {totalCount} accessible, composable components built on Radix UI primitives.
          Each component ships with full TypeScript types and design token integration.
        </p>
      </div>

      {/* Category sections */}
      {categories.map((cat) => {
        const catComponents = components.filter((c) => c.category === cat)
        if (catComponents.length === 0) return null
        return (
          <section key={cat} style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.375rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#818cf8' }}>
                {categoryLabels[cat]}
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#475569' }}>{catComponents.length} component{catComponents.length !== 1 ? 's' : ''}</span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              {categoryDescriptions[cat]}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {catComponents.map((comp) => (
                <a
                  key={comp.slug}
                  href={`/components/${comp.slug}`}
                  style={{ display: 'block', background: '#111827', padding: '1.25rem 1.5rem', borderRadius: '0.75rem', border: '1px solid #1e293b', textDecoration: 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1rem' }}>{comp.name}</h3>
                    <span style={{ fontSize: '0.75rem', color: '#475569' }}>
                      {comp.imports.length} export{comp.imports.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.55 }}>{comp.description}</p>
                  <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {comp.imports.slice(0, 3).map((imp) => (
                      <span key={imp} style={{ background: 'rgba(79, 70, 229, 0.1)', border: '1px solid rgba(79, 70, 229, 0.2)', color: '#818cf8', borderRadius: '0.25rem', padding: '0.1rem 0.4rem', fontSize: '0.7rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
                        {imp}
                      </span>
                    ))}
                    {comp.imports.length > 3 && (
                      <span style={{ color: '#475569', fontSize: '0.7rem', padding: '0.1rem 0.25rem' }}>
                        +{comp.imports.length - 3} more
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
