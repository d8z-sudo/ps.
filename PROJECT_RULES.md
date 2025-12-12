# PROJECT_RULES — Legal Platform (SEO + Client Portal)

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- Payload CMS
- PostgreSQL (Docker Compose)
- Auth via HttpOnly cookies (no localStorage tokens)

## Product goals
- SEO-first public website for a legal company
- Blog and content pages editable via CMS
- Client personal account: case status, documents, chat
- Admin panel for content, clients, cases

## Non-negotiables
- SEO-first: every public page must have metadata (title, description, canonical).
- Clean URLs, sitemap.xml, robots.txt required.
- Prefer Server Components for public pages.
- Security: client can only see their own cases, documents, and messages.
- No passwords or tokens in localStorage.

## Folder conventions
- /app/(public)/...   public SEO pages
- /app/(app)/...      authenticated client portal
- /src/payload/...    Payload CMS config and collections
- /src/lib/...        shared utilities (auth, db, helpers)

## CMS rules
- All pages and blog posts must support SEO fields:
  - metaTitle
  - metaDescription
  - canonical
  - noindex
- Slugs must be unique and human-readable.

## Output format for AI-generated changes
1) Short implementation plan
2) List of affected files
3) Exact code per file
4) Commands to run and verify
5) Security and edge-case notes

## Restrictions
- Do NOT add heavy dependencies unless justified.
- Do NOT break existing routes or APIs.
- Keep MVP simple and extensible.
