# User/Brute Statistics Plan (Daily Batch)

This document proposes an in-depth statistics system for LaBrute inspired by timeline-heavy dashboards (like SIMKL stats pages), adapted to the current domain model.

## 1) Product Goals

- Give each user and brute a deep, visual history over time (daily/weekly/monthly/yearly/all-time).
- Support profile-level dashboards, global leaderboards, and cohort comparisons.
- Keep reads fast while data volume grows to hundreds of millions or billions of events.
- Prefer simplicity and consistency over real-time freshness: stats are computed daily.
- Make stats resilient to feature changes (new achievements, modifiers, events, skills).

## 2) Existing Data You Already Have

Current schema already captures a lot:

- Identity/activity: `User.createdAt`, `User.lastSeen`, `User.bannedAt`, `UserLog`.
- Brute progression: `Brute.level`, `Brute.xp`, `Brute.ranking`, `Brute.ascensions`, `Brute.victories`, `Brute.losses`.
- Fight history: `Fight` (date, winner/loser, modifiers, tournament/clan war relation, favoriteCount).
- Fight outcomes timeline: `Log` (win/lose/lvl/up/tournament/boss events with date/xp/gold).
- Achievements: `Achievement` and `TournamentAchievement`.
- Economy: `User.gold`, `TournamentGold`, `InventoryItem`.
- Clan and event performance: `ClanWar`, `BossDamage`, `Event`, `TournamentXp`.

This means phase 1 can start with derived stats without introducing much new write-path complexity.

## 3) User Stats To Expose

### 3.1 Account and Activity

- Account age (days since signup).
- Active days in last 7/30/90/365 days.
- Daily/weekly login streak and best streak.
- Session count estimate (from CONNECT/DISCONNECT or heartbeat buckets).
- New brutes created over time.
- Brutes currently alive vs deleted/sacrificed.
- Device/network diversity stats (distinct IPs/fingerprints/browser IDs).

### 3.2 Economy

- Total gold earned and spent.
- Net gold trend over time.
- Gold sources split: fights, tournaments, boss rewards, admin grants, others.
- Gold sinks split: brute creation, reset/name change, transfers, purchases.
- Average gold per active day.

### 3.3 Competitive Profile

- Total fights (all owned brutes), win rate, draw/forfeit rate if relevant.
- PvP vs tournament vs clan war fight breakdown.
- Upset rate (wins vs higher-ranked or higher-level opponents).
- Favorite count received on user fights.
- Rank distribution of owned brutes.
- Best rank reached by any brute (all-time and current season).
- Progress speed: average time from brute creation to rank milestones.

### 3.4 Achievement Profile

- Achievements unlocked count and completion percent.
- Achievement rarity profile (common/rare/legendary buckets).
- Recent unlock timeline.
- Fastest unlocked achievements after account creation.
- Tournament-only achievement breakdown.

### 3.5 Social/Clan

- Clans joined, time spent in clans, clan role changes.
- Clan war participation rate and win rate.
- Boss contribution share (damage and rewards share).
- Forum activity (threads/posts created).

## 4) Brute Stats To Expose

### 4.1 Lifecycle and Progression

- Age of brute (days).
- Level/xp timeline.
- Rank timeline (daily snapshots, rank volatility score).
- Ascension count and impact after ascension.
- Fights-to-level ratio and leveling speed.

### 4.2 Combat Performance

- Total fights, wins, losses, win rate.
- Win rate by opponent rank bucket.
- Win rate by opponent level difference bucket.
- Average fight duration proxy (step count from serialized steps).
- Damage dealt/taken trend (if extracted from fight events).
- Clutch wins (win at <= X HP).
- Flawless wins.
- Single-hit wins.

### 4.3 Style and Build

- Most used weapons and success rates per weapon.
- Most used skills and success rates per skill.
- Pet usage and pet impact on win rate.
- Modifier affinity (performance under each `FightModifier`).
- Build archetype tags (tank, evasive, burst, control) computed from behavior.
- Original vs ascended build divergence.

### 4.4 Milestones and Records

- Best streak (consecutive wins).
- Longest survival streak (without deletion/reset depending on definition).
- Biggest upset (rank/level delta).
- Max damage in one hit.
- Most counters/evades/blocks in one fight.
- Most XP gained in one day.

### 4.5 Contextual Stats

- Tournament finals reached / won.
- Clan war appearances and outcomes.
- Boss damage dealt total and per boss.
- Event-specific stats (battle royale rounds reached, win rate).

## 5) SIMKL-Like Views To Build

For both user and brute profiles:

- Calendar heatmap: fights per day, wins per day, XP per day.
- Year-over-year comparison: activity and outcomes by month.
- Day-of-week/hour-of-day patterns.
- Rolling 7-day and 30-day trend lines.
- Cumulative curves: total wins, total XP, total gold over time.
- Distribution charts: opponents by rank, weapons used, skills activated.
- Personal best timeline and when records were broken.

## 6) Storage Strategy For Huge Data

Use a multi-layer approach: immutable events -> daily rollups -> daily snapshots.

### 6.1 Layer A: Immutable Event Fact Tables

Add append-only event tables for high-granularity analytics.

- `fight_participation_event`
  - One row per brute per fight.
  - Core columns: `fight_id`, `fight_date`, `brute_id`, `user_id`, `opponent_brute_id`, `opponent_rank`, `opponent_level`, `won`, `is_tournament`, `is_clan_war`, `modifiers`, `steps_count`, `gold_delta`, `xp_delta`.
- `fight_metric_event`
  - Optional high-detail extracted metrics from fight simulation.
  - Core columns: `fight_id`, `brute_id`, `hits`, `blocks`, `evades`, `counters`, `max_damage`, `skills_used`, `weapons_stolen`, `pets_killed`, `hp_healed`.
- `economy_event`
  - Unified gold/item flow ledger.
  - Core columns: `user_id`, `brute_id`, `event_type`, `amount`, `currency`, `source_ref`, `created_at`.

Notes:

- Keep rows narrow and typed; avoid giant JSON blobs for hot queries.
- Use JSON only for rarely queried payload details.

### 6.2 Layer B: Time-Bucket Rollup Tables

Pre-aggregate by day (and optionally week/month) for fast dashboard reads.

- `user_stats_daily`
  - PK: `(date, user_id)`
  - Columns: fights, wins, losses, win_rate, xp_gained, gold_earned, gold_spent, achievements_unlocked, active_brutes, clan_war_fights, tournament_fights, etc.
- `brute_stats_daily`
  - PK: `(date, brute_id)`
  - Columns: fights, wins, losses, rank_start, rank_end, level_start, level_end, xp_gained, damage_dealt, damage_taken, counters, blocks, evades, etc.
- `user_stats_monthly`, `brute_stats_monthly`
  - Optional rollups for very long-range graphs.

### 6.3 Layer C: Snapshot Tables (Fast Profile Loads)

- `user_stats_snapshot`
  - One row per user with all-time counters and cached derived KPIs.
- `brute_stats_snapshot`
  - One row per brute with current all-time counters + record values.

Snapshots are rebuilt or upserted once per day from events and rollups, and serve the profile header instantly.

## 7) Daily Computation Model (No Real-Time Requirement)

All analytics are produced by scheduled daily jobs. No per-request heavy aggregation and no near-real-time update pipeline is required.

### 7.1 Daily Schedule

- Run once per day in UTC (for example 02:00 UTC, after game daily jobs).
- Compute `D-1` (yesterday) rollups as final.
- Optionally recompute a sliding correction window (`D-2` to `D-7`) to absorb late writes/retries.

### 7.2 Job Steps

1. Build/update `user_stats_daily` for target day(s).
2. Build/update `brute_stats_daily` for target day(s).
3. Recompute or upsert `user_stats_snapshot` from all-time aggregates + latest day.
4. Recompute or upsert `brute_stats_snapshot` similarly.
5. Mark watermark/checkpoint (`stats_last_successful_date`) in a control table.

### 7.3 Idempotency and Safety

- Use deterministic `INSERT ... ON CONFLICT DO UPDATE` for rollups.
- Scope each run by explicit date ranges to allow safe reruns.
- Keep a `stats_job_run` audit table: start/end time, range, status, row counts, error.
- If a run fails, rerun only failed date partitions; avoid full historical recompute unless needed.

### 7.4 Freshness Contract (UI/API)

- Expose a `statsAsOf` timestamp/date in API responses.
- Label dashboards as "Updated daily".
- Users see stable numbers for a full day, reducing confusion from fluctuating counters.

## 8) PostgreSQL Scaling Recommendations

### 7.1 Partitioning

- Range partition event tables by month on timestamp (`fight_date` / `created_at`).
- Keep parent tables small; each partition gets local indexes only needed for query patterns.
- Retention operations become cheap (`DROP PARTITION` for old raw data if needed).

### 7.2 Indexing

- Event tables:
  - `(brute_id, fight_date DESC)`
  - `(user_id, fight_date DESC)`
  - `(fight_id)` unique/primary where relevant
  - Partial indexes for hot subsets (`won = true`, `is_tournament = true`) only if query-driven.
- Daily rollups:
  - PK `(date, entity_id)`
  - secondary `(entity_id, date DESC)` for graph windows.
- Use BRIN on very large append-only timestamp columns to reduce index size.

### 8.3 Materialization and Refresh

- Build rollups with one daily batch job (plus optional correction window) using idempotent upserts.
- Avoid expensive on-the-fly `GROUP BY` over raw fight tables for profile pages.
- Keep precomputed snapshots as the default source for profile headers and KPI cards.

### 8.4 Data Retention Tiers

- Keep raw events at full granularity for 6-18 months (depends on cost target).
- Keep daily rollups indefinitely (cheap and enough for lifetime charts).
- Keep snapshots indefinitely.
- Optional cold storage export (S3/object storage) for old raw partitions.

## 9) Write Path and Consistency

- Write primary gameplay data first (`Fight`, `Log`, etc.).
- Since stats are daily, event ingestion can be simpler:
  - either write analytics events synchronously with gameplay writes,
  - or skip event tables initially and compute directly from canonical gameplay tables in the daily job.
- If later needed for richer analytics, add outbox/event tables without changing dashboard contract.

## 10) Suggested Implementation Roadmap

1. Phase 1 (quick wins)
   - Build read-only derived stats from existing tables (`Fight`, `Log`, `Achievement`, `UserLog`).
  - Add one daily batch job for `user_stats_daily` and `brute_stats_daily`.
   - Expose profile trend endpoints.
2. Phase 2 (deep combat analytics)
   - Persist `fight_participation_event` and `fight_metric_event`.
   - Add weapon/skill/per-modifier performance views.
3. Phase 3 (scale hardening)
   - Partition large event tables.
   - Add retention and cold storage policy.
   - Add monthly rollups and snapshot caches.

## 11) Prisma + SQL Practical Notes

- Prisma is fine for rollup/snapshot tables and most read/write paths.
- For partitioned tables, advanced indexes, and materialized views, keep using SQL migrations (already done in this project for optimized indexes).
- Keep analytics schema explicit in migrations and avoid ORM-generated churn for partition internals.

## 12) Minimal New Tables To Start

If you want the smallest viable analytics upgrade:

- `user_stats_daily`
- `brute_stats_daily`
- `user_stats_snapshot`
- `brute_stats_snapshot`

Then optionally add:

- `fight_participation_event`
- `fight_metric_event`
- `economy_event`

This gives a strong foundation for SIMKL-like dashboards while staying scalable.

## 13) Recommended "Daily-Only" MVP

If you want to optimize for implementation speed right now:

- Do not introduce new event tables yet.
- Compute directly from existing tables (`Fight`, `Log`, `Achievement`, `UserLog`, `TournamentXp`, `TournamentGold`, `BossDamage`) once per day.
- Persist results in:
  - `user_stats_daily`
  - `brute_stats_daily`
  - `user_stats_snapshot`
  - `brute_stats_snapshot`
- Recompute the last 7 days on each run to handle late-arriving updates safely.

This satisfies your non-real-time requirement with much lower complexity.
