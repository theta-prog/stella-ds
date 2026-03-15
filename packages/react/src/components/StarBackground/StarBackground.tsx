/**
 * StarBackground – Stella UI
 *
 * Full-bleed wrapper that renders an animated starfield behind children.
 * Uses CSS Modules and Stella design tokens.
 */

import * as React from 'react';
import styles from './StarBackground.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export interface StarBackgroundProps {
  /** Number of stars (default: 150) */
  count?: number;
  /** Enable twinkling animation (default: true) */
  twinkle?: boolean;
  /** Extra className for the root */
  className?: string;
  children?: React.ReactNode;
}

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const StarBackground = React.forwardRef<HTMLDivElement, StarBackgroundProps>(
  (
    {
      count = 150,
      twinkle = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [stars, setStars] = React.useState<StarData[]>([]);

    React.useEffect(() => {
      const generated: StarData[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2,        // 1–3px
        opacity: 0.3 + Math.random() * 0.7, // 0.3–1.0
        delay: Math.random() * 4,            // 0–4s
      }));
      setStars(generated);
    }, [count]);

    const rootCls = [styles.root, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={rootCls} {...props}>
        <div className={styles.stars} aria-hidden="true">
          {stars.map((star) => (
            <span
              key={star.id}
              className={styles.star}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                '--star-opacity': star.opacity,
                animationDelay: `${star.delay}s`,
                animationPlayState: twinkle ? 'running' : 'paused',
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  },
);

StarBackground.displayName = 'StarBackground';
