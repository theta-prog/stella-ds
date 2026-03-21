'use client'

import { usePathname } from 'next/navigation'
import { Button, Header, HeaderBrand, HeaderNav } from '@stella-ds/react'
import { ThemeToggle } from './ThemeToggle'

const navLinkStyle: React.CSSProperties = {
  color: 'var(--stella-color-starlight-secondary)',
  fontSize: '0.9rem',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  padding: '0.25rem 0.75rem',
}

export function SiteHeader() {
  const pathname = usePathname()
  const isJa = pathname.startsWith('/ja')

  const base = isJa ? '/ja' : ''
  const homeHref = isJa ? '/ja' : '/'
  const otherLocale = isJa ? pathname.replace(/^\/ja/, '') || '/' : `/ja${pathname}`

  return (
    <Header sticky blur>
      <HeaderBrand>
        <a href={homeHref} style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--stella-color-starlight-primary)', textDecoration: 'none' }}>
          Stella UI
        </a>
      </HeaderBrand>
      <HeaderNav style={{ gap: '0.25rem' }}>
        <a href={`${base}/getting-started`} style={navLinkStyle}>{isJa ? 'はじめかた' : 'Getting\u00A0Started'}</a>
        <a href={`${base}/components`} style={navLinkStyle}>{isJa ? 'コンポーネント' : 'Components'}</a>
        <a href={`${base}/tokens`} style={navLinkStyle}>{isJa ? 'トークン' : 'Tokens'}</a>
        <Button variant="outline" size="sm" asChild>
          <a href={otherLocale}>{isJa ? 'EN' : 'JA'}</a>
        </Button>
        <ThemeToggle />
        <a href="https://github.com/theta-prog/stella-ui" target="_blank" rel="noopener noreferrer" style={{ ...navLinkStyle, color: 'var(--stella-color-starlight-disabled)' }}>
          GitHub↗
        </a>
      </HeaderNav>
    </Header>
  )
}
