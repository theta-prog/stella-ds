# @stella-ds/theme

Design tokens for the [Stella Design System](https://github.com/theta-prog/stella-ds).

Framework-agnostic — distributed as CSS custom properties (`--stella-*`) and a JSON token object.

## Installation

```bash
npm install @stella-ds/theme
# or
pnpm add @stella-ds/theme
```

## Usage

### CSS (recommended)

```ts
import '@stella-ds/theme/css'
```

Injects all `--stella-*` CSS custom properties into `:root`.

The compiled CSS also includes official scoped themes:

```tsx
<div data-theme="dark">...</div>
<div data-theme="light">...</div>
```

`light` overrides the surface, text, accent, and shadow tokens; `dark` matches the default root token set.

### JavaScript / TypeScript

```ts
import { tokens } from '@stella-ds/theme'
// → raw token object

import { cssVariables, injectCSSVars } from '@stella-ds/theme'
// cssVariables: flat { '--stella-color-cosmos-500': '#6366f1', ... }
// injectCSSVars(): programmatically injects into document.documentElement
```

## Token Categories

| Category | Description |
|---|---|
| `color` | Celestial color palettes (`cosmos`, `nebula`, `aurora`, `nova`, `void`, `starlight`) |
| `typography` | Font families, sizes, weights, line heights |
| `spacing` | Spacing scale |
| `borderRadius` | Border radius presets |
| `shadow` | Box shadow levels |
| `transition` | Duration and easing |

## Color Palettes

- `cosmos` — primary / interactive (indigo)
- `nebula` — accent (purple)
- `aurora` — accent (cyan)
- `nova` — success / positive (emerald)
- `void` — backgrounds (`base` / `surface` / `overlay` / `muted`)
- `starlight` — text (`primary` / `secondary` / `disabled`)

## Links

- [Component Library — @stella-ds/react](https://www.npmjs.com/package/@stella-ds/react)
- [GitHub](https://github.com/theta-prog/stella-ds)

## License

MIT
