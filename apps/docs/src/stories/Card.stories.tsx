import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@stella-ds/react';
import { Button } from '@stella-ds/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.card.componentDescription } } },
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
  render: (args) => {
    const tr = useT();
    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>{tr.card.label_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.card.label_body}
          </p>
        </CardContent>
      </Card>
    );
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>{tr.card.label_title}</CardTitle>
          <CardDescription>{tr.card.label_description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.card.label_body}
          </p>
        </CardContent>
        <CardFooter style={{ gap: '0.5rem' }}>
          <Button size="sm" variant="solid">{tr.card.label_action}</Button>
          <Button size="sm" variant="ghost">Dismiss</Button>
        </CardFooter>
      </Card>
    );
  },
};

export const Hoverable: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Card {...args} hoverable>
        <CardHeader>
          <CardTitle>{tr.card.label_title}</CardTitle>
          <CardDescription>{tr.card.label_description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.card.label_body}
          </p>
        </CardContent>
      </Card>
    );
  },
  args: { hoverable: true },
};

export const AsArticle: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <article style={{ margin: 0, padding: 0 }}>
        <Card {...args}>
          <CardHeader>
            <CardTitle>{tr.card.label_title}</CardTitle>
            <CardDescription>{tr.card.label_description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
              {tr.card.label_body}
            </p>
          </CardContent>
        </Card>
      </article>
    );
  },
};

export const AllSections: Story = {
  render: (args) => {
    const tr = useT();
    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>{tr.card.label_title}</CardTitle>
          <CardDescription>{tr.card.label_description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.card.label_body}
          </p>
        </CardContent>
        <CardFooter style={{ justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
            Step 1 of 3
          </span>
          <Button size="sm" variant="solid">{tr.card.label_action}</Button>
        </CardFooter>
      </Card>
    );
  },
};
