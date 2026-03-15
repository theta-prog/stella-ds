// Supported locales
export type Locale = 'en' | 'ja';

export const LOCALES: { value: Locale; title: string; icon: string }[] = [
  { value: 'en', title: 'English', icon: '🇺🇸' },
  { value: 'ja', title: '日本語', icon: '🇯🇵' },
];

export const DEFAULT_LOCALE: Locale = 'en';
