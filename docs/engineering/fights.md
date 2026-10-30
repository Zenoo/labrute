# Fight simulation and playback

## Separate the three representations

| Representation | Source | Purpose |
| --- | --- | --- |
| Detailed combat state | server `utils/fight/generateFight.ts`, `fightMethods.ts` | Mutable simulation fighters, initiative, skills/weapons, achievements/stats |
| Persisted fight protocol | core `types.ts`, schema `Fight`, server `generateFight.ts` | Serialized initial fighters and steps, results, modifiers and background |
| Client animation state | client `Fight.ts`, `FighterHolder.ts`, `utils/findFighter.ts` | Pixi holders, poses, HUD, transient effects, seek/snapshot/reversal state |

A wrong winner/damage value usually starts in simulation; a correct stored step displayed incorrectly
starts in playback. Inspect the actual serialized step before changing both layers.

## Simulation path

[Fights controller](../../server/src/controllers/Fights.ts) validates participants and arena restrictions,
gets calculated brutes/current modifiers, generates a fight, persists it and handles rewards/logging.
Other domains such as tournaments, clans and scheduled jobs also call the generator.

[generateFight.ts](../../server/src/utils/fight/generateFight.ts) builds detailed fighters with
`getFighters.ts`, runs turns through [fightMethods.ts](../../server/src/utils/fight/fightMethods.ts),
collects steps/statistics/achievements and constructs persistence data. Initial fighters and final combat
state are different objects; the stored `fighters` field describes initial playback input. Both `steps`
and `fighters` are JSON strings stored in text columns, not Prisma JSON fields.

Supporting files own damage/stat calculation (`getDamage.ts`, `getFighterStat.ts`), spy effects,
achievement updates, and fight statistics. Shared catalogs and derived tier/modifier rules live in core.
Check aliases between active perks and inventory entries when cloning state: a shallow copy may retain
mutable uses/maps, while cloning each reference separately may break deliberate aliasing.

[fightRewind.ts](../../server/src/utils/fight/fightRewind.ts) records turn snapshots, detects rewind
requests and unwinds nested attack execution before state replacement. Skill consumption is tracked
across restoration. Server rewind changes simulated history; it is separate from client visual reversal.
When adding mutable fighter state, inspect server cloning and client snapshot restoration together.

## Stored protocol compatibility

[core/src/types.ts](../../core/src/types.ts) defines numeric `StepType` and the `FightStep` variants.
Steps use compact keys such as `a` for action; consult each variant rather than guessing meanings.
Core skill/weapon catalogs map schema names to numeric IDs used in serialized fighters and steps.

Preserve existing numeric enum values, names and old payload interpretation. Inserting an auto-numbered
entry in the middle changes later values and can reinterpret historical fights. Appending or explicit
stable values requires review of all mappings/readers. Renaming a schema enum is also a migration and
serialization concern, not just a TypeScript rename. Historical fight winner/loser name fields coexist
with IDs; preserve compatibility until their consumers are deliberately migrated.

## Client path and ownership

1. `FightView.tsx` / `views/mobile/FightMobileView.tsx` load the fight and render
   [FightComponent](../../client/src/components/Arena/FightComponent.tsx).
2. The component owns application setup/disposal, speed, seeking and replay. It constructs a
   [FightClock](../../client/src/utils/fight/utils/FightClock.ts).
3. [setupFight.ts](../../client/src/utils/fight/setupFight.ts) loads/builds scene fighters, HUD and holders,
   parses stored steps, and drives the [Fight controller](../../client/src/utils/fight/Fight.ts).
4. `Fight.runStep` dispatches `StepType` to state updates and animations; `FighterHolder` owns body
   animation/poses. Rendering and seeking must agree on the restored state.

Use the fight clock's timeline/ticker helpers (`utils/tween.ts`, `fightDelay`, `fightSprite`) for effects
that must follow pause/speed/disposal. Wall-clock timers or independent GSAP animations can continue
while the fight is paused or be left behind by seek/rewind.

Temporary containers/sprites belong to `FightClock.transient()` so `cancelAnimations()` destroys them
even when a tween's completion callback never runs. Follow lifecycle abort checks after asynchronous
work; ensure listeners/tickers/filters/textures have an explicit owner and cleanup path.
Never destroy shared atlas textures as if they were uniquely created for one effect.

## Seek, rewind, and restoration invariants

- Seeking applies state without playing audio or ordinary transient combat effects, then renders the
  target pose/HUD. A new action must implement both forward behavior and seek-safe state mutation.
- [fightSnapshot.ts](../../client/src/utils/fight/utils/fightSnapshot.ts) stores restorable logical state;
  `Fight.renderState()` reconstructs the visible state. Add new persistent flags/inventories/HUD state
  to capture and restoration as appropriate.
- [FightReversal.ts](../../client/src/utils/fight/utils/FightReversal.ts) records visual frames, including
  Pixi text, so transient damage can reverse to its creation point. Logical snapshots alone do not
  reconstruct the exact visual history.
- Rewind presentation has three phases: opening spiral into negative colors, negative colors held
  throughout backward playback, then a closing spiral back to normal after state restoration.
  [playHypnosisEffect.ts](../../client/src/utils/fight/utils/playHypnosisEffect.ts) owns the sustained
  transition; `Fight.rewind()` coordinates suspension, cancellation, reversal, rendering and finish.
- Clear forward transient visuals and live Fierce Brute effects before reverse playback. Restored
  persistent effects are rebuilt from state; temporary texts/skill visuals must not freeze at boundaries.
- [FierceBruteEffect.ts](../../client/src/utils/fight/utils/FierceBruteEffect.ts) owns ghost ticker/filter
  resources. Generated ghost textures can outlive live sprites because recordings reference them;
  use the ownership/reference helpers in `FightReversal.ts` and preserve shared spritesheet resources.
- Restore prior filters as well as object transforms/visibility. Cancellation/unmount must clean up
  even if playback exits between awaits; do not rely solely on the successful completion path.

## Regression coverage and visual checks

Server tests: `fight-determinism.test.mjs`, `fight-reload.test.mjs`, `fight-rewind.test.mjs`.
The deterministic suite hashes full outcomes for seeded scenarios, including combat state and RNG
usage. For an optimization, preserve these outcomes and random-call order. For an intentional balance
change, inspect and explain the new behavior before updating golden expectations.

Client tests cover clock timing, snapshots, reversal, seek, hypnosis/rewind transitions, reload, healing,
holder masks and holder resolution. Some exercise mocked/Vite-loaded modules; they do not prove the
final browser appearance. See [development.md](development.md) for commands and build prerequisites.

Fixtures in `client/tests/fixtures` include slow seeking, hammer/heal, and Fierce Brute rewind.
`rewind-fierce-brute.json` preserves the reported fight `2b2a0e89-1bed-403b-a4b7-613dca9e949c` regression;
check damage-text and ghost cleanup when changing these lifecycles. Turn newly supplied reproducible
fights into focused fixtures/coverage without introducing unrelated private user data.

For affected presentation, inspect the actual fight in a browser at supported speeds. Exercise pause,
seek before/after the action, repeated seeking/replay, rewind entry/exit, navigation away during playback,
and relevant desktop/mobile layouts. Check HUD/HP, filters, ghosts, text, sound and console errors.
Report browser validation as unverified if it could not be performed; passing Node tests is separate evidence.
