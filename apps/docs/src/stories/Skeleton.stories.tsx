import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@stella-ui/react';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      table: { defaultValue: { summary: 'text' } },
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    lines: {
      control: 'number',
      table: { defaultValue: { summary: '1' } },
    },
    animate: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { variant: 'text' },
};

export const TextLines: Story = {
  args: { variant: 'text', lines: 3, width: '300px' },
};

export const Circular: Story = {
  args: { variant: 'circular', width: 48, height: 48 },
};

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: '300px', height: '200px' },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--stella-spacing-4)',
        padding: 'var(--stella-spacing-4)',
        width: '320px',
        borderRadius: 'var(--stella-border-radius-lg)',
        background: 'var(--stella-color-void-surface)',
      }}
    >
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" lines={3} width="100%" />
      </div>
    </div>
  ),
};
