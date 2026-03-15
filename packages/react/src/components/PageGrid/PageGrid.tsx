/**
 * PageGrid – Stella UI
 *
 * CSS grid layout for full pages with sidebar support.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import styles from './PageGrid.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type PageGridLayout = 'single' | 'sidebar-left' | 'sidebar-right' | 'three-col';

export interface PageGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Grid layout variant (default: 'single') */
  layout?: PageGridLayout;
  /** Gap between columns (default: '8') */
  gap?: '4' | '6' | '8' | '12';
  /** Full-bleed or contained (default: false = contained) */
  fullBleed?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const PageGrid = React.forwardRef<HTMLDivElement, PageGridProps>(
  (
    {
      layout = 'single',
      gap = '8',
      fullBleed = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const cls = [
      styles.pageGrid,
      styles[`layout-${layout}`],
      styles[`gap-${gap}`],
      fullBleed ? styles.fullBleed : styles.contained,
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={cls} {...props}>
        {children}
      </div>
    );
  },
);

PageGrid.displayName = 'PageGrid';
