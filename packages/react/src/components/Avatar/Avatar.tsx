/**
 * Avatar – Stella UI
 *
 * Round image display for user avatars.
 * Falls back to initials when image is unavailable.
 * Uses CSS Modules with Stella design tokens.
 */

'use client';

import * as React from 'react';
import styles from './Avatar.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL for the avatar. */
  src?: string;
  /** Alt text for the avatar image (required for accessibility). */
  alt: string;
  /** Size of the avatar. */
  size?: AvatarSize;
  /** Fallback content shown when image fails or is missing. Defaults to first character of `alt`. */
  fallback?: React.ReactNode;
}

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

const sizeToPx: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      size = 'md',
      fallback,
      className,
      ...props
    },
    ref,
  ) => {
    const [imgError, setImgError] = React.useState(false);

    // Reset error state when src changes
    React.useEffect(() => {
      setImgError(false);
    }, [src]);

    const showImage = src && !imgError;
    const px = sizeToPx[size];

    const fallbackContent = fallback ?? alt.charAt(0).toUpperCase();

    const cls = [
      styles.base,
      styles[`size-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        role={showImage ? undefined : 'img'}
        aria-label={showImage ? undefined : alt}
        className={cls}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            width={px}
            height={px}
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={styles.fallback} aria-hidden="true">
            {fallbackContent}
          </span>
        )}
      </span>
    );
  },
);

Avatar.displayName = 'Avatar';
