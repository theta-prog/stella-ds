import type { Preview } from '@storybook/react';
import { LOCALES, DEFAULT_LOCALE } from '../src/i18n';
// Inject Stella design tokens as CSS custom properties
import '../src/theme.css';

const preview: Preview = {
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
  },
  initialGlobals: {
    locale: DEFAULT_LOCALE,
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',    value: '#0f1117' },
        { name: 'surface', value: '#15161b' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
