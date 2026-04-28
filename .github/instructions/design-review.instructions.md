---
applyTo: "**/*.{tsx,ts,css,module.css,svg}"
---

# Stella UI Design Review — Copilot Instructions

Apply these rules when generating, reviewing, or suggesting UI code in this repository.

## AI Anti-Patterns to Avoid

The following patterns make interfaces look AI-generated. Never produce them unless explicitly requested.

### 1. Gradient-tinted card/surface backgrounds
```tsx
// NEVER
background: 'linear-gradient(135deg, color-mix(in srgb, var(--stella-color-cosmos-600) 22%, var(--stella-color-void-surface)) 0%, var(--stella-color-void-surface) 72%)'

// CORRECT — let Card use its default void-surface
<Card style={{ height: '100%' }}>
```

### 2. Radial glow orbs in SVGs
```svg
<!-- NEVER -->
<radialGradient id="orb">...</radialGradient>
<circle cx="1180" cy="210" r="260" fill="url(#orb)" />

<!-- CORRECT — use grid lines -->
<line x1="0" y1="300" x2="1600" y2="300" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
```

### 3. Mechanical color alternation via index
```tsx
// NEVER
color={index % 2 === 0 ? 'primary' : 'success'}
background: index % 2 === 0 ? 'cosmos-gradient' : 'aurora-gradient'

// CORRECT — use one semantic color or map to data meaning
color="primary"
```

### 4. Glassmorphism
```css
/* NEVER on cards/surfaces */
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### 5. Colored glow box-shadows
```css
/* NEVER */
box-shadow: 0 0 40px 10px rgba(91, 91, 240, 0.35);

/* CORRECT */
box-shadow: var(--stella-shadow-md);
```

### 6. Text gradients
```css
/* NEVER (outside of deliberate brand moments) */
background: linear-gradient(135deg, #818cf8, #67e8f9);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 7. Wave / organic path backgrounds
```svg
<!-- NEVER as decorative background fill -->
<path d="M-40 650C180 520...Z" fill="rgba(255,255,255,0.08)" />
```

---

## Stella DS Compliance Rules

### Token Usage
Always use `--stella-*` CSS variables. Never hardcode standalone hex, rgb, or hsl values.
Hex fallback values inside `var(--token, #fallback)` are allowed for non-themed contexts (e.g. SVG fills, inline snapshots).

```css
/* CORRECT */
color: var(--stella-color-starlight-primary);
background: var(--stella-color-void-surface);
border-color: var(--stella-color-void-muted);
fill: var(--stella-color-void-muted, #2a2b33); /* fallback inside var() is OK */

/* NEVER */
color: #f0f0f5;
background: #15161b;
```

### Shadows — use tokens only
```css
box-shadow: var(--stella-shadow-base);
box-shadow: var(--stella-shadow-sm);
box-shadow: var(--stella-shadow-md);
box-shadow: var(--stella-shadow-lg);
```

### Transitions — list specific properties
```css
/* CORRECT */
transition:
  background-color var(--stella-transition-fast, 150ms ease),
  border-color var(--stella-transition-fast, 150ms ease);

/* NEVER */
transition: all 200ms ease;
```

### Focus styles
```css
/* CORRECT */
:focus-visible {
  outline: 2px solid var(--stella-color-cosmos-400);
  outline-offset: 2px;
}

/* NEVER */
:focus { outline: none; }
```

### Accessibility
- Decorative SVG icons must have `aria-hidden="true"`
- Loading states must use `aria-busy="true"` + `aria-disabled="true"`
- Inputs with errors must have `aria-invalid="true"` + `aria-describedby`
- Use `:focus-visible` not `:focus` for focus rings
- Never `outline: none` without a visible replacement

---

## Component Usage

### Card
- Default surface and border are set by the Card component — do not override `background` or `borderColor` with gradient tints
- Use the `hoverable` prop for interactive card states

### Badge
- Use for labels, counts, and index markers
- `variant="subtle"` is the standard
- Pick one color per list; avoid alternating mechanically

### Button with navigation links
```tsx
// CORRECT — use Button with asChild for all navigation CTAs
<Button asChild variant="ghost">
  <a href="/docs">Documentation</a>
</Button>

// NEVER — raw styled anchor
<a style={{ color: '...', padding: '...' }} href="/docs">Documentation</a>
```

### Stories i18n
Any text **rendered by the story UI** (component previews, labels, button text) must come from `useT()`.
This does not apply to Storybook docs metadata, explanatory prose, or code snippet examples.
```tsx
const tr = useT();
<Heading>{tr.component.someKey}</Heading>  // correct — rendered UI text
<Heading>Hardcoded English</Heading>        // never — rendered UI text
// docs descriptions, argTypes labels, and example snippets are exempt
```

---

## Color Families Reference

| Token prefix | Semantic use |
|---|---|
| `--stella-color-cosmos-*` | Primary / interactive (indigo) |
| `--stella-color-nebula-*` | Accent (purple) |
| `--stella-color-aurora-*` | Accent (cyan) |
| `--stella-color-nova-*` | Success / positive (emerald) |
| `--stella-color-void-base/surface/overlay/muted` | Backgrounds and borders |
| `--stella-color-starlight-primary/secondary/disabled` | Text |
