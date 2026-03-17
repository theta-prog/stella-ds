import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Section, Stack } from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Layout/Section',
  component: Section,
  parameters: { layout: 'fullscreen', docs: { description: { component: translations.en.section.componentDescription } } },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      table: { defaultValue: { summary: 'lg' } },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const ContentBlock = ({ label }: { label: string }) => (
  <div
    style={{
      padding: '1.5rem',
      backgroundColor: 'var(--stella-color-void-muted, #2e3440)',
      borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
      color: 'var(--stella-color-starlight-primary, #f0f0f5)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    <h3 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 600 }}>{label}</h3>
    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.7, lineHeight: 1.6 }}>
      This is a placeholder content block demonstrating the Section component layout and spacing.
    </p>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ backgroundColor: 'var(--stella-color-void-base, #0f1117)', minHeight: '100vh' }}>
    {children}
  </div>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Default: Story = {
  args: { size: 'lg', padding: 'md' },
  render: (args) => {
    const tr = useT();
    return (
      <PageWrapper>
        <Section {...args}>
          <Stack direction="vertical" gap="4">
            <ContentBlock label={tr.section.label_title} />
            <ContentBlock label={tr.section.label_content} />
          </Stack>
        </Section>
      </PageWrapper>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const tr = useT();
    void tr;
    return (
      <PageWrapper>
        {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
          <Section key={size} size={size} padding="sm" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div
              style={{
                backgroundColor: 'var(--stella-color-void-surface, #1d2129)',
                borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
                padding: '1rem',
                color: 'var(--stella-color-starlight-primary, #f0f0f5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
              }}
            >
              size=&quot;{size}&quot; — max-width: {size === 'sm' ? '640px' : size === 'md' ? '768px' : size === 'lg' ? '1024px' : '100%'}
            </div>
          </Section>
        ))}
      </PageWrapper>
    );
  },
};

export const PaddingVariants: Story = {
  render: () => {
    const tr = useT();
    void tr;
    return (
      <PageWrapper>
        {(['none', 'sm', 'md', 'lg'] as const).map((padding) => (
          <Section key={padding} size="md" padding={padding} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div
              style={{
                backgroundColor: 'var(--stella-color-void-muted, #2e3440)',
                borderRadius: 'var(--stella-borderRadius-lg, 0.5rem)',
                padding: '1rem',
                color: 'var(--stella-color-starlight-primary, #f0f0f5)',
                textAlign: 'center',
                fontSize: '0.875rem',
              }}
            >
              padding=&quot;{padding}&quot; — py: {padding === 'none' ? '0' : padding === 'sm' ? '2rem' : padding === 'md' ? '4rem' : '6rem'}
            </div>
          </Section>
        ))}
      </PageWrapper>
    );
  },
};

export const LandingPage: Story = {
  render: () => {
    const tr = useT();
    void tr;
    return (
      <PageWrapper>
        {/* Hero */}
        <Section size="lg" padding="lg">
          <Stack direction="vertical" gap="6" align="center" style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700, color: 'var(--stella-color-starlight-primary, #f0f0f5)' }}>
              Welcome to Stella UI
            </h1>
            <p style={{ margin: 0, fontSize: '1.125rem', opacity: 0.7, color: 'var(--stella-color-starlight-primary, #f0f0f5)', maxWidth: 480 }}>
              A design system built for the cosmos. Fast, accessible, and beautiful.
            </p>
          </Stack>
        </Section>

        {/* Features */}
        <Section size="lg" padding="md" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Stack direction="horizontal" gap="6" wrap>
            <ContentBlock label="Composable" />
            <ContentBlock label="Accessible" />
            <ContentBlock label="Themeable" />
          </Stack>
        </Section>

        {/* CTA */}
        <Section size="sm" padding="lg" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Stack direction="vertical" gap="4" align="center" style={{ textAlign: 'center' }}>
            <ContentBlock label="Get Started" />
          </Stack>
        </Section>
      </PageWrapper>
    );
  },
};

export const AsChildArticle: Story = {
  render: () => {
    const tr = useT();
    void tr;
    return (
      <PageWrapper>
        <Section asChild size="md" padding="md">
          <article>
            <Stack direction="vertical" gap="4">
              <ContentBlock label="Article Title" />
              <ContentBlock label="Article Body" />
            </Stack>
          </article>
        </Section>
      </PageWrapper>
    );
  },
};
