import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@stella-ui/react';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'solid'],
      table: { defaultValue: { summary: 'line' } },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Shared tab content
// ----------------------------------------------------------------

const TAB_ITEMS = [
  {
    value: 'overview',
    label: 'Overview',
    content: (
      <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
        The Overview section provides a high-level summary of your project's health,
        recent activity, and key metrics. Use this view to quickly assess performance
        and spot any anomalies at a glance.
      </p>
    ),
  },
  {
    value: 'analytics',
    label: 'Analytics',
    content: (
      <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
        Analytics shows detailed usage data, conversion funnels, and trend charts
        over your selected date range. Drill down into individual events to
        understand how users interact with your product.
      </p>
    ),
  },
  {
    value: 'settings',
    label: 'Settings',
    content: (
      <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
        Configure integrations, notification preferences, team access controls,
        and billing information here. Changes take effect immediately and are
        logged in your audit trail.
      </p>
    ),
  },
];

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="overview" variant="line" style={{ width: '480px' }}>
      <TabsList>
        {TAB_ITEMS.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TAB_ITEMS.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default underline/line variant. The active tab is indicated by a colored bottom border.',
      },
    },
  },
};

export const Solid: Story = {
  render: () => (
    <Tabs defaultValue="overview" variant="solid" style={{ width: '480px' }}>
      <TabsList>
        {TAB_ITEMS.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TAB_ITEMS.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pill/box solid variant. The active tab is lifted with a background and shadow.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="overview" variant="line" style={{ width: '480px' }}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
          The Overview section provides a high-level summary of your project's health,
          recent activity, and key metrics.
        </p>
      </TabsContent>
      <TabsContent value="analytics">
        <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
          Analytics shows detailed usage data, conversion funnels, and trend charts.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
          Settings are currently unavailable.
        </p>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The Settings tab has the `disabled` prop — it is visually dimmed and not keyboard-reachable.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('overview');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '480px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          Active tab:{' '}
          <strong style={{ color: 'var(--stella-color-text-primary)' }}>{activeTab}</strong>
        </p>
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="solid">
          <TabsList>
            {TAB_ITEMS.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TAB_ITEMS.map(({ value, content }) => (
            <TabsContent key={value} value={value}>
              {content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled mode — `value` and `onValueChange` are managed with `useState`. The active tab value is displayed above.',
      },
    },
  },
};

export const LongList: Story = {
  render: () => {
    const longTabs = [
      { value: 'overview', label: 'Overview' },
      { value: 'analytics', label: 'Analytics' },
      { value: 'settings', label: 'Settings' },
      { value: 'members', label: 'Members' },
      { value: 'billing', label: 'Billing' },
      { value: 'integrations', label: 'Integrations' },
    ];

    const contentMap: Record<string, string> = {
      overview: 'High-level summary of your project health and recent activity.',
      analytics: 'Detailed usage data, conversion funnels, and trend charts.',
      settings: 'Configure integrations, notifications, and access controls.',
      members: 'Manage team members, roles, and invitations.',
      billing: 'View invoices, update payment methods, and manage your plan.',
      integrations: 'Connect third-party tools like Slack, GitHub, and more.',
    };

    return (
      <Tabs defaultValue="overview" variant="line" style={{ width: '400px' }}>
        <div style={{ overflowX: 'auto' }}>
          <TabsList>
            {longTabs.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {longTabs.map(({ value }) => (
          <TabsContent key={value} value={value}>
            <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
              {contentMap[value]}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '6 tabs in a container narrower than the list — the wrapper has `overflow-x: auto` to allow horizontal scrolling.',
      },
    },
  },
};
