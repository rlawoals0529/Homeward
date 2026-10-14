# Foundation decisions

- Scope: presentable responsive preview only. Memory archive and recovery are the next proposed milestone, subject to review.
- Repository: initially private, then made public following the owner's explicit follow-up. Deployment and merging remain unauthorized.
- Stack: React, strict TypeScript, Vite, React Router, ESLint, Vitest and Playwright. Exact versions and lockfile; Node 22.14.0 matches the available runtime and CI.
- No component framework: semantic links and small shared components meet this milestone's needs. Reevaluate primitives when complex interactions are authorized.
- No historical assets: original typographic studies avoid fabricated records and unclear rights.
- No fake controls: links navigate to previews; no save/upload/export affordances imply existing functionality.
- Cloudflare: static-only config, no deployment dependencies or workflow. Validate build contents and headers locally; do not claim platform deployment validation.
- Privacy: describe actual preview behavior. Future local-first storage is unencrypted by default; downloaded books cannot be revoked.
- CI: one bounded read-only job for quality, advisory audit and browsers. No reusable workflow coupling or unrelated infrastructure.

Open before archive implementation: storage/recovery acceptance contract and media bounds. Open before history publication: human editor and asset rights. Open before deployment: authorized host/route, reporting channel and real-host header/routing checks.
