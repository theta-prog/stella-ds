import type { Meta, StoryObj } from '@storybook/react';
import { GalaxyBackground } from '@stella-ui/react';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/GalaxyBackground',
  component: GalaxyBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    nebula: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    glowColor: {
      control: 'select',
      options: ['cosmos', 'nebula', 'aurora'],
      table: { defaultValue: { summary: 'nebula' } },
    },
    className: { control: false },
  },
  args: {
    nebula: true,
    glowColor: 'nebula',
  },
} satisfies Meta<typeof GalaxyBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Shared wrapper style
// ----------------------------------------------------------------

const containerStyle: React.CSSProperties = {
  width: '800px',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle: React.CSSProperties = {
  color: '#f0f0f5',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  fontWeight: 600,
  textAlign: 'center',
  letterSpacing: '0.05em',
};

const centeredContent = (label: string) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      ...textStyle,
    }}
  >
    {label}
  </div>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <GalaxyBackground {...args} style={{ width: '100%', height: '100%' }}>
        {centeredContent('✦ GalaxyBackground — Default (nebula)')}
      </GalaxyBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Galaxy background with purple nebula glow and layered stars. · 🇯🇵 紫の星雲グローと階層的な星で構成された銀河背景。',
      },
    },
  },
};

export const CosmosGlow: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <GalaxyBackground {...args} style={{ width: '100%', height: '100%' }}>
        {centeredContent('✦ GalaxyBackground — Cosmos (indigo)')}
      </GalaxyBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Indigo cosmos glow — deep space atmosphere. · 🇯🇵 インディゴの宇宙グロー — 深宇宙の雰囲気。',
      },
    },
  },
  args: {
    glowColor: 'cosmos',
  },
};

export const NebulaGlow: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <GalaxyBackground {...args} style={{ width: '100%', height: '100%' }}>
        {centeredContent('✦ GalaxyBackground — Nebula (purple)')}
      </GalaxyBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Purple nebula glow — mystic and ethereal. · 🇯🇵 紫の星雲グロー — 神秘的で幻想的な雰囲気。',
      },
    },
  },
  args: {
    glowColor: 'nebula',
  },
};

export const AuroraGlow: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <GalaxyBackground {...args} style={{ width: '100%', height: '100%' }}>
        {centeredContent('✦ GalaxyBackground — Aurora (cyan)')}
      </GalaxyBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Cyan aurora glow — northern lights atmosphere. · 🇯🇵 シアンのオーロラグロー — オーロラの雰囲気。',
      },
    },
  },
  args: {
    glowColor: 'aurora',
  },
};

export const NoNebula: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <GalaxyBackground {...args} style={{ width: '100%', height: '100%' }}>
        {centeredContent('✦ GalaxyBackground — Stars Only')}
      </GalaxyBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Stars only — nebula glow overlay disabled. · 🇯🇵 星のみ — 星雲グローオーバーレイを無効化。',
      },
    },
  },
  args: {
    nebula: false,
  },
};

export const AllGlowColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', background: '#0f1117' }}>
      {(['cosmos', 'nebula', 'aurora'] as const).map((color) => (
        <div key={color} style={{ width: '760px', height: '120px' }}>
          <GalaxyBackground
            glowColor={color}
            nebula
            style={{ width: '100%', height: '100%' }}
          >
            <div style={{ ...textStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '1rem' }}>
              glowColor=&quot;{color}&quot;
            </div>
          </GalaxyBackground>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 All three glow color variants side-by-side. · 🇯🇵 3色のグローバリアントを並べて比較。',
      },
    },
  },
};
