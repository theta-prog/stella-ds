import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.badge.componentDescription } } },
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
  render: (args) => {
    const tr = useT();
    return <Badge {...args}>{tr.badge.label_badge}</Badge>;
  },
  args: { variant: 'solid', color: 'default', size: 'md' },
};

export const Variants: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="solid"   color="primary">{tr.badge.label_solid}</Badge>
        <Badge variant="subtle"  color="primary">{tr.badge.label_subtle}</Badge>
        <Badge variant="outline" color="primary">{tr.badge.label_outline}</Badge>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {(['default', 'primary', 'success', 'warning', 'error'] as const).map((color) => (
          <div key={color} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Badge variant="solid"   color={color}>{color}</Badge>
            <Badge variant="subtle"  color={color}>{color}</Badge>
            <Badge variant="outline" color={color}>{color}</Badge>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Badge size="sm" color="primary">{tr.badge.label_small}</Badge>
        <Badge size="md" color="primary">{tr.badge.label_medium}</Badge>
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge color="success">• {tr.badge.label_online}</Badge>
        <Badge color="warning">• {tr.badge.label_pending}</Badge>
        <Badge color="error">• {tr.badge.label_offline}</Badge>
        <Badge color="primary">• {tr.badge.label_active}</Badge>
        <Badge color="default">• {tr.badge.label_inactive}</Badge>
      </div>
    );
  },
};
