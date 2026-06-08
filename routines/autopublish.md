# Routine — Blog Autopublish (HealthAesthetics MY)

> Autonomous self-run content loop. Drains `src/data/blog-backlog.json` one article per run, fully
> gated so unattended publishing is safe. Trust tier T1 (own content). This is the 0→1→∞ engine.

PROJECT: `D:/OneDrive/Claude Code/project-healthaesthetics`
LIVE: `https://healthaesthetics.kgstaging.workers.dev`
SKILL SCRIPTS: `C:/Users/kimgu/.claude/skills/kg-directory-launcher/scripts/`

## Steps (one article per run)
1. **Pick.** Read `src/data/blog-backlog.json`. Choose the `status:"queued"` topic with the lowest
   `priority` number, tie-break by highest `volume`. If none remain, log "backlog drained" and STOP
   (do not invent topics; a separate backlog-refresh run handles replenishment).
2. **Draft.** Write `src/content/blog/<slug>.md` using the topic's `title`, `target_keyword`,
   `pillar`, and `internal_links`. Rules:
   - Frontmatter EXACTLY per `src/content/config.ts` (title, description <=155 chars with the keyword,
     `publishedAt` today, `locale:"en"`, `author:"HealthAesthetics MY editorial team"`, tags[],
     `categories` = real category slug(s), readingTime, `draft:false`).
   - 1000-1400 words, answer-first intro, `##`/`###` structure, scannable lists, short FAQ close.
   - KG voice: NO em-dashes, en-dashes, raw numeric HTML entities, or banned vocab (delve, tapestry,
     elevate, realm, landscape, testament, navigating, seamless, boasts).
   - Cite 2+ named Malaysian authorities (KKM/MOH, MMC, MDC, Pharmacy Board, Malaysian Optical Council,
     T&CM Division, NPRA, Act 586) with what they regulate. Never invent URLs in body text.
   - Cost/price figures = INDICATIVE RANGES ONLY, labelled "indicative only, not a quote, confirm with
     the clinic." Never fabricate named-clinic prices. No medical-efficacy guarantees.
   - Cross-link ONLY to the topic's `internal_links` (real `/clinics/<slug>` + `/tools/<slug>` paths)
     and, if natural, an existing published article. Never invent a route.
3. **Gate (HARD — do not deploy on any failure):**
   - `node "<scripts>/copy-compliance-check.cjs" src` → must PASS (em=0 en=0 entity=0 vocab=0).
   - `npm run build` → must pass, 0 errors.
   - `node "<scripts>/e2e-check.cjs" dist` → internal link integrity must PASS; key routes PASS.
   - `node "<scripts>/geo-audit.cjs" dist` → categories 1-4 must PASS.
4. **Publish.** If ALL gates pass: `npx wrangler deploy`. Then
   `node "<scripts>/submit-indexnow.cjs" https://healthaesthetics.kgstaging.workers.dev "D:/OneDrive/Claude Code/project-healthaesthetics"`.
5. **Record.** Set the topic `status:"published"` + add `publishedAt` in `blog-backlog.json`. Append a
   line to `routines/autopublish.log` (date, slug, result). Local `git add -A && git commit` (NO push).
6. **On failure:** do NOT deploy. Leave `status:"queued"`. Append the failure + reason to
   `routines/autopublish.log`. Stop cleanly (next run retries).

## Guardrails
- One article per run. Never bulk-publish.
- Never push to GitHub. Never touch credentials. Never email anyone (that is a T3 routine).
- If the build/gates are red for a reason you cannot fix in this run, stop and log — never force a deploy.
