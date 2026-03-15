/**
 * Badge – Stella UI
 *
 * Inline label for status, counts, or categories.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import styles from './Badge.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type BadgeVariant = 'solid' | 'outline' | 'subtle';
export type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'solid',
      color = 'default',
      size = 'md',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const cls = [
      styles.base,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      styles[`color-${color}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={cls} {...props}>
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
