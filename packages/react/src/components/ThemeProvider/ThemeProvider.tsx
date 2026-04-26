'use client';

import * as React from 'react';

type ThemeName = 'dark' | 'light';

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
  'data-theme'?: string;
  'data-stella-theme'?: string;
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
      'data-theme': _ignoredDataTheme,
      'data-stella-theme': _ignoredDataStellaTheme,
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
          {...props}
          data-theme={theme}
          data-stella-theme=""
          className={className}
          style={{ ...style, colorScheme: theme }}
        >
          {children}
          <div
            ref={setPortalContainer}
            data-theme={theme}
            data-stella-theme-portal=""
            aria-hidden="true"
            style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
          />
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