import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

interface ComponentSummary {
  name: string;
  slug: string;
  description: string;
  category: string;
}

interface ComponentData extends ComponentSummary {
  imports: string[];
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
  }>;
  example: string;
  guidelines: string[];
}

function loadComponents(): ComponentData[] {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const dataPath = join(__dirname, '../../data/components.json');
  return JSON.parse(readFileSync(dataPath, 'utf-8')) as ComponentData[];
}

export function listComponents(): ComponentSummary[] {
  return loadComponents().map(({ name, slug, description, category }) => ({
    name,
    slug,
    description,
    category,
  }));
}

export { loadComponents };
export type { ComponentData, ComponentSummary };
