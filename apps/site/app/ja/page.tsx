import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Stella UI — ウェブ向けデザインシステム' }

const features = [
  { icon: '⚡', title: '25 コンポーネント', desc: 'ボタン、フォーム、オーバーレイ、レイアウトなど豊富なコンポーネント' },
  { icon: '♿', title: 'アクセシブル', desc: 'Radix UI プリミティブ上に構築、全体に ARIA 対応' },
  { icon: '🎨', title: 'デザイントークン', desc: '天体をテーマにしたカラーパレットと CSS カスタムプロパティ' },
  { icon: '🤖', title: 'AI 対応', desc: 'llms.txt と MCP サーバーでシームレスな AI 統合' },
]

export default function JaHomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '7rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.15)', border: '1px solid rgba(79, 70, 229, 0.3)', color: '#818cf8', borderRadius: '2rem', padding: '0.375rem 1rem', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Design System
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1.25rem', background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
          Stella UI
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          ウェブ向けのスケーラブルなデザインシステム。
          <br />
          25 のアクセシブルなコンポーネント。天体をベースにしたデザイントークン。
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/ja/getting-started"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: 'white', padding: '0.8rem 1.75rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 4px 24px rgba(79, 70, 229, 0.35)' }}
          >
            はじめる →
          </a>
          <a
            href="/ja/components"
            style={{ border: '1px solid #334155', color: '#e2e8f0', padding: '0.8rem 1.75rem', borderRadius: '0.5rem', fontSize: '0.95rem', background: 'rgba(30, 41, 59, 0.5)' }}
          >
            コンポーネント一覧
          </a>
        </div>
      </section>

      {/* Install command */}
      <section style={{ padding: '0 2rem 4rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>インストール</p>
        <code style={{ display: 'block', background: '#0d1117', border: '1px solid #1e293b', padding: '1rem 1.25rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#7dd3fc', fontFamily: 'ui-monospace, SFMono-Regular, monospace', textAlign: 'left' }}>
          npm install @stella-ds/react @stella-ds/theme
        </code>
      </section>

      {/* Feature cards */}
      <section style={{ padding: '2rem 2rem 6rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{ background: '#111827', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.375rem', fontSize: '1rem', color: '#f1f5f9' }}>{f.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick start strip */}
      <section style={{ borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', background: '#0d1117', padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>クイックスタート</p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#f1f5f9' }}>設定も簡単</h2>
        <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
          テーマをインポートして CSS 変数をいれて、あとはコンポーネントを使うだけ。
        </p>
        <pre style={{ display: 'inline-block', textAlign: 'left', background: '#111827', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.75rem', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '600px', width: '100%', overflow: 'auto' }}>
          <code style={{ color: '#f1f5f9', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>{`import '@stella-ds/theme/css'
import { Button, Input, Card } from '@stella-ds/react'

export default function App() {
  return (
    <Card>
      <Input placeholder="メールアドレス" />
      <Button variant="solid">登録する</Button>
    </Card>
  )
}`}</code>
        </pre>
      </section>
    </div>
  )
}
