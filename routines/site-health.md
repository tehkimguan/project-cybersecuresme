# Routine — Site Health (Cyber Secure SME)

> Daily autonomous safety net. Read-only checks against the LIVE site; opens a flag on regression.
> Trust tier T1.

PROJECT: `D:/KG/10_work/repos/project-cybersecuresme`
LIVE: `https://cybersecuresme.kgstaging.workers.dev`
SCRIPTS: `C:/Users/kimgu/.claude/skills/kg-directory-launcher/scripts/`

## Steps
1. `node "<scripts>/geo-audit.cjs" https://cybersecuresme.kgstaging.workers.dev` - agent-readiness must
   stay 15/15.
2. `cd "D:/KG/10_work/repos/project-cybersecuresme" && npm run build && node "<scripts>/e2e-check.cjs" dist`
   - INTERNAL link integrity must be 0 broken. NOTE: ignore the key-route smoke (`/clinics` etc. are
     hardcoded health routes in the script and do not exist here) and the external dead-link list
     (third-party provider sites; mostly anti-bot 403/429, not real outages).
3. **If a REAL regression appears** (a broken INTERNAL link, GEO < 15/15, a key route from THIS site
   such as `/providers` or `/tools` returning non-200): append a dated entry to `routines/site-health.log`
   with the specifics, and write a short alert summary. Do NOT auto-fix here (a human or a fix routine
   handles repair).
4. If all green, append a one-line "OK" entry to the log.

## Guardrails
- Read-only. No deploys, no edits, no commits. Reporting only.
