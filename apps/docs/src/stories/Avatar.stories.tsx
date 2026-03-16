import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@stella-ui/react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=3', alt: 'User' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--stella-spacing-4)', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size} src="https://i.pravatar.cc/150?img=3" alt={`User (${size})`} />
      ))}
    </div>
  ),
};

export const Fallback: Story = {
  args: { alt: 'Stella' },
};

export const CustomFallback: Story = {
  args: { alt: 'Stella', fallback: '\u2B50' },
};
