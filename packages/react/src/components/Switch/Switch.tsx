/**
 * Switch – Stella UI
 *
 * Built on Radix UI Switch primitive for full accessibility.
 * Uses CSS Modules with Stella design tokens.
 */

'use client';

import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import styles from './Switch.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<RadixSwitch.SwitchProps, 'asChild'> {
  /** Size preset */
  size?: SwitchSize;
  /** Label text rendered beside the switch */
  label?: React.ReactNode;
  /** Error state */
  error?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'md', label, error = false, disabled, className, id, ...props }, ref) => {
    const innerId = React.useId();
    const switchId = id ?? innerId;

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
        <RadixSwitch.Root
          ref={ref}
          id={switchId}
          className={rootCls}
          disabled={disabled}
          aria-invalid={error || undefined}
          {...props}
        >
          <RadixSwitch.Thumb className={[styles.thumb, styles[`thumb-${size}`]].join(' ')} />
        </RadixSwitch.Root>

        {label && (
          <label
            htmlFor={switchId}
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

Switch.displayName = 'Switch';
