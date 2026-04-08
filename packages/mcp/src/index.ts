#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { listComponents } from './tools/listComponents.js';
import { getComponent } from './tools/getComponent.js';
import { getTokens } from './tools/getTokens.js';
import { search } from './tools/search.js';
import { listPatterns, getPattern } from './tools/patterns.js';

const server = new Server(
  { name: 'stella-ui', version: '0.1.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'list_components',
      description: 'List all Stella UI components with name, slug, description, and category',
      inputSchema: {
        type: 'object' as const,
        properties: {},
      },
    },
    {
      name: 'get_component',
      description: 'Get props, variants, and code examples for a specific Stella UI component',
      inputSchema: {
        type: 'object' as const,
        properties: {
          name: {
            type: 'string',
            description: 'Component name or slug (e.g. "Button" or "button")',
          },
        },
        required: ['name'],
      },
    },
    {
      name: 'get_tokens',
      description: 'Get the Stella UI design token reference by category (color, typography, spacing, etc.)',
      inputSchema: {
        type: 'object' as const,
        properties: {},
      },
    },
    {
      name: 'search',
      description: 'Search Stella UI components by keyword across names, descriptions, categories, and prop names',
      inputSchema: {
        type: 'object' as const,
        properties: {
          query: {
            type: 'string',
            description: 'Search term (e.g. "loading", "error state", "overlay")',
          },
        },
        required: ['query'],
      },
    },
    {
      name: 'list_patterns',
      description: 'List all Stella UI page composition patterns with name, slug, description, and component list',
      inputSchema: {
        type: 'object' as const,
        properties: {},
      },
    },
    {
      name: 'get_pattern',
      description: 'Get a full page composition pattern with example code and guidelines',
      inputSchema: {
        type: 'object' as const,
        properties: {
          name: {
            type: 'string',
            description: 'Pattern name or slug (e.g. "Hero Section" or "hero-section")',
          },
        },
        required: ['name'],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'list_components': {
      const result = listComponents();
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'get_component': {
      const componentName = (args as { name: string }).name;
      const result = getComponent(componentName);
      if (!result) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                { error: `Component "${componentName}" not found. Use list_components to see all available components.` },
                null,
                2
              ),
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'get_tokens': {
      const result = getTokens();
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'search': {
      const query = (args as { query: string }).query;
      const result = search(query);
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'list_patterns': {
      const result = listPatterns();
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'get_pattern': {
      const patternName = (args as { name: string }).name;
      const result = getPattern(patternName);
      if (!result) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                { error: `Pattern "${patternName}" not found. Use list_patterns to see all available patterns.` },
                null,
                2
              ),
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    default:
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({ error: `Unknown tool: "${name}"` }, null, 2),
          },
        ],
        isError: true,
      };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
