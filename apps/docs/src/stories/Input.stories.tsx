import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent as userEventLib } from 'storybook/test';
import { Input } from '@stella-ui/react';
import { useT, translations } from '../i18n';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: { description: { component: translations.en.input.componentDescription } },
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
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'Hello Stella');
    await expect(input).toHaveValue('Hello Stella');
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    // error message element is rendered as role="alert"
    const errorMsg = canvas.getByRole('alert');
    await expect(errorMsg).toBeInTheDocument();
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
