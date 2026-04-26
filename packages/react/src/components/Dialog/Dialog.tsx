/**
 * Dialog – Stella UI
 *
 * Compound component wrapping Radix UI Dialog primitives.
 * Provides accessible modal dialogs with animations, an overlay,
 * and an optional default close button.
 */

'use client';

import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { useOptionalTheme } from '../ThemeProvider';
import styles from './Dialog.module.css';

// ----------------------------------------------------------------
// Re-exports (unstyled Radix primitives)
// ----------------------------------------------------------------

export const Dialog = RadixDialog.Root;
Dialog.displayName = 'Dialog';

export const DialogTrigger = RadixDialog.Trigger;
DialogTrigger.displayName = 'DialogTrigger';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type DialogOverlayProps = RadixDialog.DialogOverlayProps;

export interface DialogContentProps extends RadixDialog.DialogContentProps {
  /** Show the default × close button (default: true) */
  showClose?: boolean;
}

export type DialogTitleProps = RadixDialog.DialogTitleProps;
export type DialogDescriptionProps = RadixDialog.DialogDescriptionProps;
export type DialogCloseProps = RadixDialog.DialogCloseProps;
export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

// ----------------------------------------------------------------
// DialogOverlay
// ----------------------------------------------------------------

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => {
  const themeContext = useOptionalTheme();

  return (
    <RadixDialog.Overlay
      ref={ref}
      data-theme={themeContext?.theme}
      className={[styles.overlay, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    />
  );
});

DialogOverlay.displayName = 'DialogOverlay';

// ----------------------------------------------------------------
// DialogContent
// ----------------------------------------------------------------

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogContentProps
>(({ showClose = true, className, children, ...props }, ref) => {
  const themeContext = useOptionalTheme();

  return (
    <RadixDialog.Portal container={themeContext?.portalContainer ?? undefined}>
      <DialogOverlay />
      <RadixDialog.Content
        ref={ref}
        data-theme={themeContext?.theme}
        className={[styles.content, className ?? ''].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
        {showClose && (
          <DialogClose className={styles.closeButton} aria-label="Close dialog">
            <CloseIcon />
          </DialogClose>
        )}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
});

DialogContent.displayName = 'DialogContent';

// ----------------------------------------------------------------
// DialogHeader
// ----------------------------------------------------------------

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.dialogHeader, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

DialogHeader.displayName = 'DialogHeader';

// ----------------------------------------------------------------
// DialogFooter
// ----------------------------------------------------------------

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.dialogFooter, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

DialogFooter.displayName = 'DialogFooter';

// ----------------------------------------------------------------
// DialogTitle
// ----------------------------------------------------------------

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  DialogTitleProps
>(({ className, children, ...props }, ref) => (
  <RadixDialog.Title
    ref={ref}
    className={[styles.dialogTitle, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </RadixDialog.Title>
));

DialogTitle.displayName = 'DialogTitle';

// ----------------------------------------------------------------
// DialogDescription
// ----------------------------------------------------------------

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  DialogDescriptionProps
>(({ className, children, ...props }, ref) => (
  <RadixDialog.Description
    ref={ref}
    className={[styles.dialogDescription, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </RadixDialog.Description>
));

DialogDescription.displayName = 'DialogDescription';

// ----------------------------------------------------------------
// DialogClose
// ----------------------------------------------------------------

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Close>,
  DialogCloseProps
>(({ className, children, ...props }, ref) => (
  <RadixDialog.Close
    ref={ref}
    className={[styles.close, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </RadixDialog.Close>
));

DialogClose.displayName = 'DialogClose';

// ----------------------------------------------------------------
// Internal icons
// ----------------------------------------------------------------

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 3l10 10M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
