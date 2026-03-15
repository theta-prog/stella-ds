/**
 * Alert – Stella UI
 *
 * Inline, static feedback banner.
 * Uses role="alert" for errors/warnings (assertive) and
 * role="status" for info/success (polite) so screen readers
 * announce appropriately without interrupting.
 */

import * as React from 'react';
import styles from './Alert.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  /** Renders an × button; called when the user dismisses */
  onClose?: () => void;
}

export type AlertTitleProps = React.HTMLAttributes<HTMLParagraphElement>;
export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

// ----------------------------------------------------------------
// Alert (Root)
// ----------------------------------------------------------------

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', onClose, className, children, ...props }, ref) => {
    const isAssertive = variant === 'error' || variant === 'warning';

    const cls = [
      styles.alert,
      styles[`variant-${variant}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        role={isAssertive ? 'alert' : 'status'}
        aria-live={isAssertive ? 'assertive' : 'polite'}
        aria-atomic="true"
        className={cls}
        {...props}
      >
        <span className={styles.icon} aria-hidden="true">
          {variantIcons[variant]}
        </span>

        <div className={styles.content}>{children}</div>

        {onClose && (
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close alert"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

// ----------------------------------------------------------------
// AlertTitle
// ----------------------------------------------------------------

export const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={[styles.title, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </p>
  ),
);

AlertTitle.displayName = 'AlertTitle';

// ----------------------------------------------------------------
// AlertDescription
// ----------------------------------------------------------------

export const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={[styles.description, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </p>
  ),
);

AlertDescription.displayName = 'AlertDescription';

// ----------------------------------------------------------------
// Internal icons
// ----------------------------------------------------------------

const variantIcons: Record<AlertVariant, React.ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 7v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
