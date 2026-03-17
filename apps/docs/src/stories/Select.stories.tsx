import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectTrigger,
  SelectContent,
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
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="mango">Mango</SelectItem>
            <SelectSeparator />
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
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
};
