/**
 * Checkbox – Stella UI
 *
 * Built on Radix UI Checkbox primitive for full accessibility.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import styles from './Checkbox.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps
  extends Omit<RadixCheckbox.CheckboxProps, 'asChild'> {
  /** Size preset */
  size?: CheckboxSize;
  /** Label text rendered beside the checkbox */
  label?: React.ReactNode;
  /** Error state */
  error?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = 'md', label, error = false, disabled, className, id, ...props }, ref) => {
    const innerId = React.useId();
    const checkboxId = id ?? innerId;

    const rootCls = [
      styles.root,
      styles[`size-${size}`],
      error ? styles['state-error'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        <RadixCheckbox.Root
          ref={ref}
          id={checkboxId}
          className={rootCls}
          disabled={disabled}
          aria-invalid={error || undefined}
          {...props}
        >
          <RadixCheckbox.Indicator className={styles.indicator}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>

        {label && (
          <label
            htmlFor={checkboxId}
            className={[
              styles.label,
              styles[`label-${size}`],
              disabled ? styles['label-disabled'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

// ----------------------------------------------------------------
// Internal icon
// ----------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
