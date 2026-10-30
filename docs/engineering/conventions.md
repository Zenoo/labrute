# Code conventions and change recipes

## Formatting and TypeScript

Authority: root [.editorconfig](../../.editorconfig), [eslint.config.js](../../eslint.config.js),
workspace ESLint configs, and [tsconfig.json](../../tsconfig.json). These notes distinguish configured
rules from patterns to follow in new code.

- EditorConfig specifies UTF-8, two-space indentation, LF, a final newline, no trailing spaces and a
  general 120-character width. ESLint's code limit is 100, excluding comments/strings/templates.
- Existing TypeScript generally uses single quotes, semicolons, trailing commas in multiline structures,
  and K&R braces. Match nearby code; there is no repository Prettier workflow to assume.
- Named exports are enforced. Tool configuration files can have justified default-export exceptions.
- Imports with three or more named properties must span lines. Import ordering is not enforced;
  follow the surrounding grouping without reordering unrelated imports.
- Relative imports in core/server use `.js` even for `.ts` sources; browser imports omit extensions.
  Current lint extension settings and server/core NodeNext conventions are not fully aligned, so do
  not mechanically remove `.js` to silence a rule and break runtime resolution.
- TypeScript is strict with `noUncheckedIndexedAccess`. Guard array/map access and optional values.
  Non-null assertions are lint errors; unused variables are errors unless intentionally prefixed `_`.
- Use explicit shared types at boundaries and inference for obvious local values. Narrow unknown
  failures; avoid broad casts, `any`, or rule disables in place of modeling the actual state.
- Prefer plain functions/types and existing utilities over abstractions for a single use case.
  Comments should explain invariants, ownership, or non-obvious decisions.
- PascalCase is common for components, controller collections and classes; helpers/hooks typically
  follow their exported camelCase names. Preserve existing filename/casing conventions per directory.

## React and UI

Use named arrow-function components in `.tsx`. Hooks rules and exhaustive dependencies are enforced.
Keep asynchronous work safe across unmounts and changing inputs; clean up subscriptions, timers,
renderers, animation tickers and temporary resources. Read an existing component in the same area
before adding a new state-management pattern.

Use MUI, existing styled controls, theme tokens and light/dark behavior. Use alert/confirm hooks and
`catchError` where nearby views do. Keep visible labels/translations separate from technical diagnostics.
Check mobile alternatives, loading/error/empty states, accessibility labels, and public route SEO.
Provider order in `App.tsx` encodes dependencies; change it deliberately.

Use `useServer()` for view calls through the existing facade. `Fetch` handles the request headers,
credentials and CSRF retry; a parallel fetch wrapper easily omits version/fingerprint requirements.
Treat rendered portrait caching and mutable speed refs as part of the rendering lifecycle.

## Server and data practices

Controllers usually expose `(prisma: PrismaClient) => async (req, res)` factories with typed bodies
and responses. Reuse `auth(prisma, req, options)`, translated shared error classes and `sendError`.
The current status mapping is project-specific (for example, `LimitError` -> 409 and
`MissingElementError` -> 501); inspect it before designing client status handling.

Validate untrusted values at runtime even when the request has a TypeScript type. Verify ownership,
admin/moderator roles, event context and soft-deletion constraints in queries. Use existing `ilike`
handling for case-insensitive identifiers where appropriate. Keep new shared contracts in core and
database enums/types in the generated Prisma package.

Use explicit selects/includes and avoid repeated per-row queries. Use Prisma transactions when a
multi-write invariant needs atomicity; request locks alone do not provide that guarantee. Prefer bound
Prisma tagged SQL over interpolating user values into SQL strings. Follow existing UTC date conventions.
Consider logging, achievements, statistics, inventory and cache invalidation alongside the main write.
Use the context logger/tracing rather than ad hoc console output (console is generally lint-warned).

## Recipes

### Add or change an API-backed feature

1. Locate a similar endpoint in `server/src/routes.ts`, its controller and `client/src/utils/Server.ts`.
2. Define/update request and response types in `core/src/types.ts`; add schema/migration only if needed.
3. Implement server validation, authentication/authorization, domain work and error handling.
4. Bind the route with the correct method and add the typed client facade method.
5. Connect the view/hook, translations, loading/error states and permissions.
6. Rebuild shared/server code, type-check the client, lint changed files from each workspace, and run
   relevant behavior tests. Verify the user flow where the change spans UI and server.

### Add a skill, weapon, pet, or balance mechanic

1. Inspect schema enum, core catalog, numeric ID mapping, tiers, odds, modifiers and calculated stats.
   Preserve old numeric IDs: persisted fight data uses them.
2. Trace acquisition/level-up and stored representation; repeated perk names can encode tiers.
3. Implement simulation effects and emitted steps, then playback/seek/snapshot support if affected.
4. Update tooltips, wiki, icons/atlas/audio and translations as needed. Check chaos/temporary perks.
5. Test the specific interaction and deterministic scenarios; review golden changes as game behavior
   changes, not routine test maintenance. See [fights.md](fights.md).

### Add a screen or translation namespace

1. Reuse the closest view/layout and typed server method; register the route.
2. Add English keys in the relevant namespace. For a new namespace, update `client/src/i18n.ts`.
3. Preserve translation interpolation, plural `count`, and `withPluralFallbacks` behavior. English client
   namespaces and server `en.json` are Crowdin sources; do not automatically copy English into all locales.
4. Check supported-language loading, mobile presentation, light/dark modes, SEO and sitemap when relevant.

### Change persistence or a scheduled workflow

1. Read the schema and migration lineage, controller writes, job reads and cached state.
2. Plan backfill/default/null behavior and data preservation before creating migration SQL.
3. For jobs, inspect readiness transitions, production/development guards, UTC boundaries and repeat-run
   behavior. Starting the server itself triggers maintenance.
4. Review generated Prisma changes and metadata, compile consumers, and validate against a configured
   development database only when the task requires database execution.

## Documentation maintenance

Keep `AGENTS.md` short enough to read on every task; place detail in the linked guide. Link to source
instead of copying large code samples or maintaining a second exhaustive route/enum list. When a
command, path or invariant changes, update its owning guide in the same change. Record test results in
the task report; do not turn today's pass count or local environment failure into a permanent guarantee.
