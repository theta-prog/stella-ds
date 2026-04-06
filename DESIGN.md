# DESIGN.md — Stella Design System

This document defines the design philosophy, visual language, and decision-making principles for Stella DS. It is the "why" behind every token, component, and interaction in the system.

> **Audience:** Anyone building with or contributing to Stella — designers, engineers, and AI agents alike.

---

## 1. Design Philosophy

### The Celestial Metaphor

Stella's visual language draws from observational astronomy — not sci-fi, not fantasy, but the quiet precision of stargazing.

- **Light sources are meaningful.** Elements that glow (focus rings, active states) represent energy and interaction. Surfaces at rest are dark and still.
- **Depth comes from luminosity, not blur.** Brighter surfaces are closer to the viewer. Darker surfaces recede. Glass-morphism and `backdrop-filter` are reserved for navigation chrome only.
- **The void is not empty.** Dark backgrounds (`void-base`, `void-surface`, `void-overlay`) form a deliberate hierarchy — each level serves a structural purpose.

### Five Pillars

Adapted from [design-review.md](.claude/skills/design-review.md):

| Pillar | Meaning |
|---|---|
| **Intentionality** | Every value has a rationale. No magic numbers. If you can't explain why a spacing value is `8` and not `6`, reconsider. |
| **Restraint** | Fewer options, each considered. A component with 3 variants is better than one with 8. |
| **Internal Consistency** | Elements reference each other — concentric radii, proportional spacing, related timing curves. |
| **Edge Case Care** | Empty states, overflow, loading, and error states look designed, not accidental. |
| **Timelessness** | Choose durability over trends. Avoid patterns that date themselves within 2 years. |

### The "One Weird Thing"

The best design systems have a deliberate visual quirk no algorithm would produce (Linear: ultra-tight spacing, Stripe: custom gradient angles, Notion: hand-drawn illustrations).

**Stella's quirk:** The celestial metaphor as a *visual* system — luminosity-based depth, glow reserved for interaction energy, darkness as structure. This goes beyond naming. Every design decision should reinforce the idea that the interface is a window into a calm, ordered cosmos.

---

## 2. Color System

### Palettes & Semantic Roles

Each palette has a celestial name and a functional purpose. **Never choose a color by aesthetics alone — choose it by role.**

| Palette | Hue | Role | When to Use |
|---|---|---|---|
| **Cosmos** | Indigo | Primary / Interactive | Buttons, links, focus rings, active states, primary CTAs |
| **Nebula** | Purple | Accent / Decorative | Secondary emphasis, tags, badges that need visual distinction from cosmos |
| **Aurora** | Cyan | Accent / Informational | Info states, highlights, secondary interactive elements |
| **Nova** | Emerald | Success / Positive | Success feedback, confirmations, positive badges, valid states |
| **Solar** | Amber | Warmth / Attention | Warnings, attention-drawing elements, warm accents to break cool monotony |
| **Void** | Dark neutrals | Backgrounds / Structure | Page backgrounds, card surfaces, overlays — hierarchy through luminosity |
| **Starlight** | Light neutrals | Text / Foreground | Body text, headings, disabled text, borders |

### Color Usage Rules

**Do:**
- Use `cosmos` for all primary interactive elements — it's the "energy" color
- Use `void` levels to create depth: `base` → `surface` → `overlay` → `muted`
- Use `solar` to add warmth and break the cool palette monotony
- Use `starlight-secondary` for supporting text, not `starlight-primary` at lower opacity
- Use semantic state colors: `nova` for success, `error` for errors, `warning`/`solar` for warnings

**Don't:**
- Combine `cosmos` + `nebula` + `aurora` in the same component — the "AI color triangle" looks generated
- Use full-saturation colors (400–500 range) for large surfaces — reserve them for small accents
- Use `cosmos` for decorative purposes — it should always signal interactivity
- Apply colored glow shadows casually — glow = energy = interaction only

### Void Surface Hierarchy

```
void-base     (#0a0c14)  — Page background. The deepest layer.
void-surface  (#12151e)  — Card backgrounds, primary containers.
void-overlay  (#1a1e2a)  — Elevated surfaces: dropdowns, dialogs, popovers.
void-muted    (#262c3a)  — Subtle backgrounds: hover states, table stripes, disabled areas.
```

Each level is intentionally distinct. Never use the same void shade for two different structural purposes.

---

## 3. Typography

### Type Scale Philosophy

Stella uses a constrained type scale. Display text and body text receive different optical treatment — they are not the same font scaled up/down.

| Context | Size Range | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display / Hero | `4xl`–`5xl` | semibold–bold | `display` (1.1) | `tighter` (-0.03em) |
| Section headings | `2xl`–`3xl` | semibold | `tight` (1.25) | `tight` (-0.015em) |
| Subheadings | `lg`–`xl` | medium–semibold | `tight` (1.25) | `normal` (0) |
| Body text | `sm`–`base` | regular | `normal` (1.5) | `normal` (0) |
| Captions / Labels | `xs`–`sm` | medium | `normal` (1.5) | `wide` (0.025em) |
| Code | `sm` (mono) | regular | `relaxed` (1.75) | `normal` (0) |

### Font Stack Roles

| Token | Use |
|---|---|
| `sans` (Montserrat + Zen Kaku Gothic New) | Default UI text — body, labels, buttons |
| `serif` (Zen Old Mincho) | Editorial content, quotes, formal contexts |
| `display` (Nexa Rust Script B Shadow 2) | Brand moments only — hero headlines, marketing |
| `statement` (Acier BAT Text Solid) | Bold typographic accents — section dividers, feature callouts |
| `mono` (JetBrains Mono) | Code, technical values, data |

**Rule:** `display` and `statement` fonts are for emphasis, not structure. Never use them for navigation, form labels, or body text.

---

## 4. Spacing & Layout

### Spacing Scale

Stella uses a `4px` base unit. The spacing scale is intentionally non-linear to create visual rhythm:

```
0    →  0        (collapse)
1    →  0.25rem  (4px)    — Tight: inline gaps, icon-to-text
2    →  0.5rem   (8px)    — Compact: form field padding, badge padding
3    →  0.75rem  (12px)   — Default: button padding, card internal gaps
4    →  1rem     (16px)   — Standard: section padding, stack gaps
6    →  1.5rem   (24px)   — Comfortable: card padding, group spacing
8    →  2rem     (32px)   — Spacious: section margins
12   →  3rem     (48px)   — Large: page section gaps
16+  →  4rem+    (64px+)  — Hero: page-level vertical rhythm
```

### Spacing Rules

- **Component-internal spacing < component-external spacing.** A card's padding is smaller than the gap between cards.
- **Consistent axis pairing.** If horizontal padding is `spacing-4`, vertical padding should be `spacing-3` or `spacing-4` — not `spacing-1`.
- **Optical adjustment over mathematical precision.** Button text gets slightly more horizontal padding than vertical to look centered.

---

## 5. Shape & Border Radius

### Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0 | Dividers, full-bleed elements |
| `sm` | 2px | Subtle rounding on small elements (code inline) |
| `base` | 4px | Default for form inputs, small controls |
| `md` | 6px | Buttons, badges, chips |
| `lg` | 8px | Cards, dialogs, dropdowns |
| `xl` | 12px | Large cards, page sections |
| `2xl` | 16px | Hero containers, prominent surfaces |
| `full` | 9999px | Avatars, pills, toggles |

### Concentricity Rule (Apple HIG)

When a rounded parent contains a rounded child, the child's radius must account for the parent's padding:

```
child-radius = parent-radius - parent-padding
```

This prevents the "pinched corner" artifact. Example: a card with `radius: lg (8px)` and `padding: 16px` should contain buttons with `radius: md (6px)`, not `lg`.

---

## 6. Shadow & Elevation

### Elevation Model

Shadows in Stella represent physical elevation — higher elements cast larger shadows.

| Token | Purpose |
|---|---|
| `sm` | Subtle lift: buttons at rest, input borders |
| `base` | Default cards, raised surfaces |
| `md` | Dropdowns, popovers, floating elements |
| `lg` | Dialogs, toasts, modals — highest content layer |

### Glow Shadows

Glow shadows (`glow-cosmos`, `glow-nebula`, `glow-aurora`) are **not decorative**. They represent interaction energy:

- `glow-cosmos` → Focus rings, active interactive elements
- `glow-cosmos-hover` → Hover state on primary elements (use sparingly)
- `glow-nebula` / `glow-aurora` → Reserved for specific branded moments

**Rule:** If an element doesn't respond to user interaction, it should not glow.

---

## 7. Motion & Animation

### Timing Tiers

| Token | Duration | Easing | Purpose |
|---|---|---|---|
| `fast` | 100ms | ease-out | Micro-feedback: hover, active, focus state changes |
| `base` | 200ms | ease-out | State transitions: expand/collapse, show/hide, tab switch |
| `slow` | 350ms | ease-out | Layout shifts: dialog enter, page transitions, large reflows |

### Easing Curves

| Curve | Use |
|---|---|
| `ease-out` | Default for most transitions — fast start, gentle stop |
| `ease-in` | Exit animations only — elements leaving the viewport |
| `spring` | Playful feedback — toggle switches, bouncy confirmations (use sparingly) |
| `linear` | Progress bars, loading indicators — constant rate |

### Motion Principles

1. **Every animation answers "why does this move?"** Valid reasons: feedback, continuity, hierarchy, delight (in that priority order).
2. **Never use `transition: all`.** List specific properties explicitly: `transition: background-color 200ms ease-out, border-color 200ms ease-out`.
3. **Never animate layout properties** (`width`, `height`, `top`, `left`) — use `transform` and `opacity` only.
4. **Respect `prefers-reduced-motion`.** Disable non-essential animations. Keep opacity transitions at ≤100ms as a fallback.

---

## 8. Accessibility Standards

### Non-Negotiable Rules

These are enforced at the code level, not optional guidelines:

| Rule | Implementation |
|---|---|
| Focus visibility | Always `:focus-visible`, never `:focus`. Use `focus-ring` shadow token. |
| Error association | `aria-describedby` links inputs to error messages. Use `React.useId()`. |
| Invalid state | `aria-invalid` on inputs/checkboxes in error state. |
| Loading state | `aria-busy` on loading containers, `aria-hidden` on spinner SVGs. |
| Icon accessibility | All SVG icons get `aria-hidden="true"`. |
| Color contrast | Text on `void-base`: minimum 4.5:1 (AA). `starlight-primary` on `void-base` = 13.8:1 ✓ |
| Motion safety | All animations respect `prefers-reduced-motion: reduce`. |

### Focus Ring Design

The focus ring uses `glow-cosmos` shadow — a visible, branded indicator that doesn't rely on `outline` alone:

```css
box-shadow: var(--stella-shadow-focus-ring);  /* 0 0 0 2px cosmos at 50% opacity */
```

Never use `outline: none` without providing a visible replacement.

---

## 9. Component Design Principles

### API Design (Inspired by Radix)

1. **`asChild` composition.** All components support rendering as any element via `@radix-ui/react-slot`. This is Stella's primary composition mechanism.
2. **Variant + size pattern.** Components expose `variant` and `size` props. CSS Modules classes follow `styles[`variant-${variant}`]` and `styles[`size-${size}`]` conventions.
3. **Sensible defaults.** Every prop has a default that produces a usable component with zero configuration.
4. **Forward refs.** All components use `React.forwardRef` for DOM access.

### Variant Philosophy

| Variant | Visual Weight | Use |
|---|---|---|
| `solid` | Highest | Primary actions, CTAs — one per visual group |
| `outline` | Medium | Secondary actions, paired with solid |
| `ghost` | Lowest | Tertiary actions, toolbar buttons, navigation |
| `glow` | Highest + emphasis | Use with extreme caution — reserved for hero CTAs only. Overuse makes the UI look AI-generated. |

**Rule of One:** Each visual group (card, dialog, section) should have at most one `solid` element. Multiple high-weight elements compete for attention and flatten hierarchy.

### Component Checklist

Before shipping a component, verify:

- [ ] Uses `--stella-*` tokens — no hardcoded colors, sizes, or shadows
- [ ] Supports `asChild` via Radix Slot
- [ ] Uses `React.forwardRef`
- [ ] Has `:focus-visible` styling with `focus-ring` token
- [ ] Respects `prefers-reduced-motion`
- [ ] Works in both light and dark contexts (if applicable)
- [ ] Concentric radii with parent containers
- [ ] Storybook story with all variants documented
- [ ] Translations added to `apps/docs/src/i18n/translations.ts`
- [ ] Preview added to `apps/site/src/components/previews/index.tsx`

---

## 10. Anti-Patterns

Patterns that make Stella look generic or AI-generated. Reject these in code review.

### Visual

| Don't | Do Instead |
|---|---|
| Glow shadows on non-interactive elements | Glow = interaction energy only |
| `backdrop-filter: blur()` on content cards | Solid `void-surface` backgrounds. Blur is for nav chrome only. |
| Gradient mesh / floating orbs in backgrounds | Solid backgrounds or minimal 2-color gradient with fixed angle |
| `translateY(-2px)` + shadow increase on hover | Border-color change or subtle `background-color` shift |
| Radial gradient "nebula" effects behind content | Remove, or constrain to hero sections with clear purpose |
| Glowing `text-shadow` on headings | Remove entirely — this is the strongest AI-generated signal |

### Structural

| Don't | Do Instead |
|---|---|
| `transition: all 200ms ease` | List specific properties: `transition: color var(--stella-transition-fast)` |
| Same padding everywhere | Component-internal < component-external spacing |
| `border-radius: full` on cards | Use the radius scale. `full` is for avatars and pills only. |
| Every card has an accent color bar + matching glow | Reserve accent treatments for one card per group |
| Center-align all text | Left-align by default. Center only for hero headlines and short labels. |

---

## 11. Decision Records

When a significant design decision is made, record it here with context.

| Date | Decision | Rationale |
|---|---|---|
| — | Celestial naming for color palettes | Creates a distinct brand vocabulary. Maps to functional roles: cosmos=primary, void=background, starlight=text. |
| — | `asChild` over component-as-prop | Aligns with Radix ecosystem. Simpler API surface than render props or component injection. |
| — | CSS Modules over CSS-in-JS | Zero runtime cost, natural scoping, works with SSR. Trades dynamic styling for performance. |
| — | Dark-first design | Stella's celestial metaphor works best against dark surfaces. Light themes are secondary adaptations. |
| — | Glow reserved for interaction | Prevents the "AI-generated" look. Glow has semantic meaning (energy/interaction), not decorative. |
| — | `prefers-reduced-motion` as requirement | Accessibility is non-negotiable. All motion is optional for users who prefer reduced motion. |

---

## References

- [IBM Carbon Design System](https://carbondesignsystem.com/) — Token architecture & layered documentation
- [Radix UI](https://www.radix-ui.com/) — Accessibility-first component API design
- [Shopify Polaris](https://polaris.shopify.com/) — Do/Don't patterns & component usage guidelines
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) — Concentricity, motion purpose, optical alignment
- [GitHub Primer](https://primer.style/) — Functional color naming & multi-theme support
