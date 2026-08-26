# Active Skills

Use these rules for any future Sun Power site changes.

## UI and mobile quality

- `frontend-ui-engineering`: treat the site as production UI, not prototype markup.
- Build mobile-first and verify at `320px`, `768px`, `1024px`, and `1440px`.
- Keep touch targets at or above `44x44px`.
- Every section needs one job. Cut filler before adding chrome.
- Prefer semantic tokens and consistent spacing over ad hoc colors and pixel values.
- Preserve keyboard access, visible focus, labels, and meaningful empty or pending states.

## Motion

- `framer-motion-animator`: use Framer Motion for page transitions, reveal choreography, hover states, and micro-interactions.
- Animate only `transform` and `opacity`.
- Default to spring-based UI motion and stagger where it improves hierarchy.
- Respect `prefers-reduced-motion`.
- Motion should clarify hierarchy or feedback, not decorate every interaction.

## Testing

- `webapp-testing`: verify local UI behavior with Playwright-based browser checks when the site changes materially.
- Inspect the rendered UI after `networkidle`, then act on discovered selectors.
- Use browser verification for responsive and interaction-critical work, not just `npm run build`.

## Design reference

- `ui-ux-pro-max` was requested as a design reference, but the upstream repo is not packaged as an installable Codex `SKILL.md`.
- Use it as a style benchmark instead:
  - crisp hierarchy above the fold
  - strong mobile ergonomics
  - clear conversion path
  - deliberate color and typography choices
  - no generic AI landing-page patterns

## Copy

- `human-writing`: keep copy specific, direct, and free of template language.
