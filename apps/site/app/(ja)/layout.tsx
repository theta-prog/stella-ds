import '../globals.css'
import { metadata, SiteRootLayout } from '../site-root-layout'

export { metadata }

export default function JaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteRootLayout lang="ja" locale="ja">
      {children}
    </SiteRootLayout>
  )
}