import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@stella-ds/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: { layout: 'padded', docs: { description: { component: translations.en.heading.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      table: { defaultValue: { summary: '2' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      table: { defaultValue: { summary: 'auto (mapped from level)' } },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      table: { defaultValue: { summary: 'bold' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      table: { defaultValue: { summary: 'left' } },
    },
    family: {
      control: 'select',
      options: ['sans', 'serif', 'serif-print', 'display', 'statement', 'mono'],
      table: { defaultValue: { summary: 'sans' } },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => {
    const tr = useT();
    return <Heading {...args}>{tr.heading.label_heading}</Heading>;
  },
  args: { level: 2 },
};

export const AllLevels: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)' }}>
        <Heading level={1}>{tr.heading.label_h1}</Heading>
        <Heading level={2}>{tr.heading.label_h2}</Heading>
        <Heading level={3}>{tr.heading.label_h3}</Heading>
        <Heading level={4}>{tr.heading.label_h4}</Heading>
        <Heading level={5}>{tr.heading.label_h5}</Heading>
        <Heading level={6}>{tr.heading.label_h6}</Heading>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)' }}>
        {(['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
          <Heading key={size} level={2} size={size}>
            {tr.heading.label_size} {size}
          </Heading>
        ))}
      </div>
    );
  },
};

export const WithCustomWeight: Story = {
  render: (args) => {
    const tr = useT();
    return <Heading {...args}>{tr.heading.label_heading}</Heading>;
  },
  args: { level: 2, weight: 'bold' },
};

export const FontFamilies: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)' }}>
        {(['serif', 'sans', 'serif-print', 'display', 'statement', 'mono'] as const).map((family) => (
          <Heading key={family} level={2} size="xl" family={family}>
            {tr.heading.label_heading} — {family}
          </Heading>
        ))}
      </div>
    );
  },
};
