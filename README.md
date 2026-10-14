# Homeward

**Every service has a story worth keeping.**

A personal heritage application taking shape around the memories of U.S. military veterans. The visual direction combines warm paper, forest green, serif titles and quiet editorial layouts.

## Current milestone

This is a **frontend foundation**, not a working memory archive. It includes a responsive homepage, accessible navigation, and explicitly labeled previews for My memories, Explore and Family books. No personal memory is captured, saved or uploaded. No historical article has been published.

The repository is public at the owner's explicit request. This does not authorize a live deployment. The implementation is offered in a draft PR; it is not merged or released.

## Develop and verify

Use Node **22.14.0** (also pinned in CI).

```sh
npm ci --ignore-scripts
npm run dev
npm run check
npx --no-install playwright install chromium firefox
npm run test:browser
```

On Windows, use `npm.cmd` / `npx.cmd` if PowerShell blocks the script shim. `check` runs TypeScript, ESLint, Vitest, Vite build, static artifact validation and the npm advisory audit (moderate or higher blocks). Browser tests run against the production build, so run `check` or `build` first.

`npm run preview` serves the build on loopback port 4173 with security headers read from `public/_headers`. This Vite server is for local verification, not production hosting. Test screenshots are in `test-results/`; CI uploads short-lived browser evidence.

## Hosting preparation

`wrangler.json` describes Workers Static Assets and SPA fallback. There is no Worker script, API, Cloudflare dependency, account identifier, secret, custom route, or deployment workflow. Workers.dev and preview URLs are disabled. No deployment has been performed. Future deployment needs explicit authorization and validation on the real hosting platform. A public source repository does not imply the app is hosted.

## Scope and documentation

- [Architecture](docs/ARCHITECTURE.md), [design](docs/DESIGN.md), [future data contract](docs/DATA.md)
- [Privacy](docs/PRIVACY.md), [threat model](docs/THREAT_MODEL.md), [security reporting](SECURITY.md)
- [Content sources and rights](docs/CONTENT_SOURCES.md), [decisions](docs/DECISIONS.md), [verification](docs/VERIFICATION.md)
- [Contributing](CONTRIBUTING.md), [agent boundaries](AGENTS.md)

Next proposed milestone: the shared memory archive, starting with reviewed persistence/recovery contracts. IndexedDB, editors, media ingestion, backup/restore, maps, family-book generation, authentication and synchronization are not implemented here.

Original code and original project documentation are MIT licensed. Third-party dependencies retain their licenses; historical material, user memories and external assets are not automatically covered by the code license. See the content-rights document. Homeward is independent and is not endorsed by the U.S. Department of Defense or Department of Veterans Affairs.
