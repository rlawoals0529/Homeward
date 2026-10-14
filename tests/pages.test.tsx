import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { App } from '../src/App';

describe('preview boundaries', () => {
  it.each([
    ['/memories', 'Memory capture and storage are not built yet'],
    ['/explore', 'No historical article is published in this preview'],
    ['/books', 'Book creation, downloads, and printing are not available'],
    ['/privacy', 'not an encrypted vault'],
    ['/missing', 'Page not found'],
  ])('%s explains its real capabilities', (path, message) => {
    const html = renderToStaticMarkup(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
    expect(html).toContain(message);
    expect(html).not.toMatch(/<(input|textarea|form)\b/);
  });
});
