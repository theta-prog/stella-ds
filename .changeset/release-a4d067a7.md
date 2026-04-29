---
"stella-ui": minor
---

Add CarouselDots component and autoplay support

- CarouselDots: new compound component rendering pill-shaped dot indicators driven by Embla scroll-snap count; active dot expands to a pill shape
- autoplay prop: automatically advances slides on a configurable interval (autoplayInterval, default 3000ms)
- pauseOnHover prop: pauses autoplay on pointer enter and focus; resumes on leave/blur (default true)
- Autoplay respects prefers-reduced-motion: reduce and stops cleanly when loop=false reaches the last snap
- snapCount added to CarouselContext (api.scrollSnapList().length) for accurate dot rendering with slidesPerView > 1
- autoplayInterval clamped to a minimum of 250ms to prevent tight-loop edge cases
