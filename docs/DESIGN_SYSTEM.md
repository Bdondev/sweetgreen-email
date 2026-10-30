# Email Design System

Status: provisional portfolio system derived from `reference/sweetgreen-email.jpeg` and the supplied artwork.

## Core tokens

| Token | Value | Use |
|---|---|---|
| Dark green | `#075344` | Live headings, body copy, dark CTA background |
| Hero green | `#0b4f3f` | Hero artwork fallback/background |
| Lime | `#e5ff32` | Primary CTA background |
| Cream | `#f1f2df` | Harvest and loyalty section background |
| Loyalty card | `#dce8d9` | Loyalty copy card |
| Sky blue | `#d9e8f5` | Loyalty artwork background |
| Email canvas | `600px` | Shared desktop outer container |
| Content rail | `560px` | Inset banners and loyalty card |

## Typography

- System sans: `Arial, Helvetica, sans-serif` for CTA labels and general email UI.
- Display heading: `Arial Black, Arial, Helvetica, sans-serif`, uppercase, heavy weight.
- Loyalty copy: `Georgia, 'Times New Roman', serif`, dark green, centered.
- The harvest banner is a supplied composite PNG. Its embedded copy cannot inherit live CSS typography; it is an asset-level exception documented in the asset manifest.

## CTA system

- Primary lime CTA: `16px`, `700`, `120%` line height, `15px 24px` inner padding, `28px` radius.
- Dark green CTA: same dimensions and typography, with white label text.
- Hero and harvest CTAs use a 92% button table within the 600px canvas.
- Loyalty CTA fills the card’s available content width.
- Mobile CTA labels remain single-line where the available width allows.

## Layout rules

- All sections are nested in one MJML wrapper with a 600px desktop canvas.
- Full-bleed artwork remains 600px where the reference shows edge-to-edge imagery.
- Inset content uses the 560px rail.
- Overlap is limited to the documented hero and loyalty compositions and must be rechecked in Outlook.
