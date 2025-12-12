# ps. (Next.js + PayloadCMS)

## Requirements
- Node 20.x
- npm 10.x
- Docker (for Postgres)

## Env
Create `.env.local`:
- PAYLOAD_SECRET=...
- DATABASE_URI=postgres://legal:legal@127.0.0.1:5432/legal
- NEXT_PUBLIC_SITE_URL=http://localhost:3000

## Start Postgres
docker compose up -d

## Install
npm i

## Dev
npm run dev

Open:
- http://localhost:3000/admin
- http://localhost:3000/api/payload

## Build
npm run build
