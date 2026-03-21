'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@stella-ds/react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isJa = pathname.startsWith('/ja')

  useEffect(() => {
    const saved = localStorage.getItem('stella-theme')
    const preferred = (saved === 'dark' || saved === 'light') ? saved : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
    document.documentElement.setAttribute('data-theme', preferred)
    setMounted(true)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('stella-theme', next)
  }

  // Avoid hydration mismatch — render nothing until client-side mount
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" aria-label="Toggle theme" disabled style={{ minWidth: '2.25rem' }}>
        {'\u00A0'}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={isJa ? (theme === 'dark' ? '\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048' : '\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048') : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ minWidth: '2.25rem', fontSize: '1.1rem', lineHeight: 1 }}
    >
      {theme === 'dark' ? '\u2600' : '\u263E'}
    </Button>
  )
}
