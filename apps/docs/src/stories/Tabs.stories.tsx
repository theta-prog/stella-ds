import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, waitFor } from 'storybook/test';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@stella-ds/react';
import { useT, translations } from '../i18n';

// ----------------------------------------------------------------
// Meta
// ----------------------------------------------------------------

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: { description: { component: translations.en.tabs.componentDescription } },
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
// Stories
// ----------------------------------------------------------------

export const Line: Story = {
  render: () => {
    const tr = useT();
    const tabItems = [
      { value: 'overview', label: tr.tabs.tab_overview, content: tr.tabs.content_overview },
      { value: 'analytics', label: tr.tabs.tab_analytics, content: tr.tabs.content_analytics },
      { value: 'settings', label: tr.tabs.tab_settings, content: tr.tabs.content_settings },
    ];
    return (
      <Tabs defaultValue="overview" variant="line" style={{ width: '480px' }}>
        <TabsList>
          {tabItems.map(({ value, label }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabItems.map(({ value, content }) => (
          <TabsContent key={value} value={value}>
            <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
              {content}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    );
  },
  play: async ({ canvas, userEvent }) => {
    // 1. 最初のタブ（overview）が選択されていることを確認
    const tabs = canvas.getAllByRole('tab');
    const firstTab = tabs[0];
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');

    // 2. 2番目のタブをクリックして aria-selected="true" になることを確認
    const secondTab = tabs[1];
    await userEvent.click(secondTab);
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');

    // 3. 対応する TabsContent が表示されることを確認
    const tabPanels = canvas.getAllByRole('tabpanel');
    await waitFor(() => expect(tabPanels[0]).toBeVisible(), { timeout: 1000 });
  },
  parameters: {
    docs: {
      description: {
        story: 'Default underline/line variant. The active tab is indicated by a colored bottom border.',
      },
    },
  },
};

export const Solid: Story = {
  render: () => {
    const tr = useT();
    const tabItems = [
      { value: 'overview', label: tr.tabs.tab_overview, content: tr.tabs.content_overview },
      { value: 'analytics', label: tr.tabs.tab_analytics, content: tr.tabs.content_analytics },
      { value: 'settings', label: tr.tabs.tab_settings, content: tr.tabs.content_settings },
    ];
    return (
      <Tabs defaultValue="overview" variant="solid" style={{ width: '480px' }}>
        <TabsList>
          {tabItems.map(({ value, label }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabItems.map(({ value, content }) => (
          <TabsContent key={value} value={value}>
            <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
              {content}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pill/box solid variant. The active tab is lifted with a background and shadow.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    const tr = useT();
    return (
      <Tabs defaultValue="overview" variant="line" style={{ width: '480px' }}>
        <TabsList>
          <TabsTrigger value="overview">{tr.tabs.tab_overview}</TabsTrigger>
          <TabsTrigger value="analytics">{tr.tabs.tab_analytics}</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            {tr.tabs.tab_settings}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
            {tr.tabs.content_overview}
          </p>
        </TabsContent>
        <TabsContent value="analytics">
          <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
            {tr.tabs.content_analytics}
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
            {tr.tabs.content_settings}
          </p>
        </TabsContent>
      </Tabs>
    );
  },
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
    const tr = useT();
    const tabItems = [
      { value: 'overview', label: tr.tabs.tab_overview, content: tr.tabs.content_overview },
      { value: 'analytics', label: tr.tabs.tab_analytics, content: tr.tabs.content_analytics },
      { value: 'settings', label: tr.tabs.tab_settings, content: tr.tabs.content_settings },
    ];
    const [activeTab, setActiveTab] = React.useState('overview');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '480px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          Active tab:{' '}
          <strong style={{ color: 'var(--stella-color-text-primary)' }}>{activeTab}</strong>
        </p>
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="solid">
          <TabsList>
            {tabItems.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabItems.map(({ value, content }) => (
            <TabsContent key={value} value={value}>
              <p style={{ margin: 0, color: 'var(--stella-color-text-secondary)', lineHeight: 1.6 }}>
                {content}
              </p>
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
    const tr = useT();
    const longTabs = [
      { value: 'overview', label: tr.tabs.tab_overview },
      { value: 'analytics', label: tr.tabs.tab_analytics },
      { value: 'settings', label: tr.tabs.tab_settings },
      { value: 'members', label: tr.tabs.tab_members },
      { value: 'billing', label: tr.tabs.tab_billing },
      { value: 'integrations', label: tr.tabs.tab_integrations },
    ];

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
              {value} content
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
