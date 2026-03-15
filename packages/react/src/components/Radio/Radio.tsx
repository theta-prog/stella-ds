/**
 * Radio / RadioGroup – Stella UI
 *
 * Compound component built on Radix UI RadioGroup primitive.
 * Uses CSS Modules with Stella design tokens.
 */

import * as React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import styles from './Radio.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioGroupProps
  extends Omit<RadixRadioGroup.RadioGroupProps, 'dir'> {
  /** Size preset — propagated to all RadioItems via context */
  size?: RadioSize;
  /** Error state — highlights all items' borders in red */
  error?: boolean;
  /** Layout direction of items (default: vertical) */
  orientation?: 'horizontal' | 'vertical';
}

export interface RadioItemProps
  extends Omit<RadixRadioGroup.RadioGroupItemProps, 'asChild'> {
  /** The value this item represents */
  value: string;
  /** Optional label rendered beside the radio circle */
  label?: React.ReactNode;
}

// ----------------------------------------------------------------
// Internal context — passes size + error down to RadioItem
// ----------------------------------------------------------------

interface RadioContextValue {
  size: RadioSize;
  error: boolean;
}

const RadioContext = React.createContext<RadioContextValue>({
  size: 'md',
  error: false,
});

// ----------------------------------------------------------------
// RadioGroup
// ----------------------------------------------------------------

export const RadioGroup = React.forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(
  (
    {
      size = 'md',
      error = false,
      orientation = 'vertical',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const groupCls = [
      styles.group,
      styles[`group-${orientation}`],
      error ? styles['state-error'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <RadioContext.Provider value={{ size, error }}>
        <RadixRadioGroup.Root
          ref={ref}
          className={groupCls}
          orientation={orientation}
          aria-invalid={error || undefined}
          {...props}
        >
          {children}
        </RadixRadioGroup.Root>
      </RadioContext.Provider>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

// ----------------------------------------------------------------
// RadioItem
// ----------------------------------------------------------------

export const RadioItem = React.forwardRef<
  HTMLButtonElement,
  RadioItemProps
>(({ value, label, disabled, className, ...props }, ref) => {
  const { size, error } = React.useContext(RadioContext);
  const innerId = React.useId();

  const radioCls = [
    styles.radio,
    styles[`size-${size}`],
    error ? styles['state-error-radio'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.item}>
      <RadixRadioGroup.Item
        ref={ref}
        id={innerId}
        value={value}
        disabled={disabled}
        className={radioCls}
        aria-invalid={error || undefined}
        {...props}
      >
        <RadixRadioGroup.Indicator className={styles.indicator}>
          <FilledCircleIcon />
        </RadixRadioGroup.Indicator>
      </RadixRadioGroup.Item>

      {label && (
        <label
          htmlFor={innerId}
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
});

RadioItem.displayName = 'RadioItem';

// ----------------------------------------------------------------
// Internal icon — filled circle indicator
// ----------------------------------------------------------------

function FilledCircleIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}
