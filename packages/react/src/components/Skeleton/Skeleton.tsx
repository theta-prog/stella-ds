/**
 * Skeleton -- Stella UI
 *
 * Loading placeholder that pulses to indicate content is being loaded.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import styles from './Skeleton.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape of the skeleton placeholder. */
  variant?: SkeletonVariant;
  /** CSS width value. */
  width?: string | number;
  /** CSS height value. */
  height?: string | number;
  /** Number of text lines to render (only applies to the `text` variant). */
  lines?: number;
  /** Whether the pulse animation is active. */
  animate?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      lines = 1,
      animate = true,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const resolvedWidth =
      typeof width === 'number' ? `${width}px` : width;
    const resolvedHeight =
      typeof height === 'number' ? `${height}px` : height;

    // For text variant with multiple lines, render a wrapper with individual line elements
    if (variant === 'text' && lines > 1) {
      const wrapperCls = [styles.wrapper, className ?? '']
        .filter(Boolean)
        .join(' ');

      return (
        <div
          ref={ref}
          className={wrapperCls}
          role="presentation"
          aria-busy="true"
          aria-hidden="true"
          style={{ width: resolvedWidth, ...style }}
          {...props}
        >
          {Array.from({ length: lines }, (_, i) => {
            const isLast = i === lines - 1;
            const lineCls = [
              styles.base,
              styles['variant-text'],
              animate ? styles.animate : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={i}
                className={lineCls}
                style={{
                  width: isLast ? '60%' : '100%',
                  height: resolvedHeight,
                }}
              />
            );
          })}
        </div>
      );
    }

    // Single element skeleton
    const cls = [
      styles.base,
      styles[`variant-${variant}`],
      animate ? styles.animate : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={cls}
        role="presentation"
        aria-busy="true"
        aria-hidden="true"
        style={{ width: resolvedWidth, height: resolvedHeight, ...style }}
        {...props}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';
