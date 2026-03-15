/**
 * Card – Stella UI
 *
 * Pure HTML compound component for content containers.
 * Supports an optional hover lift effect via the `hoverable` prop.
 */

import * as React from 'react';
import styles from './Card.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a hover lift effect (box-shadow + translateY) */
  hoverable?: boolean;
}

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

// ----------------------------------------------------------------
// Card (Root)
// ----------------------------------------------------------------

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = false, className, children, ...props }, ref) => {
    const cls = [
      styles.card,
      hoverable ? styles.hoverable : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={cls} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

// ----------------------------------------------------------------
// CardHeader
// ----------------------------------------------------------------

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.header, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

CardHeader.displayName = 'CardHeader';

// ----------------------------------------------------------------
// CardTitle
// ----------------------------------------------------------------

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={[styles.title, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </h3>
  ),
);

CardTitle.displayName = 'CardTitle';

// ----------------------------------------------------------------
// CardDescription
// ----------------------------------------------------------------

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
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

CardDescription.displayName = 'CardDescription';

// ----------------------------------------------------------------
// CardContent
// ----------------------------------------------------------------

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
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

CardContent.displayName = 'CardContent';

// ----------------------------------------------------------------
// CardFooter
// ----------------------------------------------------------------

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.footer, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

CardFooter.displayName = 'CardFooter';
