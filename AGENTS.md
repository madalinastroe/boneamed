# Bonea Med agent context

Bonea Med is a mobile-first Romanian-language clinic website and appointment-booking prototype, built with Vue 3, Vite, TypeScript, and Vue Router.

## Project map

- `src/views/` — routed pages and home-page variants
- `src/composables/` — booking UI logic
- `src/services/appointmentService.ts` — prototype appointment availability and confirmation
- `src/data/content.ts` — site content
- `src/styles/main.css` — shared styling
- `public/images/` — site images
- `src/router.ts` — application routes

## Working rules

- Keep user-facing copy in Romanian and code/project structure in English.
- Preserve the existing Vue/TypeScript patterns; do not alter generated `dist/` output.
- For UI work, change only the explicitly requested screen, component, state, or style. Scope new selectors and behavior to that target; do not modify shared styles, layout primitives, other routes, or home-page variants unless the request explicitly includes them.
- After UI work, check the affected view and any existing views that share the changed component or style for unintended visual or behavioral effects.
- Before substantial work, read `docs/current-state.md` and `docs/decisions.md`.
- Verify relevant changes with `npm run build`; run `npm test` when tests cover the changed behavior.
