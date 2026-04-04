/**
 * All valid --stella-color-* token keys (e.g. "cosmos-500", "starlight-primary").
 * Pass one of these to a component's `color` prop to reference the CSS variable.
 */
export type ColorToken =
  | 'cosmos-50' | 'cosmos-100' | 'cosmos-200' | 'cosmos-300' | 'cosmos-400'
  | 'cosmos-500' | 'cosmos-600' | 'cosmos-700' | 'cosmos-800' | 'cosmos-900' | 'cosmos-950'
  | 'nebula-50' | 'nebula-100' | 'nebula-200' | 'nebula-300' | 'nebula-400'
  | 'nebula-500' | 'nebula-600' | 'nebula-700' | 'nebula-800' | 'nebula-900' | 'nebula-950'
  | 'aurora-50' | 'aurora-100' | 'aurora-200' | 'aurora-300' | 'aurora-400'
  | 'aurora-500' | 'aurora-600' | 'aurora-700' | 'aurora-800' | 'aurora-900' | 'aurora-950'
  | 'nova-50' | 'nova-100' | 'nova-200' | 'nova-300' | 'nova-400'
  | 'nova-500' | 'nova-600' | 'nova-700' | 'nova-800' | 'nova-900' | 'nova-950'
  | 'solar-50' | 'solar-100' | 'solar-200' | 'solar-300' | 'solar-400'
  | 'solar-500' | 'solar-600' | 'solar-700' | 'solar-800' | 'solar-900' | 'solar-950'
  | 'void-base' | 'void-surface' | 'void-overlay' | 'void-muted' | 'void-surface-translucent'
  | 'starlight-primary' | 'starlight-secondary' | 'starlight-disabled' | 'starlight-inverse'
  | 'warning-300' | 'warning-500'
  | 'error-300' | 'error-500';

export function colorToCSS(token: ColorToken): string {
  return `var(--stella-color-${token})`;
}
