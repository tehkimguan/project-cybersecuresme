# Routine — Site Health (HealthAesthetics MY)

> Daily autonomous safety net. Read-only checks against the LIVE site; opens a flag on regression.
> Trust tier T1.

LIVE: `https://healthaesthetics.kgstaging.workers.dev`
SCRIPTS: `C:/Users/kimgu/.claude/skills/kg-directory-launcher/scripts/`

## Steps
1. `node "<scripts>/e2e-check.cjs" https://healthaesthetics.kgstaging.workers.dev` — key-route smoke +
   external liveness against the live site.
2. `node "<scripts>/geo-audit.cjs" https://healthaesthetics.kgstaging.workers.dev` — agent-readiness
   must stay 15/15.
3. Also run against `dist` if a local build exists, for internal-link integrity:
   `cd "D:/OneDrive/Claude Code/project-healthaesthetics" && npm run build && node "<scripts>/e2e-check.cjs" dist`.
4. **If anything regresses** (broken internal link, missing route, GEO < 15/15, dead external that was
   previously alive): append a dated entry to `routines/site-health.log` with the specifics, and write a
   short alert summary. Do NOT auto-fix in this routine (a human or a fix routine handles repair).
5. If all green, append a one-line "OK" entry to the log.

## Guardrails
- Read-only. No deploys, no edits, no commits. Reporting only.
