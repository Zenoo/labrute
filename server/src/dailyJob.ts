import {
  BruteDeletionReason,
  ClanWarMaxParticipants,
  ClanWarPointReward,
  DailyModifierCountOdds,
  DailyModifierOdds,
  DailyModifierSpawnChance,
  DailyTournamentGoldReward,
  DailyTournamentXpReward,
  EventPauseDuration,
  Fighter,
  getNewElo,
  getWinsNeededToRankUp,
  GlobalTournamentGoldReward,
  GlobalTournamentXpReward,
  knownIssues,
  LAST_RELEASE,
  randomBetween,
  weightedRandom,
} from '@labrute/core';
import {
  AchievementName,
  ClanWarStatus,
  ClanWarType,
  EventStatus,
  FightModifier,
  InventoryItemType,
  LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import moment from 'moment';
import { DISCORD, LOGGER } from './context.js';
import { increaseAchievement } from './controllers/Achievements.js';
import ServerState from './utils/ServerState.js';
import { resetBrute } from './utils/brute/resetBrute.js';
import updateClanPoints from './utils/clan/updateClanPoints.js';
import generateFight from './utils/fight/generateFight.js';
import shuffle from './utils/shuffle.js';

const GENERATE_TOURNAMENTS_IN_DEV = false;

const grantBetaAchievement = async (prisma: PrismaClient) => {
  // Grant beta achievement to all brutes who don't have it yet
  const brutes = await prisma.$executeRaw`
    INSERT INTO "Achievement" (name, "bruteId", "userId", count)
    SELECT 'beta', "Brute"."id", "Brute"."userId", 1
    FROM "Brute"
    WHERE "userId" IS NOT NULL
      AND "deletedAt" IS NULL
      AND NOT EXISTS (
        SELECT 1
        FROM "Achievement"
        WHERE "Brute"."id" = "Achievement"."bruteId"
          AND "Achievement"."name" = 'beta'
      );
  `;

  if (!brutes) {
    return;
  }

  LOGGER.log(`Gave the beta achievement to ${brutes} brutes`);
};

const grantBugAchievement = async (prisma: PrismaClient) => {
  // Grant bug achievement to all admins who don't have it yet
  const admins = await prisma.$executeRaw`
    INSERT INTO "Achievement" (name, "userId", count)
    SELECT 'bug', "User"."id", 999
    FROM "User"
    WHERE "User"."admin" = TRUE
      AND NOT EXISTS (
        SELECT 1
        FROM "Achievement"
        WHERE "Achievement"."userId" = "User"."id"
          AND "Achievement"."name" = 'bug'
      );
  `;

  if (!admins) {
    return;
  }

  LOGGER.log(`Gave the bug achievement to ${admins} admins`);
};

const deleteMisformattedTournaments = async (prisma: PrismaClient) => {
  const today = moment.utc().startOf('day');
  const tomorrow = moment.utc(today).add(1, 'day');

  // Check tournaments already created today
  const tournamentsAlreadyCreated = await prisma.tournament.findMany({
    where: {
      type: TournamentType.DAILY,
      date: {
        gte: today.toDate(),
        lt: tomorrow.toDate(),
      },
    },
    select: {
      id: true,
      fights: { select: { id: true } },
    },
  });

  // Delete misformatted tournaments
  const misformattedTournaments = tournamentsAlreadyCreated.filter(
    (tournament) => tournament.fights.length !== 63,
  );

  if (misformattedTournaments.length) {
    await prisma.fight.deleteMany({
      where: {
        tournamentId: {
          in: misformattedTournaments.map((tournament) => tournament.id),
        },
      },
    });

    await prisma.tournament.deleteMany({
      where: {
        id: {
          in: misformattedTournaments.map((tournament) => tournament.id),
        },
      },
    });
  }
};

const handleDailyTournaments = async (
  prisma: PrismaClient,
  modifiers: FightModifier[],
) => {
  // Keep track of gains (xp, gold)
  const gains: Record<string, [number, number]> = {};

  const today = moment.utc().startOf('day');
  const tomorrow = moment.utc(today).add(1, 'day');

  // Delete misformatted tournaments
  await deleteMisformattedTournaments(prisma);

  // Get brutes who registered today and are not in a tournament
  const registeredBrutes = await prisma.brute.findMany({
    where: {
      deletedAt: null,
      eventId: null,
      registeredForTournament: true,
      nextTournamentDate: {
        lt: tomorrow.toDate(),
      },
      tournaments: {
        none: {
          type: TournamentType.DAILY,
          date: {
            gte: today.toDate(),
            lt: tomorrow.toDate(),
          },
        },
      },
    },
    select: {
      id: true,
      level: true,
      ranking: true,
      name: true,
    },
  });

  // All brutes are assigned, do nothing
  if (registeredBrutes.length === 0) {
    return gains;
  }

  // Shuffle brutes
  const shuffledBrutes = shuffle(registeredBrutes);

  const tournamentsToCreate = Math.ceil(shuffledBrutes.length / 64);

  // Create groups of 64 brutes
  let tournaments: (typeof registeredBrutes)[] = Array(tournamentsToCreate)
    .fill([])
    .map((_, index) => shuffledBrutes.slice(index * 64, index * 64 + 64));

  // Fill last group with generated brutes
  if (tournaments.length && tournaments[tournaments.length - 1]?.length) {
    const lastTournament = tournaments[tournaments.length - 1];

    if (!lastTournament) {
      throw new Error('No last tournament');
    }

    const highestLevelBrute = lastTournament
      .sort((a, b) => a.level - b.level)[lastTournament.length - 1]?.level;

    // Get generated brutes at level lower or equal to highest level brute
    let generatedBrutes = await prisma.brute.findMany({
      where: {
        deletedAt: null,
        user: null,
        level: {
          lte: highestLevelBrute,
        },
      },
      select: {
        id: true,
        level: true,
        ranking: true,
        name: true,
      },
    });

    // Shuffle generated brutes
    generatedBrutes = shuffle(generatedBrutes);

    if (lastTournament.length !== 64) {
      lastTournament.push(...generatedBrutes.slice(0, 64 - lastTournament.length));
    }

    if (lastTournament.length !== 64) {
      // Remove tournament registration for those brutes
      await prisma.brute.updateMany({
        where: {
          id: {
            in: lastTournament.map((brute) => brute.id),
          },
        },
        data: {
          registeredForTournament: false,
          nextTournamentDate: null,
        },
      });

      // Add log to notify brutes
      await prisma.log.createMany({
        data: lastTournament.map((brute) => ({
          currentBruteId: brute.id,
          type: LogType.tournament,
        })),
      });

      // Remove last tournament
      tournaments.pop();
    }
  }

  // Remove empty tournaments and sort brutes by rank and level
  // (Split in two halves)
  tournaments = tournaments.filter(Boolean).map((tournament) => {
    const firstHalf: typeof registeredBrutes = [];
    const secondHalf: typeof registeredBrutes = [];
    const sortedTournament = tournament.sort((a, b) => {
      if (a.ranking === b.ranking) {
        return b.level - a.level;
      }

      return a.ranking - b.ranking;
    });

    // Alternate between first and second half
    for (const brute of sortedTournament) {
      if (firstHalf.length === secondHalf.length) {
        firstHalf.push(brute);
      } else {
        secondHalf.push(brute);
      }
    }

    // Shuffle first and second half before returning
    return [...shuffle(firstHalf), ...shuffle(secondHalf)];
  });

  // Create tournaments
  for (const brutes of tournaments) {
    // Create tournament
    const tournament = await prisma.tournament.create({
      data: {
        date: new Date(),
        participants: {
          connect: brutes.map((brute) => ({ id: brute.id })),
        },
        rounds: 6,
      },
      select: { id: true, date: true },
    });

    // Create tournament steps (1 to 32 for first round, 33 to 48 for 2nd, etc etc)
    let step = 1;
    let roundBrutes = [...brutes];
    let winners: typeof registeredBrutes = [];
    let lastFight: Prisma.FightCreateInput | null = null;
    while (roundBrutes.length > 1) {
      for (let i = 0; i < roundBrutes.length - 1; i += 2) {
        const roundBrute1 = roundBrutes[i];
        const roundBrute2 = roundBrutes[i + 1];

        if (!roundBrute1 || !roundBrute2) {
          throw new Error(`Brute not found: ${roundBrute1?.id || roundBrute2?.id}`);
        }
        const brute1 = await prisma.brute.findUnique({
          where: { id: roundBrute1.id },
        });
        const brute2 = await prisma.brute.findUnique({
          where: { id: roundBrute2.id },
        });

        if (!brute1 || !brute2) {
          throw new Error(`Brute not found: ${brute1?.id || brute2?.id}`);
        }

        if (brute1.id === brute2.id) {
          throw new Error('Attempting to fight a brute against itself');
        }

        // Generate fight (retry if failed)
        let generatedFight: Prisma.FightCreateInput | null = null;
        let retries = 0;

        while (!generatedFight) {
          // Stop at 10 retries
          if (retries > 10) {
            throw new Error('Too many retries');
          }

          try {
            const newGeneratedFight = await generateFight({
              prisma,
              team1: { brutes: [brute1] },
              team2: { brutes: [brute2] },
              modifiers,
              backups: false,
              achievements: true,
              tournament: roundBrutes.length === 2 ? 'finals' : 'fight',
            });
            generatedFight = newGeneratedFight.data;
          } catch (error: unknown) {
            if (!(error instanceof Error)) {
              throw error;
            }
            LOGGER.log(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
            DISCORD.sendError(error);
          }

          retries++;
        }

        lastFight = generatedFight;

        // Create fight
        await prisma.fight.create({
          data: {
            ...lastFight,
            tournamentStep: step,
            tournament: { connect: { id: tournament.id } },
          },
          select: { id: true },
        });

        // Get fight winner
        const winnerId = lastFight.winner === brute1.name ? brute1.id : brute2.id;

        // Add winner to next round
        winners.push(winnerId === roundBrute1.id ? roundBrute1 : roundBrute2);

        // Store XP for winner
        const winnerGains = gains[winnerId];
        if (!winnerGains) {
          gains[winnerId] = [DailyTournamentXpReward, 0];
        } else {
          winnerGains[0] += DailyTournamentXpReward;
        }

        step++;
      }

      // Continue with winners
      roundBrutes = [...winners];
      winners = [];
    }

    if (!lastFight) {
      throw new Error('No last fight');
    }

    // Get last fight winner
    const winner = roundBrutes[0];
    if (!winner) {
      throw new Error('No winner');
    }

    const loser = (JSON.parse(lastFight.fighters) as Fighter[])
      .find((fighter) => !fighter.master && fighter.id !== winner.id);
    if (!loser) {
      throw new Error('No loser');
    }

    const winnerBrute = await prisma.brute.findUnique({
      where: { id: winner.id },
      select: {
        id: true,
        userId: true,
        ranking: true,
        canRankUpSince: true,
        tournamentWins: true,
        ascensions: true,
      },
    });
    const loserBrute = await prisma.brute.findUnique({
      where: { id: loser.id },
      select: { id: true, ranking: true },
    });

    if (!winnerBrute || !loserBrute) {
      throw new Error(`Brute not found: ${winnerBrute?.id || loserBrute?.id}`);
    }

    // Only for real brutes
    if (winnerBrute.userId) {
      // Add 100 Gold to winner user
      await prisma.tournamentGold.create({
        data: {
          userId: winnerBrute.userId,
          date: today.toDate(),
          gold: DailyTournamentGoldReward,
        },
        select: { id: true },
      });

      // Store gains
      const winnerGains = gains[winnerBrute.id];
      if (!winnerGains) {
        gains[winnerBrute.id] = [0, DailyTournamentGoldReward];
      } else {
        winnerGains[1] += DailyTournamentGoldReward;
      }

      // Add 1 tournament win to winner brute
      await prisma.brute.update({
        where: { id: winnerBrute.id },
        data: { tournamentWins: winnerBrute.tournamentWins + 1 },
        select: { id: true },
      });

      // Allow rank up for winner if brute has enough wins
      if (!winnerBrute.canRankUpSince
        && (winnerBrute.tournamentWins + 1) >= getWinsNeededToRankUp(winnerBrute)) {
        await prisma.brute.update({
          where: { id: winnerBrute.id },
          data: { canRankUpSince: new Date() },
          select: { id: true },
        });
      }
    }
  }

  // Remove tournament registration for all processed brutes
  await prisma.brute.updateMany({
    where: {
      id: {
        in: registeredBrutes.map((brute) => brute.id),
      },
    },
    data: {
      registeredForTournament: false,
      nextTournamentDate: null,
      // Add current tournament data too
      currentTournamentDate: today.toDate(),
      currentTournamentStepWatched: 0,
    },
  });

  LOGGER.log(`${tournamentsToCreate} daily tournaments created`);

  return gains;
};

const handleGlobalTournament = async (
  prisma: PrismaClient,
  modifiers: FightModifier[],
) => {
  // Keep track of gains
  const gains: Record<string, [number, number]> = {};

  const today = moment.utc().startOf('day');

  // Check if global tournament is already handled
  const globalTournament = await prisma.tournament.count({
    where: {
      date: today.toDate(),
      type: TournamentType.GLOBAL,
    },
  });

  if (globalTournament) {
    return gains;
  }

  // Set tournament as invalid until it's finished
  await ServerState.setGlobalTournamentValid(prisma, false);

  // Get all real brutes that played previous day
  const brutes = await prisma.brute.findMany({
    where: {
      deletedAt: null,
      eventId: null,
      lastFight: {
        gte: moment.utc().subtract(1, 'day').toDate(),
      },
      user: {
        isNot: null,
      },
    },
    select: { id: true },
  });

  LOGGER.log(`Total brutes: ${brutes.length}`);

  // Shuffle brutes
  const shuffledBrutes = shuffle(brutes);

  // Create global tournament
  const tournament = await prisma.tournament.create({
    data: {
      date: today.toDate(),
      type: TournamentType.GLOBAL,
      rounds: 0,
    },
    select: { id: true },
  });

  // Separate brutes 1000 by 1000
  const brutesChunks = Array(Math.ceil(shuffledBrutes.length / 1000))
    .fill([])
    .map((_, index) => shuffledBrutes.slice(index * 1000, index * 1000 + 1000));

  // Set tourmanent participants separately, 1000 by 1000 to avoid insert error
  for (const brutesChunk of brutesChunks) {
    await prisma.tournament.update({
      where: { id: tournament.id },
      data: {
        participants: {
          connect: brutesChunk.map((brute) => ({ id: brute.id })),
        },
      },
      select: { id: true },
    });
  }

  // For the global tournament, fight.tournamentStep represents the round number
  let round = 1;
  let roundBrutes = [...shuffledBrutes];
  let byes: typeof brutes = [];

  // Handle byes for first round (power of 2)
  if (roundBrutes.length !== 2 ** Math.floor(Math.log2(roundBrutes.length))) {
    // Get number of byes
    const byesCount = 2 ** (Math.floor(Math.log2(roundBrutes.length)) + 1) - roundBrutes.length;

    // Add byes
    byes = [...roundBrutes.splice(roundBrutes.length - byesCount, byesCount)];
  }

  // Create tournament steps
  while (roundBrutes.length > 1) {
    LOGGER.log(`Round ${round}`);
    let nextBrutes: typeof brutes = [];

    for (let i = 0; i < roundBrutes.length - 1; i += 2) {
      const roundBrute1 = roundBrutes[i];
      const roundBrute2 = roundBrutes[i + 1];

      if (!roundBrute1 || !roundBrute2) {
        throw new Error(`Brute not found: ${roundBrute1?.id || roundBrute2?.id}`);
      }
      const brute1 = await prisma.brute.findUnique({
        where: { id: roundBrute1.id },
      });
      const brute2 = await prisma.brute.findUnique({
        where: { id: roundBrute2.id },
      });

      if (!brute1 || !brute2) {
        throw new Error(`Brute not found: ${brute1?.id || brute2?.id}`);
      }

      if (brute1.id === brute2.id) {
        throw new Error('Attempting to fight a brute against itself');
      }

      // Skip if no adversary
      if (!brute2) {
        nextBrutes.push(brute1);
        continue;
      }

      // Generate fight (retry if failed)
      let generatedFight: Prisma.FightCreateInput | null = null;
      let retries = 0;

      while (!generatedFight) {
        // Stop at 10 retries
        if (retries > 10) {
          throw new Error('Too many retries');
        }

        try {
          const newGeneratedFight = await generateFight({
            prisma,
            team1: { brutes: [brute1] },
            team2: { brutes: [brute2] },
            modifiers,
            backups: false,
            achievements: true,
            tournament: roundBrutes.length === 2 ? 'finals' : 'fight',
          });
          generatedFight = newGeneratedFight.data;
        } catch (error: unknown) {
          if (!(error instanceof Error)) {
            throw error;
          }
          LOGGER.log(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
          DISCORD.sendError(error);
        }

        retries++;
      }

      // Create fight
      await prisma.fight.create({
        data: {
          ...generatedFight,
          tournamentStep: round,
          tournament: { connect: { id: tournament.id } },
        },
        select: { id: true },
      });

      // Add winner to next round
      nextBrutes.push(brute1.name === generatedFight.winner ? brute1 : brute2);

      const winnerId = brute1.name === generatedFight.winner ? brute1.id : brute2.id;

      // Store XP for winner
      const winnerGains = gains[winnerId];
      if (!winnerGains) {
        gains[winnerId] = [GlobalTournamentXpReward, 0];
      } else {
        winnerGains[0] += GlobalTournamentXpReward;
      }
    }

    // Add byes to next round
    if (byes.length) {
      nextBrutes = [...nextBrutes, ...byes];
      byes.length = 0;
    }

    // Continue with next round
    roundBrutes = [...nextBrutes];
    round++;
  }

  if (roundBrutes.length !== 1) {
    throw new Error('Invalid tournament');
  }

  // Get winner user
  const winnerBrute = roundBrutes[0];

  if (!winnerBrute) {
    throw new Error('Winner brute not found');
  }

  const winnerUser = await prisma.user.findFirst({
    where: { brutes: { some: { id: winnerBrute.id } } },
    select: { id: true },
  });

  if (!winnerUser) {
    throw new Error('Winner user not found');
  }

  // Add 150 Gold to the winner user
  await prisma.tournamentGold.create({
    data: {
      userId: winnerUser.id,
      date: today.toDate(),
      gold: GlobalTournamentGoldReward,
    },
    select: { id: true },
  });

  // Store gains
  const winnerGains = gains[winnerBrute.id];
  if (!winnerGains) {
    gains[winnerBrute.id] = [0, GlobalTournamentGoldReward];
  } else {
    winnerGains[1] += GlobalTournamentGoldReward;
  }

  // Update tournament with rounds
  await prisma.tournament.update({
    where: { id: tournament.id },
    data: { rounds: round - 1 },
    select: { id: true },
  });

  // Set tournament as valid
  await ServerState.setGlobalTournamentValid(prisma, true);

  LOGGER.log('Global tournament created');

  return gains;
};

const storeGains = async (
  prisma: PrismaClient,
  dailyGains: Record<string, [number, number]>,
  globalGains: Record<string, [number, number]>,
) => {
  if (!Object.keys(dailyGains).length && !Object.keys(globalGains).length) {
    return;
  }

  const now = moment.utc().valueOf();

  // Add gains together
  const gains: Record<string, [number, number]> = {};

  for (const [bruteId, currentGains] of Object.entries(dailyGains)) {
    const bruteGains = gains[bruteId];
    if (!bruteGains) {
      gains[bruteId] = [currentGains[0], currentGains[1]];
    } else {
      bruteGains[0] += currentGains[0];
      bruteGains[1] += currentGains[1];
    }
  }

  for (const [bruteId, currentGains] of Object.entries(globalGains)) {
    const bruteGains = gains[bruteId];
    if (!bruteGains) {
      gains[bruteId] = [currentGains[0], currentGains[1]];
    } else {
      bruteGains[0] += currentGains[0];
      bruteGains[1] += currentGains[1];
    }
  }

  const today = moment.utc().startOf('day').toDate();
  const tomorrow = moment.utc().add(1, 'day').startOf('day').toDate();

  // Store XP gains
  await prisma.tournamentXp.createMany({
    data: Object.entries(gains).map(([bruteId, [xp]]) => ({
      bruteId,
      date: today,
      xp,
    })),
  });

  // Create XP gains logs for tomorrow
  await prisma.log.createMany({
    data: Object.entries(gains).map(([bruteId, [xp, gold]]) => ({
      currentBruteId: bruteId,
      type: LogType.tournamentXp,
      xp,
      gold,
      date: tomorrow,
    })),
  });

  LOGGER.log(`${moment.utc().valueOf() - now}ms to store ${Object.keys(gains).length} xp gains`);
};

const handleXpGains = async (prisma: PrismaClient) => {
  const now = moment.utc().valueOf();
  const today = moment.utc().startOf('day');

  const count = await prisma.tournamentXp.count({
    where: {
      date: {
        lt: today.toDate(),
      },
    },
  });

  if (!count) {
    return;
  }

  await prisma.$transaction([
    // Update brutes XP
    prisma.$executeRaw`
      UPDATE "Brute" b
      SET xp = b.xp + txp.xp
      FROM (
          SELECT SUM(xp) xp, "bruteId"
          FROM "TournamentXp"
          WHERE date < ${today.toDate()}
          GROUP BY "bruteId"
      ) txp
      WHERE b.id = txp."bruteId"
    `,
    // Delete tournament XP
    prisma.tournamentXp.deleteMany({
      where: {
        date: {
          lt: today.toDate(),
        },
      },
    }),
  ]);

  LOGGER.log(`${moment.utc().valueOf() - now}ms to handle ${count} xp gains`);
};

const handleTournamentEarnings = async (prisma: PrismaClient) => {
  const now = moment.utc().valueOf();
  const today = moment.utc().startOf('day');

  const achievementCount = await prisma.tournamentAchievement.count({
    where: {
      date: {
        lt: today.toDate(),
      },
    },
  });
  const goldCount = await prisma.tournamentGold.count({
    where: {
      date: {
        lt: today.toDate(),
      },
    },
  });

  if (!achievementCount && !goldCount) {
    return;
  }

  await prisma.$transaction([
    // Upsert achievements
    prisma.$executeRaw`
      INSERT INTO "Achievement" ("name", "count", "bruteId", "userId")
      (SELECT ta."achievement" "name", ta."achievementCount" "count", b.id "bruteId", b."userId" "userId"
      FROM (
          SELECT SUM("achievementCount") "achievementCount", "achievement", "bruteId"
          FROM "TournamentAchievement"
          WHERE date < ${today.toDate()}
          GROUP BY "bruteId", "achievement"
      ) ta
      LEFT JOIN "Brute" b
      ON ta."bruteId" = b.id)
      ON CONFLICT ("name", "bruteId") DO UPDATE
      SET "count" = "Achievement"."count" + EXCLUDED."count"
    `,
    // Delete tournament achievements
    prisma.tournamentAchievement.deleteMany({
      where: {
        date: {
          lt: today.toDate(),
        },
      },
    }),
    // Add Gold to users
    prisma.$executeRaw`
      UPDATE "User" u
      SET gold = u.gold + tg.gold
      FROM (
          SELECT SUM(gold) gold, "userId"
          FROM "TournamentGold"
          WHERE date < ${today.toDate()}
          GROUP BY "userId"
      ) tg
      WHERE u.id = tg."userId"
    `,
    // Delete tournament gold
    prisma.tournamentGold.deleteMany({
      where: {
        date: {
          lt: today.toDate(),
        },
      },
    }),
  ]);

  LOGGER.log(`${moment.utc().valueOf() - now}ms to handle ${achievementCount} achievements and ${goldCount} gold earnings`);
};

const checkNameDuplicates = async (prisma: PrismaClient) => {
  // Get all brutes with duplicate names (grouped by name) (case insensitive)
  // not yet tagged for deletion
  const duplicates: {
    name: string;
    count: number;
    ids: string[];
  }[] = await prisma.$queryRaw`
    SELECT LOWER(name) name, COUNT(*) count, ARRAY_AGG(id ORDER BY "createdAt") ids
    FROM "Brute"
    WHERE "deletedAt" IS NULL
    AND "willBeDeletedAt" IS NULL
    GROUP BY LOWER(name)
    HAVING COUNT(*) > 1;
  `;

  if (!duplicates.length) {
    return;
  }

  // Get all brute ids (ignore first items)
  const bruteIds = duplicates.flatMap((duplicate) => duplicate.ids.slice(1));

  // Tag duplicates for deletion
  await prisma.brute.updateMany({
    where: {
      id: {
        in: bruteIds,
      },
    },
    data: {
      willBeDeletedAt: moment.utc().add(7, 'day').toDate(),
      deletionReason: BruteDeletionReason.DUPLICATE_NAME,
    },
  });

  // Get brutes that already have the name change item
  const bruteIdsWithItem = await prisma.inventoryItem.findMany({
    where: {
      type: InventoryItemType.nameChange,
      bruteId: {
        in: bruteIds,
      },
    },
    select: { bruteId: true },
  });

  // Add 1x name change item to those brutes
  await prisma.inventoryItem.updateMany({
    where: {
      bruteId: { in: bruteIdsWithItem.map((item) => item.bruteId ?? '') },
      type: InventoryItemType.nameChange,
    },
    data: {
      count: { increment: 1 },
    },
  });

  // Get brutes that don't have the name change item
  const bruteIdsWithoutItem = bruteIds.filter(
    (id) => !bruteIdsWithItem.some((item) => item.bruteId === id),
  );

  // Add 1x name change item to those brutes
  await prisma.inventoryItem.createMany({
    data: bruteIdsWithoutItem.map((id) => ({
      bruteId: id,
      type: InventoryItemType.nameChange,
      count: 1,
    })),
  });

  LOGGER.log(`Tagged ${bruteIds.length} brutes for deletion due to duplicate names`);
};

const deleteBrutes = async (prisma: PrismaClient) => {
  // Get all brutes tagged for deletion
  const brutes = await prisma.brute.findMany({
    where: {
      willBeDeletedAt: {
        lte: new Date(),
      },
    },
    select: {
      id: true,
      clanId: true,
      level: true,
      ranking: true,
      masterId: true,
    },
  });

  if (!brutes.length) {
    return;
  }

  // Separate brutes by chunk of 1000
  const bruteIds = brutes.map((brute) => brute.id);
  const bruteChunks = Array(Math.ceil(bruteIds.length / 1000))
    .fill([])
    .map((_, index) => bruteIds.slice(index * 1000, index * 1000 + 1000));

  // Delete brutes in chunks
  for (const chunk of bruteChunks) {
    await prisma.brute.updateMany({
      where: {
        id: {
          in: chunk,
        },
      },
      data: {
        deletedAt: new Date(),
        willBeDeletedAt: null,
        // Remove from clan
        clanId: null,
        // Delete join requests
        wantToJoinClanId: null,
      },
    });
  }

  for (const brute of brutes) {
    // Update clan points
    if (brute.clanId) {
      await updateClanPoints(prisma, brute.clanId, 'remove', brute);
    }

    // Update master pupils count
    if (brute.masterId) {
      await prisma.brute.update({
        where: { id: brute.masterId },
        data: {
          pupilsCount: {
            decrement: 1,
          },
        },
      });
    }
  }

  LOGGER.log(`Deleted ${brutes.length} brutes tagged for deletion`);
};

// Handle modifiers
const handleModifiers = async (prisma: PrismaClient) => {
  // Check if current modifiers expired
  const modifiersExpired = await ServerState.areModifiersExpired(prisma);

  if (!modifiersExpired) {
    return ServerState.getModifiers(prisma);
  }

  const rolledModifiers: FightModifier[] = [];

  // Check if next modifiers are preselected
  const nextModifiers = await ServerState.getNextModifiers(prisma);

  if (nextModifiers.length) {
    rolledModifiers.push(...nextModifiers);

    // Reset next modifiers
    await ServerState.setNextModifiers(prisma, []);
  }

  if (!rolledModifiers.length && Math.random() < DailyModifierSpawnChance) {
    const modifierCount = weightedRandom(DailyModifierCountOdds).count;

    const availableModifiers = [...DailyModifierOdds];

    // Roll modifiers
    for (let i = 0; i < modifierCount; i++) {
      const { modifier } = weightedRandom(availableModifiers);

      rolledModifiers.push(modifier);

      // Remove modifier from available list
      availableModifiers.splice(availableModifiers.findIndex((m) => m.modifier === modifier), 1);
    }
  }

  // Store rolled modifiers
  await ServerState.setModifiers(prisma, rolledModifiers);

  if (rolledModifiers.length) {
    DISCORD.sendModifiersNotification(rolledModifiers);
  }

  return rolledModifiers;
};

// Handle releases
const handleReleases = async (prisma: PrismaClient) => {
  // Get the latest release processed
  const latestRelease = await prisma.release.findFirst({
    orderBy: {
      date: 'desc',
    },
    take: 1,
  });

  if (latestRelease?.version === LAST_RELEASE.version) {
    return;
  }

  // Send release notifications
  try {
    // Discord notification
    await DISCORD.sendRelease(LAST_RELEASE);

    // User notifications
    const notifCount = await prisma.$executeRaw`
      INSERT INTO "Notification" ("userId", "message", "link", "severity")
      SELECT id, 'newPatchNotesAvailable', '/patch-notes', 'warning'
      FROM "User";
    `;

    LOGGER.log(`Sent ${notifCount} release notifications`);

    // Store latest release
    await prisma.release.create({
      data: {
        version: LAST_RELEASE.version,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      DISCORD.sendError(error);
    } else {
      console.error(error);
    }
  }
};

const cleanup = async (prisma: PrismaClient) => {
  // Delete logs older than 30 days
  await prisma.log.deleteMany({
    where: {
      date: {
        lt: moment.utc().subtract(30, 'day').toDate(),
      },
    },
  });

  // Delete notifications older than 30 days
  await prisma.notification.deleteMany({
    where: {
      date: {
        lt: moment.utc().subtract(30, 'day').toDate(),
      },
    },
  });

  // Delete non tournament/war or favorited fights older than 30 days
  let deleted = null;

  while (deleted !== 0) {
    const now = moment.utc().valueOf();

    deleted = await prisma.$executeRaw`
        DELETE FROM "Fight"
        WHERE id IN (SELECT id FROM "Fight"
          WHERE "date" < ${moment.utc().subtract(30, 'day').toDate()}
          AND "tournamentId" IS NULL
          AND "clanWarId" IS NULL
          AND "favoriteCount" = 0
          LIMIT 100000);
      `;

    if (deleted) {
      LOGGER.log(`${moment.utc().valueOf() - now}ms to delete ${deleted} fights older than 30 days`);
    }
  }
};

const handleClanWars = async (
  prisma: PrismaClient,
  modifiers: FightModifier[],
) => {
  // Required since wars were started as pending before
  // TODO: Remove when none are pending
  const pendingClanWars = await prisma.clanWar.updateMany({
    where: {
      status: ClanWarStatus.pending,
    },
    data: {
      status: ClanWarStatus.ongoing,
    },
  });

  if (pendingClanWars.count) {
    LOGGER.log(`${pendingClanWars.count} pending clan wars started`);
  }

  const today = moment.utc().startOf('day');

  // Give rewards for finished clan wars
  const finishedClanWars = await prisma.clanWar.findMany({
    where: {
      status: ClanWarStatus.waitingForRewards,
      fights: {
        none: {
          date: today.toDate(),
        },
      },
    },
    select: {
      id: true,
      type: true,
      winnerId: true,
      attacker: {
        select: { id: true, elo: true },
      },
      defender: {
        select: { id: true, elo: true },
      },
    },
  });

  for (const clanWar of finishedClanWars) {
    if (!clanWar.winnerId) {
      throw new Error('No winner for clan war');
    }

    let attackerEloChange = 0;
    let defenderEloChange = 0;

    // No elo for friendly wars
    if (clanWar.type === ClanWarType.official) {
      const attackerElo = getNewElo(
        clanWar.attacker.elo,
        clanWar.defender.elo,
        clanWar.winnerId === clanWar.attacker.id,
      );
      const defenderElo = getNewElo(
        clanWar.defender.elo,
        clanWar.attacker.elo,
        clanWar.winnerId === clanWar.defender.id,
      );

      attackerEloChange = attackerElo - clanWar.attacker.elo;
      defenderEloChange = defenderElo - clanWar.defender.elo;

      // Update attacker
      await prisma.clan.update({
        where: { id: clanWar.attacker.id },
        data: {
          points: {
            increment: clanWar.winnerId === clanWar.attacker.id ? ClanWarPointReward : 0,
          },
          elo: attackerElo,
        },
      });

      // Update defender
      await prisma.clan.update({
        where: { id: clanWar.defender.id },
        data: {
          points: {
            increment: clanWar.winnerId === clanWar.defender.id ? ClanWarPointReward : 0,
          },
          elo: defenderElo,
        },
      });
    }

    // Update clan war status
    await prisma.clanWar.update({
      where: { id: clanWar.id },
      data: {
        status: ClanWarStatus.finished,
        attackerEloChange,
        defenderEloChange,
      },
    });
  }

  if (finishedClanWars.length) {
    LOGGER.log(`${finishedClanWars.length} clan war rewards given`);
  }

  // Get ongoing clan wars
  const clanWars = await prisma.clanWar.findMany({
    where: {
      status: ClanWarStatus.ongoing,
      date: {
        not: new Date(),
      },
    },
    include: {
      fights: {
        select: { id: true, date: true },
      },
    },
  });

  let skipped = 0;

  for (const clanWar of clanWars) {
    // TODO: get day from wins, not fights
    const day = clanWar.fights.length + 1;

    // Check if a fight was already generated for the day
    if (clanWar.fights.some((fight) => moment.utc(fight.date).isSame(today))) {
      skipped++;
      continue;
    }

    // Get fighters planned for the day
    const attackers = await prisma.brute.findMany({
      where: {
        clanId: clanWar.attackerId,
        inClanWarAttackerFighters: {
          some: {
            clanWarId: clanWar.id,
            day,
          },
        },
      },
    });

    // Randomize attackers if none selected
    if (!attackers.length) {
      const attackerBrutes = await prisma.brute.findMany({
        where: {
          clanId: clanWar.attackerId,
          deletedAt: null,
          inClanWarAttackerFighters: {
            none: {
              clanWarId: clanWar.id,
            },
          },
        },
      });

      // End war if no attackers left
      if (!attackerBrutes.length) {
        await prisma.clanWar.update({
          where: { id: clanWar.id },
          data: {
            status: ClanWarStatus.waitingForRewards,
            winnerId: clanWar.defenderId,
          },
        });

        continue;
      }

      attackers.push(...shuffle(attackerBrutes).slice(0, ClanWarMaxParticipants));

      // Register attackers for the day
      await prisma.clanWarFighters.upsert({
        where: {
          clanWarId_day: {
            clanWarId: clanWar.id,
            day,
          },
        },
        create: {
          clanWar: { connect: { id: clanWar.id } },
          day,
          attackers: {
            connect: attackers.map((brute) => ({ id: brute.id })),
          },
        },
        update: {
          attackers: {
            connect: attackers.map((brute) => ({ id: brute.id })),
          },
        },
      });
    }

    const defenders = await prisma.brute.findMany({
      where: {
        clanId: clanWar.defenderId,
        inClanWarDefenderFighters: {
          some: {
            clanWarId: clanWar.id,
            day,
          },
        },
      },
    });

    // Randomize defenders if none selected
    if (!defenders.length) {
      const defenderBrutes = await prisma.brute.findMany({
        where: {
          clanId: clanWar.defenderId,
          deletedAt: null,
          inClanWarDefenderFighters: {
            none: {
              clanWarId: clanWar.id,
            },
          },
        },
      });

      // End war if no defenders left
      if (!defenderBrutes.length) {
        await prisma.clanWar.update({
          where: { id: clanWar.id },
          data: {
            status: ClanWarStatus.waitingForRewards,
            winnerId: clanWar.attackerId,
          },
        });

        continue;
      }

      defenders.push(...shuffle(defenderBrutes).slice(0, ClanWarMaxParticipants));

      // Register attackers for the day
      await prisma.clanWarFighters.upsert({
        where: {
          clanWarId_day: {
            clanWarId: clanWar.id,
            day,
          },
        },
        create: {
          clanWar: { connect: { id: clanWar.id } },
          day,
          defenders: {
            connect: defenders.map((brute) => ({ id: brute.id })),
          },
        },
        update: {
          defenders: {
            connect: defenders.map((brute) => ({ id: brute.id })),
          },
        },
      });
    }

    // Generate fight (retry if failed)
    let generatedFight: Prisma.FightCreateInput | null = null;
    let retries = 0;
    while (!generatedFight) {
      // Stop at 10 retries
      if (retries > 10) {
        throw new Error('Too many retries');
      }

      try {
        const newGeneratedFight = await generateFight({
          prisma,
          team1: { brutes: attackers },
          team2: { brutes: defenders },
          modifiers,
          backups: false,
          achievements: true,
          clanWar: true,
        });
        generatedFight = newGeneratedFight.data;
      } catch (error: unknown) {
        if (!(error instanceof Error)) {
          throw error;
        }
        LOGGER.log(`Error while generating a clan war fight between ${clanWar.attackerId} and ${clanWar.defenderId}, retrying...`);
        DISCORD.sendError(error);
      }

      retries++;
    }

    // Create fight
    await prisma.fight.create({
      data: {
        ...generatedFight,
        clanWar: { connect: { id: clanWar.id } },
      },
      select: { id: true },
    });

    const winnerName = generatedFight.winner;
    const winner = attackers.some((brute) => brute.name === winnerName)
      ? 'attacker'
      : 'defender';

    if (winner === 'attacker') {
      clanWar.attackerWins++;
    } else {
      clanWar.defenderWins++;
    }

    const shouldEnd = (clanWar.defenderWins > (clanWar.duration / 2))
      || (clanWar.attackerWins > (clanWar.duration / 2))
      || day >= clanWar.duration;

    // Update clan war
    await prisma.clanWar.update({
      where: { id: clanWar.id },
      data: {
        status: shouldEnd
          ? ClanWarStatus.waitingForRewards
          : ClanWarStatus.ongoing,
        attackerWins: clanWar.attackerWins,
        defenderWins: clanWar.defenderWins,
        winnerId: shouldEnd
          ? clanWar.attackerWins > clanWar.defenderWins
            ? clanWar.attackerId
            : clanWar.defenderId
          : null,
      },
    });
  }

  if (clanWars.length - skipped) {
    LOGGER.log(`${clanWars.length - skipped} clan wars handled`);
  }

  // Get clans participating in clan wars
  const clans = await prisma.clan.findMany({
    where: {
      deletedAt: null,
      participateInClanWar: true,
      attacks: {
        none: {
          status: { not: ClanWarStatus.finished },
        },
      },
      defenses: {
        none: {
          status: { not: ClanWarStatus.finished },
        },
      },
    },
    select: {
      id: true,
    },
    orderBy: {
      elo: 'desc',
    },
  });

  // Create new clan wars (pairing clans)
  let created = 0;

  for (let i = 0; i < clans.length; i += 2) {
    const attackerId = clans[i]?.id;
    const defenderId = clans[i + 1]?.id;

    if (!attackerId || !defenderId) {
      break;
    }

    await prisma.clanWar.create({
      data: {
        attacker: { connect: { id: attackerId } },
        defender: { connect: { id: defenderId } },
      },
    });

    created++;
  }

  if (created) {
    LOGGER.log(`${created} new clan wars created`);
  }
};

const handleEventFinish = async (prisma: PrismaClient) => {
  // Get last event
  const lastEvent = await prisma.event.findFirst({
    orderBy: {
      date: 'desc',
    },
    take: 1,
  });

  // Don't start another if last one is not finished
  if (lastEvent && lastEvent.status !== EventStatus.finished) {
    return;
  }

  // Don't start another if the pause is not over
  if (lastEvent && moment.utc().isBefore(moment.utc(lastEvent.finishedAt).add(EventPauseDuration, 'day'))) {
    return;
  }

  // Create new event
  const maxLevel = randomBetween(20, 120);
  const newEvent = await prisma.event.create({
    data: {
      maxLevel,
    },
    select: { id: true },
  });

  // Notify users
  const notifications = await prisma.$executeRaw`
    INSERT INTO "Notification" ("userId", "message", "link")
    SELECT id, 'event.started', ${`{bruteName}/event/${newEvent.id}`}
    FROM "User";
  `;

  LOGGER.log(`New event created with max level ${maxLevel}. ${notifications} notifications sent`);
};

const handleEventTournament = async (
  prisma: PrismaClient,
  modifiers: FightModifier[],
) => {
  // Get last event
  const lastEvent = await prisma.event.findFirst({
    where: {
      status: { not: EventStatus.finished },
    },
    orderBy: {
      date: 'desc',
    },
    take: 1,
    include: {
      brutes: {
        select: { id: true },
      },
      tournament: {
        select: {
          id: true,
          rounds: true,
        },
      },
    },
  });

  if (!lastEvent) {
    return;
  }

  // No brutes, increase event date
  if (!lastEvent.brutes.length && !lastEvent.sortedBrutes.length) {
    await prisma.event.update({
      where: { id: lastEvent.id },
      data: {
        date: moment.utc(lastEvent.date).add(1, 'day').toDate(),
      },
    });

    return;
  }

  // Less than 2 days, skip
  if (moment.utc().diff(moment.utc(lastEvent.date), 'days') < 2) {
    return;
  }

  if (!lastEvent.tournament) {
    // Create tournament
    const tournament = await prisma.tournament.create({
      data: {
        date: lastEvent.date,
        type: TournamentType.BATTLE_ROYALE,
        rounds: 0,
        eventId: lastEvent.id,
      },
      select: {
        id: true,
        rounds: true,
      },
    });

    // Shuffle brutes
    const shuffledBrutes = shuffle(lastEvent.brutes);

    const bruteIds = shuffledBrutes.map((brute) => brute.id);

    // Store shuffled brutes
    await prisma.event.update({
      where: { id: lastEvent.id },
      data: {
        sortedBrutes: {
          set: bruteIds,
        },
      },
    });

    // Update last event with sorted brutes and tournament
    lastEvent.sortedBrutes = bruteIds;
    lastEvent.tournament = tournament;
  }

  if (!lastEvent.tournament) {
    throw new Error('Tournament not found');
  }

  // Check if today's round is already done
  if (lastEvent.tournament.rounds + 1 >= moment.utc().diff(moment.utc(lastEvent.date), 'days')) {
    return;
  }

  LOGGER.log(`Event ${lastEvent.id} ongoing with ${lastEvent.sortedBrutes.length} brutes`);

  // For the battle royale event tournament, fight.tournamentStep represents the round number
  const round = lastEvent.tournament.rounds + 1;
  const roundBrutes = [...lastEvent.sortedBrutes];
  let nextBrutes: string[] = [];

  // Handle byes for first round (power of 2)
  if (roundBrutes.length !== 2 ** Math.floor(Math.log2(roundBrutes.length))) {
    // Get number of byes
    const byesCount = 2 ** (Math.floor(Math.log2(roundBrutes.length)) + 1) - roundBrutes.length;

    // Add byes
    nextBrutes = [...roundBrutes.splice(roundBrutes.length - byesCount, byesCount)];
  }

  for (let i = 0; i < roundBrutes.length - 1; i += 2) {
    const roundBrute1 = roundBrutes[i];
    const roundBrute2 = roundBrutes[i + 1];

    // Brute 1 not found, skip
    if (!roundBrute1) {
      if (roundBrute2) {
        nextBrutes.push(roundBrute2);
      }
      continue;
    }

    // Brute 2 not found, skip
    if (!roundBrute2) {
      nextBrutes.push(roundBrute1);
      continue;
    }

    const brute1 = await prisma.brute.findUnique({
      where: { id: roundBrute1 },
    });
    const brute2 = await prisma.brute.findUnique({
      where: { id: roundBrute2 },
    });

    if (!brute1 || !brute2) {
      throw new Error(`Brute not found: ${brute1?.id || brute2?.id}`);
    }

    if (brute1.id === brute2.id) {
      throw new Error(`Attempted to fight same brute: ${brute1.name}`);
    }

    // Skip if no adversary
    if (!brute2) {
      nextBrutes.push(brute1.id);
      continue;
    }

    // Generate fight (retry if failed)
    let generatedFight: Prisma.FightCreateInput | null = null;
    let retries = 0;

    while (!generatedFight) {
      // Stop at 10 retries
      if (retries > 10) {
        throw new Error('Too many retries');
      }

      try {
        const newGeneratedFight = await generateFight({
          prisma,
          team1: { brutes: [brute1] },
          team2: { brutes: [brute2] },
          modifiers,
          backups: false,
          achievements: false,
        });
        generatedFight = newGeneratedFight.data;
      } catch (error: unknown) {
        if (!(error instanceof Error)) {
          throw error;
        }
        LOGGER.log(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
        DISCORD.sendError(error);
      }

      retries++;
    }

    // Create fight
    await prisma.fight.create({
      data: {
        ...generatedFight,
        tournamentStep: round,
        tournament: { connect: { id: lastEvent.tournament.id } },
      },
      select: { id: true },
    });

    // Add winner to next round
    nextBrutes.push(brute1.name === generatedFight.winner ? brute1.id : brute2.id);
  }

  // Tournament ends if only one brute left
  if (nextBrutes.length === 1) {
    const winner = nextBrutes[0];

    if (!winner) {
      throw new Error('Winner brute not found');
    }

    // Update event
    await prisma.event.update({
      where: { id: lastEvent.id },
      data: {
        status: EventStatus.finished,
        winnerId: winner,
        finishedAt: new Date(),
      },
    });

    // Delete all other brutes
    const brutesToDelete = lastEvent.brutes.filter((brute) => brute.id !== winner) ?? [];

    // Separate brutes 1000 by 1000
    const brutesChunks = Array(Math.ceil(brutesToDelete.length / 1000))
      .fill([])
      .map((_, index) => brutesToDelete.slice(index * 1000, index * 1000 + 1000));

    for (const brutesChunk of brutesChunks) {
      await prisma.brute.updateMany({
        where: {
          id: {
            in: brutesChunk.map((brute) => brute.id),
          },
        },
        data: {
          willBeDeletedAt: moment.utc().add(3, 'day').toDate(),
          deletionReason: BruteDeletionReason.EVENT_LOSS,
        },
      });
    }

    LOGGER.log(`Marked ${brutesToDelete.length} brutes for deletion from event ${lastEvent.id}`);

    // Make winner an official brute
    const winnerBrute = await prisma.brute.update({
      where: { id: winner },
      data: {
        eventId: null,
      },
      select: {
        id: true,
        userId: true,
        destinyPath: true,
        level: true,
        ranking: true,
        eventId: true,
        xp: true,
        ascensions: true,
        ascendedWeapons: true,
        ascendedSkills: true,
        ascendedPets: true,
      },
    });

    // Reset brute
    await resetBrute({
      prisma,
      brute: winnerBrute,
      free: true,
    });

    if (!winnerBrute.userId) {
      throw new Error('Winner user not found');
    }

    // Add achievement
    await increaseAchievement(
      prisma,
      winnerBrute.userId,
      winnerBrute.id,
      AchievementName.battleRoyaleWin,
    );

    LOGGER.log(`Event ${lastEvent.id} finished with winner ${winnerBrute.id}`);
  }

  // Update event sorted brutes and tournament rounds
  await prisma.event.update({
    where: { id: lastEvent.id },
    data: {
      sortedBrutes: nextBrutes,
      tournament: {
        update: {
          rounds: round,
        },
      },
    },
    select: { id: true },
  });

  if (lastEvent.status === EventStatus.starting) {
    // Update event status
    await prisma.event.update({
      where: { id: lastEvent.id },
      data: {
        status: EventStatus.ongoing,
        maxRound: Math.ceil(Math.log2(lastEvent.sortedBrutes.length)),
      },
    });
  }

  LOGGER.log(`Round ${round} of event ${lastEvent.id} completed`);
};

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
    // Releases
    await handleReleases(prisma);

    // Roll daily modifiers
    const modifiers = await handleModifiers(prisma);

    if (process.env.NODE_ENV === 'production' || GENERATE_TOURNAMENTS_IN_DEV) {
      // Update server state to hold traffic
      ServerState.setReady(false);

      // Handle daily tournaments
      const dailyGains = await handleDailyTournaments(prisma, modifiers);

      // Handle global tournament
      const globalGains = await handleGlobalTournament(prisma, modifiers);

      // Store gains
      await storeGains(prisma, dailyGains, globalGains);
    }

    // Handle clan wars
    await handleClanWars(prisma, modifiers);

    // Handle events
    await handleEventFinish(prisma);
    await handleEventTournament(prisma, modifiers);
    ServerState.setCurrentEvent(undefined);

    // Delete brutes tagged for deletion
    await deleteBrutes(prisma);

    // Update server state to release traffic
    ServerState.setReady(true);

    // Grant beta achievement to all brutes who don't have it yet
    await grantBetaAchievement(prisma);

    // Grant bug achievements to all admins who don't have it yet
    await grantBugAchievement(prisma);

    // Handle XP won the previous day
    await handleXpGains(prisma);

    // Handle tournament earnings from the previous day
    await handleTournamentEarnings(prisma);

    // Check name duplicates
    await checkNameDuplicates(prisma);

    // Clean up DB
    await cleanup(prisma);

    // Update known issues
    await DISCORD.updateKnownIssues(knownIssues);

    LOGGER.info('Daily job completed');
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      throw error;
    }
    DISCORD.sendError(error);
    // Delete misformatted tournaments
    await deleteMisformattedTournaments(prisma);

    // Update server state to release traffic
    ServerState.setReady(true);
  }
};

export default dailyJob;
