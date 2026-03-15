/**
 * Tabs – Stella UI
 *
 * Compound component wrapping Radix UI Tabs primitives.
 * Supports 'line' (underline) and 'solid' (pill/box) variants via context.
 */

import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './Tabs.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type TabsVariant = 'line' | 'solid';

export type TabsProps = RadixTabs.TabsProps & {
  /** Visual style variant — 'line' (default) or 'solid' */
  variant?: TabsVariant;
};

export type TabsListProps = RadixTabs.TabsListProps;

export type TabsTriggerProps = RadixTabs.TabsTriggerProps;

export type TabsContentProps = RadixTabs.TabsContentProps;

// ----------------------------------------------------------------
// Context
// ----------------------------------------------------------------

type TabsContextValue = {
  variant: TabsVariant;
};

const TabsContext = React.createContext<TabsContextValue>({ variant: 'line' });

// ----------------------------------------------------------------
// TabsRoot (exported as Tabs)
// ----------------------------------------------------------------

export const Tabs = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Root>,
  TabsProps
>(({ variant = 'line', children, ...props }, ref) => {
  const contextValue = React.useMemo(() => ({ variant }), [variant]);
  return (
    <TabsContext.Provider value={contextValue}>
      <RadixTabs.Root ref={ref} {...props}>
        {children}
      </RadixTabs.Root>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';

// ----------------------------------------------------------------
// TabsList
// ----------------------------------------------------------------

export const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  TabsListProps
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TabsContext);

  const cls = [
    styles.list,
    styles[`list-${variant}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <RadixTabs.List ref={ref} className={cls} {...props} />;
});

TabsList.displayName = 'TabsList';

// ----------------------------------------------------------------
// TabsTrigger
// ----------------------------------------------------------------

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TabsContext);

  const cls = [
    styles.trigger,
    styles[`trigger-${variant}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <RadixTabs.Trigger ref={ref} className={cls} {...props} />;
});

TabsTrigger.displayName = 'TabsTrigger';

// ----------------------------------------------------------------
// TabsContent
// ----------------------------------------------------------------

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => {
  const cls = [styles.content, className ?? ''].filter(Boolean).join(' ');
  return <RadixTabs.Content ref={ref} className={cls} {...props} />;
});

TabsContent.displayName = 'TabsContent';
