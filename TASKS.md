# Tasks Backlog (Agent-driven)

## Priority 0 (Stability)
- Ensure `npm run dev` works reliably on Node 20 after clean install.
- Add a `scripts/doctor.sh` to validate environment + postgres + routes.

## Priority 1 (Payload setup)
- Add first real collection (e.g., Pages) + admin UI labels.
- Add seed script or instructions to create first user & sample content.
- Add basic access control patterns.

## Priority 2 (Project structure)
- Add README with local setup steps (docker, env, dev, build).
- Add `.env.example` (no secrets).
- Add CI workflow for build.

## Acceptance criteria for any PR
- `npm run build` passes.
- No 500 errors on `/admin` and `/api/payload` in dev.
