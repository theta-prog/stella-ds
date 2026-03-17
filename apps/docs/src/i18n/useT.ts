import { useGlobals } from 'storybook/preview-api';
import { t } from './translations';
import type { Locale } from './locales';

/**
 * Returns the active locale from the Storybook toolbar global.
 * Falls back to 'en' when called outside a story/decorator context
 * (e.g. autodocs renders the component directly).
 */
export function useLocale(): Locale {
  try {
    const [globals] = useGlobals();
    return (globals['locale'] as Locale) ?? 'en';
  } catch {
    return 'en';
  }
}

/**
 * Storybook locale hook — reads the toolbar global and returns
 * the matching translation object.
 *
 * Falls back to 'en' when called outside a story/decorator context
 * (e.g. autodocs renders the component directly).
 */
export function useT() {
  return t(useLocale());
}
