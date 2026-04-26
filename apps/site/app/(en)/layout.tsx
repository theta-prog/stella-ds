import '../globals.css'
import { metadata, SiteRootLayout } from '../site-root-layout'

export { metadata }

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteRootLayout lang="en" locale="en">
      {children}
    </SiteRootLayout>
  )
}