import type { Metadata } from 'next'
import { tokens } from '@stella-ds/theme'

export const metadata: Metadata = { title: 'デザイントークン' }

type ColorScale = Record<string, string>
type ColorTokens = Record<string, ColorScale | Record<string, string>>

const colorTokens = tokens.color as ColorTokens

const palettes = [
  { key: 'cosmos', label: 'Cosmos', role: 'プライマリ / インタラクティブ — インディゴ' },
  { key: 'nebula', label: 'Nebula', role: 'アクセント — パープル' },
  { key: 'aurora', label: 'Aurora', role: 'アクセント — シアン' },
  { key: 'nova', label: 'Nova', role: 'サクセス / ポジティブ — エメラルド' },
]

const stops = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const prose: React.CSSProperties = { color: 'var(--stella-color-starlight-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.75rem' }
const sectionHeading: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--stella-color-starlight-primary)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--stella-color-void-muted)' }
const badge: React.CSSProperties = { display: 'inline-block', background: 'color-mix(in srgb, var(--stella-color-cosmos-500) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--stella-color-cosmos-500) 30%, transparent)', color: 'var(--stella-color-cosmos-400)', borderRadius: '0.25rem', padding: '0.1rem 0.5rem', fontSize: '0.75rem', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }
const mono: React.CSSProperties = { fontFamily: 'ui-monospace, SFMono-Regular, monospace' }

const codeBlock: React.CSSProperties = {
  background: '#0d1117',
  border: '1px solid #1e293b',
  padding: '1.25rem',
  borderRadius: '0.5rem',
  overflow: 'auto',
  fontSize: '0.875rem',
  lineHeight: 1.8,
  color: '#f1f5f9',
  ...mono,
}

export default function JaTokensPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ color: 'var(--stella-color-cosmos-400)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>ドキュメント</div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, var(--stella-color-cosmos-400), var(--stella-color-nebula-400))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          デザイントークン
        </h1>
        <p style={{ ...prose, marginBottom: 0 }}>
          すべてのデザイントークンは <span style={badge}>--stella-*</span> CSS カスタムプロパティプレフィックスを使用します。ソースは <span style={badge}>packages/theme/src/tokens.json</span> です。
        </p>
      </div>

      {/* How to use */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>トークンの使いかた</h2>
        <p style={prose}>テーマ CSS をインポートした後、任意のスタイルシートでトークンを参照できます:</p>
        <pre style={codeBlock}>
          <code>{`.my-button {
  background: var(--stella-color-cosmos-500);
  color: var(--stella-color-starlight-primary);
  border-radius: var(--stella-borderRadius-md);
  padding: var(--stella-spacing-3) var(--stella-spacing-6);
  font-size: var(--stella-typography-fontSize-sm);
  transition: background var(--stella-transition-fast);
}`}</code>
        </pre>
      </section>

      {/* Color Palettes */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>カラーパレット</h2>
        <p style={prose}>天体をテーマに命名されています。各パレットは知覚的な明度スケールで 11 段階（50〜950）があります。</p>

        {palettes.map(({ key, label, role }) => {
          const scale = colorTokens[key] as ColorScale
          return (
            <div key={key} style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--stella-color-starlight-primary)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{label}</h3>
                <p style={{ color: 'var(--stella-color-starlight-secondary)', fontSize: '0.8rem' }}>{role}</p>
              </div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                {stops.map((stop) => {
                  const value = scale?.[stop]
                  if (!value) return null
                  return (
                    <div key={stop} title={`--stella-color-${key}-${stop}: ${value}`} style={{ flex: '1', minWidth: '40px', height: '48px', background: value, borderRadius: '4px' }} />
                  )
                })}
              </div>
              <p style={{ color: 'var(--stella-color-starlight-secondary)', fontSize: '0.75rem', ...mono }}>
                --stella-color-{key}-[50–950]
              </p>
            </div>
          )
        })}
      </section>

      {/* Void */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Void — 背景色</h2>
        <p style={prose}>階層的なダークサーフェス用の意味的な背景トークン。</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {(['base', 'surface', 'overlay', 'muted'] as const).map((key) => {
            const value = (colorTokens.void as ColorScale)?.[key]
            return (
              <div key={key} style={{ background: 'var(--stella-color-void-surface)', borderRadius: '0.5rem', border: '1px solid var(--stella-color-void-muted)', overflow: 'hidden' }}>
                <div style={{ height: '56px', background: value }} />
                <div style={{ padding: '0.75rem' }}>
                  <p style={{ color: 'var(--stella-color-cosmos-400)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem', ...mono }}>{key}</p>
                  <p style={{ color: 'var(--stella-color-starlight-disabled)', fontSize: '0.7rem', ...mono }}>--stella-color-void-{key}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Starlight */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Starlight — テキスト色</h2>
        <p style={prose}>アクセシブルなタイプ階層のための意味的なテキストカラートークン。</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {(['primary', 'secondary', 'disabled'] as const).map((key) => {
            const value = (colorTokens.starlight as ColorScale)?.[key]
            return (
              <div key={key} style={{ background: 'var(--stella-color-void-surface)', borderRadius: '0.5rem', border: '1px solid var(--stella-color-void-muted)', padding: '1rem' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: `var(--stella-color-starlight-${key})`, marginBottom: '0.5rem' }}>Aa</p>
                <p style={{ color: 'var(--stella-color-cosmos-400)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem', ...mono }}>{key}</p>
                <p style={{ color: 'var(--stella-color-starlight-disabled)', fontSize: '0.7rem', ...mono }}>--stella-color-starlight-{key}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Other token categories */}
      <section>
        <h2 style={sectionHeading}>その他のトークン</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {[
            { label: 'タイポグラフィ', prefix: '--stella-typography-*', desc: 'フォントファミリー、サイズ、ウェイト、行高' },
            { label: 'スペーシング', prefix: '--stella-spacing-*', desc: '0 〜 96 のスケール（0.25rem 単位）' },
            { label: '角丸', prefix: '--stella-borderRadius-*', desc: 'none / sm / md / lg / xl / full' },
            { label: 'シャドウ', prefix: '--stella-shadow-*', desc: 'sm / md / lg / xl / glow' },
            { label: 'トランジション', prefix: '--stella-transition-*', desc: 'fast / base / slow' },
          ].map((item) => (
            <div key={item.label} style={{ background: 'var(--stella-color-void-surface)', borderRadius: '0.5rem', border: '1px solid var(--stella-color-void-muted)', padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--stella-color-starlight-primary)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{item.label}</h3>
              <p style={{ color: 'var(--stella-color-cosmos-400)', fontSize: '0.7rem', ...mono, marginBottom: '0.5rem' }}>{item.prefix}</p>
              <p style={{ color: 'var(--stella-color-starlight-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
