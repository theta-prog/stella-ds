/**
 * Tooltip – Stella UI
 *
 * Thin styled wrapper around Radix UI Tooltip primitives.
 * TooltipProvider, Tooltip (Root), and TooltipTrigger are re-exported
 * directly; TooltipContent adds the dark bubble with animations.
 */

'use client';

import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import styles from './Tooltip.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export type TooltipContentProps = RadixTooltip.TooltipContentProps;

// ----------------------------------------------------------------
// Re-exports (unstyled Radix primitives)
// ----------------------------------------------------------------

export const TooltipProvider = RadixTooltip.Provider;

export const Tooltip = RadixTooltip.Root;

export const TooltipTrigger = RadixTooltip.Trigger;

// ----------------------------------------------------------------
// TooltipContent
// ----------------------------------------------------------------

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  TooltipContentProps
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <RadixTooltip.Portal>
    <RadixTooltip.Content
      ref={ref}
      sideOffset={sideOffset}
      className={[styles.content, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </RadixTooltip.Content>
  </RadixTooltip.Portal>
));

TooltipContent.displayName = 'TooltipContent';
