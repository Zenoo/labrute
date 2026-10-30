# Architecture and domain map

## Workspace boundaries

The [workspace manifest](../../pnpm-workspace.yaml) declares four TypeScript/ESM packages.

| Workspace | Package           | Owns                                                               | Output/dependencies                                              |
| --------- | ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `prisma`  | `@labrute/prisma` | Generated Prisma client, database models/enums, browser entry      | Generated directly into this directory; metadata also lives here |
| `core`    | `@labrute/core`   | Shared game rules, catalogs, constants, types and errors           | `core/lib`; depends on Prisma workspace                          |
| `server`  | `@labrute/server` | Express API, persistence, combat simulation, scheduled maintenance | `server/lib`; depends on core and Prisma                         |
| `client`  | `@labrute/client` | React UI, MUI themes, Pixi rendering, audio and translations       | Vite `client/build`; depends on core and Prisma                  |

Conceptually: schema -> generated Prisma -> core -> server/client. Core must not import browser-only
or server-only application code. Both consumers resolve core's compiled `lib` entry, so a source edit
in core needs compilation before consumers and compiled-code tests can see it.

The root [build project](../../tsconfig.build.json) references Prisma, core, and server. The client has
its own type-check configuration and Vite build. Database source is
[server/prisma/schema.prisma](../../server/prisma/schema.prisma), not the generated copy in root `prisma/`.

## HTTP request and application lifecycle

1. [Client entry](../../client/src/index.tsx) initializes the React application and related setup.
   [App.tsx](../../client/src/App.tsx) composes CSRF, fingerprint, server, auth, brute, renderer,
   alert, confirmation, theme, localization, and Helmet providers around routing.
2. [routes.tsx](../../client/src/routes.tsx) selects views/layouts. Views use `useServer` and the typed
   [Server facade](../../client/src/utils/Server.ts).
3. [Fetch](../../client/src/utils/Fetch.ts) sends credentials plus authorization, CSRF, fingerprint,
   language, version, and predictable headers. It fetches/caches CSRF tokens and retries a CSRF
   rejection once. `useServer` gates calls on fingerprint readiness.
4. [Server main](../../server/src/main.ts) loads configuration, installs Day.js plugins and telemetry,
   then dynamically imports the server. Preserve telemetry-before-server import ordering.
5. [server.ts](../../server/src/server.ts) installs CORS, cookies, CSRF, body parsing, request locks,
   readiness, and security middleware before application routes. `/api/csrf` is registered separately.
   CSRF applies to GET too: only HEAD/OPTIONS are ignored, apart from an explicit external-game exception.
6. [routes.ts](../../server/src/routes.ts) binds controllers, usually factories accepting `PrismaClient`.
   Controllers validate inputs, call `auth` when needed, enforce ownership/roles, invoke domain logic,
   access Prisma, and use `sendError` for failures.
7. Shared request/response contracts live in [core/src/types.ts](../../core/src/types.ts).

For a rejected request, inspect the response body/status, CSRF state, fingerprint readiness, version
header, server readiness, then controller permissions. Do not bypass middleware to fix a caller bug.
Readiness failures return the unusual status `999`; the client redirects to the generation page.
Request locks are in-process per method/path/user, not a replacement for database consistency.

## Server context, jobs, and observability

[context.ts](../../server/src/context.ts) owns Prisma, config, logging and Discord integrations through
`ServerContext`; its exported `GLOBAL` initializes at module load. Importing application modules can
therefore require database/config access. Tests of isolated logic should avoid accidentally booting it.
Reuse `LOGGER`, context logging and [traced](../../server/src/utils/trace.ts) spans where appropriate.

[config.ts](../../server/src/config.ts) resolves defaults/environment and supported database `Config`
overrides, including encrypted values. Consult its actual switch before assuming any environment key
can be overridden. `.env` loads from the working directory; the sample lives in `server/.env.sample`.
Changing DB config does not imply every running context automatically reloads immediately.

[dailyJob.ts](../../server/src/dailyJob.ts) handles maintenance, tournaments, clan wars, rankings,
modifiers, statistics, and release-related work. It runs at server startup and is scheduled with
`0 0 * * *`. The scheduler has no explicit timezone setting in `server.ts`; much domain date logic
uses UTC. Inspect both when changing day boundaries. Development switches skip selected expensive
production operations; they do not make starting the backend read-only.
[ServerState](../../server/src/utils/ServerState.ts) manages readiness and cached domain/security data.

## Domain data and rules

| Domain               | Main data/rules                                                           | Important relationships                                                                        |
| -------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| User/auth            | `User`, `UserLog`, ban/fingerprint/browser models                         | Eternaltwin OAuth, connection tokens, role checks, brutes, preferences                         |
| Brute/progression    | `Brute`, starting stats, colors, `DestinyChoice`, inventory               | User ownership, master/pupils, deletion flags, event membership, clan membership               |
| Perks and balance    | core `brute/skills.ts`, `weapons.ts`, `pets.ts`, `applySkillModifiers.ts` | Schema names map to numeric runtime IDs; tiered definitions affect simulation and presentation |
| Calculated stats     | core `brute/calculatedBrute.ts`, `chaos.ts`, temporary perks              | Raw persisted perks differ from derived tier counts and modifier-dependent values              |
| Combat               | `Fight`, core fight types, server fight utilities                         | Serialized initial fighters/steps, winner/loser, tournament/clan-war links, favorites          |
| Tournaments/rankings | `Tournament`, reward models, `BruteRanking`                               | Daily/global scheduling, watched steps, XP/gold, ranking calculations                          |
| Clans/social         | `Clan`, roles, threads, posts, boss damage                                | Shared permissions, member ownership, boss fights, clan points                                 |
| Clan wars            | `ClanWar`, `ClanWarFighters`                                              | Lineups, status transitions, scheduled resolution and persisted fights                         |
| Events               | `Event`, event-linked brutes                                              | Creation, rounds/status, lifecycle in controllers and daily job                                |
| Achievements         | `Achievement`, core catalog/titles                                        | Combat updates, progression updates, user/brute rankings                                       |
| Statistics           | user/brute stats and level-up stats                                       | Write-side increments and daily monthly/yearly/all-time rollups                                |
| Operations           | `ServerState`, `Config`, `Release`, notifications/logs                    | Readiness, dynamic settings, maintenance, moderation and announcements                         |

## Client presentation and resources

- `views` contains screens; `views/mobile` has alternate fight/cell/home/versus/tournament presentations.
  Changes to these flows need both desktop and mobile consideration.
- `components` contains reusable UI; `layouts` controls shared/admin/moderator framing.
- `theme` owns light/dark themes and color context. Reuse existing styled controls, `Page`, `Link`,
  alert and confirmation hooks rather than creating parallel UI conventions.
- [useRenderer](../../client/src/hooks/useRenderer.tsx) pools renderers and caches brute portraits;
  [BruteDisplay](../../client/src/utils/BruteDisplay.ts) handles body rendering. Invalidate affected
  caches when changing appearance; keep portrait and fight rendering consistent.
- Client strings load from `client/src/i18n/locales/<lang>/<namespace>.json`, server strings from
  `server/i18n/<lang>.json`. [crowdin.yml](../../crowdin.yml) defines English sources. Current selectable
  languages are defined in `client/src/i18n.ts`; extra folders are not proof of support.
- Public images/audio, TexturePacker `.tps` files, FLA parser dependencies, font assets, and sound sprite
  metadata form a connected resource pipeline. See [development.md](development.md) before regenerating.
- [RouteSEO](../../client/src/components/RouteSEO.tsx), route metadata and the sitemap cover public pages.

## Release and deployment

[Release Please config](../../release-please-config.json) updates package versions, core `Version.ts`,
and Prisma reference metadata. `.github/workflows/release-please.yml` runs on main pushes; deploy runs
on `labrute-v*` tags and updates external deployment configuration. The workflows inspected here are
release/deployment/project automation, not a general test gate. Do not assume CI will catch omitted checks.
Preserve the code and asset license terms described in the root README and LICENSE.
