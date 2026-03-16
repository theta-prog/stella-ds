import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@stella-ui/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      table: { defaultValue: { summary: 'normal' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled'],
      table: { defaultValue: { summary: 'primary' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      table: { defaultValue: { summary: 'left' } },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      table: { defaultValue: { summary: 'p' } },
    },
    truncate: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { size: 'md', children: 'This is a text component.' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-3)' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Text key={size} size={size}>
          Text size: {size}
        </Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-3)' }}>
      <Text color="primary">Primary text color</Text>
      <Text color="secondary">Secondary text color</Text>
      <Text color="disabled">Disabled text color</Text>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div style={{ maxWidth: '200px' }}>
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the container boundary.
      </Text>
    </div>
  ),
};
