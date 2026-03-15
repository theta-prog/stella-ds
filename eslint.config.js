import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default tseslint.config(
  // ----------------------------------------------------------------
  // Global ignores
  // ----------------------------------------------------------------
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.config.js',
      '**/*.config.ts',
    ],
  },

  // ----------------------------------------------------------------
  // Base: JS recommended
  // ----------------------------------------------------------------
  js.configs.recommended,

  // ----------------------------------------------------------------
  // TypeScript
  // ----------------------------------------------------------------
  ...tseslint.configs.recommended,

  // ----------------------------------------------------------------
  // React Hooks + a11y (applies to .tsx / .jsx files)
  // ----------------------------------------------------------------
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // ---- React Hooks ----
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ---- Accessibility (jsx-a11y) ----
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-aria-hidden-on-focusable': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',
    },
  },

  // ----------------------------------------------------------------
  // TypeScript rules
  // ----------------------------------------------------------------
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      }],
      '@typescript-eslint/no-empty-object-type': 'warn',
    },
  },

  // ----------------------------------------------------------------
  // General rules
  // ----------------------------------------------------------------
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'error',
    },
  },

  // ----------------------------------------------------------------
  // Storybook stories — relax hooks rule
  // Storybook render() functions are called as React components by
  // the framework, but ESLint can't detect that context.
  // ----------------------------------------------------------------
  {
    files: ['**/*.stories.tsx', '**/*.stories.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
);
