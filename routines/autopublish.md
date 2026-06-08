# Routine — Blog Autopublish (Cyber Secure SME)

> Autonomous self-run content loop. Drains `src/data/blog-backlog.json` one article per run, fully
> gated so unattended publishing is safe. Trust tier T1 (own content). This is the 0->1->inf engine.

PROJECT: `D:/KG/10_work/repos/project-cybersecuresme`
LIVE: `https://cybersecuresme.kgstaging.workers.dev`
SKILL SCRIPTS: `C:/Users/kimgu/.claude/skills/kg-directory-launcher/scripts/`
DEPLOY TOKEN: the KG-account Workers token is `D:/OneDrive/Claude Code/credentials/cloudflare-token-csoft.txt` (carries Workers Scripts:Edit; the tehkimguan token is DNS+R2 only and will NOT deploy).

## Steps (one article per run)
1. **Pick.** Read `src/data/blog-backlog.json`. Choose the `status:"queued"` topic with the lowest
   `priority` number, tie-break by highest `volume`. If none remain, log "backlog drained" and STOP
   (do not invent topics; a separate backlog-refresh run handles replenishment).
2. **Draft.** Write `src/content/blog/<slug>.md` using the topic's `title`, `target_keyword`,
   `pillar`, and `internal_links`. Rules:
   - Frontmatter EXACTLY per `src/content/config.ts` (title, description <=155 chars with the keyword,
     `publishedAt` today, `locale:"en"`, `author:"Cyber Secure SME editorial team"`, tags[],
     `categories` = real category slug(s), readingTime, `draft:false`).
   - 1000-1400 words, answer-first intro, `##`/`###` structure, scannable lists, short FAQ close.
   - KG voice: NO em-dashes, en-dashes, raw numeric HTML entities, or banned vocab (delve, tapestry,
     elevate, realm, landscape, testament, navigating, seamless, boasts).
   - Cite 2+ named Malaysian authorities (NACSA / Cyber Security Act 2024 Act 854, CyberSecurity Malaysia /
     MyCERT, PDPA 2010 + 2024 amendments / Act 709 / JPDP, MCMC, BNM RMiT, ISO/IEC 27001, CREST) with what
     they regulate. Never invent URLs in body text. Do not fabricate statistics.
   - Cost/price figures = INDICATIVE RANGES ONLY, labelled "indicative only, not a quote, confirm with
     the provider." Never fabricate named-provider prices.
   - Cross-link ONLY to the topic's `internal_links` (real `/providers/<slug>` + `/tools/<slug>` paths)
     and, if natural, an existing published article. Never invent a route.
3. **Gate (HARD - do not deploy on any failure):**
   - `node "<scripts>/copy-compliance-check.cjs" src --soft-vocab` -> dashes must be 0 (PASS).
   - `npm run build` -> must pass, 0 errors.
   - `node "<scripts>/e2e-check.cjs" dist` -> INTERNAL link integrity must be 0 broken. NOTE: the script's
     key-route smoke is hardcoded to health routes (`/clinics`); ignore those false misses. External dead
     links are third-party provider sites (noise); do not block on them.
   - `node "<scripts>/geo-audit.cjs" dist` -> categories 1-4 must PASS (15/15).
4. **Publish.** If gates pass:
   `export CLOUDFLARE_API_TOKEN="$(tr -d '\r\n' < 'D:/OneDrive/Claude Code/credentials/cloudflare-token-csoft.txt')" && npx wrangler deploy`.
   Then `node "<scripts>/submit-indexnow.cjs" https://cybersecuresme.kgstaging.workers.dev "D:/KG/10_work/repos/project-cybersecuresme"`.
5. **Record.** Set the topic `status:"published"` + add `publishedAt` in `blog-backlog.json`. Append a
   line to `routines/autopublish.log` (date, slug, result). Local `git add -A && git commit` (NO push).
6. **On failure:** do NOT deploy. Leave `status:"queued"`. Append the failure + reason to
   `routines/autopublish.log`. Stop cleanly (next run retries).

## Guardrails
- One article per run. Never bulk-publish.
- Never push to GitHub. Never touch credentials beyond reading the deploy token. Never email anyone.
- If the build/gates are red for a reason you cannot fix in this run, stop and log - never force a deploy.
