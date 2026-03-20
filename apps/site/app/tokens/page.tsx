import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Design Tokens' }

const colorFamilies = [
  { name: 'cosmos', label: 'Cosmos', description: 'Primary / Interactive — Indigo' },
  { name: 'nebula', label: 'Nebula', description: 'Accent — Purple' },
  { name: 'aurora', label: 'Aurora', description: 'Accent — Cyan' },
  { name: 'nova', label: 'Nova', description: 'Success / Positive — Emerald' },
]

const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const voidKeys = [
  { key: 'base', label: 'base', description: 'Darkest background' },
  { key: 'surface', label: 'surface', description: 'Card / panel surface' },
  { key: 'overlay', label: 'overlay', description: 'Elevated overlays' },
  { key: 'muted', label: 'muted', description: 'Subtle / muted background' },
]

const starlightKeys = [
  { key: 'primary', label: 'primary', description: 'Primary text' },
  { key: 'secondary', label: 'secondary', description: 'Secondary / muted text' },
  { key: 'disabled', label: 'disabled', description: 'Disabled state text' },
]

const spacingTokens = [
  { key: '1', value: '4px' }, { key: '2', value: '8px' }, { key: '3', value: '12px' },
  { key: '4', value: '16px' }, { key: '6', value: '24px' }, { key: '8', value: '32px' },
  { key: '12', value: '48px' }, { key: '16', value: '64px' }, { key: '20', value: '80px' },
  { key: '24', value: '96px' },
]

const typographyTokens = [
  { name: 'fontFamily-sans', value: 'Inter, system-ui, sans-serif' },
  { name: 'fontFamily-mono', value: 'JetBrains Mono, monospace' },
  { name: 'fontSize-xs', value: '0.75rem / 12px' },
  { name: 'fontSize-sm', value: '0.875rem / 14px' },
  { name: 'fontSize-md', value: '1rem / 16px' },
  { name: 'fontSize-lg', value: '1.125rem / 18px' },
  { name: 'fontSize-xl', value: '1.25rem / 20px' },
  { name: 'fontSize-2xl', value: '1.5rem / 24px' },
  { name: 'fontSize-3xl', value: '1.875rem / 30px' },
  { name: 'fontWeight-normal', value: '400' },
  { name: 'fontWeight-medium', value: '500' },
  { name: 'fontWeight-semibold', value: '600' },
  { name: 'fontWeight-bold', value: '700' },
]

const sectionHeading: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '0.75rem',
  color: '#f1f5f9',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid #1e293b',
}

const mono: React.CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontSize: '0.75rem',
}

export default function TokensPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Page header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ color: '#818cf8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Docs</div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Design Tokens
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
          All design tokens use the <code style={{ ...mono, background: '#1e293b', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', color: '#7dd3fc' }}>--stella-*</code> CSS custom property prefix.
          The source of truth is <code style={{ ...mono, background: '#1e293b', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', color: '#7dd3fc' }}>packages/theme/src/tokens.json</code>.
        </p>
      </div>

      {/* Usage */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>How to Use Tokens</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.95rem' }}>After importing the theme CSS, reference tokens in any stylesheet:</p>
        <pre style={{ background: '#0d1117', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
          <code style={{ ...mono, color: '#f1f5f9', fontSize: '0.875rem' }}>{`.my-button {
  background: var(--stella-color-cosmos-500);
  color: var(--stella-color-starlight-primary);
  border-radius: var(--stella-borderRadius-md);
  padding: var(--stella-spacing-3) var(--stella-spacing-6);
  font-size: var(--stella-typography-fontSize-sm);
  transition: background var(--stella-transition-fast);
}`}</code>
        </pre>
      </section>

      {/* Color palettes */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Color Palettes</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Named after celestial bodies. Each palette has 11 stops (50–950) following a perceptual lightness scale.
        </p>

        {colorFamilies.map((family) => (
          <div key={family.name} style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 700, color: '#f1f5f9', marginRight: '0.5rem' }}>{family.label}</span>
              <span style={{ color: '#475569', fontSize: '0.85rem' }}>{family.description}</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {scales.map((scale) => (
                <div key={scale} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    style={{ width: '56px', height: '48px', borderRadius: '0.375rem', background: `var(--stella-color-${family.name}-${scale})`, border: '1px solid rgba(255,255,255,0.08)' }}
                    title={`--stella-color-${family.name}-${scale}`}
                  />
                  <span style={{ ...mono, fontSize: '0.65rem', color: '#475569' }}>{scale}</span>
                </div>
              ))}
            </div>
            <p style={{ ...mono, color: '#475569', fontSize: '0.75rem', marginTop: '0.5rem' }}>
              {'--stella-color-' + family.name + '-[50–950]'}
            </p>
          </div>
        ))}
      </section>

      {/* Void (backgrounds) */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Void — Backgrounds</h2>
        <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Semantic background tokens for layered dark surfaces.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {voidKeys.map((item) => (
            <div key={item.key} style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid #1e293b' }}>
              <div
                style={{ height: '60px', background: `var(--stella-color-void-${item.key})`, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                title={`--stella-color-void-${item.key}`}
              />
              <div style={{ padding: '0.625rem 0.75rem' }}>
                <div style={{ ...mono, color: '#a5b4fc', fontSize: '0.75rem' }}>{item.label}</div>
                <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.description}</div>
                <div style={{ ...mono, color: '#334155', fontSize: '0.65rem', marginTop: '0.25rem' }}>
                  {'--stella-color-void-' + item.key}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Starlight (text) */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Starlight — Text</h2>
        <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Semantic text color tokens for accessible type hierarchy.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {starlightKeys.map((item) => (
            <div key={item.key} style={{ background: '#111827', borderRadius: '0.5rem', border: '1px solid #1e293b', padding: '1rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: `var(--stella-color-starlight-${item.key})`, marginBottom: '0.5rem' }}>
                Aa
              </div>
              <div style={{ ...mono, color: '#a5b4fc', fontSize: '0.75rem' }}>{item.label}</div>
              <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.description}</div>
              <div style={{ ...mono, color: '#334155', fontSize: '0.65rem', marginTop: '0.375rem' }}>
                {'--stella-color-starlight-' + item.key}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Typography</h2>
        <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                {['Token', 'Value'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1e293b' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {typographyTokens.map((t, i) => (
                <tr key={t.name} style={{ borderBottom: i < typographyTokens.length - 1 ? '1px solid #1e293b' : 'none' }}>
                  <td style={{ padding: '0.625rem 1rem', ...mono, color: '#a5b4fc', fontSize: '0.8rem' }}>
                    {'--stella-typography-' + t.name}
                  </td>
                  <td style={{ padding: '0.625rem 1rem', color: '#94a3b8', fontSize: '0.875rem' }}>{t.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Spacing */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Spacing</h2>
        <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
          4px base grid. Reference as <code style={{ ...mono, background: '#1e293b', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', color: '#7dd3fc' }}>{'--stella-spacing-{key}'}</code>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {spacingTokens.map((t) => (
            <div key={t.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ ...mono, color: '#64748b', fontSize: '0.8rem', minWidth: '180px' }}>
                {'--stella-spacing-' + t.key}
              </span>
              <span style={{ ...mono, color: '#94a3b8', fontSize: '0.8rem', minWidth: '48px' }}>{t.value}</span>
              <div
                style={{ height: '8px', background: 'var(--stella-color-cosmos-500, #4f46e5)', borderRadius: '2px', width: `var(--stella-spacing-${t.key}, ${t.value})` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Border radius */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Border Radius</h2>
        <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
          Reference as <code style={{ ...mono, background: '#1e293b', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', color: '#7dd3fc' }}>{'--stella-borderRadius-{key}'}</code>.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {[
            { key: 'sm', size: 48 },
            { key: 'md', size: 56 },
            { key: 'lg', size: 64 },
            { key: 'xl', size: 72 },
            { key: 'full', size: 64 },
          ].map((r) => (
            <div key={r.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{ width: r.size, height: r.size, background: 'rgba(79, 70, 229, 0.2)', border: '1px solid rgba(79, 70, 229, 0.4)', borderRadius: `var(--stella-borderRadius-${r.key})` }}
              />
              <span style={{ ...mono, fontSize: '0.7rem', color: '#475569' }}>{r.key}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Full reference */}
      <section>
        <h2 style={sectionHeading}>Full Token Reference</h2>
        <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.9rem' }}>
          The complete token set is defined in the package source. Use the exported utilities for programmatic access:
        </p>
        <pre style={{ background: '#0d1117', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.5rem', overflow: 'auto', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
          <code style={{ ...mono, color: '#f1f5f9', fontSize: '0.875rem' }}>{`import { tokens, cssVariables, generateCSSVarsString } from '@stella-ds/theme'

// tokens — nested object: tokens.color.cosmos[500]
// cssVariables — flat map: { '--stella-color-cosmos-500': '#4f46e5', ... }
// generateCSSVarsString() — returns a :root { ... } CSS string`}</code>
        </pre>
      </section>
    </div>
  )
}
