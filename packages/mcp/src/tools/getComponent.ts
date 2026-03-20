import { loadComponents } from './listComponents.js';
import type { ComponentData } from './listComponents.js';

export function getComponent(name: string): ComponentData | null {
  const query = name.toLowerCase().trim();
  const components = loadComponents();

  const match = components.find(
    (c) =>
      c.name.toLowerCase() === query ||
      c.slug.toLowerCase() === query
  );

  return match ?? null;
}
