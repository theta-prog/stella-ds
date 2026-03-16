import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@stella-ui/react';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: { defaultValue: { summary: 'horizontal' } },
    },
    decorative: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { orientation: 'horizontal' },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '40px' }}>
      <span style={{ color: 'var(--stella-color-starlight-primary)' }}>Left</span>
      <Separator orientation="vertical" />
      <span style={{ color: 'var(--stella-color-starlight-primary)' }}>Right</span>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)', maxWidth: '480px' }}>
      <p style={{ margin: 0, color: 'var(--stella-color-starlight-secondary)' }}>
        Stella UI is a design system built with celestial-inspired design tokens. It provides
        a consistent set of components for building modern interfaces.
      </p>
      <Separator />
      <p style={{ margin: 0, color: 'var(--stella-color-starlight-secondary)' }}>
        The Separator component creates a visual divider between sections of content,
        helping to organize and structure layouts clearly.
      </p>
    </div>
  ),
};
