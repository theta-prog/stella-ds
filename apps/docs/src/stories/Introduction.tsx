import { useT, useLocale } from '../i18n';
import type { Locale } from '../i18n';

const content = {
  en: {
    heading: '✦ Welcome to Stella UI',
    intro: `**Stella UI** is a scalable design system built for web apps.`,
    sections: [
      {
        title: '🎨 Design Tokens',
        body: 'All visual values (colors, typography, spacing, shadows) are defined as JSON tokens in `@stella-ds/theme` and exported as CSS custom properties (`--stella-*`).',
      },
      {
        title: '⚛️ React Components',
        body: 'Components in `@stella-ds/react` are built on **Radix UI Primitives** for accessibility and use **CSS Modules** for scoped, distributable styling.',
      },
      {
        title: '🌐 Language / 言語',
        body: 'Switch between **English** and **Japanese** using the 🌍 globe icon in the Storybook toolbar.',
      },
    ],
    footer: 'Start exploring with **Components › Button** in the sidebar.',
  },
  ja: {
    heading: '✦ Stella UI へようこそ',
    intro: `**Stella UI** はウェブアプリ向けのスケーラブルなデザインシステムです。`,
    sections: [
      {
        title: '🎨 デザイントークン',
        body: 'すべてのビジュアル値（カラー・タイポグラフィ・スペース・シャドウ）は `@stella-ds/theme` に JSON トークンとして定義され、CSS カスタムプロパティ（`--stella-*`）として配布されます。',
      },
      {
        title: '⚛️ React コンポーネント',
        body: '`@stella-ds/react` のコンポーネントはアクセシビリティのために **Radix UI Primitives** を基盤とし、スコープされた配布可能なスタイリングには **CSS Modules** を使用しています。',
      },
      {
        title: '🌐 Language / 言語',
        body: 'Storybook ツールバーの 🌍 地球アイコンで **English** と **日本語** を切り替えられます。',
      },
    ],
    footer: 'サイドバーの **Components › Button** からコンポーネントを探索してください。',
  },
};

export function Introduction() {
  const locale: Locale = useLocale();
  const tr = useT();
  const c = content[locale] ?? content.en;

  const cardStyle: React.CSSProperties = {
    background: 'var(--stella-color-void-surface, #16161a)',
    border: '1px solid var(--stella-color-void-muted, #2a2a33)',
    borderRadius: 'var(--stella-borderRadius-lg, 0.75rem)',
    padding: '1.25rem 1.5rem',
    maxWidth: 560,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: 'var(--stella-typography-fontFamily-sans, sans-serif)',
    fontSize: 'var(--stella-typography-fontSize-xl, 1.25rem)',
    fontWeight: 'var(--stella-typography-fontWeight-semibold, 600)',
    color: 'var(--stella-color-cosmos-300, #a5b4fc)',
    marginTop: 0,
    marginBottom: '0.5rem',
  };

  const bodyStyle: React.CSSProperties = {
    fontFamily: 'var(--stella-typography-fontFamily-sans, sans-serif)',
    fontSize: 'var(--stella-typography-fontSize-sm, 0.875rem)',
    color: 'var(--stella-color-starlight-secondary, #a0a0b0)',
    lineHeight: 'var(--stella-typography-lineHeight-normal, 1.5)',
    margin: 0,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', maxWidth: 640 }}>
      <div>
        <h1 style={{ ...headingStyle, fontSize: 'var(--stella-typography-fontSize-3xl, 1.875rem)', marginBottom: '0.75rem' }}>
          {c.heading}
        </h1>
        <p style={{ ...bodyStyle, fontSize: 'var(--stella-typography-fontSize-base, 1rem)' }}>
          {c.intro}
        </p>
        <p style={{ ...bodyStyle, marginTop: '0.5rem' }}>
          <em>{tr.tagline}</em>
        </p>
      </div>

      {c.sections.map((section) => (
        <div key={section.title} style={cardStyle}>
          <h2 style={headingStyle}>{section.title}</h2>
          <p style={bodyStyle}>{section.body}</p>
        </div>
      ))}

      <p style={{ ...bodyStyle, fontStyle: 'italic' }}>{c.footer}</p>
    </div>
  );
}
