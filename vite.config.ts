import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const headers = Object.fromEntries(
  readFileSync(new URL('./public/_headers', import.meta.url), 'utf8')
    .split('\n')
    .filter((line) => line.startsWith('  '))
    .map((line) => {
      const colon = line.indexOf(':');
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
    }),
);

export default defineConfig({
  plugins: [react()],
  build: { sourcemap: false },
  preview: { headers },
  test: { include: ['tests/**/*.test.{ts,tsx,js}'], environment: 'node' },
});
