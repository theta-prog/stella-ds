import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@stella-ui/react';
import { Button } from '@stella-ui/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    hoverable: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Basic: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          This is a basic card with a header and content area. Cards are used to
          group related information together.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Project Update</CardTitle>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          The deployment pipeline has been updated with new optimizations. Build
          times are now 40% faster across all environments.
        </p>
      </CardContent>
      <CardFooter style={{ gap: '0.5rem' }}>
        <Button size="sm" variant="solid">View Details</Button>
        <Button size="sm" variant="ghost">Dismiss</Button>
      </CardFooter>
    </Card>
  ),
};

export const Hoverable: Story = {
  render: (args) => (
    <Card {...args} hoverable>
      <CardHeader>
        <CardTitle>Hover Over Me</CardTitle>
        <CardDescription>This card lifts on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          The hoverable prop enables a smooth lift animation using box-shadow and
          translateY transitions.
        </p>
      </CardContent>
    </Card>
  ),
  args: { hoverable: true },
};

export const AsArticle: Story = {
  render: (args) => (
    <article style={{ margin: 0, padding: 0 }}>
      <Card {...args}>
        <CardHeader>
          <CardTitle>Semantic Article Card</CardTitle>
          <CardDescription>Wrapped in an &lt;article&gt; element</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            Wrap Card in a semantic element (such as &lt;article&gt;) when the
            content represents a self-contained piece of information. The Card
            itself remains a styled &lt;div&gt;.
          </p>
        </CardContent>
      </Card>
    </article>
  ),
};

export const AllSections: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Full Card Layout</CardTitle>
        <CardDescription>Header, content, and footer all present</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          This story shows all sub-components together: CardHeader, CardTitle,
          CardDescription, CardContent, and CardFooter working in harmony.
        </p>
      </CardContent>
      <CardFooter style={{ justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Step 1 of 3
        </span>
        <Button size="sm" variant="solid">Continue</Button>
      </CardFooter>
    </Card>
  ),
};
