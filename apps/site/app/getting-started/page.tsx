import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Getting Started' }

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

export default function GettingStartedPage() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Page header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ color: '#818cf8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Docs</div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Getting Started
        </h1>
        <p style={{ ...prose, fontSize: '1.1rem', marginBottom: 0 }}>
          Everything you need to integrate Stella UI into your project — from installation to your first component.
        </p>
      </div>

      {/* Prerequisites */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Prerequisites</h2>
        <p style={prose}>Stella UI requires the following peer dependencies:</p>
        <ul style={{ ...prose, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>React 18 or 19</li>
          <li>A bundler that supports CSS Modules and ESM (Vite, Next.js, etc.)</li>
        </ul>
      </section>

      {/* Installation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Installation</h2>

        <h3 style={stepHeading}>npm</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>npm install @stella-ds/react @stella-ds/theme</code></pre>

        <h3 style={stepHeading}>pnpm</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>pnpm add @stella-ds/react @stella-ds/theme</code></pre>

        <h3 style={stepHeading}>yarn</h3>
        <pre style={codeBlock('')}><code style={{ color: '#7dd3fc' }}>yarn add @stella-ds/react @stella-ds/theme</code></pre>
      </section>

      {/* Theme setup */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Theme Setup</h2>
        <p style={prose}>
          Stella UI components rely on <span style={badge}>--stella-*</span> CSS custom properties.
          You must inject them once at the root of your application. There are two ways:
        </p>

        <h3 style={stepHeading}>Option A — CSS import (recommended)</h3>
        <p style={prose}>Import the pre-built CSS file in your root layout or entry point:</p>
        <pre style={codeBlock('')}><code>{`import '@stella-ds/theme/css'`}</code></pre>

        <h3 style={stepHeading}>Option B — JavaScript injection</h3>
        <p style={prose}>For dynamic injection (useful in JS-only environments or when bundler CSS imports are not available):</p>
        <pre style={codeBlock('')}><code>{`import { injectCSSVars } from '@stella-ds/theme'

// Call once before first render
injectCSSVars()`}</code></pre>

        <h3 style={stepHeading}>Option C — Raw token object</h3>
        <p style={prose}>Access the full token map for programmatic use:</p>
        <pre style={codeBlock('')}><code>{`import { cssVariables, tokens } from '@stella-ds/theme'

// cssVariables: Record<string, string>  — flat map of { '--stella-color-cosmos-500': '#4f46e5', ... }
// tokens: nested object matching the tokens.json structure`}</code></pre>
      </section>

      {/* Basic usage */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Basic Usage</h2>
        <p style={prose}>After setting up the theme, import components directly from <span style={badge}>@stella-ds/react</span>:</p>
        <pre style={codeBlock('')}><code>{`import '@stella-ds/theme/css'
import { Button, Input, Card, CardContent } from '@stella-ds/react'

export default function ContactForm() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="Your email" size="md" />
        <Button variant="solid" size="md">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  )
}`}</code></pre>
      </section>

      {/* Next.js integration */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>Next.js Integration</h2>

        <h3 style={stepHeading}>App Router (Next.js 13+)</h3>
        <p style={prose}>
          All <span style={badge}>@stella-ds/react</span> components are Client Components (they include the <span style={badge}>"use client"</span> directive via the tsup build banner).
          Import them freely in Server Components — Next.js will automatically handle the boundary.
        </p>
        <pre style={codeBlock('')}><code>{`// app/layout.tsx
import '@stella-ds/theme/css'   // ← import theme in root layout

// app/page.tsx (Server Component)
import { Button } from '@stella-ds/react'  // ✅ works fine

export default function Page() {
  return <Button variant="glow">Hello from Server Component</Button>
}`}</code></pre>

        <h3 style={stepHeading}>Pages Router (Next.js 12 and below)</h3>
        <pre style={codeBlock('')}><code>{`// pages/_app.tsx
import '@stella-ds/theme/css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}`}</code></pre>

        <h3 style={{ ...stepHeading, marginTop: '1.75rem' }}>Tip: Static Export</h3>
        <p style={prose}>
          Stella UI works with <span style={badge}>output: 'export'</span> (static generation). No server-side APIs are used.
        </p>
      </section>

      {/* TypeScript */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionHeading}>TypeScript</h2>
        <p style={prose}>
          Full TypeScript definitions are included — no <span style={badge}>@types/*</span> packages needed.
          All props are strictly typed with discriminated unions for variant/size enums.
        </p>
      </section>

      {/* Next steps */}
      <section>
        <h2 style={sectionHeading}>Next Steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[
            { href: '/components', title: 'Browse Components →', desc: 'Explore all 25 components with props and examples' },
            { href: '/tokens', title: 'Design Tokens →', desc: 'Discover the celestial color palette and token system' },
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
