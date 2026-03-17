import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Background } from '@stella-ui/react';
import type { BackgroundTokenColor } from '@stella-ui/react';
import { useT, translations } from '../i18n';

// All available design token colors
const COLOR_SCALES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const COLOR_FAMILIES = ['cosmos', 'nebula', 'aurora', 'nova'] as const;

const ALL_TOKEN_COLORS: BackgroundTokenColor[] = [
  ...COLOR_FAMILIES.flatMap((f) => COLOR_SCALES.map((s) => `${f}-${s}` as BackgroundTokenColor)),
  'void-base', 'void-surface', 'void-overlay', 'void-muted',
  'starlight-primary', 'starlight-secondary', 'starlight-disabled',
];

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: translations.en.background.componentDescription } },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['stars', 'galaxy', 'milkyway', 'gradient', 'solid'],
      table: { defaultValue: { summary: 'stars' } },
    },
    color: {
      control: 'select',
      options: ['cosmos', 'nebula', 'aurora', 'mixed'],
      table: { defaultValue: { summary: 'mixed' } },
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      table: { defaultValue: { summary: 'dark' } },
    },
    twinkle: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    ribbons: {
      control: { type: 'number', min: 1, max: 15, step: 1 },
      table: { defaultValue: { summary: '5' } },
      description: 'Number of wave ribbons (milkyway only)',
    },
    tokenColor: {
      control: 'select',
      options: [undefined, ...ALL_TOKEN_COLORS],
      table: { defaultValue: { summary: 'undefined' } },
      description: 'Specific design-token color for solid/gradient base (overrides color+theme)',
    },
    showGradient: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
      description: 'Show gradient blob overlay (gradient variant only)',
    },
    className: { control: false },
  },
  args: {
    variant: 'stars',
    color: 'mixed',
    theme: 'dark',
    twinkle: true,
    ribbons: 5,
    showGradient: true,
  },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Shared wrapper styles
// ----------------------------------------------------------------

const containerStyle: React.CSSProperties = {
  width: '800px',
  height: '450px',
};

const innerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
};

function Label({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        ...innerStyle,
        color: dark ? '#f0f0f5' : '#1e1b4b',
        fontFamily: 'sans-serif',
        fontSize: '1.4rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Stars: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label>{tr.background.story_starfield}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'stars',
    color: 'mixed',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pure animated starfield with randomly positioned stars and twinkling animation.',
      },
    },
  },
};

export const Galaxy: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label>{tr.background.story_galaxy}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'galaxy',
    color: 'nebula',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Starfield layered with radial nebula glow blobs for a deep-space galaxy effect.',
      },
    },
  },
};

export const MilkyWay: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label>{tr.background.story_milkyway}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'milkyway',
    color: 'mixed',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stars with a glowing SVG neon wave ribbon sweeping across the background.',
      },
    },
  },
};

export const Gradient: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label dark={args.theme === 'dark'}>{tr.background.story_gradient}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'gradient',
    color: 'mixed',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vivid overlapping radial blobs forming a rich mesh gradient — no stars.',
      },
    },
  },
};

export const GradientLight: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label dark={false}>{tr.background.story_gradient}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'gradient',
    color: 'cosmos',
    theme: 'light',
  },
  parameters: {
    docs: {
      description: {
        story: 'Light-theme gradient mesh with pastel indigo blobs.',
      },
    },
  },
};

export const Solid: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label dark={args.theme === 'dark'}>{tr.background.story_solid} — {args.color}</Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'solid',
    color: 'cosmos',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Plain solid color from the celestial palette. Use the color and theme controls to switch.',
      },
    },
  },
};

export const SolidPalette: Story = {
  render: () => {
    return (
      <div style={{ width: '880px', background: '#000', padding: '2px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {COLOR_FAMILIES.map((family) => (
          <div key={family} style={{ display: 'grid', gridTemplateColumns: `repeat(${COLOR_SCALES.length}, 1fr)`, gap: '2px' }}>
            {COLOR_SCALES.map((scale) => {
              const token: BackgroundTokenColor = `${family}-${scale}`;
              const isDark = scale >= 400;
              return (
                <Background
                  key={token}
                  variant="solid"
                  tokenColor={token}
                  style={{ height: '56px', width: '100%' }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: '100%', flexDirection: 'column', gap: '1px',
                    color: isDark ? '#f0f0f5' : '#1e1b4b',
                    fontFamily: 'sans-serif', fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.04em', opacity: 0.9,
                  }}>
                    <span>{family}</span>
                    <span>{scale}</span>
                  </div>
                </Background>
              );
            })}
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {(['void-base','void-surface','void-overlay','void-muted','starlight-primary','starlight-secondary','starlight-disabled'] as BackgroundTokenColor[]).map((token) => (
            <Background key={token} variant="solid" tokenColor={token} style={{ height: '56px', width: '100%' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '100%', color: token.startsWith('starlight') ? '#0f1117' : '#f0f0f5',
                fontFamily: 'sans-serif', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.04em', opacity: 0.9, textAlign: 'center', padding: '0 4px',
              }}>
                {token}
              </div>
            </Background>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All design token colors rendered as solid swatches — cosmos / nebula / aurora / nova scales + void + starlight.',
      },
    },
  },
};

export const GradientWithToken: Story = {
  render: (args) => {
    return (
      <div style={containerStyle}>
        <Background {...args} style={{ width: '100%', height: '100%' }}>
          <Label dark={!args.tokenColor || Number(args.tokenColor.split('-')[1]) >= 400}>
            gradient · {args.tokenColor ?? 'default'} · overlay {args.showGradient ? 'on' : 'off'}
          </Label>
        </Background>
      </div>
    );
  },
  args: {
    variant: 'gradient',
    tokenColor: 'nebula-900',
    showGradient: true,
    color: 'nebula',
  },
  parameters: {
    docs: {
      description: {
        story: 'Gradient variant with a specific token color as the base. Toggle showGradient to remove the blob overlay.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          width: '900px',
          height: '500px',
          gap: '2px',
          background: '#000',
        }}
      >
        {(
          [
            { variant: 'stars',    color: 'mixed',  label: 'stars',    theme: 'dark'  },
            { variant: 'galaxy',   color: 'nebula', label: 'galaxy',   theme: 'dark'  },
            { variant: 'milkyway', color: 'aurora', label: 'milkyway', theme: 'dark'  },
            { variant: 'gradient', color: 'mixed',  label: 'gradient (dark)', theme: 'dark'  },
            { variant: 'gradient', color: 'nebula', label: 'gradient (light)', theme: 'light' },
            { variant: 'solid',    color: 'cosmos', label: 'solid',    theme: 'dark'  },
          ] as const
        ).map(({ variant, color, label, theme }, i) => (
          <Background
            key={i}
            variant={variant}
            color={color}
            theme={theme}
            style={{ width: '100%', height: '100%' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                color: theme === 'dark' ? '#f0f0f5' : '#1e1b4b',
                fontFamily: 'sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              {label}
            </div>
          </Background>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All five variants displayed in a 3×2 grid for comparison.',
      },
    },
  },
};
