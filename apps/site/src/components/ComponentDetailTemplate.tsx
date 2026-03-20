import type { ComponentDoc } from '@/data/components'
import { componentDescriptionsJa } from '@/data/components-ja'
import { ComponentPreview } from '@/components/previews'

interface Props {
  comp: ComponentDoc
  prevComp: ComponentDoc | null
  nextComp: ComponentDoc | null
  locale: 'en' | 'ja'
}

export function ComponentDetailTemplate({ comp, prevComp, nextComp, locale }: Props) {
  const isJa = locale === 'ja'
  const base = isJa ? '/ja' : ''
  const description = isJa ? (componentDescriptionsJa[comp.slug] ?? comp.description) : comp.description
  const propsHeaders = isJa
    ? ['Prop', '型', 'デフォルト', '説明']
    : ['Prop', 'Type', 'Default', 'Description']
  const labels = {
    listHref: `${base}/components`,
    listLabel: isJa ? 'コンポーネント' : 'Components',
    allListLabel: isJa ? 'コンポーネント一覧' : 'All Components',
    importSection: isJa ? 'インポート' : 'Import',
    examplesSection: isJa ? '使用例' : 'Examples',
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: '#475569' }}>
        <a href={labels.listHref} style={{ color: '#818cf8', textDecoration: 'none' }}>{labels.listLabel}</a>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ textTransform: 'capitalize' }}>{comp.category}</span>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#94a3b8' }}>{comp.name}</span>
      </nav>

      {/* Category pill */}
      <div style={{ marginBottom: '0.75rem' }}>
        <span style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.12)', border: '1px solid rgba(79, 70, 229, 0.25)', color: '#818cf8', borderRadius: '2rem', padding: '0.2rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.04em' }}>
          {comp.category}
        </span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#f1f5f9' }}>{comp.name}</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>{description}</p>

      {/* Import */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem', color: '#f1f5f9', paddingBottom: '0.5rem', borderBottom: '1px solid #1e293b' }}>{labels.importSection}</h2>
        <pre style={{ background: '#0d1117', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#7dd3fc', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
            {`import { ${comp.imports.join(', ')} } from '@stella-ds/react'`}
          </code>
        </pre>
        {comp.imports.length > 1 && (
          <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {comp.imports.map((imp) => (
              <span key={imp} style={{ background: 'rgba(79, 70, 229, 0.1)', border: '1px solid rgba(79, 70, 229, 0.2)', color: '#818cf8', borderRadius: '0.25rem', padding: '0.15rem 0.5rem', fontSize: '0.75rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
                {imp}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Props */}
      {comp.props.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem', color: '#f1f5f9', paddingBottom: '0.5rem', borderBottom: '1px solid #1e293b' }}>Props</h2>
          <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#0d1117' }}>
                  {propsHeaders.map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1e293b' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comp.props.map((prop, i) => (
                  <tr key={prop.name} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', borderBottom: i < comp.props.length - 1 ? '1px solid #1e293b' : 'none' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#a5b4fc', whiteSpace: 'nowrap' }}>{prop.name}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#f472b6', fontSize: '0.8rem', maxWidth: '220px' }}>{prop.type}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#94a3b8', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{prop.default}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#cbd5e1', lineHeight: 1.5 }}>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Live Preview */}
      <ComponentPreview slug={comp.slug} />

      {/* Examples */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem', color: '#f1f5f9', paddingBottom: '0.5rem', borderBottom: '1px solid #1e293b' }}>{labels.examplesSection}</h2>
        {comp.examples.map((ex) => (
          <div key={ex.title} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#64748b', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{ex.title}</h3>
            <pre style={{ background: '#0d1117', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', lineHeight: 1.7, margin: 0 }}>
              <code style={{ color: '#f1f5f9', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>{ex.code}</code>
            </pre>
          </div>
        ))}
      </section>

      {/* Prev / Next navigation */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          {prevComp && (
            <a href={`${base}/components/${prevComp.slug}`} style={{ color: '#818cf8', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← {prevComp.name}
            </a>
          )}
        </div>
        <a href={labels.listHref} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem' }}>{labels.allListLabel}</a>
        <div>
          {nextComp && (
            <a href={`${base}/components/${nextComp.slug}`} style={{ color: '#818cf8', textDecoration: 'none', fontSize: '0.9rem' }}>
              {nextComp.name} →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
