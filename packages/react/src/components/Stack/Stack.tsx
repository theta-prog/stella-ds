/**
 * Stack – Stella UI
 *
 * Flexbox layout primitive for composing vertical or horizontal lists.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Stack.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Flex direction (default: 'vertical') */
  direction?: 'vertical' | 'horizontal';
  /** Gap between children using spacing tokens (default: '4') */
  gap?: '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16';
  /** Align items (default: 'stretch') */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content (default: 'start') */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Wrap flex items (default: false) */
  wrap?: boolean;
  /** Render as any element via asChild pattern */
  asChild?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'vertical',
      gap = '4',
      align = 'stretch',
      justify = 'start',
      wrap = false,
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';

    const cls = [
      styles.stack,
      styles[`direction-${direction}`],
      styles[`gap-${gap}`],
      styles[`align-${align}`],
      styles[`justify-${justify}`],
      wrap ? styles.wrap : '',
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

Stack.displayName = 'Stack';
