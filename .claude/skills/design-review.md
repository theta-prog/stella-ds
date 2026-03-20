---
skill: design-review
description: Review components and pages for AI-looking design anti-patterns. Ensures the design feels human-crafted, intentional, and distinctive rather than AI-generated.
user_invocable: true
---

# Design Review: Anti-AI-Generic Guidelines

You are reviewing Stella UI components and site pages to ensure the design feels **human-crafted and intentional**, not AI-generated. Apply these principles derived from Apple HIG, Linear, Stripe, and design community consensus.

## The Five Pillars of Crafted Design

1. **Intentionality** — Every value (color, radius, spacing, shadow) has a rationale. No magic numbers.
2. **Restraint** — Fewer options, each considered. Say "no" more than "yes."
3. **Internal Consistency** — Elements reference each other (concentric radii, proportional spacing).
4. **Edge Case Care** — Empty states, overflow, loading, and error states look designed, not accidental.
5. **Timelessness** — Durable decisions over current trends.

## AI-Generic Anti-Patterns to Flag

### Color
| Anti-Pattern | What to Do Instead |
|---|---|
| Purple/indigo as default primary (`#6366f1`, `#4f46e5` = Tailwind indigo) | Shift hue 5-10 degrees away from the statistical average. Make it yours. |
| Neon glow effects (`box-shadow` with colored spread) | Reserve glow for one specific, documented use case. Default to subtle elevation. |
| Cyan + purple + indigo combo (the "AI color triangle") | Break monotony with one warm accent (amber, coral, warm gray). |
| Same dark gray for every surface (`#1d2129` everywhere) | Create surface hierarchy: 2-3 distinct background levels with clear purpose. |
| Colors at full saturation | Desaturate slightly for a "grown-up" palette. Full saturation for accents only. |

### Typography
| Anti-Pattern | What to Do Instead |
|---|---|
| One font, two weights (400/700) | Use intermediate weights (450, 500). Define 6-8 named type styles max. |
| Default letter-spacing everywhere | Tighten for display text (-0.02em), loosen for small caps (+0.05em). |
| `line-height: 1.5` universally | Display: 1.1-1.2. Body: 1.5-1.6. Small text: 1.6-1.8. |
| Hero text is just body font scaled up | Display text deserves different optical treatment (weight, tracking, line-height). |
| Center-aligned everything | Default to left alignment. Center only with intention. |

### Shape & Layout
| Anti-Pattern | What to Do Instead |
|---|---|
| `border-radius: 9999px` on everything | Deliberate radius scale. Mix sharp and rounded with purpose. |
| Glass-morphism cards (`backdrop-filter: blur`) | Solid backgrounds. Reserve blur for navigation chrome only (Apple HIG). |
| Symmetrical bento grids | Break the grid occasionally. Asymmetry with purpose. |
| Same padding on every card/section | Component-internal spacing tighter than component-external spacing. |
| Gradient mesh/orb backgrounds | Solid color or minimal gradient with constrained rules (2 colors, fixed angle). |

### Animation & Interaction
| Anti-Pattern | What to Do Instead |
|---|---|
| Fade-in-up on scroll for everything | Reserve animation for meaningful state changes. |
| `transition: all 200ms ease` | Vary by purpose: feedback (100-150ms), state change (200-250ms), layout (300-400ms). |
| Hover glow on cards | Border-color change or subtle background shift. |
| `transform: translateY(-2px)` card hover | More restrained: opacity shift, border highlight, or no lift at all. |
| `transition: all` | List specific properties. Never animate layout properties (width/height). |

### Decorative
| Anti-Pattern | What to Do Instead |
|---|---|
| Abstract gradient orbs floating in backgrounds | Remove or replace with purposeful, branded visual elements. |
| Noise/grain texture overlay | Only if it serves the brand metaphor. Usually just visual noise. |
| Sparkle/star icons next to features | Use iconography that communicates function, not decoration. |
| Generic 3D illustrations (Spline blobs) | Custom, opinionated illustration with consistent style rules. |

## Apple HIG Principles to Apply

### Concentricity
When a rounded container holds a rounded child, the child's radius = parent radius - padding. This prevents "pinched" or "flared" corners.

```css
/* Example: Card (radius 12px, padding 16px) containing Button (radius should be ~8px, not 12px) */
.card { border-radius: 12px; padding: 16px; }
.card .button { border-radius: calc(12px - 4px); /* inner radius accounts for nesting */ }
```

### Materials Serve Hierarchy
- Translucency/blur = navigation layer ONLY (navbars, sidebars, toolbars)
- Content containers = SOLID backgrounds
- Never stack blur on blur
- Always provide solid fallback + respect `prefers-reduced-transparency`

### Motion Has Purpose
Every animation must answer: "Why does this move?"
- **Feedback**: Confirming action received (< 150ms)
- **Continuity**: Maintaining spatial context during transitions
- **Hierarchy**: Drawing attention to state changes
- **Delight**: Sparingly, only after the above are satisfied

### Optical Over Mathematical
- Icons optically centered, not geometrically centered
- Button text with slightly more horizontal padding than vertical
- Spacing adjusted by eye, not just by scale

## Stella UI Specific Checks

When reviewing Stella UI code, specifically check:

### Components (`packages/react/src/components/`)
- [ ] Does the component use `variant-glow`? Flag it — this is the most AI-looking pattern in the system.
- [ ] Are colors hardcoded instead of using tokens? (e.g., `#ef4444` instead of semantic tokens)
- [ ] Does hover state use `translateY(-2px)` + shadow increase? Consider restraint.
- [ ] Does the component respect `prefers-reduced-motion`?
- [ ] Is `backdrop-filter: blur()` used on a content element (not navigation)?
- [ ] Are border-radius values concentric with parent containers?
- [ ] Does the focus state use `:focus-visible` (not `:focus`)?

### Site (`apps/site/`)
- [ ] Are there radial-gradient "nebula" glows in the background? Flag for removal/reduction.
- [ ] Do headings have glowing `text-shadow`? Flag — this screams AI-generated.
- [ ] Are feature cards using colored accent bars + matching glow shadows? Simplify.
- [ ] Is the hero section using the generic "centered text + giant heading" pattern?
- [ ] Is cosmos indigo the only accent color visible? Add warmth or variety.

### Tokens (`packages/theme/src/tokens.json`)
- [ ] Is `cosmos-600` still `#4f46e5` (Tailwind's indigo-600 verbatim)? Shift the hue.
- [ ] Are void backgrounds all cool-tinted? Consider adding subtle warmth.
- [ ] Is there a `font-weight: 500` (medium) token? Add one.
- [ ] Are there letter-spacing tokens for different text sizes?
- [ ] Is there a display line-height (~1.1)?

## The "One Weird Thing" Test

The best design systems have at least one deliberate visual quirk that no AI would produce:
- Linear: ultra-tight spacing + monochrome
- Stripe: specific gradient angle formula + custom illustration perspective
- Notion: hand-drawn illustrations mixed with clean UI
- Vercel: monospace-forward hierarchy

**Ask: What is Stella UI's "one weird thing"?** The celestial naming is a start — lean into it as a *visual* philosophy (light sources, luminosity, depth), not just naming.

## Output Format

After reviewing, organize findings as:

### Critical (Immediately AI-looking)
Items that make the design feel generated at first glance.

### Important (Generic patterns)
Items that contribute to a "SaaS sameness" feeling.

### Polish (Craft opportunities)
Items where adding intention would elevate the design from good to distinctive.

For each finding, specify: **file**, **line**, **what's wrong**, and **what to do instead**.
