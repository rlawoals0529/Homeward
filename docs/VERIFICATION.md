# Foundation verification

Windows verification on October 13, 2026, Node v22.14.0, npm 10.9.2.

First completed check: `npm run check` exited 0. TypeScript and ESLint exited 0 with no diagnostics. Vitest: `Test Files 2 passed (2)`, `Tests 13 passed (13)`. Vite: `23 modules transformed`, JavaScript 271.22 kB / 85.85 kB gzip and CSS 8.82 kB / 2.58 kB gzip. Static validator: `Static validation passed: 4 allowlisted files; headers preserved; static-only SPA config; no publication routes.` npm audit: `found 0 vulnerabilities`.

First browser run: `12 passed (14.7s)` and `6 failed`. All six failures were Windows Firefox startup failures (`browserType.launch: spawn UNKNOWN`), before application interaction. Desktop/mobile Chromium passed routing/reload/back/focus, skip navigation, axe scans on six screens, 320px reflow/reduced motion, external-request/storage checks and screenshot capture. Firefox stays required in Linux CI. A direct CSP probe was subsequently added; final results follow below.

Visual review: inspected the complete desktop (1440 CSS px wide) and mobile Pixel 7 homepage screenshots. No overlap or clipping observed. Mobile is browser emulation, not real-device verification.

Dependency setup: jsx-a11y required unsupported ESLint 9; removed that optional lint plugin and retained supported ESLint 10 plus browser axe checks. Did not override peer dependencies. An initial strict TypeScript error in the Playwright workers setting was fixed by using a fixed bounded worker count.

Code-quality pass: read the routes/focus effect, shared components, hosting validator, header loading, CI, tests and privacy copy. Removed an unused secondary-button option. No user input, writes, migrations or service boundaries exist. The twelve blocks-gate questions found no remaining applicable defect; database/authorization/backfill checks are not applicable. Separate isolated adversarial review remains pending.

Acceptance gates:
- [ ] Public repository confirmed following explicit visibility authorization; bounded branch and draft PR.
- [x] TypeScript, ESLint, unit tests and production build. Evidence: check exit 0; 13 tests passed.
- [x] Advisory audit and static-hosting validation, including negative probes. Evidence: 0 vulnerabilities; 4 allowlisted files; invalid-path/config probes passed.
- [ ] Desktop/mobile browser routes, focus, reflow and automated accessibility checks.
- [x] Visual inspection of homepage screenshots. Evidence: desktop and mobile screenshots inspected.
- [ ] Code-quality review and separate adversarial review, with limits recorded.
- [ ] Documentation distinguishes current behavior from planned features.

Not claimed: manual screen-reader/real-device testing, full WCAG conformance, penetration testing, actual Cloudflare deployment, memory storage, backup or export verification.
