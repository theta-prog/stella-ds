import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Tokens',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily: 'var(--stella-typography-fontFamily-sans)',
        fontSize: 'var(--stella-typography-fontSize-lg)',
        fontWeight: 600,
        color: 'var(--stella-color-starlight-secondary)',
        borderBottom: '1px solid var(--stella-color-void-muted)',
        paddingBottom: '0.5rem',
        marginBottom: '1.25rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}>{title}</h2>
      {children}
    </section>
  );
}

function TokenRow({ label, value, preview }: { label: string; value: string; preview?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.375rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
      <div style={{ width: 48, flexShrink: 0 }}>{preview}</div>
      <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 300 }}>{label}</code>
      <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{value}</span>
    </div>
  );
}

function ColorSwatch({ variable, hex }: { variable: string; hex: string }) {
  return (
    <TokenRow
      label={variable}
      value={hex}
      preview={
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 'var(--stella-borderRadius-md)',
          background: `var(${variable})`,
          border: '1px solid var(--stella-color-void-muted)',
        }} />
      }
    />
  );
}

// ----------------------------------------------------------------
// Colors Story
// ----------------------------------------------------------------

export const Colors: Story = {
  render: () => (
    <div>
      <Section title="cosmos — Primary interactive color (indigo)">
        {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
          <ColorSwatch key={n} variable={`--stella-color-cosmos-${n}`} hex={cosmosHex[n]} />
        ))}
      </Section>

      <Section title="nebula — Accent / decorative color (purple)">
        {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
          <ColorSwatch key={n} variable={`--stella-color-nebula-${n}`} hex={nebulaHex[n]} />
        ))}
      </Section>

      <Section title="aurora — Accent / decorative color (cyan)">
        {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
          <ColorSwatch key={n} variable={`--stella-color-aurora-${n}`} hex={auroraHex[n]} />
        ))}
      </Section>

      <Section title="nova — Success / positive color (green)">
        {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
          <ColorSwatch key={n} variable={`--stella-color-nova-${n}`} hex={novaHex[n]} />
        ))}
      </Section>

      <Section title="void — Background semantic slots">
        {[
          ['--stella-color-void-base',    '#0f1117'],
          ['--stella-color-void-surface', '#1d2129'],
          ['--stella-color-void-overlay', '#252b36'],
          ['--stella-color-void-muted',   '#2e3440'],
        ].map(([v, h]) => <ColorSwatch key={v} variable={v} hex={h} />)}
      </Section>

      <Section title="starlight — Text semantic slots">
        {[
          ['--stella-color-starlight-primary',   '#f0f0f5'],
          ['--stella-color-starlight-secondary', '#8888a0'],
          ['--stella-color-starlight-disabled',  '#4a4a5a'],
        ].map(([v, h]) => <ColorSwatch key={v} variable={v} hex={h} />)}
      </Section>
    </div>
  ),
};

// ----------------------------------------------------------------
// Typography Story
// ----------------------------------------------------------------

export const Typography: Story = {
  render: () => (
    <div>
      <Section title="Font Families">
        {[
          {
            variable: '--stella-typography-fontFamily-sans',
            label: 'Inter, Zen Kaku Gothic New, system-ui, sans-serif',
            sample: 'Stella UI — ステラ',
            note: null,
          },
          {
            variable: '--stella-typography-fontFamily-serif',
            label: 'Zen Old Mincho, Georgia, serif',
            sample: '美しい星空',
            note: null,
          },
          {
            variable: '--stella-typography-fontFamily-serif-print',
            label: 'Tsukushi A Round Gothic, Georgia, serif',
            sample: '美しい星空',
            note: '(印刷用) print only',
          },
          {
            variable: '--stella-typography-fontFamily-display',
            label: 'Plus Jakarta Sans, Zen Kaku Gothic New, system-ui, sans-serif',
            sample: 'Stella UI — ステラ',
            note: null,
          },
          {
            variable: '--stella-typography-fontFamily-statement',
            label: 'Acier BAT Text Solid, Impact, sans-serif',
            sample: 'Stella UI — ステラ',
            note: null,
          },
          {
            variable: '--stella-typography-fontFamily-mono',
            label: 'JetBrains Mono, Fira Code, monospace',
            sample: 'Stella UI — ステラ',
            note: null,
          },
        ].map(({ variable, label, sample, note }) => (
          <div key={variable} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <div style={{ fontSize: '1.5rem', fontFamily: `var(${variable})`, color: 'var(--stella-color-starlight-primary)', marginBottom: '0.25rem' }}>
              {sample}
            </div>
            <code style={{ fontSize: '0.7rem', color: 'var(--stella-color-cosmos-400)' }}>{variable}</code>
            <span style={{ fontSize: '0.7rem', color: 'var(--stella-color-starlight-secondary)', marginLeft: '1rem' }}>{label}</span>
            {note && (
              <span style={{ fontSize: '0.65rem', color: 'var(--stella-color-nebula-400)', marginLeft: '0.75rem', fontStyle: 'italic' }}>{note}</span>
            )}
          </div>
        ))}
      </Section>

      <Section title="Font Sizes">
        {[
          ['2xs', '0.625rem', '10px'],
          ['xs',  '0.75rem',  '12px'],
          ['sm',  '0.875rem', '14px'],
          ['base','1rem',     '16px'],
          ['lg',  '1.125rem', '18px'],
          ['xl',  '1.25rem',  '20px'],
          ['2xl', '1.5rem',   '24px'],
          ['3xl', '1.875rem', '30px'],
          ['4xl', '2.25rem',  '36px'],
          ['5xl', '3rem',     '48px'],
        ].map(([name, rem, px]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <span style={{ fontSize: `var(--stella-typography-fontSize-${name})`, color: 'var(--stella-color-starlight-primary)', lineHeight: 1.2 }}>Aa</span>
            <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 280 }}>{`--stella-typography-fontSize-${name}`}</code>
            <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{rem} / {px}</span>
          </div>
        ))}
      </Section>

      <Section title="Font Weights">
        {[
          ['light',    '300'],
          ['regular',  '400'],
          ['medium',   '500'],
          ['semibold', '600'],
          ['bold',     '700'],
        ].map(([name, value]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <span style={{ fontWeight: `var(--stella-typography-fontWeight-${name})` as React.CSSProperties['fontWeight'], fontSize: '1.25rem', color: 'var(--stella-color-starlight-primary)', minWidth: 120 }}>Stella UI</span>
            <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 280 }}>{`--stella-typography-fontWeight-${name}`}</code>
            <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{value}</span>
          </div>
        ))}
      </Section>

      <Section title="Line Heights">
        {[
          ['tight',   '1.25'],
          ['normal',  '1.5'],
          ['relaxed', '1.75'],
          ['display', '1.1'],
        ].map(([name, value]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <div style={{ lineHeight: `var(--stella-typography-lineHeight-${name})`, fontSize: '0.875rem', color: 'var(--stella-color-starlight-primary)', width: 120, flexShrink: 0 }}>
              The quick brown fox<br />jumps over the lazy dog
            </div>
            <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 280 }}>{`--stella-typography-lineHeight-${name}`}</code>
            <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{value}</span>
          </div>
        ))}
      </Section>

      <Section title="Letter Spacing">
        {[
          ['tighter', '-0.03em'],
          ['tight',   '-0.015em'],
          ['normal',  '0'],
          ['wide',    '0.025em'],
          ['wider',   '0.05em'],
        ].map(([name, value]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <span style={{ letterSpacing: `var(--stella-typography-letterSpacing-${name})`, fontSize: '1rem', color: 'var(--stella-color-starlight-primary)', minWidth: 120 }}>Stella UI</span>
            <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 280 }}>{`--stella-typography-letterSpacing-${name}`}</code>
            <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{value}</span>
          </div>
        ))}
      </Section>

      <Section title="Heading Scale">
        {[
          ['h1', '3rem',    '48px'],
          ['h2', '2.25rem', '36px'],
          ['h3', '1.875rem','30px'],
          ['h4', '1.5rem',  '24px'],
          ['h5', '1.25rem', '20px'],
          ['h6', '1rem',    '16px'],
        ].map(([name, rem, px]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
            <span style={{ fontSize: `var(--stella-typography-heading-${name})`, fontWeight: 600, color: 'var(--stella-color-starlight-primary)', lineHeight: 1.2, minWidth: 120 }}>{name.toUpperCase()}</span>
            <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 280 }}>{`--stella-typography-heading-${name}`}</code>
            <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{rem} / {px}</span>
          </div>
        ))}
      </Section>
    </div>
  ),
};

// ----------------------------------------------------------------
// Spacing Story
// ----------------------------------------------------------------

export const Spacing: Story = {
  render: () => (
    <Section title="Spacing Scale">
      {[
        ['0',  '0'],
        ['1',  '0.25rem / 4px'],
        ['2',  '0.5rem / 8px'],
        ['3',  '0.75rem / 12px'],
        ['4',  '1rem / 16px'],
        ['5',  '1.25rem / 20px'],
        ['6',  '1.5rem / 24px'],
        ['8',  '2rem / 32px'],
        ['10', '2.5rem / 40px'],
        ['12', '3rem / 48px'],
        ['16', '4rem / 64px'],
      ].map(([name, label]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.375rem 0', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
          <div style={{ width: `var(--stella-spacing-${name}, ${name === '0' ? '0' : ''})`, height: 20, background: 'var(--stella-color-cosmos-600)', borderRadius: 2, minWidth: name === '0' ? 1 : undefined, flexShrink: 0, maxWidth: 200 }} />
          <code style={{ fontSize: '0.75rem', color: 'var(--stella-color-cosmos-400)', minWidth: 200 }}>{`--stella-spacing-${name}`}</code>
          <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-starlight-secondary)' }}>{label}</span>
        </div>
      ))}
    </Section>
  ),
};

// ----------------------------------------------------------------
// Border Radius Story
// ----------------------------------------------------------------

export const BorderRadius: Story = {
  render: () => (
    <Section title="Border Radius">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-end' }}>
        {[
          ['none', '0'],
          ['sm',   '0.125rem / 2px'],
          ['base', '0.25rem / 4px'],
          ['md',   '0.375rem / 6px'],
          ['lg',   '0.5rem / 8px'],
          ['xl',   '0.75rem / 12px'],
          ['full', '9999px'],
        ].map(([name, label]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 64, height: 64,
              background: 'var(--stella-color-cosmos-600)',
              borderRadius: `var(--stella-borderRadius-${name})`,
            }} />
            <code style={{ fontSize: '0.65rem', color: 'var(--stella-color-cosmos-400)' }}>{name}</code>
            <span style={{ fontSize: '0.65rem', color: 'var(--stella-color-starlight-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

// ----------------------------------------------------------------
// Shadows Story
// ----------------------------------------------------------------

export const Shadows: Story = {
  render: () => (
    <Section title="Shadows & Glows">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        {[
          ['sm',          'shadow-sm'],
          ['base',        'shadow-base'],
          ['md',          'shadow-md'],
          ['lg',          'shadow-lg'],
          ['glow-nebula', 'Nebula glow (purple)'],
          ['glow-aurora', 'Aurora glow (cyan)'],
        ].map(([name, label]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 80, height: 80,
              background: 'var(--stella-color-void-surface)',
              borderRadius: 'var(--stella-borderRadius-md)',
              boxShadow: `var(--stella-shadow-${name})`,
              border: '1px solid var(--stella-color-void-muted)',
            }} />
            <code style={{ fontSize: '0.65rem', color: 'var(--stella-color-cosmos-400)' }}>{name}</code>
            <span style={{ fontSize: '0.65rem', color: 'var(--stella-color-starlight-secondary)', textAlign: 'center' }}>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

// ----------------------------------------------------------------
// Transitions Story
// ----------------------------------------------------------------

export const Transitions: Story = {
  render: () => (
    <Section title="Transitions">
      {[
        ['fast',  '100ms ease-out'],
        ['base',  '200ms ease-out'],
        ['slow',  '350ms ease-out'],
      ].map(([name, value]) => (
        <TokenRow key={name} label={`--stella-transition-${name}`} value={value} preview={
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--stella-color-cosmos-500)' }} />
        } />
      ))}
    </Section>
  ),
};

// ----------------------------------------------------------------
// Color reference maps
// ----------------------------------------------------------------

const cosmosHex: Record<number, string> = {
  50:'#eef2ff',100:'#e0e7ff',200:'#c7d2fe',300:'#a5b4fc',400:'#818cf8',
  500:'#6366f1',600:'#4f46e5',700:'#4338ca',800:'#3730a3',900:'#312e81',950:'#1e1b4b',
};
const nebulaHex: Record<number, string> = {
  50:'#faf5ff',100:'#f3e8ff',200:'#e9d5ff',300:'#d8b4fe',400:'#c084fc',
  500:'#a855f7',600:'#9333ea',700:'#7e22ce',800:'#6b21a8',900:'#581c87',950:'#3b0764',
};
const auroraHex: Record<number, string> = {
  50:'#ecfeff',100:'#cffafe',200:'#a5f3fc',300:'#67e8f9',400:'#22d3ee',
  500:'#06b6d4',600:'#0891b2',700:'#0e7490',800:'#155e75',900:'#164e63',950:'#083344',
};
const novaHex: Record<number, string> = {
  50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',
  500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b',950:'#022c22',
};
