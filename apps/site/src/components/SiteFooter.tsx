import Link from 'next/link'
import { Footer, FooterBottom, FooterContent, FooterDivider, Text } from '@stella-ds/react'

const linkStyle: React.CSSProperties = {
  color: 'var(--stella-color-starlight-disabled)',
  fontSize: '0.875rem',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '0.375rem',
}

interface SiteFooterProps {
  locale: 'en' | 'ja'
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const isJa = locale === 'ja'
  const base = isJa ? '/ja' : ''

  return (
    <Footer style={{ marginTop: '4rem' }}>
      <FooterContent>
        {/* Brand */}
        <div>
          <Text weight="bold" as="div" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Stella UI
          </Text>
          <Text size="sm" color="secondary">
            {isJa ? 'ウェブ向けのデザインシステム' : 'Scalable design system for web.'}
          </Text>
        </div>

        {/* Docs links */}
        <div>
          <Text as="div" size="xs" color="secondary" weight="semibold" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{isJa ? 'ドキュメント' : 'Docs'}</Text>
          <Link href={`${base}/getting-started`} style={linkStyle}>{isJa ? 'はじめかた' : 'Getting Started'}</Link>
          <Link href={`${base}/components`} style={linkStyle}>{isJa ? 'コンポーネント' : 'Components'}</Link>
          <Link href={`${base}/tokens`} style={linkStyle}>{isJa ? 'トークン' : 'Tokens'}</Link>
        </div>

        {/* External links */}
        <div>
          <Text as="div" size="xs" color="secondary" weight="semibold" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{isJa ? 'リンク' : 'Links'}</Text>
          <a href="https://github.com/theta-prog/stella-ds" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub↗</a>
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
