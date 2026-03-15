import type { Meta, StoryObj } from '@storybook/react';
import { StarBackground } from '@stella-ui/react';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/StarBackground',
  component: StarBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number', min: 10, max: 500, step: 10 },
      table: { defaultValue: { summary: '150' } },
    },
    twinkle: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    className: { control: false },
  },
  args: {
    count: 150,
    twinkle: true,
  },
} satisfies Meta<typeof StarBackground>;

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

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <StarBackground {...args} style={{ width: '100%', height: '100%' }}>
        <div style={{ ...textStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          ✦ StarBackground — Default
        </div>
      </StarBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Animated starfield with twinkling (default 150 stars). · 🇯🇵 瞬く星が降るデフォルトの星空背景。',
      },
    },
  },
};

export const NoTwinkle: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <StarBackground {...args} style={{ width: '100%', height: '100%' }}>
        <div style={{ ...textStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          ✦ StarBackground — No Twinkle
        </div>
      </StarBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Static starfield with twinkling animation paused. · 🇯🇵 アニメーションを無効にした静的な星空。',
      },
    },
  },
  args: {
    twinkle: false,
  },
};

export const DenseStars: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <StarBackground {...args} style={{ width: '100%', height: '100%' }}>
        <div style={{ ...textStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          ✦ StarBackground — Dense (300 stars)
        </div>
      </StarBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Dense starfield with 300 stars for a richer sky. · 🇯🇵 300個の星が輝く濃密な星空。',
      },
    },
  },
  args: {
    count: 300,
  },
};

export const SparseStars: Story = {
  render: (args) => (
    <div style={containerStyle}>
      <StarBackground {...args} style={{ width: '100%', height: '100%' }}>
        <div style={{ ...textStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          ✦ StarBackground — Sparse (50 stars)
        </div>
      </StarBackground>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Minimal starfield with 50 stars for a cleaner look. · 🇯🇵 50個の星がちりばめられたシンプルな星空。',
      },
    },
  },
  args: {
    count: 50,
  },
};
