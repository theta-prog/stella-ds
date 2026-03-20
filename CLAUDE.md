# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook dev server (http://localhost:6006)
pnpm dev
# or
pnpm storybook

# Build static Storybook
pnpm build-storybook

# Type check all packages
pnpm typecheck

# Build/watch a single package
pnpm --filter @stella-ds/react build
pnpm --filter @stella-ds/react dev
pnpm --filter @stella-ds/theme build

# Lint
pnpm lint          # ESLint check (react-hooks + jsx-a11y + typescript-eslint)
pnpm lint:fix      # ESLint auto-fix
```

TypeScript strict mode is the primary correctness mechanism. ESLint covers React Hooks rules and accessibility (jsx-a11y).

## Dev Server / Storybook

**Claude should NOT start or restart dev servers (Storybook, Vite, etc.).** The user manages these manually in their own terminal.

- Starting servers from Claude makes processes hard to stop and causes port conflicts (6006, 6007, 6008…)
- After Claude makes code changes, tell the user to restart manually if needed
- For design changes to appear in Storybook, the react package must be rebuilt first:
  ```bash
  pnpm --filter @stella-ds/react build
  # then restart Storybook in your terminal
  ```
- Recommended dev setup (two terminals):
  ```bash
  # Terminal 1 – watch-build the react package
  pnpm --filter @stella-ds/react dev
  # Terminal 2 – Storybook
  pnpm storybook
  ```

## Git Workflow

**Always create a feature branch before starting any development work.**

```bash
git checkout -b feat/branch-name   # new feature
git checkout -b fix/branch-name    # bug fix
git checkout -b chore/branch-name  # tooling / config
```

- `main` branch is protected — never commit directly to `main`
- Branch naming: `feat/`, `fix/`, `chore/` + short kebab-case description
- Push the branch and open a PR when the work is ready to merge
- After pushing or updating a PR, check for Copilot review comments (`gh api repos/theta-prog/stella-ds/pulls/<PR_NUMBER>/comments`) and address any actionable feedback

## Architecture

This is a **pnpm monorepo** design system with two packages and one app:

- `packages/theme` — Design tokens package. Source of truth is `src/tokens.json`. The build script (`scripts/build-css.js`) generates `dist/tokens.css` (a `:root {}` block with `--stella-*` CSS custom properties). `src/index.ts` also exports the raw token object, a flat `cssVariables` map, and `generateCSSVarsString()`/`injectCSSVars()` utilities.

- `packages/react` — React component library. Built with tsup; outputs ESM + `.d.ts`. Components use CSS Modules for styles and consume `--stella-*` CSS variables. The tsup config adds a `"use client"` banner for Next.js compatibility. `sideEffects: false` is set in package.json.

- `apps/docs` — Storybook 8 app (React + Vite). Hosts all stories and has an EN/JP locale switcher in the toolbar (via `useGlobals()`). Stories use a `useT()` hook from `src/i18n/` to render locale-aware text.

## Component Conventions

Components follow this structure:
```
src/components/Button/
  Button.tsx          # Component with React.forwardRef
  Button.module.css   # CSS Modules styles
  index.ts            # Re-exports
```

**Radix `asChild` pattern:** Components accept `asChild` via `@radix-ui/react-slot`, allowing callers to render as any element while keeping styles.

**Variant/size classes** are applied dynamically from CSS Modules:
```ts
styles[`variant-${variant}`]   // e.g. styles['variant-solid']
styles[`size-${size}`]         // e.g. styles['size-md']
```

**Loading state** uses `aria-busy`, `aria-disabled`, and an animated spinner with `aria-hidden`.

## Design Token System

All CSS custom properties use the `--stella-` prefix. To consume tokens in a component's CSS Module:

```css
color: var(--stella-color-cosmos-500);
```

Color tokens use celestial names:
- `cosmos` — primary/interactive (indigo)
- `nebula` — accent (purple)
- `aurora` — accent (cyan)
- `nova` — success/positive (emerald)
- `void` — backgrounds (`base` / `surface` / `overlay` / `muted`)
- `starlight` — text (`primary` / `secondary` / `disabled`)

Tokens are organized under: `color`, `typography`, `spacing`, `borderRadius`, `shadow`, `transition`.

The consuming app/story must inject the CSS variables (either via `import '@stella-ds/theme/css'` or calling `injectCSSVars()`). See `apps/docs/src/theme.css` for the docs app's approach.

## TypeScript

All packages extend `tsconfig.base.json` at the repo root. Key settings: `strict: true`, `target: ES2020`, `module: ESNext`, `moduleResolution: bundler`, `jsx: react-jsx`. Declaration maps and source maps are enabled across the board.

## Accessibility Rules

- Always use `:focus-visible` instead of `:focus` for focus ring styles
- `aria-describedby` must link inputs to their error message elements (use `React.useId()`)
- `aria-invalid` on inputs/checkboxes when in error state
- `aria-busy` + `aria-hidden` on loading spinners
- SVG icons must have `aria-hidden="true"`
- Never use `outline: none` without a visible focus replacement (border-color + box-shadow)
- Never use `transition: all` — list specific properties explicitly

## Storybook i18n

All stories must support EN/JP locale switching via the Storybook toolbar.

**How it works:**
- `apps/docs/src/i18n/translations.ts` — typed translation objects for every component (EN + JA)
- `apps/docs/src/i18n/useT.ts` — shared `useT()` hook that reads the Storybook global locale
- Stories import `useT` from `'../i18n'` and use `tr.componentName.keyName` for all user-facing text

**When adding a new component story:**
1. Add a `ComponentNameTranslations` interface to `translations.ts`
2. Add the key to the `Translations` interface
3. Add EN and JA entries to both translation objects
4. In the story file, import `{ useT }` from `'../i18n'` and use `const tr = useT()` inside render functions
5. Never hardcode English-only text — all visible strings should come from `tr`

**Note:** `switch` is a reserved word in JS, so the Switch component uses the key `switch_` in the translations object.

## Site (apps/site) Guidelines

The documentation site is a living showcase of the design system. **Always use `@stella-ds/react` components instead of raw HTML + inline styles wherever possible.**

Priority components for the site:
- `Button` with `asChild` — use for all CTA and nav anchor links instead of styled `<a>` tags
- `Badge` — use for all pills, chips, count labels, and import name tags instead of custom `<span>`
- `Card`, `CardContent` — use for feature cards, content cards, and similar surfaces
- `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator` — use for all breadcrumb navigations
- `Text`, `Heading` — use for typography where no custom gradient/special effect is needed
- `Stack`, `Separator` — use for layout and dividers

**Server Component compatibility:** All pages in `apps/site` are Next.js Server Components. You can freely import any `@stella-ds/react` component — Next.js handles the `"use client"` boundary automatically. No need to add `'use client'` to pages just to use Stella UI components.

**Shared templates:** Locale-aware pages share template components in `src/components/`:
- `HomeTemplate` — EN/JA home page (uses `Badge`, `Button`, `Card`)
- `ComponentListTemplate` — EN/JA component list page (uses `Badge`)
- `ComponentDetailTemplate` — EN/JA component detail page (uses `Breadcrumb`, `Badge`)
- `GettingStartedTemplate` — EN/JA getting started page (uses `Badge`, `Card`, `Text`)

When adding new pages, create a shared template and have EN/JA page files render it with `locale="en"` or `locale="ja"`.

## Skills

Use these slash commands (via the Skill tool) at the appropriate stages of development:

| Skill | When to use |
|---|---|
| `/building-components` | Starting a new component — covers API design, accessibility, tokens, composability |
| `/web-design-guidelines` | After implementing a component — audits accessibility and UX against Vercel guidelines |
| `/vercel-react-best-practices` | Code review — checks React performance patterns (waterfalls, re-renders, bundle size) |
| `/vercel-composition-patterns` | When designing complex component APIs (compound components, render props, context) |
| `/simplify` | After a batch of changes — reviews for duplication and code quality |
| `/autoship` | When ready to publish `@stella-ds/react` or `@stella-ds/theme` to npm |
| `/turborepo` | If build times become slow and Turborepo caching is needed |
