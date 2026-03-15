/**
 * Input – Stella UI
 *
 * Single-line text input with size and error state support.
 * Uses CSS Modules for styling with Stella design tokens.
 */

import * as React from 'react';
import styles from './Input.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size preset — matches Button sizes */
  size?: InputSize;
  /**
   * Error state. Pass `true` to show error styling, or a string to
   * also render an error message below the input.
   */
  error?: boolean | string;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error = false, disabled, className, ...props }, ref) => {
    const hasError = Boolean(error);
    const errorId = React.useId();
    const hasErrorMessage = typeof error === 'string' && Boolean(error);

    const cls = [
      styles.input,
      styles[`size-${size}`],
      hasError ? styles['state-error'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={cls}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={hasErrorMessage ? errorId : undefined}
          {...props}
        />
        {hasErrorMessage && (
          <span id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
