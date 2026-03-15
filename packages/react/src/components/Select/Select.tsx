/**
 * Select – Stella UI
 *
 * Compound component built on Radix UI Select primitive for full accessibility.
 * Uses CSS Modules with Stella design tokens.
 *
 * Usage:
 *   <Select>
 *     <SelectTrigger placeholder="Pick a fruit…" />
 *     <SelectContent>
 *       <SelectItem value="apple">Apple</SelectItem>
 *       <SelectItem value="banana">Banana</SelectItem>
 *     </SelectContent>
 *   </Select>
 */

import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import styles from './Select.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectTriggerProps
  extends Omit<RadixSelect.SelectTriggerProps, 'asChild'> {
  /** Size preset — matches Input/Button sizes */
  size?: SelectSize;
  /**
   * Error state. Pass `true` to show error styling, or a string to
   * also render an error message below the trigger.
   */
  error?: boolean | string;
  /** Placeholder text shown when no value is selected */
  placeholder?: string;
}

// ----------------------------------------------------------------
// Root
// ----------------------------------------------------------------

/** Re-export Radix Select root — no wrapper needed. */
export const Select = RadixSelect.Root;

// ----------------------------------------------------------------
// Trigger
// ----------------------------------------------------------------

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(({ size = 'md', error = false, placeholder, className, disabled, ...props }, ref) => {
  const hasError = Boolean(error);
  const hasErrorMessage = typeof error === 'string' && Boolean(error);
  const errorId = React.useId();

  const triggerCls = [
    styles.trigger,
    styles[`size-${size}`],
    hasError ? styles['state-error'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.triggerWrapper}>
      <RadixSelect.Trigger
        ref={ref}
        className={triggerCls}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={hasErrorMessage ? errorId : undefined}
        {...props}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon asChild>
          <ChevronIcon className={styles.chevron} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      {hasErrorMessage && (
        <span id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
});

SelectTrigger.displayName = 'SelectTrigger';

// ----------------------------------------------------------------
// Content
// ----------------------------------------------------------------

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectContentProps
>(({ className, children, position = 'popper', sideOffset = 4, ...props }, ref) => (
  <RadixSelect.Portal>
    <RadixSelect.Content
      ref={ref}
      className={[styles.content, className ?? ''].filter(Boolean).join(' ')}
      position={position}
      sideOffset={sideOffset}
      {...props}
    >
      <RadixSelect.Viewport className={styles.viewport}>
        {children}
      </RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
));

SelectContent.displayName = 'SelectContent';

// ----------------------------------------------------------------
// Item
// ----------------------------------------------------------------

export interface SelectItemProps extends RadixSelect.SelectItemProps {
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, children, className, disabled, ...props }, ref) => (
    <RadixSelect.Item
      ref={ref}
      value={value}
      disabled={disabled}
      className={[styles.item, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className={styles.itemIndicator}>
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  ),
);

SelectItem.displayName = 'SelectItem';

// ----------------------------------------------------------------
// Label
// ----------------------------------------------------------------

export const SelectLabel = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectLabelProps
>(({ className, ...props }, ref) => (
  <RadixSelect.Label
    ref={ref}
    className={[styles.label, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectLabel.displayName = 'SelectLabel';

// ----------------------------------------------------------------
// Separator
// ----------------------------------------------------------------

export const SelectSeparator = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <RadixSelect.Separator
    ref={ref}
    className={[styles.separator, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectSeparator.displayName = 'SelectSeparator';

// ----------------------------------------------------------------
// Internal icons
// ----------------------------------------------------------------

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6L4.5 8.5L10 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
