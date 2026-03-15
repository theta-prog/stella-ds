import type { Meta, StoryObj } from '@storybook/react';
import { useGlobals } from 'storybook/preview-api';
import { Input } from '@stella-ui/react';
import { t } from '../i18n';
import type { Locale } from '../i18n';

// ----------------------------------------------------------------
// Locale-aware wrapper
// ----------------------------------------------------------------

function useT() {
  const [globals] = useGlobals();
  return t((globals['locale'] as Locale) ?? 'en');
}

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => {
    const tr = useT();
    return <Input {...args} placeholder={tr.input.label_placeholder} />;
  },
  args: { size: 'md' },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Input key={size} size={size} placeholder={`${size} — ${tr.input.label_placeholder}`} />
        ))}
      </div>
    );
  },
};

export const ErrorBoolean: Story = {
  render: (args) => {
    const tr = useT();
    return <Input {...args} placeholder={tr.input.label_placeholder} />;
  },
  args: { error: true },
};

export const ErrorMessage: Story = {
  render: (args) => {
    const tr = useT();
    return <Input {...args} placeholder={tr.input.label_placeholder} error={tr.input.label_errorMsg} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const tr = useT();
    return <Input {...args} placeholder={tr.input.label_placeholder} />;
  },
  args: { disabled: true },
};

export const Password: Story = {
  render: (args) => {
    const tr = useT();
    return <Input {...args} placeholder={tr.input.label_placeholder} />;
  },
  args: { type: 'password' },
};

export const AllStates: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        <Input placeholder={tr.input.label_placeholder} />
        <Input placeholder={tr.input.label_placeholder} error />
        <Input placeholder={tr.input.label_placeholder} error={tr.input.label_errorMsg} />
        <Input placeholder={tr.input.label_placeholder} disabled />
      </div>
    );
  },
};
