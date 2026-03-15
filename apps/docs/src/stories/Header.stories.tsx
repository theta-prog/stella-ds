import type { Meta, StoryObj } from '@storybook/react';
import {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderActions,
  Button,
  Badge,
} from '@stella-ui/react';

const meta = {
  title: 'Navigation/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    sticky: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    blur: {
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const NavLink = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => (
  <a
    href={href}
    style={{
      color: active
        ? 'var(--stella-color-cosmos-400, #818cf8)'
        : 'var(--stella-color-starlight-secondary, #8888a0)',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: active ? 500 : 400,
      padding: '0.375rem 0.75rem',
      borderRadius: 'var(--stella-borderRadius-md, 0.375rem)',
      transition: 'color 200ms ease-out, background-color 200ms ease-out',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.color =
        'var(--stella-color-cosmos-400, #818cf8)';
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
        'var(--stella-color-void-overlay, #252b36)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.color = active
        ? 'var(--stella-color-cosmos-400, #818cf8)'
        : 'var(--stella-color-starlight-secondary, #8888a0)';
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
        'transparent';
    }}
  >
    {children}
  </a>
);

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Basic: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="var(--stella-color-cosmos-400, #818cf8)"
          />
        </svg>
        Stella UI
      </HeaderBrand>
      <HeaderNav>
        <NavLink href="/docs" active>
          Docs
        </NavLink>
        <NavLink href="/components">Components</NavLink>
        <NavLink href="/themes">Themes</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button variant="solid" size="sm">
          Get Started
        </Button>
      </HeaderActions>
    </Header>
  ),
};

export const Sticky: Story = {
  args: { sticky: true, blur: true },
  render: (args) => (
    <div>
      <Header {...args}>
        <HeaderBrand>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill="var(--stella-color-cosmos-400, #818cf8)"
            />
          </svg>
          Stella UI
        </HeaderBrand>
        <HeaderNav>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/components" active>
            Components
          </NavLink>
          <NavLink href="/themes">Themes</NavLink>
        </HeaderNav>
        <HeaderActions>
          <Button variant="outline" size="sm">
            GitHub
          </Button>
          <Button variant="solid" size="sm">
            Get Started
          </Button>
        </HeaderActions>
      </Header>
      <div
        style={{
          height: '200vh',
          padding: '2rem',
          color: 'var(--stella-color-starlight-secondary)',
          fontSize: '0.875rem',
        }}
      >
        Scroll down to see the sticky header in action. The backdrop blur keeps
        the header legible over any content below.
      </div>
    </div>
  ),
};

export const WithBadge: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="var(--stella-color-cosmos-400, #818cf8)"
          />
        </svg>
        Stella UI
        <Badge variant="subtle" color="cosmos" size="sm">
          v2.0
        </Badge>
      </HeaderBrand>
      <HeaderNav>
        <NavLink href="/docs">Docs</NavLink>
        <NavLink href="/components" active>
          Components
        </NavLink>
        <NavLink href="/changelog">Changelog</NavLink>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost" size="sm">
          ☆ Star on GitHub
        </Button>
        <Button variant="solid" size="sm">
          Get Started
        </Button>
      </HeaderActions>
    </Header>
  ),
};

export const BrandOnly: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="var(--stella-color-cosmos-400, #818cf8)"
          />
        </svg>
        Stella UI
      </HeaderBrand>
    </Header>
  ),
};
