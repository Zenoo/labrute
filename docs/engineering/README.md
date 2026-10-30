# Engineering reference

Repository guide for future issue investigation and feature development. Reviewed against this checkout
on 2026-10-30. This is a navigation and implementation reference, not a claim that every source file or
runtime behavior has been exhaustively audited. Follow linked source when details change.

## Read by task

| Need | Guide |
| --- | --- |
| Understand the application and domain boundaries | [Architecture](architecture.md) |
| Set up, build, test, lint, generate assets, or troubleshoot tooling | [Development](development.md) |
| Match code style and implement a feature across layers | [Conventions and change recipes](conventions.md) |
| Change simulation, fight protocol, rendering, seeking, or rewind | [Fights](fights.md) |
| Always-loaded repository instructions | [AGENTS.md](../../AGENTS.md) |

## Task-to-code map

All paths below are relative to the repository root. Search in the indicated area first.

| Task or symptom | Start here | Follow through |
| --- | --- | --- |
| Route, new screen, navigation | `client/src/routes.tsx`, `client/src/views` | `layouts`, `components`, `App.tsx` providers |
| API call, loading, request rejected | `client/src/utils/Server.ts`, `Fetch.ts` | `hooks/useServer.tsx`, server routes and middleware |
| Login, OAuth, fingerprint, permission | `server/src/controllers/OAuth.ts`, `Users.ts`, `utils/auth.ts` | client auth/fingerprint/CSRF hooks, `securityCheck.ts` |
| Brute creation, leveling, destiny, reset, rank | `server/src/controllers/Brutes.ts` | `core/src/brute`, `server/src/utils/brute`, `DestinyChoice` schema |
| Stats or perk balance | `core/src/brute/skills.ts`, `weapons.ts`, `pets.ts`, `calculatedBrute.ts` | server `getFighters.ts`, `getFighterStat.ts`, `fightMethods.ts`, client tooltips/wiki |
| Wrong combat result or skill interaction | `server/src/utils/fight` | `core/src/types.ts`, server fight tests |
| Wrong animation, seek, replay, rewind | `client/src/utils/fight/Fight.ts` | `FighterHolder.ts`, `setupFight.ts`, `utils`, `FightComponent.tsx`, client tests |
| Brute body, colors, portrait or cached image | `client/src/utils/BruteDisplay.ts`, `hooks/useRenderer.tsx` | `components/Brute/Body`, core body/color parsers and catalogs |
| Tournament timing, generation, rewards | `server/src/controllers/Tournaments.ts`, `server/src/dailyJob.ts` | `core/src/constants.ts`, tournament views, schema |
| Clan, forum, roles, permissions, boss | `server/src/controllers/Clans.ts` | `core/src/clan/permissions.ts`, clan views, `utils/clan` |
| Clan war lineup or resolution | `server/src/controllers/ClanWars.ts` | `dailyJob.ts`, clan war views, fight generation |
| Events | `server/src/controllers/Events.ts` | `dailyJob.ts`, `client/src/views/event`, shared event response types |
| Achievements, rankings, titles | `server/src/controllers/Achievements.ts` | `utils/fight/updateAchievements.ts`, core `Achievements.ts`, `Titles.ts` |
| User activity, statistics, charts | `server/src/controllers/Users.ts`, `utils/stats` | `StatsView.tsx`, schema stats models, `statistics-plan.md` |
| Moderation or admin tooling | server controllers `Users`, `Brutes`, `BruteReports`, `UserLogs`, `Configs` | `client/src/views/admin`, admin/moderator layouts |
| Feed, notifications, audit log | server controllers `Logs`, `Notifications`, `UserLogs` | `utils/createUserLog.ts`, shared response types, feed views |
| Missing/wrong translations or plural | `client/src/i18n.ts`, `i18n/withPluralFallbacks.ts` | English namespace JSON, server `i18n.ts`, `server/i18n/en.json` |
| Schema, enum, index, migration | `server/prisma/schema.prisma`, `server/prisma/migrations` | generated root `prisma`, shared types, consumers |
| Environment, server readiness, scheduled job | `server/src/config.ts`, `server.ts`, `dailyJob.ts` | `context.ts`, `utils/ServerState.ts`, `utils/middlewares` |
| Sprite, icon, sound | `client/public/images`, `client/public/sfx`, `client/textures-*.tps` | fight spritesheet loader, `client/src/assets/sfx.json`, generation scripts |
| Release, deployment, version mismatch | `.github/workflows`, `release-please-config.json` | core `Version.ts`, client request headers, server `securityCheck.ts` |

## Fast investigation loop

1. Reproduce the reported behavior and identify which layer owns it. Retain supplied fight IDs or fixtures.
2. Search a concrete route, translation key, `StepType`, or function in the mapped directory.
3. Read callers, shared types, and the closest tests before changing the implementation.
4. Implement the complete behavior across affected layers and run the smallest meaningful checks.
5. Review the diff for generated artifacts, accidental formatting churn, and changed compatibility.
6. Update the relevant guide only if the change introduces lasting knowledge.

Useful source searches (run from repository root):

```sh
rg -n 'METHOD_OR_ROUTE' server/src/routes.ts client/src/utils/Server.ts
rg -n 'StepType\.Reload' core/src server/src client/src client/tests server/tests
rg -n 'TRANSLATION_KEY' client/src server/src server/i18n
rg --files client/src server/src core/src -g '*FEATURE*'
```

Avoid broad searches through `node_modules`, compiled `lib`, generated Prisma runtime files, all migration
SQL, and binary assets unless the task specifically concerns them.
