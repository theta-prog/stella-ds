import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'はじめかた' }

const codeBlock = (_code: string): React.CSSProperties => ({
  display: 'block',
  background: '#0d1117',
  border: '1px solid #1e293b',
  padding: '1.25rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: 1.8,
  color: '#f1f5f9',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  overflow: 'auto',
  whiteSpace: 'pre',
})

const sectionHeading: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '0.75rem',
  color: '#f1f5f9',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid #1e293b',
}

const stepHeading: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#a5b4fc',
  marginBottom: '0.5rem',
  marginTop: '1.75rem',
}

const prose: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '0.95rem',
  lineHeight: 1.75,
  marginBottom: '0.75rem',
}

const badge: React.CSSProperties = {
  display: 'inline-block',
  background: 'rgba(79, 70, 229, 0.15)',
  border: '1px solid rgba(79, 70, 229, 0.3)',
  color: '#818cf8',
  borderRadius: '0.25rem',
  padding: '0.1rem 0.5rem',
  fontSize: '0.75rem',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontWeight: 500,
}

export default function JaGettingStartedPage() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Page header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ color: '#818cf8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>ドキュメント</div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          はじめかた
        </h1>
        <p style={{ ...prose, fontSize: '1.1rem', marginBottom: 0 }}>
          インストールから最初のコンポーネント表示まで、Stella UI をプロジェクトに導入するために必要なすべてをまとめています。
        </p>
      </div>

      {/* Prerequisites */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>前提条件</h2>
        <p style={prose}>Stella UI を使用するには以下のpeer dependencies が必要です:</p>
        <ul style={{ ...prose, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>React 18 または 19</li>
          <li>CSS Modules と ESM をサポートするバンドラー（Vite、Next.js など）</li>
        </ul>
      </section>

      {/* Installation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>インストール</h2>

        <h3 style={stepHeading}>npm</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>npm install @stella-ds/react @stella-ds/theme</code></pre>

        <h3 style={stepHeading}>pnpm</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>pnpm add @stella-ds/react @stella-ds/theme</code></pre>

        <h3 style={stepHeading}>yarn</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>yarn add @stella-ds/react @stella-ds/theme</code></pre>
      </section>

      {/* Theme setup */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>テーマのセットアップ</h2>
        <p style={prose}>
          Stella UI のコンポーネントは <span style={badge}>--stella-*</span> CSS カスタムプロパティに依存しています。
          アプリケーションのルートで一度だけ注入する必要があります。方法は 2 つあります:
        </p>

        <h3 style={stepHeading}>方法 A — CSS インポート（推奨）</h3>
        <p style={prose}>ルートレイアウトまたはエントリポイントでビルド済み CSS ファイルをインポートします:</p>
        <pre style={codeBlock('')}><code>{`import '@stella-ds/theme/css'`}</code></pre>

        <h3 style={stepHeading}>方法 B — JavaScript での注入</h3>
        <p style={prose}>動的な注入が必要な場合（JS のみ環境や CSS インポートが使えない場合）:</p>
        <pre style={codeBlock('')}><code>{`import { injectCSSVars } from '@stella-ds/theme'

// 最初のレンダー前に一度呼ぶ
injectCSSVars()`}</code></pre>

        <h3 style={stepHeading}>方法 C — トークンオブジェクトを直接使う</h3>
        <p style={prose}>プログラム的な利用のためにトークンマップにアクセスできます:</p>
        <pre style={codeBlock('')}><code>{`import { cssVariables, tokens } from '@stella-ds/theme'

// cssVariables: Record<string, string>  — { '--stella-color-cosmos-500': '#4f46e5', ... }
// tokens: tokens.json 構造に対応したネストオブジェクト`}</code></pre>
      </section>

      {/* Basic usage */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>基本的な使いかた</h2>
        <p style={prose}>テーマのセットアップ後、<span style={badge}>@stella-ds/react</span> からコンポーネントを直接インポートします:</p>
        <pre style={codeBlock('')}><code>{`import '@stella-ds/theme/css'
import { Button, Input, Card, CardContent } from '@stella-ds/react'

export default function ContactForm() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="メールアドレス" size="md" />
        <Button variant="solid" size="md">
          登録する
        </Button>
      </CardContent>
    </Card>
  )
}`}</code></pre>
      </section>

      {/* Next.js integration */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Next.js との連携</h2>

        <h3 style={stepHeading}>App Router（Next.js 13 以降）</h3>
        <p style={prose}>
          <span style={badge}>@stella-ds/react</span> のコンポーネントはすべて Client Component です（tsup ビルドバナーで <span style={badge}>"use client"</span> を付与）。
          Server Component から自由にインポートできます — Next.js が自動的にバウンダリを処理します。
        </p>
        <pre style={codeBlock('')}><code>{`// app/layout.tsx
import '@stella-ds/theme/css'   // ← ルートレイアウトでテーマをインポート

// app/page.tsx（Server Component）
import { Button } from '@stella-ds/react'  // ✅ そのまま動く

export default function Page() {
  return <Button variant="glow">Server Component から Hello</Button>
}`}</code></pre>

        <h3 style={stepHeading}>Pages Router（Next.js 12 以前）</h3>
        <pre style={codeBlock('')}><code>{`// pages/_app.tsx
import '@stella-ds/theme/css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}`}</code></pre>

        <h3 style={{ ...stepHeading, marginTop: '1.75rem' }}>ヒント: 静的エクスポート</h3>
        <p style={prose}>
          Stella UI は <span style={badge}>output: 'export'</span>（静的生成）で動作します。サーバーサイド API は一切使用していません。
        </p>
      </section>

      {/* TypeScript */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>TypeScript</h2>
        <p style={prose}>
          型定義がすべて同梱されているため、<span style={badge}>@types/*</span> パッケージは不要です。
          variant / size の列挙型には判別共用体を使った厳密な型付けがされています。
        </p>
      </section>

      {/* Next steps */}
      <section>
        <h2 style={sectionHeading}>次のステップ</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[
            { href: '/ja/components', title: 'コンポーネント一覧 →', desc: '25 種類のコンポーネントの props と使用例を確認する' },
            { href: '/ja/tokens', title: 'デザイントークン →', desc: '天体カラーパレットとトークンシステムを見る' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ display: 'block', background: '#111827', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #1e293b', textDecoration: 'none' }}
            >
              <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: '0.375rem' }}>{link.title}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.5 }}>{link.desc}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
