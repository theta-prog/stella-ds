import { useGlobals } from 'storybook/preview-api';
import { t } from './translations';
import type { Locale } from './locales';

/**
 * Storybook locale hook — reads the toolbar global and returns
 * the matching translation object.
 */
export function useT() {
  const [globals] = useGlobals();
  return t((globals['locale'] as Locale) ?? 'en');
}
