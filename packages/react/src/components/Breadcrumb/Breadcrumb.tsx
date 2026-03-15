/**
 * Breadcrumb – Stella UI
 *
 * Accessible breadcrumb navigation using the compound component pattern.
 * Supports asChild for BreadcrumbLink to render as any element (router Link, etc.).
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Breadcrumb.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement>;

export type BreadcrumbListProps = React.HTMLAttributes<HTMLOListElement>;

export type BreadcrumbItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Render as a child element (Radix UI Slot pattern) */
  asChild?: boolean;
  /** Marks this as the current page — renders as <span>, adds aria-current="page" */
  isCurrentPage?: boolean;
}

export type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLSpanElement>;

// ----------------------------------------------------------------
// Breadcrumb (Root)
// ----------------------------------------------------------------

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      className={[styles.root, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  ),
);

Breadcrumb.displayName = 'Breadcrumb';

// ----------------------------------------------------------------
// BreadcrumbList
// ----------------------------------------------------------------

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  BreadcrumbListProps
>(({ className, children, ...props }, ref) => (
  <ol
    ref={ref}
    className={[styles.list, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </ol>
));

BreadcrumbList.displayName = 'BreadcrumbList';

// ----------------------------------------------------------------
// BreadcrumbItem
// ----------------------------------------------------------------

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={[styles.item, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </li>
));

BreadcrumbItem.displayName = 'BreadcrumbItem';

// ----------------------------------------------------------------
// BreadcrumbLink
// ----------------------------------------------------------------

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ asChild = false, isCurrentPage = false, className, children, ...props }, ref) => {
  if (isCurrentPage) {
    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        aria-current="page"
        className={[styles.link, styles['link-current'], className ?? '']
          .filter(Boolean)
          .join(' ')}
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        {children}
      </span>
    );
  }

  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={[styles.link, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Comp>
  );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

// ----------------------------------------------------------------
// BreadcrumbSeparator
// ----------------------------------------------------------------

export const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={[styles.separator, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children ?? '›'}
  </span>
));

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
