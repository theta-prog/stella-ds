import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from '@stella-ui/react';
import { useT, translations } from '../i18n';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Select',
  component: SelectTrigger,
  parameters: {
    layout: 'centered',
    docs: { description: { component: translations.en.select.componentDescription } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Shared fruit options
// ----------------------------------------------------------------

const FruitOptions = () => (
  <>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
    <SelectItem value="mango">Mango</SelectItem>
    <SelectItem value="peach">Peach</SelectItem>
  </>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ width: 280 }}>
        <Select>
          <SelectTrigger placeholder={tr.select.label_placeholder} />
          <SelectContent>
            <FruitOptions />
          </SelectContent>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic Select with 5 fruit options.',
      },
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    // dropdown should be closed initially
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    // click to open
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    // options are rendered in a Radix portal outside the canvas
    const body = within(document.body);
    await expect(body.getByRole('option', { name: 'Apple' })).toBeVisible();
  },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Select key={size}>
            <SelectTrigger size={size} placeholder={`Size: ${size}`} />
            <SelectContent>
              <FruitOptions />
            </SelectContent>
          </Select>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All three size presets — sm, md, and lg — shown in a column.',
      },
    },
  },
};

export const Error: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ width: 280 }}>
        <Select>
          <SelectTrigger
            placeholder={tr.select.label_placeholder}
            error={tr.select.label_errorMsg}
          />
          <SelectContent>
            <FruitOptions />
          </SelectContent>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with an inline error message rendered below the trigger.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ width: 280 }}>
        <Select disabled>
          <SelectTrigger placeholder="Not available" />
          <SelectContent>
            <FruitOptions />
          </SelectContent>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state — the trigger is non-interactive and visually dimmed.',
      },
    },
  },
};

export const WithGroups: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ width: 280 }}>
        <Select>
          <SelectTrigger placeholder="Select a produce…" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Grouped options using SelectLabel and SelectSeparator.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const tr = useT();
    const [value, setValue] = React.useState('');
    return (
      <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger placeholder={tr.select.label_placeholder} />
          <SelectContent>
            <FruitOptions />
          </SelectContent>
        </Select>
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--stella-color-text-secondary)',
          }}
        >
          Selected value: <strong>{value || '(none)'}</strong>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled usage with useState — the current selection is displayed below.',
      },
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');

    // open the dropdown
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // select "Banana" from the Radix portal
    const body = within(document.body);
    const bananaOption = body.getByRole('option', { name: 'Banana' });
    await userEvent.click(bananaOption);

    // the dropdown should close and the trigger should reflect the selection
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toHaveTextContent('Banana');
  },
};
