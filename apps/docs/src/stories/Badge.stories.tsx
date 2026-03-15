import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@stella-ui/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      table: { defaultValue: { summary: 'solid' } },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { children: 'Badge', variant: 'solid', color: 'default', size: 'md' },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="solid"   color="primary">Solid</Badge>
      <Badge variant="subtle"  color="primary">Subtle</Badge>
      <Badge variant="outline" color="primary">Outline</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {(['default', 'primary', 'success', 'warning', 'error'] as const).map((color) => (
        <div key={color} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Badge variant="solid"   color={color}>{color}</Badge>
          <Badge variant="subtle"  color={color}>{color}</Badge>
          <Badge variant="outline" color={color}>{color}</Badge>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Badge size="sm" color="primary">Small</Badge>
      <Badge size="md" color="primary">Medium</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge color="success">• Online</Badge>
      <Badge color="warning">• Pending</Badge>
      <Badge color="error">• Offline</Badge>
      <Badge color="primary">• Active</Badge>
      <Badge color="default">• Inactive</Badge>
    </div>
  ),
};
