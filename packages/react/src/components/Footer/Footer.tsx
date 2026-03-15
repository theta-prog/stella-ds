/**
 * Footer – Stella UI
 *
 * Simple site footer with grid content layout.
 * Compound component pattern: Footer, FooterContent, FooterDivider, FooterBottom.
 */

import * as React from 'react';
import styles from './Footer.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export type FooterContentProps = React.HTMLAttributes<HTMLDivElement>;
export type FooterDividerProps = React.HTMLAttributes<HTMLHRElement>;
export type FooterBottomProps = React.HTMLAttributes<HTMLDivElement>;

// ----------------------------------------------------------------
// Footer (Root)
// ----------------------------------------------------------------

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => (
    <footer
      ref={ref}
      className={[styles.footer, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </footer>
  ),
);

Footer.displayName = 'Footer';

// ----------------------------------------------------------------
// FooterContent
// ----------------------------------------------------------------

export const FooterContent = React.forwardRef<HTMLDivElement, FooterContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.content, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

FooterContent.displayName = 'FooterContent';

// ----------------------------------------------------------------
// FooterDivider
// ----------------------------------------------------------------

export const FooterDivider = React.forwardRef<HTMLHRElement, FooterDividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={[styles.divider, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    />
  ),
);

FooterDivider.displayName = 'FooterDivider';

// ----------------------------------------------------------------
// FooterBottom
// ----------------------------------------------------------------

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.bottom, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

FooterBottom.displayName = 'FooterBottom';
