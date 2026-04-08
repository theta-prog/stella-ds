import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

export interface PatternSummary {
  name: string;
  slug: string;
  description: string;
  components: string[];
}

export interface PatternData extends PatternSummary {
  example: string;
  guidelines: string[];
}

export function loadPatterns(): PatternData[] {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const dataPath = join(__dirname, '../../data/patterns.json');
  return JSON.parse(readFileSync(dataPath, 'utf-8')) as PatternData[];
}

export function listPatterns(): PatternSummary[] {
  return loadPatterns().map(({ name, slug, description, components }) => ({
    name,
    slug,
    description,
    components,
  }));
}

export function getPattern(name: string): PatternData | null {
  const query = name.toLowerCase().trim();
  const patterns = loadPatterns();

  const match = patterns.find(
    (p) =>
      p.name.toLowerCase() === query ||
      p.slug.toLowerCase() === query
  );

  return match ?? null;
}
