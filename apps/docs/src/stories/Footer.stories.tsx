import type { Meta, StoryObj } from '@storybook/react';
import {
  Footer,
  FooterContent,
  FooterDivider,
  FooterBottom,
  Badge,
} from '@stella-ui/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen', docs: { description: { component: translations.en.footer.componentDescription } } },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <p
      style={{
        margin: '0 0 0.75rem',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--stella-color-starlight-primary, #f0f0f5)',
      }}
    >
      {title}
    </p>
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            style={{
              color: 'var(--stella-color-starlight-secondary, #8888a0)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--stella-color-cosmos-400, #818cf8)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--stella-color-starlight-secondary, #8888a0)';
            }}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Basic: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Footer {...args}>
        <FooterContent>
          <FooterLinkGroup
            title="Product"
            links={[
              { label: 'Components', href: '/components' },
              { label: 'Design Tokens', href: '/tokens' },
              { label: 'Themes', href: '/themes' },
              { label: 'Changelog', href: '/changelog' },
            ]}
          />
          <FooterLinkGroup
            title="Docs"
            links={[
              { label: 'Getting Started', href: '/docs/getting-started' },
              { label: 'Installation', href: '/docs/installation' },
              { label: 'Customization', href: '/docs/customization' },
              { label: 'Accessibility', href: '/docs/accessibility' },
            ]}
          />
          <FooterLinkGroup
            title="Community"
            links={[
              { label: 'GitHub', href: 'https://github.com/stella-ui' },
              { label: 'Discord', href: 'https://discord.gg/stella-ui' },
              { label: 'Twitter', href: 'https://twitter.com/stellaui' },
            ]}
          />
          <FooterLinkGroup
            title="Legal"
            links={[
              { label: tr.footer.nav_privacy, href: '/privacy' },
              { label: tr.footer.nav_terms, href: '/terms' },
              { label: 'License (MIT)', href: '/license' },
            ]}
          />
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <span>{tr.footer.label_copyright}</span>
          <span>Built with ✦ by the Stella team</span>
        </FooterBottom>
      </Footer>
    );
  },
};

export const Minimal: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Footer {...args}>
        <FooterBottom>
          <span>{tr.footer.label_copyright}</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="/privacy"
              style={{
                color: 'var(--stella-color-starlight-secondary, #8888a0)',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
            >
              {tr.footer.nav_privacy}
            </a>
            <a
              href="/terms"
              style={{
                color: 'var(--stella-color-starlight-secondary, #8888a0)',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
            >
              {tr.footer.nav_terms}
            </a>
          </div>
        </FooterBottom>
      </Footer>
    );
  },
};

export const WithBrand: Story = {
  render: (args) => {
    return (
      <Footer {...args}>
        <FooterContent>
          <div style={{ gridColumn: '1 / -1' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill="var(--stella-color-cosmos-400, #818cf8)"
                />
              </svg>
              <span
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--stella-color-starlight-primary, #f0f0f5)',
                }}
              >
                Stella UI
              </span>
              <Badge variant="subtle" color="primary" size="sm">
                v2.0
              </Badge>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '0.875rem',
                color: 'var(--stella-color-starlight-secondary, #8888a0)',
                maxWidth: '360px',
                lineHeight: 1.6,
              }}
            >
              A dark-mode-first design system built for modern React applications.
              Accessible, composable, and themeable by design.
            </p>
          </div>

          <FooterLinkGroup
            title="Product"
            links={[
              { label: 'Components', href: '/components' },
              { label: 'Design Tokens', href: '/tokens' },
              { label: 'Changelog', href: '/changelog' },
            ]}
          />
          <FooterLinkGroup
            title="Docs"
            links={[
              { label: 'Getting Started', href: '/docs/getting-started' },
              { label: 'Installation', href: '/docs/installation' },
              { label: 'Customization', href: '/docs/customization' },
            ]}
          />
          <FooterLinkGroup
            title="Community"
            links={[
              { label: 'GitHub', href: 'https://github.com/stella-ui' },
              { label: 'Discord', href: 'https://discord.gg/stella-ui' },
            ]}
          />
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <span>© 2026 Stella UI — MIT License</span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Made with
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill="var(--stella-color-cosmos-400, #818cf8)"
              />
            </svg>
            by the Stella team
          </span>
        </FooterBottom>
      </Footer>
    );
  },
};

export const TwoColumn: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Footer {...args}>
        <FooterContent style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <FooterLinkGroup
            title="Resources"
            links={[
              { label: 'Documentation', href: '/docs' },
              { label: 'Components', href: '/components' },
              { label: 'Design Tokens', href: '/tokens' },
            ]}
          />
          <FooterLinkGroup
            title="Support"
            links={[
              { label: 'GitHub Issues', href: '/issues' },
              { label: 'Discord Community', href: '/discord' },
              { label: tr.footer.nav_contact, href: '/contact' },
            ]}
          />
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <span>© 2026 Stella UI</span>
        </FooterBottom>
      </Footer>
    );
  },
};
