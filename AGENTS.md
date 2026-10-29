# Email development rules

These rules apply to the marketing email in this repository.

- Keep important copy, offers, legal text, unsubscribe content, and CTA destinations as live HTML; do not invent missing values.
- Use MJML and presentation-table HTML with inline critical styles and selective media queries. Avoid Grid, Flexbox, absolute positioning, and runtime JavaScript.
- Preserve source assets and existing project conventions. Build one named section at a time after the design and asset documentation is approved.
- Validate and compile the email before visual QA at 320, 390, 600, and 1440px. Browser previews do not replace real-client testing.
- Do not send, deploy, upload, or commit without explicit approval.
