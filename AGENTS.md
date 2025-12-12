# Agent Rules (Cursor)

## What this repo is
Next.js 15 (App Router) + PayloadCMS 3 + Postgres (Docker).

## Absolute requirements
- Must keep the project runnable in dev and buildable in prod.
- Prefer minimal diffs. Do not refactor unrelated code.

## Commands that must pass before you finish
- npm run build
- (optional) npm run lint (if enabled)

## Runtime smoke checks (dev)
- GET http://localhost:3000/admin should render Payload Admin UI
- GET http://localhost:3000/api/payload should respond (not 500)

## Environment
- Node: v20.x
- npm: v10.x

## Key integration files (do not break)
- app/layout.tsx
- app/admin/serverFunction.ts
- app/admin/[[...segments]]/page.tsx
- app/api/payload/[[...slug]]/route.ts
- payload/payload.config (ts)

## Workflow
1) Propose a short plan (3-7 bullets).
2) Make changes.
3) Provide commands to verify.
4) Summarize changed files.

## Output format in responses
- Plan
- Changes (files + what)
- How to test (exact commands)
- Notes / follow-ups
