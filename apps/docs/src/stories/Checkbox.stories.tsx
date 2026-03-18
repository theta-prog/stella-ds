import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect } from 'storybook/test';
import { Checkbox } from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.checkbox.componentDescription } } },
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { size: 'md' },
  play: async ({ canvas, userEvent }) => {
    const el = canvas.getByRole('checkbox');
    await expect(el).not.toBeChecked();
    await userEvent.click(el);
    await expect(el).toBeChecked();
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const tr = useT();
    return <Checkbox {...args} label={tr.checkbox.label_default} />;
  },
  args: { size: 'md' },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Checkbox key={size} size={size} label={`${size} — ${tr.checkbox.label_default}`} />
        ))}
      </div>
    );
  },
};

export const Error: Story = {
  render: (args) => {
    const tr = useT();
    return <Checkbox {...args} label={tr.checkbox.label_default} />;
  },
  args: { error: true },
};

export const Disabled: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Checkbox {...args} label={tr.checkbox.label_default} />
        <Checkbox {...args} label={tr.checkbox.label_default} defaultChecked />
      </div>
    );
  },
  args: { disabled: true },
  play: async ({ canvas, userEvent }) => {
    const checkboxes = canvas.getAllByRole('checkbox');
    const unchecked = checkboxes[0];
    // クリックしてもチェック状態が変わらないことを確認
    await expect(unchecked).not.toBeChecked();
    await userEvent.click(unchecked);
    await expect(unchecked).not.toBeChecked();
  },
};

export const Controlled: Story = {
  render: () => {
    const tr = useT();
    const [checked, setChecked] = useState<boolean>(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
        <Checkbox
          checked={checked}
          onCheckedChange={(v) => setChecked(v === true)}
          label={tr.checkbox.label_default}
        />
        <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          checked: {String(checked)}
        </span>
      </div>
    );
  },
};
