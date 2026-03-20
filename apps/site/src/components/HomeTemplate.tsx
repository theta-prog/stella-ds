import { Badge, Button, Card, CardContent, Text } from '@stella-ds/react'

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
      { icon: '⚡', title: '25 Components', desc: 'Buttons, forms, overlays, layout primitives, and more' },
      { icon: '♿', title: 'Accessible', desc: 'Built on Radix UI primitives with ARIA support throughout' },
      { icon: '🎨', title: 'Design Tokens', desc: 'Celestial color palette with CSS custom properties' },
      { icon: '🤖', title: 'AI-Ready', desc: 'llms.txt and MCP server for seamless AI integration' },
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
      { icon: '⚡', title: '25 コンポーネント', desc: 'ボタン、フォーム、オーバーレイ、レイアウトなど豊富なコンポーネント' },
      { icon: '♿', title: 'アクセシブル', desc: 'Radix UI プリミティブ上に構築、全体に ARIA 対応' },
      { icon: '🎨', title: 'デザイントークン', desc: '天体をテーマにしたカラーパレットと CSS カスタムプロパティ' },
      { icon: '🤖', title: 'AI 対応', desc: 'llms.txt と MCP サーバーでシームレスな AI 統合' },
    ],
  },
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
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1.25rem', background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
          Stella UI
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          {c.tagline1}<br />{c.tagline2}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="glow" size="lg" asChild>
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
        <code style={{ display: 'block', background: '#0d1117', border: '1px solid #1e293b', padding: '1rem 1.25rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#7dd3fc', fontFamily: 'ui-monospace, SFMono-Regular, monospace', textAlign: 'left' }}>
          npm install @stella-ds/react @stella-ds/theme
        </code>
      </section>

      {/* Feature cards */}
      <section style={{ padding: '2rem 2rem 6rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {c.features.map((f) => (
            <Card key={f.title}>
              <CardContent>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <Text weight="bold" style={{ marginBottom: '0.375rem', display: 'block' }}>{f.title}</Text>
                <Text size="sm" color="secondary">{f.desc}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick start strip */}
      <section style={{ borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', background: '#0d1117', padding: '4rem 2rem', textAlign: 'center' }}>
        <Text size="xs" color="disabled" style={{ marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
          {c.quickStart.label}
        </Text>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#f1f5f9' }}>{c.quickStart.title}</h2>
        <Text color="secondary" style={{ maxWidth: '500px', margin: '0 auto 2rem', display: 'block' }}>
          {c.quickStart.desc}
        </Text>
        <pre style={{ display: 'inline-block', textAlign: 'left', background: '#111827', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.75rem', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '600px', width: '100%', overflow: 'auto' }}>
          <code style={{ color: '#f1f5f9', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>{c.quickStart.code}</code>
        </pre>
      </section>
    </div>
  )
}
