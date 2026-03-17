import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@stella-ui/react';
import { Button } from '@stella-ui/react';
import { useT } from '../i18n';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Tooltip',
  component: TooltipContent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof TooltipContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const tr = useT();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="solid">{tr.tooltip.label_hoverMe}</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          {tr.tooltip.label_tooltip}
        </TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip displayed above a button on hover.',
      },
    },
  },
};

export const Sides: Story = {
  render: () => {
    const tr = useT();
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gridTemplateRows: 'repeat(3, auto)',
          gap: '1rem',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {/* Top row center */}
        <div />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{tr.tooltip.label_top}</Button>
          </TooltipTrigger>
          <TooltipContent side="top">{tr.tooltip.desc_top}</TooltipContent>
        </Tooltip>
        <div />

        {/* Middle row: left — (spacer) — right */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{tr.tooltip.label_left}</Button>
          </TooltipTrigger>
          <TooltipContent side="left">{tr.tooltip.desc_left}</TooltipContent>
        </Tooltip>
        <div style={{ width: '4rem', height: '2rem' }} />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{tr.tooltip.label_right}</Button>
          </TooltipTrigger>
          <TooltipContent side="right">{tr.tooltip.desc_right}</TooltipContent>
        </Tooltip>

        {/* Bottom row center */}
        <div />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{tr.tooltip.label_bottom}</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">{tr.tooltip.desc_bottom}</TooltipContent>
        </Tooltip>
        <div />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All four placement options: top, right, bottom, left.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => {
    const tr = useT();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">{tr.tooltip.label_moreInfo}</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          {tr.tooltip.desc_long}
        </TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with multi-line content — wraps at max-width 280px.',
      },
    },
  },
};

export const OnIcon: Story = {
  render: () => {
    const tr = useT();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" aria-label={tr.tooltip.label_settings}>
            {/* Gear icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{tr.tooltip.label_settings}</TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip on an icon-only button — provides a visible label for accessibility. The button carries aria-label; the tooltip reinforces it visually.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const tr = useT();
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline">
              {open ? tr.tooltip.label_tooltipOpen : tr.tooltip.label_clickToggle}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Controlled tooltip — driven by React state
          </TooltipContent>
        </Tooltip>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen((prev) => !prev)}
        >
          {tr.tooltip.label_toggleOutside}
        </Button>

        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Tooltip is currently {open ? 'open' : 'closed'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled tooltip using open + onOpenChange props from Radix Root. External React state drives visibility.',
      },
    },
  },
};
