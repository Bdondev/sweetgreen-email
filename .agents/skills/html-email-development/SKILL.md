---
name: html-email-development
description: Build, audit, and QA responsive marketing emails in an existing MJML/table-based project without inventing campaign inputs or claiming real-client compatibility.
---

# HTML email development

Use this skill when working on a marketing email in this repository or a similar MJML-based project. The goal is production-ready, accessible, responsive email markup while preserving the source design, assets, project conventions, and approval boundaries.

## Before editing

- Read the repository `AGENTS.md`, then inspect the package scripts, current MJML source, asset manifest, design/reference documentation, build scripts, and tests.
- Treat design documentation as evidence with explicit status: provided, observed, proposed, or missing/needs confirmation. Do not silently promote a proposal or visual observation into an approved campaign requirement.
- Identify unresolved inputs before implementation: approved copy, offer terms and dates, CTA destinations, legal and unsubscribe text, target clients, ESP merge syntax, hosted asset URLs, original artwork, and required tracking parameters.
- If a required input is missing, keep the existing value only when it is clearly documented as approved or supplied. Otherwise leave an explicit approval gate and do not fabricate replacement copy, URLs, assets, claims, or legal text.

## Design and asset audit

Audit the supplied reference(s) and every candidate asset before coding a section:

- Record the file path, dimensions, format, transparency, intended display size, and whether it is source artwork, a crop, a composite, or a decorative element.
- Map each reference section to its evidence, reading order, mobile behavior, live text, imagery, CTA, and open questions. Note duplicate or ambiguous reference files instead of choosing silently.
- Check whether the reference is a complete campaign image, a section crop, or merely a visual cue. A browser screenshot is evidence of appearance, not proof of copy approval or client compatibility.
- Preserve provided source assets. Avoid renaming, replacing, re-encoding, or deleting them unless the task explicitly authorizes that work.

### Slicing and composition decisions

Prefer separate assets and live markup when they improve accessibility, localization, responsive behavior, or ESP maintainability. Slice a composite only when the source artwork is available and the crop is unambiguous; document the crop and retain the original.

Keep a composite image when it contains deliberate art direction, texture, or typography that cannot be recreated faithfully, and there is no approved source for separating it. In that case:

- Document the composite exception and the copy embedded in it.
- Do not duplicate embedded copy as visible live text. Add a concise, accurate alt description and a text equivalent only when it provides meaningful access without causing duplicate announcements.
- Flag embedded offer, nutrition, legal, or CTA text as a production risk because it cannot be localized, personalized, or reliably changed by the ESP.

## Implementation

- Build one named module at a time after its design and asset decisions are documented. Keep semantic reading order independent of visual overlap.
- Use MJML that compiles to presentation-table HTML. Use inline critical styles, conservative widths, explicit image dimensions, and selective media queries. Do not use Grid, Flexbox, absolute positioning, or runtime JavaScript.
- Centralize repeated tokens and patterns such as the outer container, typography, spacing, buttons, image treatment, footer, and utility text. Keep campaign-specific copy and destinations in the module where they are reviewed.
- Keep important copy, offers, legal text, unsubscribe content, and CTA destinations as live HTML. Use real links only when the destination is supplied and approved; otherwise preserve a documented placeholder state rather than inventing one.
- Use `alt=""` for purely decorative images and descriptive alt text for meaningful images. Avoid repeating nearby live text in an image alt. Mark decorative presentation images so they do not interrupt the reading order.
- Use table-based layout and Outlook-safe fallbacks for any intentional overlap or background treatment. Keep the non-overlap path usable if Outlook ignores modern positioning or media queries.

## Client compatibility

Design for the least capable target client named in the brief. At minimum, inspect the compiled output for:

- Outlook desktop: MSO conditionals, table widths, VML/fallback behavior where needed, no dependence on unsupported positioning, and usable rendering when media queries are ignored.
- Gmail: inline styles, supported selectors, image dimensions, link behavior, clipping risk, and no reliance on unsupported head CSS.
- Apple Mail and other WebKit clients: responsive rules, dark-mode behavior, and image/text contrast.

Do not claim Outlook, Gmail, Apple Mail, or ESP compatibility from a browser preview. Browser QA is necessary but is not real-client testing.

## Responsive, accessibility, and dark-mode QA

Run the project’s existing validation and build workflow before visual QA. Use the repository’s existing Playwright script and required widths: 320px, 390px, 600px, and 1440px. Check for horizontal overflow, unloaded images, missing alt attributes, broken or placeholder links, clipped text, bad stacking/order, and unexpected whitespace. Review both the screenshots and the generated QA report; do not overwrite campaign documentation with invented results.

Also inspect the compiled email and rendered states for:

- Keyboard and screen-reader order, meaningful link labels, sufficient color contrast, readable text with images disabled, and a logical heading hierarchy.
- Dark mode: text and button contrast, logo/icon visibility, image treatment, forced-color behavior, and whether the design remains usable when client color transformations occur. Add dark-mode overrides only when they are supported by the project and tested; never depend on them for essential meaning.
- Mobile tap targets, single-line CTA assumptions, long-copy wrapping, and image scaling at the narrowest width.

Record limitations explicitly. Never infer real-client or post-ESP results from Playwright screenshots.

## ESP handoff

Before handoff, confirm that all production inputs are approved: final copy, offer/legal terms, CTA URLs and tracking, unsubscribe syntax, sender/preheader requirements, hosted HTTPS image URLs, target client matrix, and fallback behavior. Replace local asset paths only through the approved ESP or hosting workflow. Preserve any unresolved item as a handoff blocker.

Provide the compiled HTML, source MJML, asset inventory, known limitations, QA evidence, and a clear list of what still requires ESP or real-client verification. Do not send, deploy, upload, or commit without explicit approval.

## Repository workflow

Prefer the project’s existing commands and documentation over new scripts or duplicate guidance. In this repository, the source of truth is `src/email.mjml`; use `npm run validate`, `npm run build`, `npm run visual-qa`, and `npm test` as appropriate. Read `docs/ACCEPTANCE_CRITERIA.md`, `docs/DESIGN_SPEC.md`, `docs/ASSET_MANIFEST.csv`, `docs/SECTION_BUILD_PLAN.md`, and `docs/QA_REPORT.md` for project-specific evidence and gates. The existing `scripts/build-preview.mjs` and `tests/visual-qa.mjs` define the preview and browser QA workflow.
