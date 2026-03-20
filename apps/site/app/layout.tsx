import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: { default: 'Stella UI', template: '%s | Stella UI' },
  description: 'Scalable design system for web',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid #1e293b', padding: '2rem', textAlign: 'center', color: '#475569', fontSize: '0.875rem', marginTop: '4rem' }}>
          <p>© 2025 Stella UI. Built with the Stella Design System.</p>
        </footer>
      </body>
    </html>
  )
}
