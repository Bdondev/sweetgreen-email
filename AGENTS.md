# Email development rules

These rules apply to the marketing email in this repository.

- Keep important copy, offers, legal text, unsubscribe content, and CTA destinations as live HTML; do not invent missing values.
- Use MJML and presentation-table HTML with inline critical styles and selective media queries. Avoid Grid, Flexbox, absolute positioning, and runtime JavaScript.
- Keep structural tables email-safe and presentational; use `role="presentation"`, `cellpadding="0"`, `cellspacing="0"`, and `border="0"` where the compiled output supports them.
- Include a preheader when the campaign requires one, and preserve logical reading order, descriptive links, sufficient contrast, and usable text when images are blocked.
- Give images explicit dimensions where appropriate, use meaningful alt text for informative images, and use empty alt text for decorative images.
- Use absolute HTTPS asset URLs only for production or ESP handoff; local asset paths are allowed for repository previews.
- Check Gmail clipping risk, dark-mode rendering, and Outlook fallbacks before handoff. Use VML or bulletproof button treatment only when the component or target client requires it.
- Preserve source assets and existing project conventions. Build one named section at a time after the design and asset documentation is approved.
- Validate and compile the email before visual QA at 320, 390, 600, and 1440px. Browser previews do not replace real-client testing.
- Do not send, deploy, upload, or commit without explicit approval.
