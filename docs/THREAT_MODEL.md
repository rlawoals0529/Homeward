# Threat model — foundation

| Boundary | Risk | Present control | Limit |
|---|---|---|---|
| Dependency installation | Compromised package or install script | Exact versions, lockfile, npm ci --ignore-scripts, advisory audit | Advisories cannot prove package safety |
| CI execution | Token misuse or workflow drift | SHA-pinned Actions, contents:read, no persisted checkout credentials, no deploy step | Maintainers can change workflows; no branch protection claimed |
| Static build | Accidental source/config/private asset inclusion | Deploy-artifact allowlist with negative tests; no source maps | Source review still needed for embedded strings |
| Browser execution | Script injection or external exfiltration | Text-only React rendering, no untrusted input, restrictive CSP | Actual Cloudflare enforcement unverified; same-origin dependencies remain trusted |
| Device/browser profile | Memory exposure/loss | No archive exists in this foundation | Future local-first storage is neither encrypted nor permanent |
| Historical content | Fabricated testimony or misleading authority | Placeholder-only collection; no imported history or imagery | Human reviewer and rights checks needed before articles |

No worker secrets, databases, user accounts, file parsers or uploads exist. Do not claim tests of nonexistent features. The local Vite preview reproduces header values for browser checks; it is not a hardened production server. Keep development servers on loopback.

Future archive work must add malicious-import cases, migrations, storage failures, local attachment limits, shared-device disclosure and precise export selection. No security certification, full penetration test or production-host assessment has been performed.
