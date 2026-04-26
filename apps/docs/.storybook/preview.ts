import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { ThemeProvider } from '@stella-ds/react';
import { LOCALES, DEFAULT_LOCALE } from '../src/i18n';
// Inject Stella design tokens as CSS custom properties
import '../src/theme.css';

const BG: Record<'dark' | 'light', string> = {
  dark: '#0f1117',
  light: '#ffffff',
};

function ThemeApplicator({
  Story,
  theme,
  lang,
}: {
  Story: React.ComponentType;
  theme: 'dark' | 'light';
  lang: string;
}) {
  React.useEffect(() => {
    const previousBodyTheme = document.body.getAttribute('data-theme');
    const previousBodyLang = document.body.getAttribute('lang');
    const previousHtmlLang = document.documentElement.getAttribute('lang');
    const previousBackgroundColor = document.body.style.backgroundColor;

    document.body.setAttribute('data-theme', theme);
    document.body.setAttribute('lang', lang);
    document.body.style.backgroundColor = BG[theme];
    document.documentElement.setAttribute('lang', lang);

    return () => {
      if (previousBodyTheme == null) {
        document.body.removeAttribute('data-theme');
      } else {
        document.body.setAttribute('data-theme', previousBodyTheme);
      }

      if (previousBodyLang == null) {
        document.body.removeAttribute('lang');
      } else {
        document.body.setAttribute('lang', previousBodyLang);
      }

      if (previousHtmlLang == null) {
        document.documentElement.removeAttribute('lang');
      } else {
        document.documentElement.setAttribute('lang', previousHtmlLang);
      }

      document.body.style.backgroundColor = previousBackgroundColor;
    };
  }, [lang, theme]);

  return React.createElement(
    ThemeProvider,
    { theme, lang, style: { display: 'block' } },
    React.createElement(Story),
  );
}

const withDataTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] ?? 'dark') as 'dark' | 'light';
  const locale = (context.globals['locale'] ?? 'en') as string;
  const lang = locale === 'ja' ? 'ja' : 'en';
  return React.createElement(ThemeApplicator, { Story, theme, lang });
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
