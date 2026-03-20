'use client'

import { usePathname } from 'next/navigation'
import { Header, HeaderBrand, HeaderNav } from '@stella-ds/react'

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
        <a href={homeHref} style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--stella-color-cosmos-300)', textDecoration: 'none', textShadow: '0 0 12px rgb(99 102 241 / 0.6)' }}>
          Stella UI
        </a>
      </HeaderBrand>
      <HeaderNav style={{ gap: '0.25rem' }}>
        <a href={`${base}/getting-started`} style={navLinkStyle}>{isJa ? 'はじめかた' : 'Getting\u00A0Started'}</a>
        <a href={`${base}/components`} style={navLinkStyle}>{isJa ? 'コンポーネント' : 'Components'}</a>
        <a href={`${base}/tokens`} style={navLinkStyle}>{isJa ? 'トークン' : 'Tokens'}</a>
        <a href={otherLocale} style={{ ...navLinkStyle, color: 'var(--stella-color-starlight-disabled)', fontSize: '0.8rem', border: '1px solid var(--stella-color-void-muted)', borderRadius: '0.375rem', padding: '0.2rem 0.6rem' }}>
          {isJa ? 'EN' : 'JA'}
        </a>
        <a href="https://github.com/theta-prog/stella-ui" target="_blank" rel="noopener noreferrer" style={{ ...navLinkStyle, color: 'var(--stella-color-starlight-disabled)' }}>
          GitHub↗
        </a>
      </HeaderNav>
    </Header>
  )
}
