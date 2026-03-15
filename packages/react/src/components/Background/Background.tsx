/**
 * Background – Stella UI
 *
 * Unified background component with four visual variants:
 *   stars    — animated starfield
 *   galaxy   — stars + nebula glow blobs
 *   milkyway — glowing neon wave ribbon (SVG)
 *   gradient — vivid mesh gradient (overlapping radial blobs)
 *   solid    — plain color from the celestial palette
 */

import * as React from 'react';
import styles from './Background.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type BackgroundVariant = 'stars' | 'galaxy' | 'milkyway' | 'gradient' | 'solid';
export type BackgroundColorScheme = 'cosmos' | 'nebula' | 'aurora' | 'mixed';
export type BackgroundTheme = 'dark' | 'light';

type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type ColorFamily = 'cosmos' | 'nebula' | 'aurora' | 'nova';

/** Any design-token color value — e.g. 'cosmos-500', 'void-base', 'nova-300' */
export type BackgroundTokenColor =
  | `${ColorFamily}-${ColorScale}`
  | 'void-base' | 'void-surface' | 'void-overlay' | 'void-muted'
  | 'starlight-primary' | 'starlight-secondary' | 'starlight-disabled';

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style (default: 'stars') */
  variant?: BackgroundVariant;
  /** Color accent – selects palette hue for blobs/wave (default: 'mixed') */
  color?: BackgroundColorScheme;
  /** Dark or light base (default: 'dark') */
  theme?: BackgroundTheme;
  /** Enable twinkling animation for star variants (default: true) */
  twinkle?: boolean;
  /** Number of ribbons for the milkyway variant (default: 5) */
  ribbons?: number;
  /**
   * Specific design-token color for the solid/gradient base (e.g. 'cosmos-500').
   * When set on `solid`, overrides the theme+color lookup.
   * When set on `gradient`, applies as the base background behind the blobs.
   */
  tokenColor?: BackgroundTokenColor;
  /**
   * Show gradient blob overlay on the `gradient` variant (default: true).
   * Set to false to get a plain tokenColor fill with no blobs.
   */
  showGradient?: boolean;
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
// Solid color map
// ----------------------------------------------------------------

const SOLID_COLORS: Record<BackgroundTheme, Record<BackgroundColorScheme, string>> = {
  dark: {
    cosmos: '#1e1b4b',
    nebula: '#2e1065',
    aurora: '#0c2a3a',
    mixed:  '#0f1117',
  },
  light: {
    cosmos: '#e0e7ff',
    nebula: '#f3e8ff',
    aurora: '#ecfeff',
    mixed:  '#f8f8ff',
  },
};

// ----------------------------------------------------------------
// Mesh gradient blobs (gradient variant)
// ----------------------------------------------------------------

interface BlobConfig { x: string; y: string; size: string; color: string; }

const MESH_BLOBS: Record<BackgroundTheme, Record<BackgroundColorScheme, BlobConfig[]>> = {
  dark: {
    cosmos: [
      { x: '5%',  y: '70%', size: '85%', color: 'rgba(79,70,229,0.70)' },
      { x: '70%', y: '5%',  size: '70%', color: 'rgba(67,56,202,0.55)' },
      { x: '50%', y: '50%', size: '60%', color: 'rgba(99,102,241,0.40)' },
    ],
    nebula: [
      { x: '10%', y: '65%', size: '80%', color: 'rgba(147,51,234,0.65)' },
      { x: '75%', y: '10%', size: '70%', color: 'rgba(168,85,247,0.55)' },
      { x: '40%', y: '80%', size: '55%', color: 'rgba(126,34,206,0.45)' },
    ],
    aurora: [
      { x: '5%',  y: '60%', size: '75%', color: 'rgba(8,145,178,0.65)' },
      { x: '70%', y: '5%',  size: '65%', color: 'rgba(6,182,212,0.55)' },
      { x: '45%', y: '75%', size: '50%', color: 'rgba(14,116,144,0.45)' },
    ],
    mixed: [
      { x: '5%',  y: '70%', size: '80%', color: 'rgba(79,70,229,0.65)' },
      { x: '75%', y: '5%',  size: '70%', color: 'rgba(147,51,234,0.60)' },
      { x: '50%', y: '90%', size: '55%', color: 'rgba(6,182,212,0.50)' },
      { x: '85%', y: '60%', size: '45%', color: 'rgba(168,85,247,0.40)' },
    ],
  },
  light: {
    cosmos: [
      { x: '5%',  y: '65%', size: '80%', color: 'rgba(96,165,250,0.70)' },
      { x: '70%', y: '5%',  size: '70%', color: 'rgba(99,102,241,0.60)' },
      { x: '40%', y: '80%', size: '55%', color: 'rgba(129,140,248,0.50)' },
    ],
    nebula: [
      { x: '10%', y: '60%', size: '80%', color: 'rgba(192,132,252,0.70)' },
      { x: '72%', y: '8%',  size: '70%', color: 'rgba(236,72,153,0.55)' },
      { x: '45%', y: '80%', size: '55%', color: 'rgba(168,85,247,0.50)' },
    ],
    aurora: [
      { x: '5%',  y: '65%', size: '75%', color: 'rgba(34,211,238,0.65)' },
      { x: '70%', y: '8%',  size: '65%', color: 'rgba(56,189,248,0.60)' },
      { x: '45%', y: '80%', size: '55%', color: 'rgba(6,182,212,0.50)' },
    ],
    mixed: [
      { x: '5%',  y: '55%', size: '75%', color: 'rgba(96,165,250,0.72)' },
      { x: '70%', y: '5%',  size: '70%', color: 'rgba(236,72,153,0.65)' },
      { x: '50%', y: '75%', size: '60%', color: 'rgba(168,85,247,0.60)' },
      { x: '15%', y: '80%', size: '50%', color: 'rgba(34,211,238,0.55)' },
    ],
  },
};

// ----------------------------------------------------------------
// Galaxy glow blobs
// ----------------------------------------------------------------

const GALAXY_GLOW_COLORS: Record<BackgroundColorScheme, string[]> = {
  cosmos: ['rgba(99,102,241,0.20)', 'rgba(79,70,229,0.16)', 'rgba(99,102,241,0.14)'],
  nebula: ['rgba(168,85,247,0.20)',  'rgba(147,51,234,0.16)', 'rgba(168,85,247,0.14)'],
  aurora: ['rgba(6,182,212,0.20)',   'rgba(8,145,178,0.16)',  'rgba(34,211,238,0.14)'],
  mixed:  ['rgba(99,102,241,0.18)', 'rgba(168,85,247,0.18)', 'rgba(6,182,212,0.16)'],
};

const GALAXY_BLOBS = [
  { x: '10%', y: '15%', size: '50%' },
  { x: '60%', y: '55%', size: '55%' },
  { x: '35%', y: '70%', size: '45%' },
];

// ----------------------------------------------------------------
// Wave ribbon colors (milkyway variant)
// ----------------------------------------------------------------

const WAVE_COLORS: Record<BackgroundColorScheme, { outer: string; mid: string; center: string }> = {
  cosmos: { outer: 'rgba(79,70,229,0.45)',   mid: 'rgba(99,102,241,0.70)',  center: 'rgba(165,180,252,0.95)' },
  nebula: { outer: 'rgba(126,34,206,0.45)',  mid: 'rgba(168,85,247,0.70)',  center: 'rgba(216,180,254,0.95)' },
  aurora: { outer: 'rgba(8,145,178,0.45)',   mid: 'rgba(6,182,212,0.70)',   center: 'rgba(103,232,249,0.95)' },
  mixed:  { outer: 'rgba(126,34,206,0.40)',  mid: 'rgba(99,102,241,0.65)',  center: 'rgba(190,180,255,0.92)' },
};

// SVG ribbons — steep diagonal S-curves from upper-left toward lower-right
// Dynamically generated based on the `ribbons` prop.
// viewBox is "0 0 100 100"; each entry: [path, outerStrokeWidth, centerStrokeWidth]
function generateMWRibbons(count: number): [string, number, number][] {
  const centerY = 8;   // y start of center ribbon at x=-5
  const spacing = 13;  // y gap between ribbons
  const half = (count - 1) / 2;

  return Array.from({ length: count }, (_, i) => {
    const offset = i - half;
    const y0 = centerY + offset * spacing;
    const t = half > 0 ? Math.abs(offset) / half : 0; // 0 = center, 1 = outermost
    const outerSW  = 10 - t * 5;          // 10 → 5
    const centerSW = 0.50 - t * 0.25;     // 0.50 → 0.25
    // S-curve: first half bows "up", second half bows "down" relative to the diagonal
    const path = [
      `M -5 ${y0}`,
      `C 15 ${y0 - 10}, 35 ${y0 + 20}, 50 ${y0 + 40}`,
      `C 65 ${y0 + 60}, 85 ${y0 + 90}, 105 ${y0 + 80}`,
    ].join(' ');
    return [path, outerSW, centerSW];
  });
}

// ----------------------------------------------------------------
// Star generation
// ----------------------------------------------------------------

function generateStars(count: number): StarData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 1.5,
    opacity: 0.3 + Math.random() * 0.7,
    delay: Math.random() * 5,
  }));
}

function generateMilkywayStars(count: number): StarData[] {
  return Array.from({ length: count }, (_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const distFromBand = Math.abs(y - x * 0.6 - 20);
    const inBand = distFromBand < 20;
    return {
      id: i,
      x: inBand ? x : Math.random() * 100,
      y: inBand ? y : Math.random() * 100,
      size: inBand ? 0.8 + Math.random() * 1.8 : 0.5 + Math.random() * 1,
      opacity: inBand ? 0.4 + Math.random() * 0.6 : 0.08 + Math.random() * 0.2,
      delay: Math.random() * 5,
    };
  });
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  (
    {
      variant = 'stars',
      color = 'mixed',
      theme = 'dark',
      twinkle = true,
      ribbons = 5,
      tokenColor,
      showGradient = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [stars, setStars] = React.useState<StarData[]>([]);
    const mwUid = React.useId().replace(/:/g, '');

    const needsStars = (variant === 'stars' || variant === 'galaxy' || variant === 'milkyway') && theme === 'dark';

    React.useEffect(() => {
      if (!needsStars) { setStars([]); return; }
      const count = variant === 'stars' ? 120 : variant === 'galaxy' ? 150 : 180;
      setStars(variant === 'milkyway' ? generateMilkywayStars(count) : generateStars(count));
    }, [variant, needsStars]);

    const rootCls = React.useMemo(() => [
      styles.root,
      theme === 'dark' ? styles['root-dark'] : styles['root-light'],
      className,
    ].filter(Boolean).join(' '), [theme, className]);

    // Base background color: tokenColor > scheme fallback (solid/gradient only)
    const variantStyle = React.useMemo<React.CSSProperties>(() => {
      const base = tokenColor
        ? `var(--stella-color-${tokenColor})`
        : variant === 'solid'
          ? SOLID_COLORS[theme][color]
          : undefined;
      return base ? { backgroundColor: base } : {};
    }, [tokenColor, variant, theme, color]);

    const mwRibbons  = React.useMemo(() => generateMWRibbons(Math.max(1, ribbons)), [ribbons]);
    const waveColors = WAVE_COLORS[color];
    const glowColors = GALAXY_GLOW_COLORS[color];
    const meshBlobs  = MESH_BLOBS[theme][color];

    const { style: styleProp, ...restProps } = props;

    return (
      <div ref={ref} className={rootCls} style={{ ...variantStyle, ...styleProp }} {...restProps}>

        {/* Stars — dark theme only */}
        {needsStars && (
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
        )}

        {/* Galaxy — nebula glow blobs */}
        {variant === 'galaxy' && (
          <div className={styles.blobs} aria-hidden="true">
            {GALAXY_BLOBS.map((blob, i) => (
              <div
                key={i}
                className={styles.blob}
                style={{
                  left: blob.x, top: blob.y,
                  width: blob.size, height: blob.size,
                  background: `radial-gradient(circle, ${glowColors[i]} 0%, transparent 70%)`,
                }}
              />
            ))}
          </div>
        )}

        {/* Milky Way — SVG neon wave ribbons with diagonal opacity fade */}
        {variant === 'milkyway' && (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className={styles.wave}
            aria-hidden="true"
          >
            <defs>
              {/* Diagonal gradient: transparent at top-left → opaque at bottom-right */}
              <linearGradient id={`mw-fade-${mwUid}`} x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0%"   stopColor="white" stopOpacity="0.04" />
                <stop offset="40%"  stopColor="white" stopOpacity="0.30" />
                <stop offset="75%"  stopColor="white" stopOpacity="0.65" />
                <stop offset="100%" stopColor="white" stopOpacity="0.90" />
              </linearGradient>
              <mask id={`mw-mask-${mwUid}`}>
                <rect x="0" y="0" width="100" height="100" fill={`url(#mw-fade-${mwUid})`} />
              </mask>
            </defs>

            <g mask={`url(#mw-mask-${mwUid})`}>
              {/* Outer glow passes */}
              {mwRibbons.map(([d, sw], i) => (
                <path
                  key={`outer-${i}`}
                  d={d}
                  stroke={waveColors.outer}
                  strokeWidth={sw}
                  fill="none"
                  className={styles['wave-outer']}
                />
              ))}
              {/* Mid glow passes */}
              {mwRibbons.map(([d, sw], i) => (
                <path
                  key={`mid-${i}`}
                  d={d}
                  stroke={waveColors.mid}
                  strokeWidth={sw * 0.35}
                  fill="none"
                  className={styles['wave-mid']}
                />
              ))}
              {/* Bright center line */}
              {mwRibbons.map(([d,, csw], i) => (
                <path
                  key={`center-${i}`}
                  d={d}
                  stroke={waveColors.center}
                  strokeWidth={csw}
                  fill="none"
                />
              ))}
            </g>
          </svg>
        )}

        {/* Gradient — vivid mesh (overlapping radial blobs) */}
        {variant === 'gradient' && showGradient && (
          <div className={styles.blobs} aria-hidden="true">
            {meshBlobs.map((blob, i) => (
              <div
                key={i}
                className={styles['mesh-blob']}
                style={{
                  left: blob.x, top: blob.y,
                  width: blob.size, height: blob.size,
                  background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
                }}
              />
            ))}
          </div>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    );
  },
);

Background.displayName = 'Background';
