/**
 * Heading – Stella UI
 *
 * Semantic heading element (h1–h6) with configurable size, weight, and alignment.
 * Built on Radix UI Slot for polymorphic rendering (asChild pattern).
 * Uses CSS Modules for styling with Stella design tokens.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Heading.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingAlign = 'left' | 'center' | 'right';
export type HeadingFamily = 'sans' | 'serif' | 'serif-print' | 'display' | 'statement' | 'mono';
export type HeadingColor = 'primary' | (string & {});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level (1–6). Determines the rendered element (h1–h6). */
  level?: HeadingLevel;
  /** Visual size override. If omitted, maps from level: h1=3xl, h2=2xl, h3=xl, h4=lg, h5=md, h6=sm. */
  size?: HeadingSize;
  /** Font weight. */
  weight?: HeadingWeight;
  /** Text alignment. */
  align?: HeadingAlign;
  /** Font family. */
  family?: HeadingFamily;
  /** Text color. 'primary' uses the starlight-primary token; any CSS color value is also accepted. */
  color?: HeadingColor;
  /**
   * When true, the Heading renders its child element as the root node
   * (Radix UI asChild / Slot pattern).
   */
  asChild?: boolean;
}

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const levelToSize: Record<HeadingLevel, HeadingSize> = {
  1: '3xl',
  2: '2xl',
  3: 'xl',
  4: 'lg',
  5: 'md',
  6: 'sm',
};

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      size,
      weight = 'bold',
      family = 'serif',
      color = 'primary',
      align = 'left',
      asChild = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedSize = size ?? levelToSize[level];
    const Tag = asChild ? Slot : (`h${level}` as const);
    const isToken = color === 'primary';

    const cls = [
      styles.base,
      styles[`size-${resolvedSize}`],
      styles[`weight-${weight}`],
      styles[`family-${family}`],
      styles[`align-${align}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Tag
        ref={ref}
        className={cls}
        style={isToken ? style : { color, ...style }}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
