import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@stella-ui/react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
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
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>Your session will expire in 30 minutes.</AlertDescription>
    </Alert>
  ),
  args: { variant: 'info' },
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Changes saved</AlertTitle>
      <AlertDescription>Your profile has been updated successfully.</AlertDescription>
    </Alert>
  ),
  args: { variant: 'success' },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Approaching limit</AlertTitle>
      <AlertDescription>You are using 90% of your storage quota.</AlertDescription>
    </Alert>
  ),
  args: { variant: 'warning' },
};

export const Error: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Upload failed</AlertTitle>
      <AlertDescription>The file could not be uploaded. Please try again.</AlertDescription>
    </Alert>
  ),
  args: { variant: 'error' },
};

export const Dismissible: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return open ? (
      <Alert {...args} onClose={() => setOpen(false)}>
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>A new version of the app is ready to install.</AlertDescription>
      </Alert>
    ) : (
      <p style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
        Alert dismissed. Refresh to see it again.
      </p>
    );
  },
  args: { variant: 'info' },
};

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Read-only mode is active.</AlertTitle>
    </Alert>
  ),
  args: { variant: 'warning' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      {(['info', 'success', 'warning', 'error'] as const).map((variant) => (
        <Alert key={variant} variant={variant}>
          <AlertTitle>{variant.charAt(0).toUpperCase() + variant.slice(1)}</AlertTitle>
          <AlertDescription>This is a {variant} alert message.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
};
