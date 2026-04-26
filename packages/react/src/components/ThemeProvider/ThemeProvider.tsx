'use client';

import * as React from 'react';
import type { ThemeName } from '@stella-ds/theme';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  portalContainer: HTMLDivElement | null;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controlled theme value for this scope. */
  theme?: ThemeName;
  /** Initial theme for uncontrolled usage. Defaults to dark. */
  defaultTheme?: ThemeName;
  /** Called whenever the current theme changes. */
  onThemeChange?: (theme: ThemeName) => void;
}

export const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(
  (
    {
      theme: controlledTheme,
      defaultTheme = 'dark',
      onThemeChange,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledTheme, setUncontrolledTheme] = React.useState<ThemeName>(defaultTheme);
    const [portalContainer, setPortalContainer] = React.useState<HTMLDivElement | null>(null);
    const theme = controlledTheme ?? uncontrolledTheme;

    const setTheme = React.useCallback(
      (nextTheme: ThemeName) => {
        if (controlledTheme == null) {
          setUncontrolledTheme(nextTheme);
        }
        onThemeChange?.(nextTheme);
      },
      [controlledTheme, onThemeChange],
    );

    const contextValue = React.useMemo(
      () => ({ theme, setTheme, portalContainer }),
      [theme, setTheme, portalContainer],
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-theme={theme}
          data-stella-theme=""
          className={className}
          style={{ ...style, colorScheme: theme }}
          {...props}
        >
          {children}
          <div ref={setPortalContainer} data-theme={theme} data-stella-theme-portal="" />
        </div>
      </ThemeContext.Provider>
    );
  },
);

ThemeProvider.displayName = 'ThemeProvider';

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
}

export function useOptionalTheme(): ThemeContextValue | null {
  return React.useContext(ThemeContext);
}