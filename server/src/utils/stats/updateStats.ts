import {
  Brute, BruteStats, DestinyChoice, DestinyChoiceType, Prisma, PrismaClient, User, UserStats
} from "@labrute/prisma";
import { DISCORD } from "../../context.js";
import { traced } from "../trace.js";

type Stat = keyof Omit<UserStats, "date" | "granularity" | "userId" | "createdAt" | "updatedAt"> | keyof Omit<BruteStats, "date" | "granularity" | "bruteId" | "userId" | "createdAt" | "updatedAt">;

type StatsWithValue = Partial<Record<Stat, number>>;

type UpdateStatsParams = {
  prisma: PrismaClient;
  user: { id: string | null };
  brute?: Pick<Brute, 'id'>;
  stats?: Stat[] | StatsWithValue;
}

const toIdentifier = (key: string) => {
  return Prisma.raw(`"${key}"`);
};

export const increaseStats = ({
  prisma, user, brute, stats: _stats
}: UpdateStatsParams) => {
  const stats = Array.isArray(_stats)
    ? _stats.reduce<StatsWithValue>((acc, stat) => ({ ...acc, [stat]: 1 }), {})
    : _stats ?? {};

  const statsKeys = Object.keys(stats) as (keyof StatsWithValue)[];
  const statsValues = statsKeys.map((stat) => stats[stat] ?? 0);

  if (!statsKeys.length) {
    return;
  }

  const statsColumnsSql = Prisma.join(statsKeys.map((stat) => toIdentifier(stat)));

  // We skip awaiting the queries to avoid blocking the request, as stats are not critical and can be updated in the background.
  try {
    if (user.id) {
      const upsertAssignmentsSql = Prisma.join(
        statsKeys.map((stat) => {
          const column = toIdentifier(stat);

          return Prisma.sql`${column} = "UserStats".${column} + EXCLUDED.${column}`;
        }),
        ', ',
      );
      traced('updateStats.increaseUserStats', () => prisma.$executeRaw`
        INSERT INTO "UserStats"(
          date,
          day,
          granularity,
          "userId",
          ${statsColumnsSql}
        )
        VALUES (
          CURRENT_DATE,
          EXTRACT(DOW FROM CURRENT_DATE)::int,
          'daily'::"StatsGranularity",
          ${user.id}::uuid,
          ${Prisma.join(statsValues)}
        )
        ON CONFLICT (date, granularity, "userId")
        DO UPDATE SET
          ${upsertAssignmentsSql},
          "updatedAt" = NOW()
        ;
      `);
    }

    if (brute) {
      const bruteUpsertAssignmentsSql = Prisma.join(
        statsKeys.map((stat) => {
          const column = toIdentifier(stat);

          return Prisma.sql`${column} = "BruteStats".${column} + EXCLUDED.${column}`;
        }),
        ', ',
      );

      traced('updateStats.increaseBruteStats', () => prisma.$executeRaw`
        INSERT INTO "BruteStats"(
          date,
          day,
          granularity,
          "bruteId",
          ${statsColumnsSql}
        )
        VALUES (
          CURRENT_DATE,
          EXTRACT(DOW FROM CURRENT_DATE)::int,
          'daily'::"StatsGranularity",
          ${brute.id}::uuid,
          ${Prisma.join(statsValues)}
        )
        ON CONFLICT (date, granularity, "bruteId")
        DO UPDATE SET
          ${bruteUpsertAssignmentsSql},
          "updatedAt" = NOW()
        ;
      `);
    }
  } catch (error) {
    if (error instanceof Error) {
      DISCORD().sendError(error);
    }
  }
};

export const increaseLevelUpStats = ({
  prisma, user, brute, choices, chosenId
}: {
  prisma: PrismaClient;
  user: Pick<User, 'id'>;
  brute: Pick<Brute, 'id'>;
  choices: DestinyChoice[];
  chosenId: string;
}) => {
  if (!choices.length) {
    return;
  }

  const aggregatedChoices = Array.from(
    choices.reduce<Map<string, {
      type: DestinyChoiceType;
      choice: string;
      offered: number;
      picked: number;
    }>>((acc, choice) => {
      const keys = [`${choice.type}::${choice.skill ?? choice.weapon ?? choice.pet ?? choice.stat1}`];

      if (choice.stat2) {
        keys.push(`${choice.type}::${choice.stat2}`);
      }

      for (const key of keys) {
        const existing = acc.get(key);

        if (existing) {
          existing.offered += 1;
          if (choice.id === chosenId) {
            existing.picked += 1;
          }
        } else {
          acc.set(key, {
            type: choice.type,
            choice: key.split('::')[1] ?? '',
            offered: 1,
            picked: choice.id === chosenId ? 1 : 0,
          });
        }
      }

      return acc;
    }, new Map()).values(),
  );

  if (!aggregatedChoices.length) {
    return;
  }

  const userValuesSql = Prisma.join(
    aggregatedChoices.map(({ type, choice, offered, picked }) => Prisma.sql`(
      CURRENT_DATE,
      EXTRACT(DOW FROM CURRENT_DATE)::int,
      'daily'::"StatsGranularity",
      ${user.id}::uuid,
      ${type}::"DestinyChoiceType",
      ${choice},
      ${offered},
      ${picked}
    )`),
    ', ',
  );

  const bruteValuesSql = Prisma.join(
    aggregatedChoices.map(({ type, choice, offered, picked }) => Prisma.sql`(
      CURRENT_DATE,
      EXTRACT(DOW FROM CURRENT_DATE)::int,
      'daily'::"StatsGranularity",
      ${brute.id}::uuid,
      ${type}::"DestinyChoiceType",
      ${choice},
      ${offered},
      ${picked}
    )`),
    ', ',
  );

  // We skip awaiting the queries to avoid blocking the request, as stats are not critical and can be updated in the background.
  try {
    traced('updateStats.increaseUserLevelUpStats', () => prisma.$executeRaw`
      INSERT INTO "UserLevelUpStat"(
        date,
        day,
        granularity,
        "userId",
        "choiceType",
        choice,
        offered,
        picked
      )
      VALUES ${userValuesSql}
      ON CONFLICT (date, granularity, "userId", "choiceType", choice)
      DO UPDATE SET
        offered = "UserLevelUpStat".offered + EXCLUDED.offered,
        picked = "UserLevelUpStat".picked + EXCLUDED.picked,
        "updatedAt" = NOW()
      ;
    `);

    traced('updateStats.increaseBruteLevelUpStats', () => prisma.$executeRaw`
      INSERT INTO "BruteLevelUpStat"(
        date,
        day,
        granularity,
        "bruteId",
        "choiceType",
        choice,
        offered,
        picked
      )
      VALUES ${bruteValuesSql}
      ON CONFLICT (date, granularity, "bruteId", "choiceType", choice)
      DO UPDATE SET
        offered = "BruteLevelUpStat".offered + EXCLUDED.offered,
        picked = "BruteLevelUpStat".picked + EXCLUDED.picked,
        "updatedAt" = NOW()
      ;
    `);
  } catch (error) {
    if (error instanceof Error) {
      DISCORD().sendError(error);
    }
  }
};
