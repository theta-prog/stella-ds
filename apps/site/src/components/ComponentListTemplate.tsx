import { Badge, Card, CardContent, Heading, Text } from '@stella-ds/react'
import { components } from '@/data/components'
import { componentDescriptionsJa } from '@/data/components-ja'

const categories = ['inputs', 'display', 'feedback', 'layout', 'navigation', 'overlay', 'typography'] as const

const categoryLabels = {
  en: { inputs: 'Inputs', display: 'Display', feedback: 'Feedback', layout: 'Layout', navigation: 'Navigation', overlay: 'Overlay', typography: 'Typography' },
  ja: { inputs: '入力', display: '表示', feedback: 'フィードバック', layout: 'レイアウト', navigation: 'ナビゲーション', overlay: 'オーバーレイ', typography: 'タイポグラフィ' },
} as const

const categoryDescriptions = {
  en: {
    inputs: 'Form controls and interactive inputs',
    display: 'Visual display components',
    feedback: 'Status messages, skeletons, and notifications',
    layout: 'Structural and layout primitives',
    navigation: 'Navigation patterns and breadcrumbs',
    overlay: 'Modals, dialogs, and tooltips',
    typography: 'Text and heading primitives',
  },
  ja: {
    inputs: 'フォームで使う入力コントロール',
    display: 'データやメディアを視覚的に表示するコンポーネント',
    feedback: 'ステータスメッセージ・スケルトン・通知',
    layout: '構造やレイアウトを組み立てるプリミティブ',
    navigation: 'ナビゲーションやパンくずリスト',
    overlay: 'モーダル・ダイアログ・ツールチップ',
    typography: 'テキストや見出しのプリミティブ',
  },
} as const

const pageLabels = {
  en: {
    docsLabel: 'Docs',
    title: 'Components',
    totalDesc: (n: number) => `${n} accessible, composable components built on Radix UI primitives. Each component ships with full TypeScript types and design token integration.`,
    countLabel: (n: number) => `${n} component${n !== 1 ? 's' : ''}`,
    exportsLabel: (n: number) => `${n} export${n !== 1 ? 's' : ''}`,
    moreLabel: (n: number) => `+${n} more`,
  },
  ja: {
    docsLabel: 'ドキュメント',
    title: 'コンポーネント',
    totalDesc: (n: number) => `Radix UI をベースに構築した、アクセシブルで組み合わせ自在な ${n} 種類のコンポーネント。TypeScript の型定義とデザイントークンも付属しており、どんなプロジェクトにもすぐに導入できます。`,
    countLabel: (n: number) => `${n} 件`,
    exportsLabel: (n: number) => `${n} エクスポート`,
    moreLabel: (n: number) => `+${n} 件`,
  },
}

interface Props {
  locale: 'en' | 'ja'
}

export function ComponentListTemplate({ locale }: Props) {
  const isJa = locale === 'ja'
  const base = isJa ? '/ja' : ''
  const labels = pageLabels[locale]
  const catLabels = categoryLabels[locale]
  const catDescs = categoryDescriptions[locale]
  const totalCount = components.length

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <Text size="xs" color="disabled" as="div" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          {labels.docsLabel}
        </Text>
        <Heading level={1} size="3xl" weight="bold" style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, var(--stella-color-starlight-primary), var(--stella-color-starlight-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {labels.title}
        </Heading>
        <Text color="disabled" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
          {labels.totalDesc(totalCount)}
        </Text>
      </div>

      {/* Category sections */}
      {categories.map((cat) => {
        const catComponents = components.filter((c) => c.category === cat)
        if (catComponents.length === 0) return null
        return (
          <section key={cat} style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
              <Heading level={2} size="sm" style={{ color: 'var(--stella-color-cosmos-400)' }}>
                {catLabels[cat]}
              </Heading>
              <Badge color="default" variant="subtle" style={{ fontSize: '0.75rem' }}>
                {labels.countLabel(catComponents.length)}
              </Badge>
            </div>
            <Text color="disabled" size="sm" style={{ marginBottom: '1.25rem' }}>
              {catDescs[cat]}
            </Text>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {catComponents.map((comp) => {
                const description = isJa ? (componentDescriptionsJa[comp.slug] ?? comp.description) : comp.description
                return (
                  <a
                    key={comp.slug}
                    href={`${base}/components/${comp.slug}`}
                    style={{ display: 'block', textDecoration: 'none' }}
                  >
                    <Card hoverable>
                      <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <Text weight="bold" as="span">{comp.name}</Text>
                          <Badge color="default" variant="subtle" style={{ fontSize: '0.7rem' }}>
                            {labels.exportsLabel(comp.imports.length)}
                          </Badge>
                        </div>
                        <Text color="disabled" size="sm" style={{ lineHeight: 1.55 }}>{description}</Text>
                        <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                          {comp.imports.slice(0, 3).map((imp) => (
                            <Badge key={imp} color="primary" variant="subtle" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: '0.7rem' }}>
                              {imp}
                            </Badge>
                          ))}
                          {comp.imports.length > 3 && (
                            <Text as="span" size="xs" color="disabled" style={{ padding: '0.1rem 0.25rem' }}>
                              {labels.moreLabel(comp.imports.length - 3)}
                            </Text>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
