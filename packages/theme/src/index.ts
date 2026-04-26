import tokens from './tokens.json' assert { type: 'json' };
import themeScopes from './themeScopes.json' assert { type: 'json' };

// ----------------------------------------------------------------
// Re-export raw token object for JS/TS consumers
// ----------------------------------------------------------------
export { tokens };
export default tokens;

// ----------------------------------------------------------------
// Typed token types
// ----------------------------------------------------------------
export type Tokens = typeof tokens;
export type ThemeName = keyof typeof themeScopes;

export const themeAttribute = 'data-theme';

// ----------------------------------------------------------------
// Flat CSS-variable name helpers (e.g. --stella-color-primary-500)
// ----------------------------------------------------------------

type Primitive = string | number;

function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override: Record<string, unknown>,
): T {
  const result: Record<string, unknown> = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const existing = result[key];
    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      existing !== null &&
      typeof existing === 'object' &&
      !Array.isArray(existing)
    ) {
      result[key] = deepMerge(existing as Record<string, unknown>, value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}

function flattenToCSSVars(
  obj: Record<string, unknown>,
  prefix = '--stella',
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const varName = `${prefix}-${key}`;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(
        result,
        flattenToCSSVars(value as Record<string, unknown>, varName),
      );
    } else {
      result[varName] = String(value as Primitive);
    }
  }

  return result;
}

/** All Stella UI tokens as a flat CSS-variable map. */
export const cssVariables = flattenToCSSVars(tokens as unknown as Record<string, unknown>);

/** Full token sets for each official Stella UI theme scope. */
export const themeTokens = {
  dark: tokens,
  light: deepMerge(tokens, themeScopes.light as Record<string, unknown>),
} as const satisfies Record<ThemeName, Tokens>;

/** Flat CSS-variable maps for each official Stella UI theme scope. */
export const themeCSSVariables = {
  dark: flattenToCSSVars(themeTokens.dark as unknown as Record<string, unknown>),
  light: flattenToCSSVars(themeTokens.light as unknown as Record<string, unknown>),
} as const satisfies Record<ThemeName, Record<string, string>>;

function buildThemeScopeCSS(
  selectors: string[],
  themeName: ThemeName,
  vars: Record<string, string>,
): string {
  const declarations = [`  color-scheme: ${themeName};`].concat(
    Object.entries(vars).map(([key, value]) => `  ${key}: ${value};`),
  );
  return `${selectors.join(',\n')} {\n${declarations.join('\n')}\n}`;
}

/**
 * Generate the official Stella UI theme scopes as CSS.
 * Includes the default dark scope plus explicit `[data-theme="dark"]`
 * and `[data-theme="light"]` blocks for scoped theming.
 */
export function generateCSSVarsString(attributeName = themeAttribute): string {
  const darkSelector = `[${attributeName}="dark"]`;
  const lightSelector = `[${attributeName}="light"]`;

  return [
    buildThemeScopeCSS([':root', darkSelector], 'dark', themeCSSVariables.dark),
    buildThemeScopeCSS([lightSelector], 'light', themeCSSVariables.light),
  ].join('\n\n') + '\n';
}

/**
 * Inject CSS variables into the document <head> at runtime.
 * Call this once in your app entry point.
 */
export function injectCSSVars(target: HTMLElement = document.head): void {
  const style = document.createElement('style');
  style.dataset['stellaTheme'] = 'true';
  style.textContent = generateCSSVarsString();
  target.appendChild(style);
}
