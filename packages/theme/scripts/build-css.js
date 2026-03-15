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
const lines = Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`);
const css = `:root {\n${lines.join('\n')}\n}\n`;

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'tokens.css'), css, 'utf-8');
console.log(`✅ tokens.css written (${lines.length} variables)`);
