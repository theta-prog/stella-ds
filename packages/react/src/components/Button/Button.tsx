/**
 * Button – Stella UI
 *
 * Built on Radix UI Slot for polymorphic rendering (asChild pattern).
 * Uses CSS Modules for styling with Stella design tokens.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'glow';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /**
   * When true, the Button renders its child element as the root node
   * (Radix UI asChild / Slot pattern). Useful for rendering as <a> or
   * a router Link without losing button styling.
   */
  asChild?: boolean;
  /** Shows a loading spinner and disables interaction */
  loading?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      asChild = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const cls = [
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      loading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Comp
        ref={ref}
        className={cls}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}
        <span className={styles.label}>{children}</span>
      </Comp>
    );
  },
);

Button.displayName = 'Button';
