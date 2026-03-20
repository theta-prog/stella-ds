import { loadComponents } from './listComponents.js';
import type { ComponentData } from './listComponents.js';

interface SearchResult {
  name: string;
  slug: string;
  description: string;
  category: string;
  relevance: number;
  matchedFields: string[];
}

export function search(query: string): SearchResult[] {
  const term = query.toLowerCase().trim();
  if (!term) return [];

  const components = loadComponents();
  const results: SearchResult[] = [];

  for (const component of components) {
    const matchedFields: string[] = [];
    let relevance = 0;

    if (component.name.toLowerCase().includes(term)) {
      matchedFields.push('name');
      // Exact name match gets highest score
      relevance += component.name.toLowerCase() === term ? 10 : 5;
    }

    if (component.slug.toLowerCase().includes(term)) {
      matchedFields.push('slug');
      relevance += component.slug.toLowerCase() === term ? 10 : 4;
    }

    if (component.description.toLowerCase().includes(term)) {
      matchedFields.push('description');
      relevance += 3;
    }

    if (component.category.toLowerCase().includes(term)) {
      matchedFields.push('category');
      relevance += 2;
    }

    const matchingProps = component.props
      .filter((p: ComponentData['props'][number]) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.type.toLowerCase().includes(term)
      )
      .map((p: ComponentData['props'][number]) => `prop:${p.name}`);

    if (matchingProps.length > 0) {
      matchedFields.push(...matchingProps);
      relevance += matchingProps.length;
    }

    if (relevance > 0) {
      results.push({
        name: component.name,
        slug: component.slug,
        description: component.description,
        category: component.category,
        relevance,
        matchedFields,
      });
    }
  }

  return results.sort((a, b) => b.relevance - a.relevance);
}
