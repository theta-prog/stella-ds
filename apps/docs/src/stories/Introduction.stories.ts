import type { Meta, StoryObj } from '@storybook/react';
import { Introduction } from './Introduction';

const meta = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '🇺🇸 Welcome to Stella UI — use the 🌍 toolbar to switch languages. · 🇯🇵 Stella UI へようこそ — ツールバーの 🌍 アイコンで言語を切り替えてください。',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
