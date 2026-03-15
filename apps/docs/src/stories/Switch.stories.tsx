import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '@stella-ui/react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    error:    { control: 'boolean' },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { size: 'md' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} size={size} label={`${size} — Toggle me`} />
      ))}
    </div>
  ),
};

export const WithLabel: Story = {
  args: { size: 'md', label: 'Enable notifications' },
};

export const Error: Story = {
  args: { size: 'md', label: 'Accept terms', error: true },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Switch disabled label="Disabled (off)" />
      <Switch disabled defaultChecked label="Disabled (on)" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
        <Switch
          checked={checked}
          onCheckedChange={(v) => setChecked(v)}
          label="Dark mode"
        />
        <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          checked: {String(checked)}
        </span>
      </div>
    );
  },
};
