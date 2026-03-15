import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@stella-ui/react';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      table: { defaultValue: { summary: 'vertical' } },
    },
    gap: {
      control: 'select',
      options: ['1', '2', '3', '4', '6', '8', '12', '16'],
      table: { defaultValue: { summary: '4' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      table: { defaultValue: { summary: 'stretch' } },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
      table: { defaultValue: { summary: 'start' } },
    },
    wrap: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Placeholder box helper
// ----------------------------------------------------------------

const Box = ({
  label,
  width = 'auto',
  height = 60,
}: {
  label: string;
  width?: number | string;
  height?: number;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width,
      height,
      backgroundColor: 'var(--stella-color-void-muted, #2e3440)',
      borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
      color: 'var(--stella-color-starlight-primary, #f0f0f5)',
      fontSize: '0.875rem',
      fontWeight: 600,
      border: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    {label}
  </div>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { direction: 'vertical', gap: '4' },
  render: (args) => (
    <Stack {...args} style={{ width: 320 }}>
      <Box label="Item A" />
      <Box label="Item B" />
      <Box label="Item C" />
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="vertical" gap="4" style={{ width: 320 }}>
      <Box label="First" />
      <Box label="Second" />
      <Box label="Third" />
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="4" align="center">
      <Box label="Alpha" width={100} />
      <Box label="Beta" width={100} />
      <Box label="Gamma" width={100} />
    </Stack>
  ),
};

export const GapSizes: Story = {
  render: () => (
    <Stack direction="vertical" gap="8">
      {(['1', '2', '4', '6', '8', '12'] as const).map((gap) => (
        <div key={gap}>
          <p style={{ color: 'var(--stella-color-starlight-primary, #f0f0f5)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
            gap="{gap}"
          </p>
          <Stack direction="horizontal" gap={gap} align="center">
            <Box label="A" width={60} height={40} />
            <Box label="B" width={60} height={40} />
            <Box label="C" width={60} height={40} />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Stack direction="vertical" gap="6">
      {(['start', 'center', 'end'] as const).map((align) => (
        <div key={align}>
          <p style={{ color: 'var(--stella-color-starlight-primary, #f0f0f5)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
            align="{align}"
          </p>
          <Stack
            direction="horizontal"
            gap="4"
            align={align}
            style={{
              height: 100,
              padding: '0.5rem',
              backgroundColor: 'var(--stella-color-void-surface, #1d2129)',
              borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
            }}
          >
            <Box label="A" width={60} height={40} />
            <Box label="B" width={60} height={60} />
            <Box label="C" width={60} height={50} />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};

export const JustifyBetween: Story = {
  render: () => (
    <Stack
      direction="horizontal"
      gap="4"
      justify="between"
      align="center"
      style={{
        padding: '1rem',
        backgroundColor: 'var(--stella-color-void-surface, #1d2129)',
        borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
        width: '100%',
      }}
    >
      <Box label="Logo" width={80} height={40} />
      <Stack direction="horizontal" gap="2" align="center">
        <Box label="Nav" width={60} height={32} />
        <Box label="Nav" width={60} height={32} />
        <Box label="Nav" width={60} height={32} />
      </Stack>
      <Box label="CTA" width={80} height={40} />
    </Stack>
  ),
};

export const WrapExample: Story = {
  render: () => (
    <Stack direction="horizontal" gap="3" wrap style={{ maxWidth: 360 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i} label={`Tag ${i + 1}`} width={90} height={36} />
      ))}
    </Stack>
  ),
};

export const AsChildLink: Story = {
  render: () => (
    <Stack direction="horizontal" gap="4" asChild>
      <nav aria-label="Example navigation">
        <Box label="Home" width={80} height={40} />
        <Box label="About" width={80} height={40} />
        <Box label="Contact" width={80} height={40} />
      </nav>
    </Stack>
  ),
};
