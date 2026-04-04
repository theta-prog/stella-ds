/**
 * Text -- Stella UI
 *
 * Polymorphic text primitive for body copy, labels, and captions.
 * Uses CSS Modules with Stella design tokens and supports the
 * Radix asChild pattern for composable rendering.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Text.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type TextSize = 'xs' | 'sm' | 'md' | 'lg';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'disabled' | (string & {});
export type TextAlign = 'left' | 'center' | 'right';
export type TextAs = 'p' | 'span' | 'div' | 'label';
export type TextFamily = 'sans' | 'serif' | 'serif-print' | 'display' | 'statement' | 'mono';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Font size preset */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Font family */
  family?: TextFamily;
  /** Text color mapped to starlight tokens */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** HTML element to render as */
  as?: TextAs;
  /**
   * When true, the Text renders its child element as the root node
   * (Radix UI asChild / Slot pattern).
   */
  asChild?: boolean;
  /** Truncate overflowing text with an ellipsis */
  truncate?: boolean;
}

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      size = 'md',
      weight = 'normal',
      family = 'sans',
      color = 'primary',
      align = 'left',
      as: Tag = 'p',
      asChild = false,
      truncate = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : Tag;
    const isToken = color === 'primary' || color === 'secondary' || color === 'disabled';

    const cls = [
      styles.base,
      styles[`size-${size}`],
      styles[`weight-${weight}`],
      styles[`family-${family}`],
      isToken ? styles[`color-${color}`] : '',
      styles[`align-${align}`],
      truncate ? styles.truncate : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Comp
        ref={ref as React.Ref<never>}
        className={cls}
        style={isToken ? style : { color, ...style }}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Text.displayName = 'Text';
