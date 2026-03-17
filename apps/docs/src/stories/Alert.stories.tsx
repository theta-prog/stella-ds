import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.alert.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      table: { defaultValue: { summary: 'info' } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Info: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Alert {...args}>
        <AlertTitle>{tr.alert.title_info}</AlertTitle>
        <AlertDescription>{tr.alert.desc_info}</AlertDescription>
      </Alert>
    );
  },
  args: { variant: 'info' },
};

export const Success: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Alert {...args}>
        <AlertTitle>{tr.alert.title_success}</AlertTitle>
        <AlertDescription>{tr.alert.desc_success}</AlertDescription>
      </Alert>
    );
  },
  args: { variant: 'success' },
};

export const Warning: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Alert {...args}>
        <AlertTitle>{tr.alert.title_warning}</AlertTitle>
        <AlertDescription>{tr.alert.desc_warning}</AlertDescription>
      </Alert>
    );
  },
  args: { variant: 'warning' },
};

export const Error: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Alert {...args}>
        <AlertTitle>{tr.alert.title_error}</AlertTitle>
        <AlertDescription>{tr.alert.desc_error}</AlertDescription>
      </Alert>
    );
  },
  args: { variant: 'error' },
};

export const Dismissible: Story = {
  render: (args) => {
    const tr = useT();
    const [open, setOpen] = useState(true);
    return open ? (
      <Alert {...args} onClose={() => setOpen(false)}>
        <AlertTitle>{tr.alert.title_dismissible}</AlertTitle>
        <AlertDescription>{tr.alert.desc_dismissible}</AlertDescription>
      </Alert>
    ) : (
      <p style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
        {tr.alert.label_dismissed}
      </p>
    );
  },
  args: { variant: 'info' },
};

export const TitleOnly: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Alert {...args}>
        <AlertTitle>{tr.alert.label_readOnly}</AlertTitle>
      </Alert>
    );
  },
  args: { variant: 'warning' },
};

export const AllVariants: Story = {
  render: () => {
    const tr = useT();
    const titles = {
      info: tr.alert.title_info,
      success: tr.alert.title_success,
      warning: tr.alert.title_warning,
      error: tr.alert.title_error,
    };
    const descs = {
      info: tr.alert.desc_info,
      success: tr.alert.desc_success,
      warning: tr.alert.desc_warning,
      error: tr.alert.desc_error,
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
        {(['info', 'success', 'warning', 'error'] as const).map((variant) => (
          <Alert key={variant} variant={variant}>
            <AlertTitle>{titles[variant]}</AlertTitle>
            <AlertDescription>{descs[variant]}</AlertDescription>
          </Alert>
        ))}
      </div>
    );
  },
};
