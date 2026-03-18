import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from 'storybook/test';
import { Button } from '@stella-ui/react';
import { useT, translations } from '../i18n';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: { description: { component: translations.en.button.componentDescription } },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'glow'],
      table: { defaultValue: { summary: 'solid' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    asChild:  { control: false },
    onClick:  { action: 'clicked' },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.label_default}</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Default solid/md · 🇯🇵 デフォルト solid/md',
      },
    },
  },
  args: { variant: 'solid', size: 'md' },
};

export const Solid: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_solid}</Button>;
  },
  args: { variant: 'solid' },
};

export const Outline: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_outline}</Button>;
  },
  args: { variant: 'outline' },
};

export const Ghost: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_ghost}</Button>;
  },
  args: { variant: 'ghost' },
};

export const Glow: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>✦ {tr.button.story_glow}</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Energy-charged luminous variant. Great for hero CTAs. · 🇯🇵 エネルギーを纏った発光バリアント。ヒーロー CTA に最適。',
      },
    },
  },
  args: { variant: 'glow' },
};

export const Small: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_small}</Button>;
  },
  args: { size: 'sm' },
};

export const Large: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_large}</Button>;
  },
  args: { size: 'lg' },
};

export const Loading: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_loading}</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: '🇺🇸 Shows a spinner and disables interaction while pending. · 🇯🇵 非同期処理中にスピナーを表示し、操作を無効化します。',
      },
    },
  },
  args: { loading: true },
  play: async ({ canvas }) => {
    const el = canvas.getByRole('button');
    await expect(el).toHaveAttribute('aria-busy', 'true');
  },
};

export const Disabled: Story = {
  render: (args) => {
    const tr = useT();
    return <Button {...args}>{tr.button.story_disabled}</Button>;
  },
  args: { disabled: true, onClick: fn() },
  play: async ({ canvas, userEvent, args }) => {
    const el = canvas.getByRole('button');
    // aria-disabled または disabled であることを確認
    const isDisabled =
      el.hasAttribute('disabled') ||
      el.getAttribute('aria-disabled') === 'true';
    await expect(isDisabled).toBe(true);
    // クリックしても onClick が呼ばれないことを確認
    await userEvent.click(el);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

/** All variants × all sizes */
export const AllVariants: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
        {(['solid', 'outline', 'ghost', 'glow'] as const).map((variant) => (
          <div key={variant} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <Button key={size} variant={variant} size={size}>
                {variant} / {size}
              </Button>
            ))}
          </div>
        ))}
        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          {tr.button.desc_allVariants}
        </p>
      </div>
    );
  },
};

/** asChild — renders as &lt;a&gt; */
export const AsLink: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
        <Button asChild variant="outline">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            {tr.button.label_link}
          </a>
        </Button>
        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          {tr.button.desc_asLink}
        </p>
      </div>
    );
  },
};

