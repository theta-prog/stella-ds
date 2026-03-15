import tokens from './tokens.json' assert { type: 'json' };

// ----------------------------------------------------------------
// Re-export raw token object for JS/TS consumers
// ----------------------------------------------------------------
export { tokens };
export default tokens;

// ----------------------------------------------------------------
// Typed token types
// ----------------------------------------------------------------
export type Tokens = typeof tokens;

// ----------------------------------------------------------------
// Flat CSS-variable name helpers (e.g. --stella-color-primary-500)
// ----------------------------------------------------------------

type Primitive = string | number;

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

/**
 * Generate a `:root { ... }` CSS string from the token map.
 * Useful for SSR injection or custom build pipelines.
 */
export function generateCSSVarsString(): string {
  const vars = Object.entries(cssVariables)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  return `:root {\n${vars}\n}\n`;
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
