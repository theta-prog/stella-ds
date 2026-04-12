import { defineConfig } from 'tsup';
import { readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { createHash } from 'crypto';

function findCssModuleFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findCssModuleFiles(fullPath));
    } else if (entry.name.endsWith('.module.css')) {
      files.push(fullPath);
    }
  }
  return files.sort();
}

/** Deterministic scoped class name: e.g. button → _button_a1b2c3 */
function scopedName(componentName: string, cls: string): string {
  const hash = createHash('md5')
    .update(`${componentName}__${cls}`)
    .digest('hex')
    .slice(0, 6);
  return `_${cls}_${hash}`;
}

function processCssModule(
  componentName: string,
  css: string,
): { scopedCss: string; mapping: Record<string, string> } {
  // Collect all class name selectors — strip comments first so file-header
  // text like "Button.module.css" doesn't produce spurious "module"/"css" keys.
  const cssWithoutComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const seen = new Set<string>();
  for (const match of cssWithoutComments.matchAll(/\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g)) {
    seen.add(match[1]);
  }

  const mapping: Record<string, string> = {};
  for (const cls of seen) {
    mapping[cls] = scopedName(componentName, cls);
  }

  // Replace .classname with .scopedName.
  // Negative lookahead ensures we don't match substrings of longer class names.
  let scopedCss = css;
  // Sort longest-first as extra safety
  const sorted = [...seen].sort((a, b) => b.length - a.length);
  for (const cls of sorted) {
    const regex = new RegExp(`\\.${cls}(?![a-zA-Z0-9_-])`, 'g');
    scopedCss = scopedCss.replace(regex, `.${mapping[cls]}`);
  }

  return { scopedCss, mapping };
}

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  async onSuccess() {
    const cssFiles = findCssModuleFiles('src');
    let js = readFileSync('dist/index.js', 'utf-8');
    const cssParts: string[] = [];
    let patched = 0;

    for (const cssFile of cssFiles) {
      const componentName = basename(cssFile).replace('.module.css', '');
      const css = readFileSync(cssFile, 'utf-8');
      const { scopedCss, mapping } = processCssModule(componentName, css);

      // Patch the JS bundle: replace empty CSS module object with scoped mapping
      const varName = `${componentName}_default`;
      const placeholder = `var ${varName} = {}`;
      const replacement = `var ${varName} = ${JSON.stringify(mapping)}`;
      if (js.includes(placeholder)) {
        js = js.replace(placeholder, replacement);
        patched++;
      }

      cssParts.push(scopedCss);
    }

    writeFileSync('dist/index.js', js);
    writeFileSync('dist/index.css', cssParts.join('\n'));
    // Remove stale CSS source map (generated from unscoped CSS)
    if (existsSync('dist/index.css.map')) rmSync('dist/index.css.map');

    console.log(`✓ Scoped and patched ${patched} CSS modules`);
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
