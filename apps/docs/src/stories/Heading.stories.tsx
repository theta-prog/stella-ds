import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@stella-ui/react';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: { layout: 'padded' },
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
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { level: 2, children: 'Heading' },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)' }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stella-spacing-4)' }}>
      {(['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
        <Heading key={size} level={2} size={size}>
          Size: {size}
        </Heading>
      ))}
    </div>
  ),
};

export const WithCustomWeight: Story = {
  args: { level: 2, weight: 'bold', children: 'Bold Heading' },
};
