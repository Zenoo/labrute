# Development and verification

## Toolchain and local setup

Use the root `package.json` `packageManager` pin and inspect installed
dependency engine requirements. The root declares Node >=18.18, but that alone is insufficient for
newer tooling and tests using `--experimental-transform-types`. Node 24 is a useful baseline for those
tests; verify with `node --version` and `pnpm --version` before running commands.

The root README recommends Git Bash on Windows. Several scripts use POSIX shell syntax (`cp`, `mv`,
`find`, command substitution) and cannot be pasted unchanged into PowerShell. Its troubleshooting section
describes pnpm shell settings. Do not rewrite shell commands across shells without checking quoting.

Local bootstrap, with a disposable development database and configured Eternaltwin:

1. Install dependencies with `pnpm install --frozen-lockfile` when reproducing the lockfile.
2. Configure PostgreSQL databases for LaBrute and Eternaltwin. Copy `server/.env.sample` to `server/.env`
   and adapt locally. The root README's bare `.env.sample` path is imprecise; server dotenv loading is
   relative to the server process working directory.
3. Inspect then run the development schema sync described below; compile shared/server code.
4. Optionally seed the development database. Initialize Eternaltwin with `pnpm eternaltwin db sync`;
   its local TOML sample documents additional configuration.
5. Start the needed processes. The Vite dev server uses port 3000 and proxies `/api` to localhost:9000.
   Disable local adblock rules that block fingerprint requests when debugging readiness/authentication.

Never copy real `.env` contents or local TOML secrets into reports or docs.

## Commands that avoid ambiguous workspace filters

Run these from the repository root. Several existing root scripts use `--filter client/server/core`,
while actual names are scoped (`@labrute/...`). Prefer explicit names below when a wrapper does not
select the intended package. These commands describe repository tooling; they are not all executed
as part of documentation maintenance.

| Purpose                        | Command                                         | Notes                                                     |
| ------------------------------ | ----------------------------------------------- | --------------------------------------------------------- |
| Compile shared/server projects | `pnpm compile`                                  | Builds Prisma/core/server references; excludes client     |
| Check client TypeScript        | `pnpm --filter @labrute/client run compile`     | `tsc --build`; client uses `noEmit`                       |
| Bundle client                  | `pnpm --filter @labrute/client run build`       | Vite output in `client/build`, including bundle stats     |
| Client development server      | `pnpm --filter @labrute/client run start`       | Port 3000, opens browser                                  |
| Server watch                   | `pnpm --filter @labrute/server run start:watch` | Compiles then starts backend; startup invokes daily job   |
| Eternaltwin local server       | `pnpm eternaltwin:start`                        | Needs configured local service/database                   |
| All local services             | `pnpm dev`                                      | Includes Studio; inspect short filters if selection fails |
| Production server              | `pnpm --filter @labrute/server run start`       | Runs compiled `server/lib/main.js`                        |
| Client lint                    | `pnpm --dir client exec eslint src/PATH.tsx`    | Paths relative to `client`; uses its React lint config    |
| Core lint                      | `pnpm --dir core exec eslint src/PATH.ts`       | Paths relative to `core`                                  |
| Server lint                    | `pnpm --dir server exec eslint src/PATH.ts`     | Paths relative to `server`                                |
| Whitespace review              | `git diff --check`                              | Also inspect untracked documentation before committing    |

There is no root `test` or `lint` script. Do not invent `pnpm test` as a verification step.
`pnpm build` compiles shared/server projects and bundles the client; use the separate client type check too.

## Test selection

Tests use Node's built-in runner and `.mjs`, not Jest/Vitest. Many client tests import TypeScript directly
or load modules through Vite; read the target test imports before deciding prerequisites.
Server fight tests import `server/lib` and compiled core, so compile first.

```sh
# After pnpm compile: server fight behavior and deterministic scenarios
pnpm --dir server exec node --test tests/fight-reload.test.mjs tests/fight-rewind.test.mjs tests/fight-determinism.test.mjs

# Focused animation lifecycle and rewind checks
pnpm --dir client exec node --experimental-transform-types --test tests/fight-clock.test.mjs tests/fight-snapshot.test.mjs tests/fight-reversal.test.mjs tests/hypnosis-effect.test.mjs tests/rewind-transitions.test.mjs tests/rewind-presentation.test.mjs

# Translation plural fallback behavior
pnpm --dir client exec node --experimental-transform-types --test tests/plural-fallbacks.test.mjs
```

Additional client coverage includes seek, reload, hammer/heal, and fighter-holder mask/resolution tests.
Choose files matching the behavior. To run all client tests portably, change into `client` and let Node
discover tests with `node --experimental-transform-types --test`; avoid relying on PowerShell wildcard
expansion. The root convenience scripts cover only fight-clock and server fight-reload.

For simulation performance changes, `server/tests/fight-performance.bench.mjs` supports
`FIGHT_BENCH_ITERATIONS`, `FIGHT_BENCH_OUTPUT`, and `FIGHT_BENCH_BASELINE`. Compile first, compare the
same scenarios/environment, and preserve outcomes/RNG usage unless changing game rules intentionally.
Set environment variables using the syntax of the actual shell.

## Database and generated client

Source schema: [server/prisma/schema.prisma](../../server/prisma/schema.prisma).
Migrations: `server/prisma/migrations/<timestamp_name>/migration.sql`.
Generator output: root `prisma/`, including the generated schema copy and platform engines.

| Server workspace script                         | Expanded behavior                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `db:migrate:manual`                             | `prisma migrate dev --create-only`; connects to the development DB, creates migration SQL         |
| `db:sync:dev`                                   | `prisma migrate dev`, then copies `prisma/package.reference.json` over generated package metadata |
| `db:sync:prod`                                  | `prisma migrate deploy`, seed, `fixErroredBonuses`, then `retrieveFirstBonus`                     |
| `db:seed`                                       | Runs seed via Prisma config (`node --loader ts-node/esm src/seed.ts`)                             |
| `db:reset`                                      | `prisma migrate reset --skip-generate`; destroys/recreates database state                         |
| `db:resolve:applied` / `db:resolve:rolled-back` | Changes migration bookkeeping; does not reverse SQL changes                                       |
| `studio`                                        | Opens Prisma Studio against the configured database                                               |

Invoke with `pnpm --filter @labrute/server run SCRIPT` for explicit selection. Inspect the target database
and migration SQL before execution; create-only is still database-connected. To regenerate just the
client, use `pnpm --dir server exec prisma generate`, then restore the workspace package metadata from
`prisma/package.reference.json` if generation overwrites it. Review the resulting generated-file diff.
Generation does not apply a migration, but it does modify files.

For a model/enum change, update source schema, create/review a migration, regenerate using the current
Prisma toolchain, restore metadata as needed, compile consumers, and inspect query/serialization impact.
Do not edit old applied migrations to reshape a new change. For rollback work, inspect migration lineage
and preservation requirements; never assume enum conversion or table drops preserve data.

## Exporters, translations, and assets

Root generator scripts currently use `pnx ts-node`; inspect local runner support before invoking them.
The sources use ESM and some import `.js` paths. An explicit alternative is
`node --loader ts-node/esm scripts/NAME.ts` from root, subject to the installed Node/ts-node combination.
Do not fetch an unrelated executable simply to make `pnx` resolve.

| Root script                         | Source and output                                                                      | Review concern                                                                                                                             |
| ----------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `core:export`                       | `scripts/generateCoreExports.ts` recursively rewrites core `index.ts` barrels          | Current generator emits extensionless exports; existing NodeNext barrels use `.js`. Preserve valid specifiers and compile after generation |
| `skills:generate`                   | `scripts/generateSkillComponents.ts`; tier-1 public skill SVGs -> tier-2/3 SVGs        | Deletes/replaces SVGs in output tier folders; it does not generate React components despite its name                                       |
| `i18n:check`                        | `scripts/checkI18n.ts`; scans client/server usage against English JSON                 | Read-only report; static/dynamic detection needs interpretation, not automatic key deletion                                                |
| `sitemap:generate`                  | `scripts/generateSitemap.ts` -> `client/public/sitemap.xml`                            | Edit its public route list if adding a page; includes generation timestamps                                                                |
| `sfx:generate` / `sfx:wsl:generate` | `audiosprite` with ffmpeg; public audio -> sprite audio + `client/src/assets/sfx.json` | Shell-specific globbing/exclusions; review included sounds and generated timing metadata                                                   |

TexturePacker project files live at `client/textures-*.tps`; inspect their source/output paths for atlas
changes. Runtime consumers include `client/src/utils/fight/utils/spritesheet.ts`, `FighterHolder.ts`,
`BruteDisplay.ts`, and `components/Arena/sfx.ts`. `psd/` holds source artwork. Avoid regenerating large
atlases for unrelated changes. Keep asset names, frame metadata, generated images, and consumers aligned.

## Troubleshooting without wasting time

- Missing pnpm: inspect available tooling/PATH; use the pinned package manager when provisioned.
  Do not silently install/update global tools as a prerequisite to a docs-only task.
- Stale shared behavior: rebuild core/server; package entry points and server tests consume compiled output.
- ESLint disagrees with a client rule: run from `client` so the workspace config is selected.
- NodeNext import errors after export generation: inspect `.js` specifiers in generated barrels.
- Backend imports require a DB unexpectedly: follow the module's dependency on `context.ts` and `GLOBAL`.
- Tooling engine warnings: root/server engine declarations can lag actual dependencies; inspect installed
  package requirements rather than assuming the oldest declared Node version can run all commands.
- Git dubious ownership in an isolated runner: a task-local `git -c safe.directory=ABSOLUTE_CHECKOUT ...`
  can address a known trusted checkout without changing global Git configuration.
- Test failure: capture the exact command, prerequisite builds, and failure. Reproduce against unchanged
  code before labeling it pre-existing. Historical test counts are not a current baseline.
