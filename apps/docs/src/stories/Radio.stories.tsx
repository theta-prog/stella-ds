import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup, RadioItem } from '@stella-ui/react';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    error: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: { defaultValue: { summary: 'vertical' } },
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

/** Vertical RadioGroup with three options — the default layout. */
export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <RadioItem value="option-1" label="Option One" />
      <RadioItem value="option-2" label="Option Two" />
      <RadioItem value="option-3" label="Option Three" />
    </RadioGroup>
  ),
  args: { size: 'md', orientation: 'vertical' },
};

/** Items laid out in a horizontal row. */
export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup defaultValue="yes" orientation="horizontal" {...args}>
      <RadioItem value="yes"   label="Yes" />
      <RadioItem value="no"    label="No" />
      <RadioItem value="maybe" label="Maybe" />
    </RadioGroup>
  ),
  args: { size: 'md' },
  parameters: {
    docs: {
      description: {
        story: 'Pass `orientation="horizontal"` to lay items out in a row.',
      },
    },
  },
};

/** sm / md / lg size presets side by side. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <RadioGroup key={size} defaultValue="a" size={size}>
          <RadioItem value="a" label={`${size} — Alpha`} />
          <RadioItem value="b" label={`${size} — Beta`} />
        </RadioGroup>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three size presets: `sm` (1 rem), `md` (1.25 rem), `lg` (1.5 rem).',
      },
    },
  },
};

/** Error state — red borders signal validation failure. */
export const Error: Story = {
  render: (args) => (
    <RadioGroup error {...args}>
      <RadioItem value="credit" label="Credit card" />
      <RadioItem value="paypal" label="PayPal" />
      <RadioItem value="crypto" label="Crypto" />
    </RadioGroup>
  ),
  args: { error: true },
  parameters: {
    docs: {
      description: {
        story: 'Set `error` on the `RadioGroup` to apply red borders to all items.',
      },
    },
  },
};

/** Individual and whole-group disabled states. */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Individual item disabled
        </p>
        <RadioGroup defaultValue="active">
          <RadioItem value="active"   label="Active item" />
          <RadioItem value="disabled" label="Disabled item" disabled />
          <RadioItem value="another"  label="Another active item" />
        </RadioGroup>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Entire group disabled
        </p>
        <RadioGroup defaultValue="b" disabled>
          <RadioItem value="a" label="Option A" />
          <RadioItem value="b" label="Option B (pre-selected)" />
          <RadioItem value="c" label="Option C" />
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disable individual `RadioItem`s or the whole `RadioGroup` via the `disabled` prop.',
      },
    },
  },
};

/** Controlled — value managed externally via useState. */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('vanilla');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioItem value="vanilla"   label="Vanilla" />
          <RadioItem value="chocolate" label="Chocolate" />
          <RadioItem value="strawberry" label="Strawberry" />
        </RadioGroup>
        <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          selected: {value}
        </span>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled usage: bind `value` + `onValueChange` to a React state variable.',
      },
    },
  },
};
