# Design Specification

## Audit status

**Observed reference:** `reference/sweetgreen-email.jpeg` is present at 679×4630. The earlier `.jpg` path was incorrect.

## Provisional foundation

- Desktop content wrapper: 600px proposed email canvas, with internal section margins where visible in the reference.
- Mobile review widths: 320px and 390px.
- Desktop context review: 1440px.
- Layout model: semantic reading order, presentation tables, live HTML text, responsive stacking where required.

## Section map

| # | Section | Evidence | Implementation status | Open questions |
|---|---|---|---|---|
| 1 | Hero / promotional offer | Provided artwork; observed live CTA treatment | Built | Approved offer copy and production URL |
| 2 | Autumn Harvest Bowls | Observed heading, content card, bowl, pumpkin, CTA | Built | Production copy and asset separation |
| 3 | Meet the Grower | Observed spinach/farm composite and story | Built | Production copy and asset approvals |
| 4 | Loyalty program | Provided phone/produce artwork; observed live card and CTA | Built | Approved copy and production URL |
| 5 | Footer | Observed brand, social, legal, and unsubscribe content | Built | Remaining legal approval |

## Evidence labels

- **Provided:** `reference/sweetgreen-email.jpeg`, project assets, MJML/Node stack.
- **Observed:** section order, color relationships, approximate spacing, card/button treatments, and footer presence.
- **Proposed:** 600px shared outer container, 320px/390px mobile review widths, and conservative table-based compilation.
- **Missing/Needs confirmation:** approved campaign copy, offer terms, final URLs, remaining legal text, and real-client QA. Footer address is approved; ESP syntax is out of scope.
