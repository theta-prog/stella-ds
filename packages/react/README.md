# @stella-ds/react

React component library for the [Stella Design System](https://github.com/theta-prog/stella-ds).

Accessible, composable components built on [Radix UI Primitives](https://www.radix-ui.com/) with CSS Modules styling and `--stella-*` design tokens.

## Installation

```bash
npm install @stella-ds/react @stella-ds/theme
# or
pnpm add @stella-ds/react @stella-ds/theme
```

## Setup

Import the design tokens CSS in your app entry point:

```ts
import '@stella-ds/theme/css'
```

## Usage

```tsx
import { Button } from '@stella-ds/react'

<Button variant="solid" size="md">Click me</Button>
<Button variant="glow" size="lg">✦ Launch</Button>
<Button variant="outline" loading>Saving…</Button>

// Polymorphic — render as <a> via asChild
<Button asChild variant="outline">
  <a href="/docs">Read Docs</a>
</Button>
```

## Components

Button, Input, Checkbox, Radio, Select, Switch, Tabs, Dialog, Toast, Tooltip, Badge, Card, Avatar, Heading, Text, Stack, Section, Separator, Skeleton, Breadcrumb, Header, Footer, PageGrid, Background, Alert

## Links

- [Documentation (Storybook)](https://github.com/theta-prog/stella-ds)
- [Design Tokens — @stella-ds/theme](https://www.npmjs.com/package/@stella-ds/theme)
- [GitHub](https://github.com/theta-prog/stella-ds)

## License

MIT
