import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '@stella-ui/react';
import { useT } from '../i18n';

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
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Switch key={size} size={size} label={`${size} — ${tr.switch_.label_toggle}`} />
        ))}
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const tr = useT();
    return <Switch {...args} />;
  },
  args: { size: 'md', label: 'Enable notifications' },
};

export const Error: Story = {
  render: (args) => {
    const tr = useT();
    return <Switch {...args} label={tr.switch_.label_terms} />;
  },
  args: { size: 'md', error: true },
};

export const Disabled: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Switch disabled label={tr.switch_.label_disabledOff} />
        <Switch disabled defaultChecked label={tr.switch_.label_disabledOn} />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const tr = useT();
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
        <Switch
          checked={checked}
          onCheckedChange={(v) => setChecked(v)}
          label={tr.switch_.label_darkMode}
        />
        <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          checked: {String(checked)}
        </span>
      </div>
    );
  },
};
