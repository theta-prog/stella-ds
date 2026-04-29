---
'@stella-ds/react': patch
'@stella-ds/theme': patch
---

- Fix Carousel viewport edge bleed so two-up layouts no longer clip card borders, rounded corners, or shadows at the viewport edge.
- Add regression coverage for two-up hoverable cards and exact-fit two-image layouts.
- Keep the linked React and theme package versions aligned for the automated 0.6.1 release flow. The theme package has no runtime code changes in this patch.