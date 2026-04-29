import Link from 'next/link'
import { Footer, FooterBottom, FooterContent, FooterDivider, Stack, Text } from '@stella-ds/react'
import styles from './SiteFooter.module.css'

interface SiteFooterProps {
  locale: 'en' | 'ja'
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const isJa = locale === 'ja'
  const base = isJa ? '/ja' : ''
  const startYear = 2026
  const currentYear = new Date().getFullYear()
  const copyrightYear = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`

  return (
    <Footer className={styles.footer}>
      <FooterContent>
        {/* Brand */}
        <div>
          <Text weight="bold" as="div" size="md" className={styles.brandName}>
            Stella UI
          </Text>
          <Text size="sm" color="secondary">
            {isJa ? 'ウェブ向けのデザインシステム' : 'Scalable design system for web.'}
          </Text>
        </div>

        {/* Docs links */}
        <div>
          <Text as="div" size="xs" color="secondary" weight="semibold" className={styles.sectionLabel}>
            {isJa ? 'ドキュメント' : 'Docs'}
          </Text>
          <Stack gap="1">
            <Text asChild size="sm" color="disabled" className={styles.navLink}>
              <Link href={`${base}/getting-started`}>{isJa ? 'はじめかた' : 'Getting Started'}</Link>
            </Text>
            <Text asChild size="sm" color="disabled" className={styles.navLink}>
              <Link href={`${base}/components`}>{isJa ? 'コンポーネント' : 'Components'}</Link>
            </Text>
            <Text asChild size="sm" color="disabled" className={styles.navLink}>
              <Link href={`${base}/tokens`}>{isJa ? 'トークン' : 'Tokens'}</Link>
            </Text>
          </Stack>
        </div>

        {/* External links */}
        <div>
          <Text as="div" size="xs" color="secondary" weight="semibold" className={styles.sectionLabel}>
            {isJa ? 'リンク' : 'Links'}
          </Text>
          <Stack gap="1">
            <Text asChild size="sm" color="disabled" className={styles.navLink}>
              <a href="https://github.com/theta-prog/stella-ds" target="_blank" rel="noopener noreferrer">GitHub↗</a>
            </Text>
            <Text asChild size="sm" color="disabled" className={styles.navLink}>
              <a href="https://www.npmjs.com/package/@stella-ds/react" target="_blank" rel="noopener noreferrer">npm↗</a>
            </Text>
          </Stack>
        </div>
      </FooterContent>

      <FooterDivider />

      <FooterBottom>
        <Text size="sm" color="disabled">© {copyrightYear} Stella UI. Built with the Stella Design System.</Text>
        <Text size="sm" color="disabled">MIT License</Text>
      </FooterBottom>
    </Footer>
  )
}
