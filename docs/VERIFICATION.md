# Foundation verification

Windows verification on October 13, 2026, Node v22.14.0, npm 10.9.2.

First completed check: `npm run check` exited 0. TypeScript and ESLint exited 0 with no diagnostics. Vitest: `Test Files 2 passed (2)`, `Tests 13 passed (13)`. Vite: `23 modules transformed`, JavaScript 271.22 kB / 85.85 kB gzip and CSS 8.82 kB / 2.58 kB gzip. Static validator: `Static validation passed: 4 allowlisted files; headers preserved; static-only SPA config; no publication routes.` npm audit: `found 0 vulnerabilities`.

First browser run: `12 passed (14.7s)` and `6 failed`. All six failures were Windows Firefox startup failures (`browserType.launch: spawn UNKNOWN`), before application interaction. Desktop/mobile Chromium passed routing/reload/back/focus, skip navigation, axe scans on six screens, 320px reflow/reduced motion, external-request/storage checks and screenshot capture. Firefox stays required in Linux CI. A direct CSP probe was subsequently added; final results follow below.

Visual review: inspected the complete desktop (1440 CSS px wide) and mobile Pixel 7 homepage screenshots. No overlap or clipping observed. Mobile is browser emulation, not real-device verification.

Dependency setup: jsx-a11y required unsupported ESLint 9; removed that optional lint plugin and retained supported ESLint 10 plus browser axe checks. Did not override peer dependencies. An initial strict TypeScript error in the Playwright workers setting was fixed by using a fixed bounded worker count.

Code-quality pass: read the routes/focus effect, shared components, hosting validator, header loading, CI, tests and privacy copy. Removed an unused secondary-button option. No user input, writes, migrations or service boundaries exist. The twelve blocks-gate questions found no remaining applicable defect; database/authorization/backfill checks are not applicable.

## Final local evidence

- `npm run check`: exit 0. `Tests 13 passed (13)`; `found 0 vulnerabilities`.
- `npm run test:browser -- --project=desktop-chromium --project=mobile-chromium`: `14 passed (13.0s)`. This includes asserting served policy headers and an actual browser fetch rejected by CSP.
- Production build after removing the unused option: JS 271.19 kB / 85.83 kB gzip; CSS 8.77 kB / 2.57 kB gzip.
- [Desktop screenshot](previews/home-desktop.png) and [mobile screenshot](previews/home-mobile.png) were captured from the production bundle and visually inspected. They are design evidence, not pixel-regression baselines.

## Separate adversarial pass

Reviewed commit `978bd8e` in an isolated detached worktree. Before the review, ran a fresh `npm ci --ignore-scripts` and `npm run check`: 13 tests passed; static validation passed; audit reported 0 vulnerabilities. No independent agent was used.

Boundary sweep across application/build source: zero sorting constructs, zero try/catch blocks, zero data caps, two string slices in trusted build-header parsing, one route-change conditional, one build-policy validation loop. There are no runtime network calls, untrusted HTML sinks or storage writes. Examined unknown routes, direct reloads, active navigation/focus and truthfulness of preview copy. Negative unit probes reject leaked .env/source/map/doc/image paths and publication/runtime configuration changes. Browser probes demonstrate active CSP connection blocking; this reaches execution evidence locally, not production-host evidence.

No remaining foundation blocker found. Formatting was normalized after review without adding a runtime dependency; checks were rerun before publication of the branch. Browser/platform accessibility and hosting claims stop at the evidence boundaries below.

Acceptance gates:
- [ ] Public repository confirmed following explicit visibility authorization; bounded branch and draft PR.
- [x] TypeScript, ESLint, unit tests and production build. Evidence: check exit 0; 13 tests passed.
- [x] Advisory audit and static-hosting validation, including negative probes. Evidence: 0 vulnerabilities; 4 allowlisted files; invalid-path/config probes passed.
- [x] Desktop/mobile Chromium routes, focus, reflow and automated accessibility checks. Evidence: 14 passed; six-route axe scans returned no detected violations. Local Firefox unavailable as described above.
- [x] Visual inspection of homepage screenshots. Evidence: desktop and mobile screenshots inspected.
- [x] Code-quality review and separate adversarial review, with limits recorded. Evidence: isolated baseline and boundary sweep above.
- [x] Documentation distinguishes current behavior from planned features. Evidence: rendered capability tests and manual copy review.

Not claimed: manual screen-reader/real-device testing, full WCAG conformance, penetration testing, actual Cloudflare deployment, memory storage, backup or export verification.
