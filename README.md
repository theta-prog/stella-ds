# ✦ Stella Design System

**Scalable design system for web apps, portfolios, MV production, and 3D spaces.**

> 日本語版は [README.ja.md](./README.ja.md) をご覧ください。

---

## Overview

Stella Design System is a monorepo-based design system that provides:

- **Framework-agnostic design tokens** — colors, typography, spacing, shadows, and more, distributed as both JSON and CSS custom properties (`--stella-*`).
- **React component library** — accessible, composable components built on [Radix UI Primitives](https://www.radix-ui.com/) with scoped CSS Modules styling.
- **Interactive documentation** — Storybook 8 with live previews, controls, and a **JP / EN language switcher** in the toolbar.

---

## Tech Stack

| Role | Tool |
|---|---|
| Package manager | [pnpm](https://pnpm.io/) workspaces |
| Language | TypeScript 5 |
| Component build | [tsup](https://tsup.egoist.dev/) |
| UI primitives | [Radix UI](https://www.radix-ui.com/) |
| Styling | CSS Modules |
| Documentation | [Storybook 8](https://storybook.js.org/) + Vite |

---

## Repository Structure

```
stella-ui/
├── packages/
│   ├── theme/          # Design tokens (JSON + CSS variables, framework-agnostic)
│   └── react/          # React component library (Radix UI + CSS Modules)
├── apps/
│   └── docs/           # Storybook documentation (JP / EN)
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 9 — install with `npm install -g pnpm`

### Install

```bash
pnpm install
```

### Build packages

```bash
# Build all packages
pnpm build

# Or build individually
pnpm --filter @stella-ds/theme build
pnpm --filter @stella-ds/react build
```

### Launch Storybook

```bash
pnpm storybook
# → http://localhost:6006
```

---

## Packages

### `@stella-ds/theme`

Design tokens distributed as:
- **`import { tokens } from '@stella-ds/theme'`** — raw JSON object for JS/TS consumers.
- **`import { cssVariables, generateCSSVarsString, injectCSSVars } from '@stella-ds/theme'`** — flat CSS variable map and utilities.
- **`@stella-ds/theme/css`** — compiled `dist/tokens.css` for direct stylesheet import.

Token categories: `color`, `typography`, `spacing`, `borderRadius`, `shadow`, `transition`.

### `@stella-ds/react`

React components built on Radix UI Primitives.

```tsx
import { Button } from '@stella-ds/react';

// Solid (default)
<Button variant="solid" size="md">Click me</Button>

// Glow effect
<Button variant="glow" size="lg">✦ Launch</Button>

// Polymorphic — render as <a> via asChild
<Button asChild variant="outline">
  <a href="/docs">Read Docs</a>
</Button>

// Loading state
<Button loading>Saving…</Button>
```

**Button props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `solid \| outline \| ghost \| glow` | `solid` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Size preset |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `asChild` | `boolean` | `false` | Render child as root (Radix Slot) |

---

## Storybook: Language Switcher

The Storybook toolbar includes a **🌍 globe** icon to toggle between:

- 🇺🇸 **English**
- 🇯🇵 **日本語**

Story labels, descriptions, and button text all update in real-time when you switch locales.

---

## Scripts

| Command | Description |
|---|---|
| `pnpm install` | Install all workspace dependencies |
| `pnpm build` | Build all packages |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build-storybook` | Build static Storybook |
| `pnpm typecheck` | Run TypeScript checks across all packages |

---

## License

MIT
