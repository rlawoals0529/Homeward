import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateAssetPaths, validateHosting } from './static-policy.mjs';

const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
const paths = (await readdir(dist, { recursive: true, withFileTypes: true }))
  .filter(entry => entry.isFile())
  .map(entry => relative(fileURLToPath(dist), join(entry.parentPath, entry.name)).replaceAll('\\', '/'));
validateAssetPaths(paths);
validateHosting(JSON.parse(await readFile(new URL('wrangler.json', root), 'utf8')));
assert.equal(await readFile(new URL('_headers', dist), 'utf8'), await readFile(new URL('public/_headers', root), 'utf8'), 'Build headers differ from source');
const html = await readFile(new URL('index.html', dist), 'utf8');
assert(!/https?:\/\//i.test(html), 'Remote resource in HTML');
assert(!html.includes('/src/'), 'Unbuilt source in HTML');
console.log(`Static validation passed: ${paths.length} allowlisted files; headers preserved; static-only SPA config; no publication routes.`);
