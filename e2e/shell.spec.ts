import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('navigation, direct routes, focus and back navigation work', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'My memories' })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Start with what matters to you.',
  );
  await expect(page.getByRole('main')).toBeFocused();
  await expect(
    page.getByRole('navigation').getByRole('link', { name: 'My memories' }),
  ).toHaveAttribute('aria-current', 'page');
  await page.reload();
  await expect(
    page.getByText('Memory capture and storage are not built yet.', {
      exact: false,
    }),
  ).toBeVisible();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Family books' })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Something to pass on.',
  );
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Start with what matters to you.',
  );
  await page.goto('/unknown');
  await page.getByRole('link', { name: 'Return home' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'worth keeping.',
  );
});

test('keyboard skip link reaches the main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
});

test('all screens have no detected axe violations or horizontal overflow', async ({
  page,
}) => {
  for (const path of [
    '/',
    '/memories',
    '/explore',
    '/books',
    '/privacy',
    '/missing',
  ]) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test('narrow layout and reduced motion remain readable', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(
    page.getByRole('link', { name: 'See the memory preview' }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Explore', exact: true })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('preview makes no external requests or persistent storage writes', async ({
  page,
}) => {
  const external: string[] = [];
  const errors: string[] = [];
  page.on('request', (request) => {
    if (new URL(request.url()).origin !== 'http://127.0.0.1:4173')
      external.push(request.url());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  for (const path of ['/', '/memories', '/explore', '/books', '/privacy'])
    await page.goto(path);
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(async () => ({
      local: localStorage.length,
      session: sessionStorage.length,
      databases: (await indexedDB.databases()).length,
    })),
  ).toEqual({ local: 0, session: 0, databases: 0 });
});

test('capture homepage review image', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.screenshot({
    path: testInfo.outputPath('homeward-home.png'),
    fullPage: true,
  });
});

test('production headers block browser connections', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.headers()['content-security-policy']).toContain(
    "connect-src 'none'",
  );
  expect(response?.headers()['x-content-type-options']).toBe('nosniff');
  expect(response?.headers()['referrer-policy']).toBe('no-referrer');
  expect(response?.headers()['permissions-policy']).toBe(
    'camera=(), microphone=(), geolocation=()',
  );
  expect(
    await page.evaluate(async () => {
      try {
        await fetch('/connection-probe');
        return 'allowed';
      } catch {
        return 'blocked';
      }
    }),
  ).toBe('blocked');
});
