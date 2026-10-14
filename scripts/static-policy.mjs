import assert from 'node:assert/strict';

export function validateAssetPaths(paths) {
  assert(paths.includes('index.html'), 'Missing index.html');
  assert(paths.includes('_headers'), 'Missing _headers');
  for (const path of paths) {
    assert(
      /^(index\.html|_headers|assets\/[\w-]+\.(js|css))$/.test(path),
      `Unexpected deploy artifact: ${path}`,
    );
  }
}

export function validateHosting(config) {
  assert.deepEqual(
    config,
    {
      name: 'homeward',
      compatibility_date: '2026-10-13',
      workers_dev: false,
      preview_urls: false,
      assets: {
        directory: './dist',
        not_found_handling: 'single-page-application',
      },
    },
    'Static hosting configuration changed; review any new runtime or publication surface',
  );
}
