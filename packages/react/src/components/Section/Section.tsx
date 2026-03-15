/**
 * Section – Stella UI
 *
 * Semantic <section> wrapper with max-width, centered content, and padding.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Section.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type SectionSize = 'sm' | 'md' | 'lg' | 'full';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Max-width preset (default: 'lg') */
  size?: SectionSize;
  /** Vertical padding preset (default: 'md') */
  padding?: 'sm' | 'md' | 'lg' | 'none';
  /** Render as <section> (default) or override via asChild */
  asChild?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      size = 'lg',
      padding = 'md',
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'section';

    const cls = [
      styles.section,
      styles[`size-${size}`],
      styles[`padding-${padding}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Comp ref={ref} className={cls} {...props}>
        {children}
      </Comp>
    );
  },
);

Section.displayName = 'Section';
