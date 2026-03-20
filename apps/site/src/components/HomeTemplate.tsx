import { Badge, Button, Card, CardContent, Text } from '@stella-ds/react'

type FeatureColor = 'cosmos' | 'nebula' | 'aurora' | 'nova'

const content = {
  en: {
    badge: 'Design System',
    tagline1: 'Scalable design system for web.',
    tagline2: '25 accessible components. Celestial design tokens. Zero config.',
    cta1: 'Get Started →',
    cta2: 'Browse Components',
    installLabel: 'INSTALL',
    quickStart: {
      label: 'QUICK START',
      title: 'Up and running in seconds',
      desc: 'Import the theme, inject CSS variables, then use any component.',
      code: `import '@stella-ds/theme/css'
import { Button, Input, Card } from '@stella-ds/react'

export default function App() {
  return (
    <Card>
      <Input placeholder="Email address" />
      <Button variant="solid">Subscribe</Button>
    </Card>
  )
}`,
    },
    features: [
      { color: 'cosmos' as FeatureColor, title: '25 Components', desc: 'Buttons, forms, overlays, layout primitives, and more' },
      { color: 'nebula' as FeatureColor, title: 'Accessible', desc: 'Built on Radix UI primitives with ARIA support throughout' },
      { color: 'aurora' as FeatureColor, title: 'Design Tokens', desc: 'Celestial color palette with CSS custom properties' },
      { color: 'nova' as FeatureColor, title: 'AI-Ready', desc: 'llms.txt and MCP server for seamless AI integration' },
    ],
  },
  ja: {
    badge: 'Design System',
    tagline1: 'ウェブ向けのスケーラブルなデザインシステム。',
    tagline2: '25 のアクセシブルなコンポーネント。天体をベースにしたデザイントークン。',
    cta1: 'はじめる →',
    cta2: 'コンポーネント一覧',
    installLabel: 'インストール',
    quickStart: {
      label: 'クイックスタート',
      title: '設定も簡単',
      desc: 'テーマをインポートして CSS 変数をいれて、あとはコンポーネントを使うだけ。',
      code: `import '@stella-ds/theme/css'
import { Button, Input, Card, CardContent } from '@stella-ds/react'

export default function App() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="メールアドレス" />
        <Button variant="solid">登録する</Button>
      </CardContent>
    </Card>
  )
}`,
    },
    features: [
      { color: 'cosmos' as FeatureColor, title: '25 コンポーネント', desc: 'ボタン、フォーム、オーバーレイ、レイアウトなど豊富なコンポーネント' },
      { color: 'nebula' as FeatureColor, title: 'アクセシブル', desc: 'Radix UI プリミティブ上に構築、全体に ARIA 対応' },
      { color: 'aurora' as FeatureColor, title: 'デザイントークン', desc: '天体をテーマにしたカラーパレットと CSS カスタムプロパティ' },
      { color: 'nova' as FeatureColor, title: 'AI 対応', desc: 'llms.txt と MCP サーバーでシームレスな AI 統合' },
    ],
  },
}

const accentMap: Record<FeatureColor, string> = {
  cosmos: 'var(--stella-color-cosmos-500)',
  nebula: 'var(--stella-color-nebula-500)',
  aurora: 'var(--stella-color-aurora-500)',
  nova:   'var(--stella-color-nova-500)',
}


interface Props {
  locale: 'en' | 'ja'
}

export function HomeTemplate({ locale }: Props) {
  const c = content[locale]
  const base = locale === 'ja' ? '/ja' : ''

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '7rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Badge color="primary" variant="subtle" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', padding: '0.375rem 1rem', borderRadius: '2rem' }}>
            {c.badge}
          </Badge>
        </div>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 5rem)',
          fontWeight: 800,
          marginBottom: '1.25rem',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--stella-color-starlight-primary)',
        }}>
          Stella UI
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--stella-color-starlight-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          {c.tagline1}<br />{c.tagline2}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="solid" size="lg" asChild>
            <a href={`${base}/getting-started`}>{c.cta1}</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`${base}/components`}>{c.cta2}</a>
          </Button>
        </div>
      </section>

      {/* Install command */}
      <section style={{ padding: '0 2rem 4rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Text size="xs" color="disabled" style={{ marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
          {c.installLabel}
        </Text>
        <code style={{
          display: 'block',
          background: 'var(--stella-color-void-surface)',
          border: '1px solid var(--stella-color-void-muted)',
          padding: '1rem 1.25rem',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
          color: 'var(--stella-color-aurora-300)',
          fontFamily: 'var(--stella-typography-fontFamily-mono)',
          textAlign: 'left',
        }}>
          npm install @stella-ds/react @stella-ds/theme
        </code>
      </section>

      {/* Feature cards */}
      <section style={{ padding: '2rem 2rem 6rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {c.features.map((f) => (
            <Card key={f.title} style={{
              transition: 'border-color var(--stella-transition-base)',
            }}>
              <CardContent>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: accentMap[f.color],
                  marginBottom: '1rem',
                  borderRadius: '50%',
                }} />
                <Text weight="bold" style={{ marginBottom: '0.375rem', display: 'block' }}>{f.title}</Text>
                <Text size="sm" color="secondary">{f.desc}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick start strip */}
      <section style={{
        borderTop: '1px solid var(--stella-color-void-muted)',
        borderBottom: '1px solid var(--stella-color-void-muted)',
        background: 'var(--stella-color-void-base)',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <Text size="xs" color="disabled" style={{ marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
          {c.quickStart.label}
        </Text>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--stella-color-starlight-primary)' }}>{c.quickStart.title}</h2>
        <Text color="secondary" style={{ maxWidth: '500px', margin: '0 auto 2rem', display: 'block' }}>
          {c.quickStart.desc}
        </Text>
        <pre style={{
          display: 'inline-block',
          textAlign: 'left',
          background: 'var(--stella-color-void-surface)',
          border: '1px solid var(--stella-color-void-muted)',
          boxShadow: 'inset 0 1px 0 rgb(255 255 255 / 0.03)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          lineHeight: 1.8,
          maxWidth: '600px',
          width: '100%',
          overflow: 'auto',
        }}>
          <code style={{ color: 'var(--stella-color-starlight-primary)', fontFamily: 'var(--stella-typography-fontFamily-mono)' }}>{c.quickStart.code}</code>
        </pre>
      </section>
    </div>
  )
}
