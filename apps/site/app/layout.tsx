import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Stella UI', template: '%s | Stella UI' },
  description: 'Scalable design system for web, portfolio, MV, and 3D spaces',
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  height: '60px',
  borderBottom: '1px solid #1e293b',
  background: 'rgba(15, 17, 23, 0.9)',
  backdropFilter: 'blur(12px)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
}

const brandStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: '1.125rem',
  background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textDecoration: 'none',
}

const navLinksStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
}

const navLinkStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '0.9rem',
  textDecoration: 'none',
  transition: 'color 0.15s',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={navStyle}>
          <a href="/" style={brandStyle}>Stella UI</a>
          <div style={navLinksStyle}>
            <a href="/getting-started" style={navLinkStyle}>Getting Started</a>
            <a href="/components" style={navLinkStyle}>Components</a>
            <a href="/tokens" style={navLinkStyle}>Tokens</a>
            <a
              href="https://github.com/theta-prog/stella-ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...navLinkStyle, color: '#64748b' }}
            >
              GitHub ↗
            </a>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid #1e293b', padding: '2rem', textAlign: 'center', color: '#475569', fontSize: '0.875rem', marginTop: '4rem' }}>
          <p>© 2025 Stella UI. Built with the Stella Design System.</p>
        </footer>
      </body>
    </html>
  )
}
