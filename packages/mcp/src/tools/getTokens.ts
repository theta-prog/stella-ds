import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

export function getTokens(): Record<string, unknown> {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const dataPath = join(__dirname, '../../data/tokens.json');
  return JSON.parse(readFileSync(dataPath, 'utf-8')) as Record<string, unknown>;
}
