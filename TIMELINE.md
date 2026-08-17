# TIMELINE

## 1. Run Identity

- MODEL_NAME: FABLE
- MODEL_NAMESPACE: fable
- Benchmark: Hosted MCP Apps Example Gallery (Wave 1)
- GitHub repository: different-ai/openwork-mcp-app-gallery-fable
- Local directory: /Users/jalillaaraichi/openwork-mcp-app-gallery-fable
- Vercel project: openwork-mcp-app-gallery-fable
- Default/production branch: forward
- Feature branch: fable/gallery-v1

## 2. Timing Summary

- Started (UTC): 2026-08-17T16:42:52.276Z
- Started (Europe/Berlin): 2026-08-17T18:42:52.276+02:00
- Start epoch (ms): 1786984972276
- Completed (UTC): Pending
- Completed (Europe/Berlin): Pending
- Total wall-clock duration: Pending
- Total external-wait duration: Pending
- Total CI-wait duration: Pending
- Total Vercel-wait duration: Pending
- Total recorded rework duration: Pending
- Estimated active implementation duration (Estimated): Pending
- Time to first working two-app local vertical: Pending
- Time to first working six-app catalog: Pending
- Time to first green local release:check: Pending
- Time to PR open: Pending
- Time to first Preview: Pending
- Time to first all-green PR head: Pending
- Time to merge: Pending
- Time to staged Production readiness: Pending
- Time to production promotion: Pending
- Time to stable-origin proof: Pending
- Final verdict: Running

- Status: Running
- Current phase: Preflight

## 3. Phase Durations

| Phase | Name | Start (UTC) | End (UTC) | Duration | Status | Dominant category |
|-------|------|-------------|-----------|----------|--------|-------------------|
| P0 | Preflight | 2026-08-17T16:42:52Z | 2026-08-17T16:52:30Z | 9m38s | Passed | research/auth/protocol verification |
| P1 | Repository bootstrap | 2026-08-17T16:52:30Z | 2026-08-17T16:57:30Z | 5m00s | Passed | GitHub/provider setup |
| P2 | Source pinning + provenance | 2026-08-17T16:57:30Z | 2026-08-17T17:05:00Z | 7m30s | Passed | upstream import + adaptation |
| P3 | Implementation + local verification | 2026-08-17T17:05:00Z | — | — | Running | implementation |
| P4 | Local verification | — | — | — | Pending | — |
| P5 | PR + CI + Preview | — | — | — | Pending | — |
| P6 | Merge + post-merge checks | — | — | — | Pending | — |
| P7 | Staged production + canary | — | — | — | Pending | — |
| P8 | Promotion + stable-origin proof | — | — | — | Pending | — |
| P9 | Host compatibility + reports | — | — | — | Pending | — |

## 4. Milestone Times

| Milestone | UTC | Berlin | Elapsed |
|-----------|-----|--------|---------|
| Run start | 2026-08-17T16:42:52.276Z | 2026-08-17T18:42:52.276+02:00 | 0s |
| Preflight complete | 2026-08-17T16:52:30Z | 18:52:30 | 9m38s |
| Local repository initialized (governance commit f721de0) | 2026-08-17T16:55:30Z | 18:55:30 | 12m38s |
| GitHub repository created (private, forward default, ruleset 20947878) | 2026-08-17T16:56:40Z | 18:56:40 | 13m48s |
| Six-app catalog first working locally (95 tests green; two-app vertical was not staged separately — the adapter pattern made all six land together) | 2026-08-17T17:17:39Z | 19:17:39 | 34m47s |
| Browser proof: 15 Playwright tests green through the upstream basic host (all six render, get-time UI→tool call, budget deep interaction, isolation, gallery a11y) | 2026-08-17T17:24:00Z | 19:24:00 | 41m08s |
| First green full local release:check | 2026-08-17T17:25:30Z | 19:25:30 | 42m38s |

## 5. Chronological Event Log

| # | UTC | Berlin | Elapsed | Phase | Category | Event | Result | Ref |
|---|-----|--------|---------|-------|----------|-------|--------|-----|
| 1 | 2026-08-17T16:42:52Z | 18:42:52 | 0s | P0 | timeline | Run start recorded; timeline files created as first filesystem action | OK | — |
| 2 | 2026-08-17T16:43:20Z | 18:43:20 | 28s | P0 | authentication | gh authenticated as reachjalil (repo+workflow scopes); different-ai membership active; Vercel CLI 56.1.0 authenticated as jalil-7198 | OK | — |
| 3 | 2026-08-17T16:43:20Z | 18:43:20 | 28s | P0 | preflight | No collision: local dir absent, different-ai/openwork-mcp-app-gallery-fable absent | OK | — |
| 4 | 2026-08-17T16:45:30Z | 18:45:30 | 2m38s | P0 | research | All 8 sources of truth read; authoritative openwork-snacks:forward aef537a verified identical to local reference files (via authenticated gh api; unauthenticated raw fetch 404s because repo is private) | OK | — |
| 5 | 2026-08-17T16:46:10Z | 18:46:10 | 3m18s | P0 | source-freeze | modelcontextprotocol/ext-apps fetched at exact pinned commit 10195ad91851502134930e9b80ec2c04e277a720; six selected examples inspected; upstream LICENSE = MIT→Apache-2.0 transition, example package.json declares MIT | OK | — |
| 6 | 2026-08-17T16:47:00Z | 18:47:00 | 4m08s | P0 | dependency | Verified npm: mcp-handler 2.1.1, @modelcontextprotocol/server 2.0.0 (+core 2.0.0, zod ^4.2.0), @modelcontextprotocol/ext-apps 1.7.5 (matches pinned commit version), hono 4.13.2, zod 4.4.3 | OK | — |
| 7 | 2026-08-17T16:52:30Z | 18:52:30 | 9m38s | P0 | protocol-verification | Live probe against mcp-handler 2.1.1: modern era 2026-07-28 requires per-request _meta envelope (io.modelcontextprotocol/protocolVersion + clientCapabilities) plus MCP-Protocol-Version, Mcp-Method, Mcp-Name headers, JSON responses; legacy 2025-era stateless initialize/tools/call/resources/read works over SSE framing; GET/DELETE → 405; malformed JSON → -32700 | OK | — |

## 6. Issues Encountered

### ISS-001 — plan's 512 KiB resource ceiling is smaller than the real official React example artifacts

- First observed: 2026-08-17T17:13:30Z (elapsed 30m38s), phase P3
- Resolved: 2026-08-17T17:14:30Z (elapsed 31m38s); time-to-detect: immediate at first UI build; time-to-repair: ~1m
- Classification: upstream / plan-input; Origin: pre-existing (plan guess made before any example was built)
- Expected: each single-file app UI ≤ 512 KiB (plan's initial ceiling)
- Observed: `basic-server-react` builds to 543,832 bytes of single-file HTML (React + the ext-apps App bridge, which carries its Zod message schemas); build aborted on the ceiling check
- Correction: UI-resource ceiling raised to a documented, still-hard-bounded 1 MiB (`MAX_RESOURCE_BYTES`), `resources/read` responses got their own envelope ceiling (`MAX_RESOURCE_RESPONSE_BYTES` = 1.25 MiB), tool-result ceiling stays 512 KiB as planned. Recorded as a deviation from the shared plan.
- Affected: src/limits.ts, src/gateway.ts, scripts/bundle-mcp-app-resources.mjs
- Closing verification: all six UIs bundle (3,333,501 bytes total, largest ~560 KiB) and the size-ceiling tests pass
- Status: Resolved

### ISS-002 — three first-round test-suite defects (expectation and fixture bugs)

- First observed: 2026-08-17T17:16:36Z; Resolved: 2026-08-17T17:17:39Z; time-to-repair ~1m
- Classification: test; Origin: self-introduced
- (a) legacy initialize expectation assumed down-negotiation for a supported version (the server echoes supported requested versions; only unknown-future requests negotiate down) — test corrected and extended to cover both behaviors; (b) the `import.meta.url` bundle-path fallback defeated the missing-bundle chdir simulation — replaced with an explicit `GALLERY_RESOURCE_BUNDLE_PATH` override seam (digest-validated, remove-only in effect); (c) the per-app semaphore cache ignored a changed fixture capacity — cache key now includes capacity (also a latent real defect, see REG-001).
- Closing verification: full suite 95/95 green
- Status: Resolved

### ISS-003 — SBOM generation failed twice before release:check went green

- First observed: 2026-08-17T17:20:30Z; Resolved: 2026-08-17T17:25:30Z; time-to-repair ~5m (two attempts)
- Classification: implementation; Origin: self-introduced
- Attempt 1 (module-resolution walk with a naive fallback) undercounted pnpm's non-hoisted closure (4 of 7 components: exports-hidden package.json files were unreachable). Attempt 2 (`pnpm licenses list` subprocess) worked under corepack but failed inside `release:check` because `npm_execpath` there is the user's standalone pnpm 9 binary, which cannot read the pnpm 10 store (`ERR_PNPM_MISSING_PACKAGE_INDEX_FILE`) — and is a native binary, so `node $npm_execpath` also broke. Final: in-process module-graph walk that resolves each package's entry and walks up to its real manifest; fails loudly on unresolved packages; no subprocess at all.
- Closing verification: SBOM lists all 7 production components; full release:check green
- Status: Resolved

## 7. Regressions Introduced and Corrected

### REG-001 — per-app semaphore cache could serve a stale concurrency ceiling

- Linked issue: ISS-002(c)
- Introduced: with the first gateway implementation (commit 0d39443's history, 2026-08-17T17:08Z); Detected: 2026-08-17T17:16:36Z by the concurrency-shedding test; Corrected: 2026-08-17T17:17:20Z (same commit, pre-push)
- Symptom: `appSemaphore(slug, capacity)` cached by slug only, so a later caller with a different capacity silently reused the first ceiling; surfaced as the 429-shedding test observing no shedding
- User impact if shipped: none for the static production registry (capacities never change at runtime), but a config change deployed without instance restart discipline could have enforced a stale ceiling
- Correction: cache key includes the capacity; closing verification: concurrency test observes both successes and 429s, and post-release capacity remains correct
- Status: Corrected before any push

## 8. External Waits

(None yet.)

## 9. Rework and Abandoned Approaches

(None yet.)

## 10. Deployment Timeline

(None yet.)

## 11. Final State

Pending.
