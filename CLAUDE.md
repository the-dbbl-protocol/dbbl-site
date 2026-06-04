# DBBL Protocol — Public Site Claude Code Context

## What It Is
Public-facing marketing/documentation site for The DBBL Protocol at dbblprotocol.org.
Explains the project, builds trust with platform engineers, and lets platforms request access.
Separate repo from the API — no backend logic here.

## Stack
- Astro 5 (static, TypeScript strict)
- Tailwind CSS v4
- Cloudflare Pages (auto-deploy on push to main)
- No framework adapter — pure static output to /dist

## Deployment
- Repo: the-dbbl-protocol/dbbl-site
- Cloudflare Pages project connected to GitHub, auto-deploys on push to main
- Custom domain: dbblprotocol.org (configured in Cloudflare)
- Build command: npm run build
- Output: dist

## Design
- Dark theme, clinical/technical — reference: spamhaus.org, HaveIBeenPwned, Stripe Radar
- Background: #0a0b0f / Surface: #12141a
- Accent: #00d4ff (cyan) or #3b82f6 (blue)
- Text: #e2e8f0
- Monospace: JetBrains Mono for code/data
- Risk rating colors: green → amber → orange → red (5 tiers)

## Site Structure
- / — Home (hero, problem, how it works, use cases, request access CTA)
- /scoring — Scoring transparency (ratings, weights, severity, decay)
- /privacy — Privacy commitment (no PII, hashes only)
- /docs — API reference (endpoints, auth, request/response examples)
- /access — Request access form

## Access Form
Posts to the dbbl-api Worker or mailto fallback.
API lives at: dbbl-api.thedbblprotocol.workers.dev (canonical: dbblprotocol.org/api eventually)

## Related Projects
- **dbbl-api** — the actual Hono/Cloudflare Workers API at ~/projects/dbbl-api
- **Enclave Tickets** — consumer platform (team-insatiable/enclave-tickets)
- **Jaydslist** — consumer platform (team-insatiable/jaydslist)
- **Reakyn** — consumer platform (team-insatiable/reakyn)

## Current Status
Site fully built and deployed. Auto-deploy wired up.
Immediate next tasks:
- Audit all email addresses referenced in the site and set up mail flow
- Wire access form to dbbl-api Worker endpoint (or confirm mailto fallback is in place)