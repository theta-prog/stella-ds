#!/usr/bin/env node
/**
 * Build script: generates dist/tokens.css from src/tokens.json
 * Run automatically after tsup via the "build" npm script.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const tokens = JSON.parse(
  readFileSync(join(root, 'src', 'tokens.json'), 'utf-8'),
);

const themeScopes = JSON.parse(
  readFileSync(join(root, 'src', 'themeScopes.json'), 'utf-8'),
);

function deepMerge(base, override) {
  const result = { ...base };

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
      result[key] = deepMerge(existing, value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function flatten(obj, prefix = '--stella') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const name = `${prefix}-${key}`;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value, name));
    } else {
      result[name] = String(value);
    }
  }
  return result;
}

const vars = flatten(tokens);
const lightVars = flatten(deepMerge(tokens, themeScopes.light));

function buildScope(selectors, themeName, themeVars) {
  const lines = [`  color-scheme: ${themeName};`].concat(
    Object.entries(themeVars).map(([key, value]) => `  ${key}: ${value};`),
  );
  return `${selectors.join(',\n')} {\n${lines.join('\n')}\n}`;
}

const css = [
  buildScope([':root', '[data-theme="dark"]'], 'dark', vars),
  buildScope(['[data-theme="light"]'], 'light', lightVars),
].join('\n\n') + '\n';

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'tokens.css'), css, 'utf-8');
console.log(`✅ tokens.css written (${Object.keys(vars).length} dark vars / ${Object.keys(lightVars).length} light vars)`);
