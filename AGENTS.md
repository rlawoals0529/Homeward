# Homeward agent instructions

Use Codex. Keep changes small, reviewable and grounded in the actual branch and tests. Read README and docs/DECISIONS.md before extending scope.

## Current boundary

This milestone is a static frontend foundation. Do not add memory persistence, a memory editor, media ingestion, map interactions, history articles, backup/restore, family-book generation, authentication or sync without a new task authorizing them. Do not present planned capabilities as working features. No real personal or service records in fixtures, screenshots or logs.

Repository creation and public visibility were explicitly authorized. Deployment, PR merging, paid services and later product milestones still require separate authorization. Do not add deployment workflows or credentials. Do not change visibility on your own.

## Conventions

- React, TypeScript strict mode, Vite, React Router; CSS tokens in src/tokens.css.
- Reuse the existing PageHeading, ActionLink and PreviewNotice before adding abstractions.
- Prefer semantic HTML and visible focus. Navigation, keyboard access and error routes must work on narrow screens.
- Keep third-party resources out of the runtime. No remote fonts, analytics or embedded media.
- Install exact versions and commit package-lock.json. CI uses npm ci --ignore-scripts and SHA-pinned Actions with read-only permissions.
- Run npm run check and relevant Playwright tests. Record what was actually checked, including failures and unavailable manual checks.
- Human review and documented rights precede historical-content publication. Do not invent credentials, awards, testimony or endorsements.

Do not spawn unattended agents. Report final branch/PR, evidence and remaining limitations. Stop at the requested milestone.
