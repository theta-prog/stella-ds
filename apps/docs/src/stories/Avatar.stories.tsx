import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@stella-ui/react';
import { useT } from '../i18n';

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
  render: () => {
    const tr = useT();
    return <Avatar src="https://i.pravatar.cc/150?img=3" alt={tr.avatar.label_user} />;
  },
  args: { src: 'https://i.pravatar.cc/150?img=3', alt: 'User' },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', gap: 'var(--stella-spacing-4)', alignItems: 'center' }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Avatar key={size} size={size} src="https://i.pravatar.cc/150?img=3" alt={`${tr.avatar.label_user} (${size})`} />
        ))}
      </div>
    );
  },
  args: { alt: 'User' },
};

export const Fallback: Story = {
  render: () => {
    const tr = useT();
    return <Avatar alt={tr.avatar.label_stella} />;
  },
  args: { alt: 'Stella' },
};

export const CustomFallback: Story = {
  render: () => {
    const tr = useT();
    return <Avatar alt={tr.avatar.label_stella} fallback={'\u2B50'} />;
  },
  args: { alt: 'Stella' },
};
