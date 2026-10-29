# Section Build Plan

## Status

Blocked pending the reference image and approved campaign inputs.

## Proposed module structure

1. Documented preheader and email shell.
2. Header/brand module, if present in the supplied design.
3. One section module per numbered design section, built in reading order.
4. Reusable live-text CTA module with verified destination.
5. Footer, legal, address, and unsubscribe module using verified ESP syntax.

The actual section list, mobile order, asset treatment, and copy remain undefined until the reference is available.

## Build gates

- Audit and asset decisions approved before section coding.
- Build and validate one named section at a time.
- Compile after each section and inspect adjacent sections for regressions.
- Run browser checks at 320px, 390px, 600px, and 1440px; then perform real-client and ESP QA.
