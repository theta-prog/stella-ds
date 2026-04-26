import { Badge, Card, CardContent, Heading, Text } from '@stella-ds/react'

const content = {
  en: {
    docsLabel: 'Docs',
    title: 'Getting Started',
    lead: 'Everything you need to integrate Stella UI into your project — from installation to your first component.',
    prerequisites: {
      heading: 'Prerequisites',
      intro: 'Stella UI requires the following peer dependencies:',
      items: [
        'React 18 or 19',
        'A bundler that supports CSS Modules and ESM (Vite, Next.js, etc.)',
      ],
    },
    installation: {
      heading: 'Installation',
    },
    themeSetup: {
      heading: 'Theme Setup',
      intro: (
        <>
          Stella UI components rely on{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>--stella-*</Badge>{' '}
          CSS custom properties. You must inject them once at the root of your application. There are two ways:
        </>
      ),
      optionA: { label: 'Option A — CSS import (recommended)', desc: 'Import the pre-built CSS file in your root layout or entry point:' },
      optionB: { label: 'Option B — JavaScript injection', desc: 'For dynamic injection (useful in JS-only environments or when bundler CSS imports are not available):' },
      optionC: { label: 'Option C — Raw token object', desc: 'Access the full token map for programmatic use:' },
      injectCode: `import { injectCSSVars } from '@stella-ds/theme'\n\n// Call once before first render\ninjectCSSVars()`,
    },
    basicUsage: {
      heading: 'Basic Usage',
      intro: (
        <>
          After setting up the theme, import components directly from{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@stella-ds/react</Badge>:
        </>
      ),
      code: `import '@stella-ds/theme/css'
import { Button, Input, Card, CardContent } from '@stella-ds/react'

export default function ContactForm() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="Your email" size="md" />
        <Button variant="solid" size="md">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  )
}`,
    },
    nextjs: {
      heading: 'Next.js Integration',
      appRouterLabel: 'App Router (Next.js 13+)',
      appRouterDesc: (
        <>
          All{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@stella-ds/react</Badge>{' '}
          components are Client Components (they include the{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>"use client"</Badge>{' '}
          directive via the tsup build banner). Import them freely in Server Components — Next.js will automatically handle the boundary.
        </>
      ),
      appRouterCode: `// app/layout.tsx
import '@stella-ds/theme/css'   // ← import theme in root layout

// app/page.tsx (Server Component)
import { Button } from '@stella-ds/react'  // ✅ works fine

export default function Page() {
  return <Button variant="glow">Hello from Server Component</Button>
}`,
      pagesRouterLabel: 'Pages Router (Next.js 12 and below)',
      tipLabel: 'Tip: Static Export',
      tipDesc: (
        <>
          Stella UI works with{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>output: 'export'</Badge>{' '}
          (static generation). No server-side APIs are used.
        </>
      ),
    },
    typescript: {
      heading: 'TypeScript',
      desc: (
        <>
          Full TypeScript definitions are included — no{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@types/*</Badge>{' '}
          packages needed. All props are strictly typed with discriminated unions for variant/size enums.
        </>
      ),
    },
    nextSteps: {
      heading: 'Next Steps',
      links: [
        { href: '/components', title: 'Browse Components →', desc: 'Explore all 25 components with props and examples' },
        { href: '/tokens', title: 'Design Tokens →', desc: 'Discover the celestial color palette and token system' },
      ],
    },
  },
  ja: {
    docsLabel: 'ドキュメント',
    title: 'はじめかた',
    lead: 'インストールから最初のコンポーネント表示まで、Stella UI をプロジェクトに導入するために必要なすべてをまとめています。',
    prerequisites: {
      heading: '前提条件',
      intro: 'Stella UI を使用するには以下のpeer dependencies が必要です:',
      items: [
        'React 18 または 19',
        'CSS Modules と ESM をサポートするバンドラー（Vite、Next.js など）',
      ],
    },
    installation: {
      heading: 'インストール',
    },
    themeSetup: {
      heading: 'テーマのセットアップ',
      intro: (
        <>
          Stella UI のコンポーネントは{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>--stella-*</Badge>{' '}
          CSS カスタムプロパティに依存しています。アプリケーションのルートで一度だけ注入する必要があります。方法は 2 つあります:
        </>
      ),
      optionA: { label: '方法 A — CSS インポート（推奨）', desc: 'ルートレイアウトまたはエントリポイントでビルド済み CSS ファイルをインポートします:' },
      optionB: { label: '方法 B — JavaScript での注入', desc: '動的な注入が必要な場合（JS のみ環境や CSS インポートが使えない場合）:' },
      optionC: { label: '方法 C — トークンオブジェクトを直接使う', desc: 'プログラム的な利用のためにトークンマップにアクセスできます:' },
      injectCode: `import { injectCSSVars } from '@stella-ds/theme'\n\n// 最初のレンダー前に一度呼ぶ\ninjectCSSVars()`,
    },
    basicUsage: {
      heading: '基本的な使いかた',
      intro: (
        <>
          テーマのセットアップ後、<Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@stella-ds/react</Badge>{' '}
          からコンポーネントを直接インポートします:
        </>
      ),
      code: `import '@stella-ds/theme/css'
import { Button, Input, Card, CardContent } from '@stella-ds/react'

export default function ContactForm() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="メールアドレス" size="md" />
        <Button variant="solid" size="md">
          登録する
        </Button>
      </CardContent>
    </Card>
  )
}`,
    },
    nextjs: {
      heading: 'Next.js との連携',
      appRouterLabel: 'App Router（Next.js 13 以降）',
      appRouterDesc: (
        <>
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@stella-ds/react</Badge>{' '}
          のコンポーネントはすべて Client Component です（tsup ビルドバナーで{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>"use client"</Badge>{' '}
          を付与）。Server Component から自由にインポートできます — Next.js が自動的にバウンダリを処理します。
        </>
      ),
      appRouterCode: `// app/layout.tsx
import '@stella-ds/theme/css'   // ← ルートレイアウトでテーマをインポート

// app/page.tsx（Server Component）
import { Button } from '@stella-ds/react'  // ✅ そのまま動く

export default function Page() {
  return <Button variant="glow">Server Component から Hello</Button>
}`,
      pagesRouterLabel: 'Pages Router（Next.js 12 以前）',
      tipLabel: 'ヒント: 静的エクスポート',
      tipDesc: (
        <>
          Stella UI は{' '}
          <Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>output: 'export'</Badge>{' '}
          （静的生成）で動作します。サーバーサイド API は一切使用していません。
        </>
      ),
    },
    typescript: {
      heading: 'TypeScript',
      desc: (
        <>
          型定義がすべて同梱されているため、<Badge color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>@types/*</Badge>{' '}
          パッケージは不要です。variant / size の列挙型には判別共用体を使った厳密な型付けがされています。
        </>
      ),
    },
    nextSteps: {
      heading: '次のステップ',
      links: [
        { href: '/ja/components', title: 'コンポーネント一覧 →', desc: '25 種類のコンポーネントの props と使用例を確認する' },
        { href: '/ja/tokens', title: 'デザイントークン →', desc: '天体カラーパレットとトークンシステムを見る' },
      ],
    },
  },
}

const codeBlockStyle: React.CSSProperties = {
  display: 'block',
  background: 'var(--stella-color-void-base)',
  border: '1px solid var(--stella-color-void-muted)',
  padding: '1.25rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: 1.8,
  color: 'var(--stella-color-starlight-primary)',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  overflow: 'auto',
  whiteSpace: 'pre',
  margin: 0,
}

const sectionStyle: React.CSSProperties = { marginBottom: '3rem' }

const sectionHeadingStyle: React.CSSProperties = {
  paddingBottom: '0.5rem',
  borderBottom: '1px solid var(--stella-color-void-muted)',
  marginBottom: '0.75rem',
}

const h3Style: React.CSSProperties = {
  color: 'var(--stella-color-cosmos-300)',
  marginBottom: '0.5rem',
  marginTop: '1.75rem',
}

interface Props {
  locale: 'en' | 'ja'
}

export function GettingStartedTemplate({ locale }: Props) {
  const c = content[locale]

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Page header */}
      <div style={{ marginBottom: '3rem' }}>
        <Text size="xs" color="disabled" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
          {c.docsLabel}
        </Text>
        <Heading level={1} size="3xl" color="cosmos-400" style={{ marginBottom: '1rem' }}>
          {c.title}
        </Heading>
        <Text color="secondary" style={{ fontSize: '1.1rem' }}>{c.lead}</Text>
      </div>

      {/* Prerequisites */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.prerequisites.heading}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.5rem', display: 'block' }}>{c.prerequisites.intro}</Text>
        <ul style={{ color: 'var(--stella-color-starlight-secondary)', fontSize: '0.95rem', lineHeight: 1.75, paddingLeft: '1.5rem' }}>
          {c.prerequisites.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* Installation */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.installation.heading}</Heading>
        <Heading level={3} size="sm" weight="semibold" style={h3Style}>npm</Heading>
        <pre style={codeBlockStyle}><code style={{ color: 'var(--stella-color-aurora-300)' }}>npm install @stella-ds/react @stella-ds/theme</code></pre>
        <Heading level={3} size="sm" weight="semibold" style={h3Style}>pnpm</Heading>
        <pre style={codeBlockStyle}><code style={{ color: 'var(--stella-color-aurora-300)' }}>pnpm add @stella-ds/react @stella-ds/theme</code></pre>
        <Heading level={3} size="sm" weight="semibold" style={h3Style}>yarn</Heading>
        <pre style={codeBlockStyle}><code style={{ color: 'var(--stella-color-aurora-300)' }}>yarn add @stella-ds/react @stella-ds/theme</code></pre>
      </section>

      {/* Theme setup */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.themeSetup.heading}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.75rem', display: 'block' }}>{c.themeSetup.intro}</Text>

        <Heading level={3} size="sm" weight="semibold" style={h3Style}>{c.themeSetup.optionA.label}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.5rem', display: 'block' }}>{c.themeSetup.optionA.desc}</Text>
        <pre style={codeBlockStyle}><code>{`import '@stella-ds/theme/css'`}</code></pre>

        <Heading level={3} size="sm" weight="semibold" style={h3Style}>{c.themeSetup.optionB.label}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.5rem', display: 'block' }}>{c.themeSetup.optionB.desc}</Text>
        <pre style={codeBlockStyle}><code>{c.themeSetup.injectCode}</code></pre>

        <Heading level={3} size="sm" weight="semibold" style={h3Style}>{c.themeSetup.optionC.label}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.5rem', display: 'block' }}>{c.themeSetup.optionC.desc}</Text>
        <pre style={codeBlockStyle}><code>{`import { cssVariables, tokens } from '@stella-ds/theme'\n\n// cssVariables: Record<string, string>  — { '--stella-color-cosmos-500': '#5b5bf0', ... }\n// tokens: nested object matching the tokens.json structure`}</code></pre>
      </section>

      {/* Basic usage */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.basicUsage.heading}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.75rem', display: 'block' }}>{c.basicUsage.intro}</Text>
        <pre style={codeBlockStyle}><code>{c.basicUsage.code}</code></pre>
      </section>

      {/* Next.js integration */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.nextjs.heading}</Heading>

        <Heading level={3} size="sm" weight="semibold" style={h3Style}>{c.nextjs.appRouterLabel}</Heading>
        <Text color="secondary" style={{ marginBottom: '0.75rem', display: 'block' }}>{c.nextjs.appRouterDesc}</Text>
        <pre style={codeBlockStyle}><code>{c.nextjs.appRouterCode}</code></pre>

        <Heading level={3} size="sm" weight="semibold" style={h3Style}>{c.nextjs.pagesRouterLabel}</Heading>
        <pre style={codeBlockStyle}><code>{`// pages/_app.tsx
import '@stella-ds/theme/css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}`}</code></pre>

        <Heading level={3} size="sm" weight="semibold" style={{ ...h3Style, marginTop: '1.75rem' }}>{c.nextjs.tipLabel}</Heading>
        <Text color="secondary">{c.nextjs.tipDesc}</Text>
      </section>

      {/* TypeScript */}
      <section style={sectionStyle}>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.typescript.heading}</Heading>
        <Text color="secondary">{c.typescript.desc}</Text>
      </section>

      {/* Next steps */}
      <section>
        <Heading level={2} size="lg" style={sectionHeadingStyle}>{c.nextSteps.heading}</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {c.nextSteps.links.map((link) => (
            <Card key={link.href} hoverable>
              <CardContent>
                <a href={link.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <Text weight="bold" color="primary" style={{ marginBottom: '0.375rem', display: 'block' }}>{link.title}</Text>
                  <Text size="sm" color="secondary">{link.desc}</Text>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
