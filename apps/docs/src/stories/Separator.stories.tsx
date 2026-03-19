import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@stella-ds/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: { layout: 'padded', docs: { description: { component: translations.en.separator.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: { defaultValue: { summary: 'horizontal' } },
    },
    decorative: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { orientation: 'horizontal' },
};

export const Vertical: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '40px' }}>
        <span style={{ color: 'var(--stella-color-starlight-primary)' }}>{tr.separator.label_left}</span>
        <Separator orientation="vertical" />
        <span style={{ color: 'var(--stella-color-starlight-primary)' }}>{tr.separator.label_right}</span>
      </div>
    );
  },
};

export const InContent: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)', maxWidth: '480px' }}>
        <p style={{ margin: 0, color: 'var(--stella-color-starlight-secondary)' }}>
          {tr.separator.label_content_1}
        </p>
        <Separator />
        <p style={{ margin: 0, color: 'var(--stella-color-starlight-secondary)' }}>
          {tr.separator.label_content_2}
        </p>
      </div>
    );
  },
};
