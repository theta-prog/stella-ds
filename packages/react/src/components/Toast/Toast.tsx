/**
 * Toast – Stella UI
 *
 * Ephemeral overlay notification built on Radix UI Toast.
 * Radix handles the live region (role="status", aria-live="polite")
 * and auto-dismiss timer automatically.
 *
 * Usage:
 *   1. Wrap your app with <ToastProvider> + <ToastViewport>
 *   2. Render <Toast open={open} onOpenChange={setOpen}> wherever needed
 */

import * as React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import styles from './Toast.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps extends RadixToast.ToastProps {
  variant?: ToastVariant;
}

export type ToastTitleProps = RadixToast.ToastTitleProps;
export type ToastDescriptionProps = RadixToast.ToastDescriptionProps;
export type ToastActionProps = RadixToast.ToastActionProps;
export interface ToastCloseProps extends RadixToast.ToastCloseProps {
  /** Icon-only close button label (default: "Close notification") */
  label?: string;
}
export type ToastProviderProps = RadixToast.ToastProviderProps;
export type ToastViewportProps = RadixToast.ToastViewportProps;

// ----------------------------------------------------------------
// ToastProvider — wrap your app once
// ----------------------------------------------------------------

export const ToastProvider = RadixToast.Provider;

// ----------------------------------------------------------------
// ToastViewport — fixed position container for toasts
// ----------------------------------------------------------------

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <RadixToast.Viewport
    ref={ref}
    className={[styles.viewport, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

ToastViewport.displayName = 'ToastViewport';

// ----------------------------------------------------------------
// Toast (Root)
// ----------------------------------------------------------------

export const Toast = React.forwardRef<
  React.ElementRef<typeof RadixToast.Root>,
  ToastProps
>(({ variant = 'info', className, children, ...props }, ref) => (
  <RadixToast.Root
    ref={ref}
    className={[
      styles.toast,
      styles[`variant-${variant}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <span className={styles.icon} aria-hidden="true">
      {variantIcons[variant]}
    </span>
    <div className={styles.content}>{children}</div>
  </RadixToast.Root>
));

Toast.displayName = 'Toast';

// ----------------------------------------------------------------
// ToastTitle
// ----------------------------------------------------------------

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof RadixToast.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <RadixToast.Title
    ref={ref}
    className={[styles.title, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

ToastTitle.displayName = 'ToastTitle';

// ----------------------------------------------------------------
// ToastDescription
// ----------------------------------------------------------------

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof RadixToast.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <RadixToast.Description
    ref={ref}
    className={[styles.description, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

ToastDescription.displayName = 'ToastDescription';

// ----------------------------------------------------------------
// ToastClose
// ----------------------------------------------------------------

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  ToastCloseProps
>(({ label = 'Close notification', className, ...props }, ref) => (
  <RadixToast.Close
    ref={ref}
    aria-label={label}
    className={[styles.close, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    <CloseIcon />
  </RadixToast.Close>
));

ToastClose.displayName = 'ToastClose';

// ----------------------------------------------------------------
// ToastAction
// ----------------------------------------------------------------

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof RadixToast.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <RadixToast.Action
    ref={ref}
    className={[styles.action, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  />
));

ToastAction.displayName = 'ToastAction';

// ----------------------------------------------------------------
// Internal icons (same as Alert)
// ----------------------------------------------------------------

const variantIcons: Record<ToastVariant, React.ReactNode> = {
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
