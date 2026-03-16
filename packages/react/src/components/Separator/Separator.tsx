/**
 * Separator – Stella UI
 *
 * Visual divider between content sections.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import styles from './Separator.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation;
  /** When true, hides the separator from screen readers (role="none"). */
  decorative?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      orientation = 'horizontal',
      decorative = true,
      className,
      ...props
    },
    ref,
  ) => {
    const cls = [
      styles.base,
      styles[`orientation-${orientation}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const semanticProps = decorative
      ? { role: 'none' as const }
      : {
          role: 'separator' as const,
          'aria-orientation': orientation,
        };

    return (
      <div
        ref={ref}
        className={cls}
        {...semanticProps}
        {...props}
      />
    );
  },
);

Separator.displayName = 'Separator';
