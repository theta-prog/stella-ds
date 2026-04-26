import Link from 'next/link'
import { Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Button, Heading, Text } from '@stella-ds/react'
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

  const sectionHeadingStyle: React.CSSProperties = {
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--stella-color-void-muted)',
    marginBottom: '0.75rem',
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Breadcrumb */}
      <Breadcrumb style={{ marginBottom: '1.5rem' }}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={labels.listHref}>{labels.listLabel}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink style={{ textTransform: 'capitalize' }}>{comp.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>{comp.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Category pill */}
      <div style={{ marginBottom: '0.75rem' }}>
        <Badge color="primary" variant="subtle" style={{ textTransform: 'capitalize', letterSpacing: '0.04em', borderRadius: '2rem' }}>
          {comp.category}
        </Badge>
      </div>

      {/* Title */}
      <Heading level={1} size="3xl" style={{ marginBottom: '0.75rem' }}>{comp.name}</Heading>
      <Text color="secondary" style={{ fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>{description}</Text>

      {/* Import */}
      <section style={{ marginBottom: '2.5rem' }}>
        <Heading level={2} size="sm" style={sectionHeadingStyle}>{labels.importSection}</Heading>
        <pre style={{ background: 'var(--stella-color-void-base)', border: '1px solid var(--stella-color-void-muted)', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', margin: 0 }}>
          <code style={{ color: 'var(--stella-color-aurora-300)', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
            {`import { ${comp.imports.join(', ')} } from '@stella-ds/react'`}
          </code>
        </pre>
        {comp.imports.length > 1 && (
          <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {comp.imports.map((imp) => (
              <Badge key={imp} color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
                {imp}
              </Badge>
            ))}
          </div>
        )}
      </section>

      {/* Props */}
      {comp.props.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <Heading level={2} size="sm" style={sectionHeadingStyle}>Props</Heading>
          <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid var(--stella-color-void-muted)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: 'var(--stella-color-void-base)' }}>
                  {propsHeaders.map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '0.75rem 1rem', color: 'var(--stella-color-starlight-disabled)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--stella-color-void-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comp.props.map((prop, i) => (
                  <tr key={prop.name} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', borderBottom: i < comp.props.length - 1 ? '1px solid var(--stella-color-void-muted)' : 'none' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: 'var(--stella-color-cosmos-300)', whiteSpace: 'nowrap' }}>{prop.name}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: 'var(--stella-color-nebula-400)', fontSize: '0.8rem', maxWidth: '220px' }}>{prop.type}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: 'var(--stella-color-starlight-secondary)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{prop.default}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--stella-color-starlight-secondary)', lineHeight: 1.5 }}>{prop.description}</td>
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
        <Heading level={2} size="sm" style={sectionHeadingStyle}>{labels.examplesSection}</Heading>
        {comp.examples.map((ex) => (
          <div key={ex.title} style={{ marginBottom: '1.5rem' }}>
            <Text as="div" size="xs" color="disabled" weight="semibold" style={{ marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{ex.title}</Text>
            <pre style={{ background: 'var(--stella-color-void-base)', border: '1px solid var(--stella-color-void-muted)', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', lineHeight: 1.7, margin: 0 }}>
              <code style={{ color: 'var(--stella-color-starlight-primary)', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>{ex.code}</code>
            </pre>
          </div>
        ))}
      </section>

      {/* Prev / Next navigation */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--stella-color-void-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          {prevComp && (
            <Button variant="ghost" asChild>
              <Link href={`${base}/components/${prevComp.slug}`} style={{ textDecoration: 'none' }}>
                ← {prevComp.name}
              </Link>
            </Button>
          )}
        </div>
        <Button variant="ghost" asChild>
          <Link href={labels.listHref} style={{ textDecoration: 'none' }}>{labels.allListLabel}</Link>
        </Button>
        <div>
          {nextComp && (
            <Button variant="ghost" asChild>
              <Link href={`${base}/components/${nextComp.slug}`} style={{ textDecoration: 'none' }}>
                {nextComp.name} →
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
