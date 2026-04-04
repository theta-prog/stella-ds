import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@stella-ds/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: { layout: 'padded', docs: { description: { component: translations.en.text.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      table: { defaultValue: { summary: 'normal' } },
    },
    family: {
      control: 'select',
      options: ['sans', 'serif', 'serif-print', 'display', 'statement', 'mono'],
      table: { defaultValue: { summary: 'sans' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled'],
      table: { defaultValue: { summary: 'primary' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      table: { defaultValue: { summary: 'left' } },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      table: { defaultValue: { summary: 'p' } },
    },
    truncate: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => {
    const tr = useT();
    return <Text {...args}>{tr.text.label_default}</Text>;
  },
  args: { size: 'md' },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-3)' }}>
        {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
          <Text key={size} size={size}>
            {tr.text.label_size} {size}
          </Text>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-3)' }}>
        <Text color="primary">{tr.text.label_default}</Text>
        <Text color="secondary">{tr.text.label_default}</Text>
        <Text color="disabled">{tr.text.label_default}</Text>
      </div>
    );
  },
};

export const Truncated: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ maxWidth: '200px' }}>
        <Text truncate>
          {tr.text.label_truncated}
        </Text>
      </div>
    );
  },
};

export const FontFamilies: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-3)' }}>
        {(['sans', 'serif', 'serif-print', 'display', 'statement', 'mono'] as const).map((family) => (
          <Text key={family} size="lg" family={family}>
            {tr.text.label_sample} — {family}
          </Text>
        ))}
      </div>
    );
  },
};
