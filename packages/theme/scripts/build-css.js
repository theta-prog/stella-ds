#!/usr/bin/env node
/**
 * Build script: generates dist/tokens.css from src/tokens.json
 * Run automatically after tsup via the "build" npm script.
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distIndexUrl = pathToFileURL(join(root, 'dist', 'index.js')).href;

const { generateCSSVarsString, themeCSSVariables } = await import(distIndexUrl);

const css = generateCSSVarsString();

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'tokens.css'), css, 'utf-8');
console.log(
  `✅ tokens.css written (${Object.keys(themeCSSVariables.dark).length} dark vars / ${Object.keys(themeCSSVariables.light).length} light vars)`,
);
