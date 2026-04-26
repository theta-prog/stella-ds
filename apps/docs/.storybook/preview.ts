import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { LOCALES, DEFAULT_LOCALE } from '../src/i18n';
// Inject Stella design tokens as CSS custom properties
import '../src/theme.css';

const BG: Record<'dark' | 'light', string> = {
  dark: '#0f1117',
  light: '#ffffff',
};

const withDataTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] ?? 'dark') as 'dark' | 'light';
  const locale = (context.globals['locale'] ?? 'en') as string;
  const lang = locale === 'ja' ? 'ja' : 'en';

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.body.style.backgroundColor = BG[theme];
    return () => {
      document.body.removeAttribute('data-theme');
      document.body.style.backgroundColor = '';
    };
  }, [theme]);

  return React.createElement('div', { 'data-theme': theme, lang }, React.createElement(Story));
};

const preview: Preview = {
  decorators: [withDataTheme],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: LOCALES.map(({ value, title, icon }) => ({
          value,
          title: `${icon} ${title}`,
          right: value.toUpperCase(),
        })),
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: 'Theme',
      description: 'Component color scheme',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun'  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: DEFAULT_LOCALE,
    theme: 'dark',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: 'centered',
  },
};

export default preview;
