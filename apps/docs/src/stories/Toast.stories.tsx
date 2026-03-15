import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Button,
} from '@stella-ui/react';
import type { ToastVariant } from '@stella-ui/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      table: { defaultValue: { summary: 'info' } },
    },
    duration: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

function ToastDemo({
  variant,
  title,
  description,
  withClose = true,
  withAction = false,
}: {
  variant: ToastVariant;
  title: string;
  description?: string;
  withClose?: boolean;
  withAction?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Show {variant} toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant={variant} duration={5000}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        {withAction && (
          <ToastAction altText="Undo last action">Undo</ToastAction>
        )}
        {withClose && <ToastClose />}
      </Toast>
    </>
  );
}

export const Info: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Info"
      description="Your session will expire in 30 minutes."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Saved"
      description="Your changes have been saved successfully."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Storage almost full"
      description="You are using 90% of your storage quota."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Upload failed"
      description="The file could not be uploaded. Please try again."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Message sent"
      description="Your message has been delivered."
      withAction
    />
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <ToastDemo variant="success" title="Copied to clipboard!" withClose={false} />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const variants: ToastVariant[] = ['info', 'success', 'warning', 'error'];
    const [open, setOpen] = useState<Record<ToastVariant, boolean>>({
      info: false, success: false, warning: false, error: false,
    });

    return (
      <>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Button
              key={v}
              variant="outline"
              size="sm"
              onClick={() => setOpen((prev) => ({ ...prev, [v]: true }))}
            >
              {v}
            </Button>
          ))}
        </div>
        {variants.map((v) => (
          <Toast
            key={v}
            open={open[v]}
            onOpenChange={(o) => setOpen((prev) => ({ ...prev, [v]: o }))}
            variant={v}
            duration={4000}
          >
            <ToastTitle>{v.charAt(0).toUpperCase() + v.slice(1)}</ToastTitle>
            <ToastDescription>This is a {v} notification.</ToastDescription>
            <ToastClose />
          </Toast>
        ))}
      </>
    );
  },
};
