'use client'

import Link from 'next/link'
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

interface SiteHeaderProps {
  locale: 'en' | 'ja'
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname()

  const isJa = locale === 'ja'
  const base = isJa ? '/ja' : ''
  const homeHref = isJa ? '/ja' : '/'
  const otherLocale = isJa
    ? pathname.replace(/^\/ja/, '') || '/'
    : pathname === '/'
      ? '/ja'
      : `/ja${pathname}`

  return (
    <Header sticky blur>
      <HeaderBrand>
        <Link href={homeHref} style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--stella-color-starlight-primary)', textDecoration: 'none' }}>
          Stella UI
        </Link>
      </HeaderBrand>
      <HeaderNav style={{ gap: '0.25rem' }}>
        <Link href={`${base}/getting-started`} style={navLinkStyle}>{isJa ? 'はじめかた' : 'Getting\u00A0Started'}</Link>
        <Link href={`${base}/components`} style={navLinkStyle}>{isJa ? 'コンポーネント' : 'Components'}</Link>
        <Link href={`${base}/tokens`} style={navLinkStyle}>{isJa ? 'トークン' : 'Tokens'}</Link>
        <Button variant="outline" size="sm" asChild>
          <Link href={otherLocale}>{isJa ? 'EN' : 'JA'}</Link>
        </Button>
        <ThemeToggle locale={locale} />
        <a href="https://github.com/theta-prog/stella-ds" target="_blank" rel="noopener noreferrer" style={{ ...navLinkStyle, color: 'var(--stella-color-starlight-disabled)' }}>
          GitHub↗
        </a>
      </HeaderNav>
    </Header>
  )
}
