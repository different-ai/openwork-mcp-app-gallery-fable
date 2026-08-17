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
| P1 | Source pinning + provenance | — | — | — | Pending | — |
| P2 | Repository bootstrap | — | — | — | Pending | — |
| P3 | Implementation | — | — | — | Pending | — |
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

(None yet.)

## 7. Regressions Introduced and Corrected

(None yet. This section is mandatory and remains present even if empty.)

## 8. External Waits

(None yet.)

## 9. Rework and Abandoned Approaches

(None yet.)

## 10. Deployment Timeline

(None yet.)

## 11. Final State

Pending.
