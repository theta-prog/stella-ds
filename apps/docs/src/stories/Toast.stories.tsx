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
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.toast.componentDescription } } },
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
  actionLabel,
  buttonLabel,
}: {
  variant: ToastVariant;
  title: string;
  description?: string;
  withClose?: boolean;
  withAction?: boolean;
  actionLabel?: string;
  buttonLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        {buttonLabel}
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant={variant} duration={5000}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        {withAction && (
          <ToastAction altText="Undo last action">{actionLabel}</ToastAction>
        )}
        {withClose && <ToastClose />}
      </Toast>
    </>
  );
}

export const Info: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="info"
        title={tr.toast.title_info}
        description={tr.toast.desc_info}
        buttonLabel={tr.toast.label_show.replace('{variant}', 'info')}
      />
    );
  },
};

export const Success: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="success"
        title={tr.toast.title_success}
        description={tr.toast.desc_success}
        buttonLabel={tr.toast.label_show.replace('{variant}', 'success')}
      />
    );
  },
};

export const Warning: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="warning"
        title={tr.toast.title_warning}
        description={tr.toast.desc_warning}
        buttonLabel={tr.toast.label_show.replace('{variant}', 'warning')}
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="error"
        title={tr.toast.title_error}
        description={tr.toast.desc_error}
        buttonLabel={tr.toast.label_show.replace('{variant}', 'error')}
      />
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="info"
        title={tr.toast.title_action}
        description={tr.toast.desc_action}
        withAction
        buttonLabel={tr.toast.label_show.replace('{variant}', 'info')}
        actionLabel={tr.toast.label_undo}
      />
    );
  },
};

export const TitleOnly: Story = {
  render: () => {
    const tr = useT();
    return (
      <ToastDemo
        variant="success"
        title={tr.toast.title_titleOnly}
        withClose={false}
        buttonLabel={tr.toast.label_show.replace('{variant}', 'success')}
      />
    );
  },
};

function AllVariantsDemo({
  titles,
  descriptions,
}: {
  titles: Record<ToastVariant, string>;
  descriptions: Record<ToastVariant, string>;
}) {
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
          <ToastTitle>{titles[v]}</ToastTitle>
          <ToastDescription>{descriptions[v]}</ToastDescription>
          <ToastClose />
        </Toast>
      ))}
    </>
  );
}

export const AllVariants: Story = {
  render: () => {
    const tr = useT();
    return (
      <AllVariantsDemo
        titles={{
          info: tr.toast.title_info,
          success: tr.toast.title_success,
          warning: tr.toast.title_warning,
          error: tr.toast.title_error,
        }}
        descriptions={{
          info: tr.toast.desc_info,
          success: tr.toast.desc_success,
          warning: tr.toast.desc_warning,
          error: tr.toast.desc_error,
        }}
      />
    );
  },
};
