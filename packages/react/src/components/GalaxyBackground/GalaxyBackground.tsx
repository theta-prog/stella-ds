/**
 * GalaxyBackground – Stella UI
 *
 * Immersive background with layered star clusters and a soft nebula glow.
 * Uses CSS Modules and Stella design tokens.
 */

import * as React from 'react';
import styles from './GalaxyBackground.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type GlowColor = 'cosmos' | 'nebula' | 'aurora';

export interface GalaxyBackgroundProps {
  /** Show nebula glow overlay (default: true) */
  nebula?: boolean;
  /** Glow color theme (default: 'nebula') */
  glowColor?: GlowColor;
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
  large: boolean;
}

// ----------------------------------------------------------------
// Glow color map
// ----------------------------------------------------------------

const GLOW_COLORS: Record<GlowColor, string> = {
  cosmos: 'rgba(99, 102, 241, 0.15)',
  nebula: 'rgba(168, 85, 247, 0.15)',
  aurora: 'rgba(6, 182, 212, 0.15)',
};

/** Positions for the 3 nebula blobs */
const NEBULA_BLOBS: Array<{ x: string; y: string; size: string; opacity: number }> = [
  { x: '10%',  y: '15%', size: '45%', opacity: 0.18 },
  { x: '60%',  y: '55%', size: '50%', opacity: 0.14 },
  { x: '35%',  y: '70%', size: '40%', opacity: 0.12 },
];

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const GalaxyBackground = React.forwardRef<HTMLDivElement, GalaxyBackgroundProps>(
  (
    {
      nebula = true,
      glowColor = 'nebula',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [stars, setStars] = React.useState<StarData[]>([]);

    React.useEffect(() => {
      const total = 200;
      const generated: StarData[] = Array.from({ length: total }, (_, i) => {
        const isLarge = i < total * 0.2; // 20% large, 80% small
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: isLarge
            ? 2 + Math.random() * 2       // large: 2–4px
            : 0.5 + Math.random() * 1,    // small: 0.5–1.5px
          opacity: isLarge
            ? 0.6 + Math.random() * 0.4   // large: brighter 0.6–1.0
            : 0.2 + Math.random() * 0.4,  // small: dimmer 0.2–0.6
          delay: Math.random() * 5,
          large: isLarge,
        };
      });
      setStars(generated);
    }, []);

    const rootCls = [styles.root, className].filter(Boolean).join(' ');
    const glowRgba = GLOW_COLORS[glowColor];

    return (
      <div ref={ref} className={rootCls} {...props}>
        {/* Star field */}
        <div className={styles.stars} aria-hidden="true">
          {stars.map((star) => (
            <span
              key={star.id}
              className={star.large ? styles['star-large'] : styles['star-small']}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                '--star-opacity': star.opacity,
                animationDelay: `${star.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Nebula glow overlay */}
        {nebula && (
          <div className={styles.nebula} aria-hidden="true">
            {NEBULA_BLOBS.map((blob, i) => (
              <div
                key={i}
                className={styles['nebula-blob']}
                style={{
                  left: blob.x,
                  top: blob.y,
                  width: blob.size,
                  height: blob.size,
                  background: `radial-gradient(circle, ${glowRgba} 0%, transparent 70%)`,
                  opacity: blob.opacity,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    );
  },
);

GalaxyBackground.displayName = 'GalaxyBackground';
