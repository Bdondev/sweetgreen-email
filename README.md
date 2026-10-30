# Sweetgreen email

This repository is a provisional, production-oriented HTML marketing email build for sweetgreen. It uses MJML to generate conservative, table-based email HTML and a local Playwright workflow to catch browser-visible layout regressions.

The project is not an approved production campaign yet. Treat the reference imagery, copy, offers, URLs, legal text, and asset treatment as evidence with explicit approval status; do not fill gaps by guessing.

## How an agent should work here

1. Read [`AGENTS.md`](AGENTS.md) before changing email code.
2. Inspect the relevant design and asset documentation before implementing a section.
3. Make one named section change at a time in [`src/email.mjml`](src/email.mjml).
4. Preserve source assets and use live HTML for important copy, offers, legal text, unsubscribe content, and CTA destinations.
5. Run validation and compilation before visual QA.
6. Review the four required viewport results and record limitations honestly.
7. Stop at missing approvals or production inputs; do not invent copy, URLs, assets, or real-client results.

The project-local [`html-email-development`](.agents/skills/html-email-development/SKILL.md) skill contains the reusable audit, implementation, compatibility, accessibility, dark-mode, and ESP-handoff guidance.

## Repository map

| Path | Purpose |
| --- | --- |
| [`src/email.mjml`](src/email.mjml) | MJML source of truth |
| [`assets/`](assets/) | Supplied artwork and processed project assets |
| [`reference/`](reference/) | Visual reference images |
| [`docs/`](docs/) | Campaign brief, design system, asset manifest, build plan, acceptance criteria, and QA report |
| [`scripts/build-preview.mjs`](scripts/build-preview.mjs) | Copies assets and creates the local preview entrypoint |
| [`tests/visual-qa.mjs`](tests/visual-qa.mjs) | Playwright checks and screenshots at 320, 390, 600, and 1440px |
| [`dist/`](dist/) | Locally generated compiled email preview; do not treat it as ESP-ready output by itself |

## Local workflow

Install dependencies with `npm install`, then use:

```sh
npm run validate     # Validate MJML syntax
npm run build        # Compile src/email.mjml and build the local preview
npm run visual-qa    # Build, run Playwright checks, and write screenshots/report
npm test             # Validate and compile
```

The browser QA report is [`docs/QA_REPORT.md`](docs/QA_REPORT.md). Browser screenshots do not prove Gmail, Apple Mail, Outlook, ESP, or real-client compatibility.

## Current campaign state

The repository contains a full visual reference and section-level reference images for the hero, autumn harvest, loyalty, and footer treatments. The current implementation is a portfolio/foundation build with provisional content and local asset paths.

Before production handoff, confirm:

- approved copy, offer terms, dates, and CTA destinations;
- remaining legal text, unsubscribe syntax, and required tracking;
- target client matrix and campaign type;
- original artwork or approved separated assets for composite imagery;
- absolute HTTPS URLs for hosted production assets;
- ESP-specific merge fields and post-ESP rendering;
- image-blocked, dark-mode, Outlook, Gmail, Apple Mail, and other required client QA.

The footer address and social destinations are documented as approved; other production values remain subject to confirmation in the project documentation.

## Guardrails

- Use MJML and presentation-table HTML with inline critical styles and selective media queries.
- Avoid Grid, Flexbox, absolute positioning, and runtime JavaScript.
- Keep structural tables presentational and preserve logical reading order.
- Use local relative asset paths for repository previews; replace them with approved absolute HTTPS URLs only during ESP handoff.
- Do not send, deploy, upload, or commit without explicit approval.

See [`docs/ACCEPTANCE_CRITERIA.md`](docs/ACCEPTANCE_CRITERIA.md) for the current completion gates and [`docs/DESIGN_SPEC.md`](docs/DESIGN_SPEC.md) for evidence and open questions.
