## Packages
framer-motion | Stunning animations, page transitions, and interactive elements
canvas-confetti | Celebration effect for the daily spin
@types/canvas-confetti | Types for canvas-confetti

## Notes
- Expecting a REST endpoint for `GET /api/spins/random` returning a spin object.
- Email capture form will submit to `POST /api/subscribe` (which may 404 if not implemented backend, per constraints this is allowed).
- Themed using custom HSL CSS variables mapping to a premium Forest Green and Warm Cream palette.
