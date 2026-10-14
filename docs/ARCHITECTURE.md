# Architecture

## Implemented

Vite builds a React/TypeScript SPA. BrowserRouter owns navigation; App supplies the shared header, main landmark, footer and routes. PageHeading, ActionLink and PreviewNotice are the only shared visual components. CSS tokens define colors, typography and radii. System fonts require no external fetch.

Routes: `/`, `/memories`, `/explore`, `/books`, `/privacy`, and an explicit unknown-route page. Route changes update the document title and focus the main landmark. Content pages are deliberately small and remain in App.tsx until their behavior warrants a separate module.

There is no domain model implementation, API, persistence, service worker, telemetry or media pipeline. No state library or accessible primitive dependency is needed for this link-based foundation; complex dialogs and editors will be evaluated when authorized.

## Hosting boundary

Only `dist` is intended for Workers Static Assets. `wrangler.json` prepares static SPA fallback, with workers.dev and preview URLs disabled. `public/_headers` supplies a restrictive CSP and browser permissions policy. The Vite preview server reads that same header source so browser tests exercise the production bundle under those restrictions.

Static validation permits only the present index, headers and compiled JS/CSS. Adding asset types requires an explicit policy change. Unit probes prove that source maps, environment files, source, docs and private-image paths are rejected. This does not scan arbitrary JavaScript for secrets; source and dependency review remain necessary.

No Wrangler runtime or deployment workflow is installed. The config has not been executed on Cloudflare. Actual header application and route fallback require a future authorized platform test.

## Repository conventions studied

The current default-branch manifests, CI and security/hosting files of Astralys, Ariadne, atlas, shelfwear, unstable and agent-skills were reviewed read-only. Adopted: exact dependencies and lockfile installs; SHA-pinned Actions; contents:read; security and verification docs; static hosting separated from deployment; focused Vitest and Playwright checks. Rejected: API adapters, databases, physics, photo workers, reusable workflow coupling and automatic deployments unrelated to this foundation.

Future memory views should share one canonical memory record. See DATA.md; none of that contract is executable in this milestone.
