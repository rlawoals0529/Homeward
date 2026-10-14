import { describe, expect, it } from 'vitest';
import { validateAssetPaths, validateHosting } from '../scripts/static-policy.mjs';

describe('static deployment boundaries', () => {
  it('admits only the known build output', () => {
    expect(() => validateAssetPaths(['index.html', '_headers', 'assets/index-Ab12.js', 'assets/index-Ab12.css'])).not.toThrow();
  });
  it.each(['.env', 'assets/index.js.map', 'src/App.tsx', 'docs/PRIVACY.md', 'private-photo.png'])('rejects leaked %s', path => {
    expect(() => validateAssetPaths(['index.html', '_headers', path])).toThrow('Unexpected deploy artifact');
  });
  it('rejects a missing application entry', () => {
    expect(() => validateAssetPaths(['_headers'])).toThrow('Missing index.html');
  });
  it('rejects a new publication or runtime configuration', () => {
    expect(() => validateHosting({ main: 'worker.ts', workers_dev: true })).toThrow();
  });
});
