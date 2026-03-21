'use client'

import { useEffect, useState } from 'react'
import { Button } from '@stella-ds/react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('stella-theme')
    const initial = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(initial as 'dark' | 'light')
    document.documentElement.setAttribute('data-theme', initial)
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
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ minWidth: '2.25rem', fontSize: '1.1rem', lineHeight: 1 }}
    >
      {theme === 'dark' ? '\u2600' : '\u263E'}
    </Button>
  )
}
