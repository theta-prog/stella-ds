import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageGrid, Stack } from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Layout/PageGrid',
  component: PageGrid,
  parameters: { layout: 'fullscreen', docs: { description: { component: translations.en.pageGrid.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['single', 'sidebar-left', 'sidebar-right', 'three-col'],
      table: { defaultValue: { summary: 'single' } },
    },
    gap: {
      control: 'select',
      options: ['4', '6', '8', '12'],
      table: { defaultValue: { summary: '8' } },
    },
    fullBleed: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof PageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const pageWrapperStyle: React.CSSProperties = {
  backgroundColor: 'var(--stella-color-void-base, #0f1117)',
  minHeight: '100vh',
  padding: '2rem 0',
};

const Panel = ({
  label,
  minHeight = 200,
  accent = false,
}: {
  label: string;
  minHeight?: number;
  accent?: boolean;
}) => (
  <div
    style={{
      minHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '1.25rem',
      backgroundColor: accent
        ? 'var(--stella-color-void-surface, #1d2129)'
        : 'var(--stella-color-void-muted, #2e3440)',
      borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
      color: 'var(--stella-color-starlight-primary, #f0f0f5)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxSizing: 'border-box' as const,
    }}
  >
    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem', opacity: 0.9 }}>{label}</p>
  </div>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { layout: 'single', gap: '8', fullBleed: false },
  render: (args) => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid {...args}>
          <Panel label={tr.pageGrid.label_main} minHeight={300} />
        </PageGrid>
      </div>
    );
  },
};

export const Single: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid layout="single" gap="8">
          <Panel label={tr.pageGrid.label_main} minHeight={300} />
        </PageGrid>
      </div>
    );
  },
};

export const SidebarLeft: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid layout="sidebar-left" gap="8">
          <Panel label={`${tr.pageGrid.label_sidebar} (240px)`} minHeight={400} accent />
          <Panel label={tr.pageGrid.label_main} minHeight={400} />
        </PageGrid>
      </div>
    );
  },
};

export const SidebarRight: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid layout="sidebar-right" gap="8">
          <Panel label={tr.pageGrid.label_main} minHeight={400} />
          <Panel label={`${tr.pageGrid.label_sidebar} (240px)`} minHeight={400} accent />
        </PageGrid>
      </div>
    );
  },
};

export const ThreeCol: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid layout="three-col" gap="8">
          <Panel label={`${tr.pageGrid.label_sidebar} (240px)`} minHeight={400} accent />
          <Panel label={`${tr.pageGrid.label_main} (1fr)`} minHeight={400} />
          <Panel label={`${tr.pageGrid.label_sidebar} (240px)`} minHeight={400} accent />
        </PageGrid>
      </div>
    );
  },
};

export const GapVariants: Story = {
  render: () => {
    const tr = useT();
    return (
      <Stack direction="vertical" gap="12" style={{ backgroundColor: 'var(--stella-color-void-base, #0f1117)', padding: '2rem 0' }}>
        {(['4', '6', '8', '12'] as const).map((gap) => (
          <div key={gap}>
            <p style={{ color: 'var(--stella-color-starlight-primary, #f0f0f5)', fontSize: '0.75rem', margin: '0 1.5rem 0.5rem' }}>
              gap=&quot;{gap}&quot;
            </p>
            <PageGrid layout="sidebar-left" gap={gap}>
              <Panel label={tr.pageGrid.label_sidebar} minHeight={80} accent />
              <Panel label={tr.pageGrid.label_main} minHeight={80} />
            </PageGrid>
          </div>
        ))}
      </Stack>
    );
  },
};

export const FullBleed: Story = {
  render: () => {
    const tr = useT();
    return (
      <div style={pageWrapperStyle}>
        <PageGrid layout="sidebar-left" gap="8" fullBleed>
          <Panel label={tr.pageGrid.label_sidebar} minHeight={300} accent />
          <Panel label={tr.pageGrid.label_main} minHeight={300} />
        </PageGrid>
      </div>
    );
  },
};

export const AppShell: Story = {
  render: () => {
    const tr = useT();
    void tr;
    return (
      <div style={{ backgroundColor: 'var(--stella-color-void-base, #0f1117)', minHeight: '100vh' }}>
        {/* Top nav bar */}
        <div
          style={{
            backgroundColor: 'var(--stella-color-void-surface, #1d2129)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '0 1.5rem',
            height: 56,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: 'var(--stella-color-starlight-primary, #f0f0f5)', fontWeight: 700 }}>Stella App</span>
        </div>

        {/* Page body */}
        <PageGrid layout="sidebar-left" gap="8" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          {/* Navigation sidebar */}
          <Stack direction="vertical" gap="2">
            {['Dashboard', 'Components', 'Tokens', 'Settings'].map((item) => (
              <div
                key={item}
                style={{
                  padding: '0.625rem 0.75rem',
                  borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
                  backgroundColor: item === 'Components'
                    ? 'var(--stella-color-void-muted, #2e3440)'
                    : 'transparent',
                  color: 'var(--stella-color-starlight-primary, #f0f0f5)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {item}
              </div>
            ))}
          </Stack>

          {/* Main content */}
          <Stack direction="vertical" gap="6">
            <Panel label="Page Heading Area" minHeight={80} />
            <Stack direction="horizontal" gap="6">
              <Panel label="Card 1" minHeight={120} />
              <Panel label="Card 2" minHeight={120} />
              <Panel label="Card 3" minHeight={120} />
            </Stack>
            <Panel label="Detail Panel" minHeight={200} />
          </Stack>
        </PageGrid>
      </div>
    );
  },
};
