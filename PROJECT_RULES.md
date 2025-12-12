# Project Rules (Cursor Agents)

## Stack
- Next.js 15.4.9 (App Router)
- Payload CMS 3.68.3
- Postgres via docker compose

## Local run
1) docker compose up -d
2) npm install
3) npm run dev
- Admin: http://localhost:3000/admin
- API:   http://localhost:3000/api/payload

## Critical integration rules (DO NOT BREAK)
- app/layout.tsx MUST use Payload RootLayout from @payloadcms/next/layouts
- app/admin/serverFunction.ts MUST be a server action and passed into RootLayout
- app/admin/[[...segments]]/page.tsx MUST render:
  - const config = await configPromise
  - <RootPage config={config} params={params} />

## Env
- PAYLOAD_SECRET
- DATABASE_URI
- NEXT_PUBLIC_SITE_URL

## Definition of Done for any change
- npm run build (must pass)
- /admin loads without runtime errors
- /api/payload/users/me responds (200 or 401 depending on auth state)
