'use client'

import { usePathname } from 'next/navigation'
import { Footer, FooterBottom, FooterContent, FooterDivider, Text } from '@stella-ds/react'

const colHeadingStyle: React.CSSProperties = {
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#94a3b8',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}

const linkStyle: React.CSSProperties = {
  color: '#64748b',
  fontSize: '0.875rem',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '0.375rem',
}

export function SiteFooter() {
  const pathname = usePathname()
  const isJa = pathname.startsWith('/ja')
  const base = isJa ? '/ja' : ''

  return (
    <Footer style={{ marginTop: '4rem' }}>
      <FooterContent>
        {/* Brand */}
        <div>
          <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Stella UI
          </div>
          <Text size="sm" color="secondary">
            {isJa ? 'ウェブ向けのデザインシステム' : 'Scalable design system for web.'}
          </Text>
        </div>

        {/* Docs links */}
        <div>
          <div style={colHeadingStyle}>{isJa ? 'ドキュメント' : 'Docs'}</div>
          <a href={`${base}/getting-started`} style={linkStyle}>{isJa ? 'はじめかた' : 'Getting Started'}</a>
          <a href={`${base}/components`} style={linkStyle}>{isJa ? 'コンポーネント' : 'Components'}</a>
          <a href={`${base}/tokens`} style={linkStyle}>{isJa ? 'トークン' : 'Tokens'}</a>
        </div>

        {/* External links */}
        <div>
          <div style={colHeadingStyle}>{isJa ? 'リンク' : 'Links'}</div>
          <a href="https://github.com/theta-prog/stella-ui" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub↗</a>
          <a href="https://www.npmjs.com/package/@stella-ds/react" target="_blank" rel="noopener noreferrer" style={linkStyle}>npm↗</a>
        </div>
      </FooterContent>

      <FooterDivider />

      <FooterBottom>
        <Text size="sm" color="disabled">© 2025 Stella UI. Built with the Stella Design System.</Text>
        <Text size="sm" color="disabled">MIT License</Text>
      </FooterBottom>
    </Footer>
  )
}
