/* eslint-disable no-await-in-loop */
import {
  BruteDeletionReason,
  DailyModifierRates,
  Fighter,
  getWinsNeededToRankUp,
} from '@labrute/core';
import {
  FightModifier,
  InventoryItemType,
  LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import moment from 'moment';
import { DISCORD, LOGGER } from './context.js';
import ServerState from './utils/ServerState.js';
import generateFight from './utils/fight/generateFight.js';
import shuffle from './utils/shuffle.js';
import updateClanPoints from './utils/clan/updateClanPoints.js';

const GENERATE_TOURNAMENTS_IN_DEV = false;

const grantBetaAchievement = async (prisma: PrismaClient) => {
  // Grant beta achievement to all brutes who don't have it yet
  const brutes = await prisma.brute.findMany({
    where: {
      userId: { not: null },
      deletedAt: null,
      achievements: {
        none: {
          name: {
            equals: 'beta',
          },
        },
      },
    },
    select: { id: true, userId: true },
  });

  if (!brutes.length) {
    return;
  }
  // Grant beta achievement
  await prisma.achievement.createMany({
    data: brutes.map((brute) => ({
      name: 'beta',
      bruteId: brute.id,
      userId: brute.userId,
      count: 1,
    })),
  });

  LOGGER.log(`Gave the beta achievement to ${brutes.length} brutes`);
};

const grantBugAchievement = async (prisma: PrismaClient) => {
  // Grant bug achievement to all admins who don't have it yet
  const admins = await prisma.user.findMany({
    where: {
      admin: true,
      achievements: {
        none: {
          name: {
            equals: 'bug',
          },
        },
      },
    },
    select: { id: true },
  });

  if (!admins.length) {
    return;
  }
  // Grant bug achievement
  await prisma.achievement.createMany({
    data: admins.map((admin) => ({
      name: 'bug',
      userId: admin.id,
      count: 999,
    })),
  });

  LOGGER.log(`Gave the bug achievement to ${admins.length} admins`);
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
          type: 'tournament',
        })),
      });

      // Remove last tournament
      tournaments.pop();
    }
  }

  // Remove empty tournaments and sort brutes by rank and level
  // (Split in two halves)
  tournaments = tournaments.filter(Boolean).map((tournament) => {
    const firstHalf = [];
    const secondHalf = [];
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

        if (brute1.name === brute2.name) {
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
            const newGeneratedFight = await generateFight(
              prisma,
              brute1,
              brute2,
              modifiers,
              false,
              true,
              roundBrutes.length === 2,
            );
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
          gains[winnerId] = [1, 0];
        } else {
          winnerGains[0] += 1;
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
          gold: 100,
        },
        select: { id: true },
      });

      // Store gains
      const winnerGains = gains[winnerBrute.id];
      if (!winnerGains) {
        gains[winnerBrute.id] = [0, 100];
      } else {
        winnerGains[1] += 100;
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

      if (brute1.name === brute2.name) {
        throw new Error('Attempting to fight a brute against itself');
      }

      // Skip if no adversary
      if (!brute2) {
        nextBrutes.push(brute1);

        // eslint-disable-next-line no-continue
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
          const newGeneratedFight = await generateFight(
            prisma,
            brute1,
            brute2,
            modifiers,
            false,
            true,
            roundBrutes.length === 2,
          );
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
        gains[winnerId] = [1, 0];
      } else {
        winnerGains[0] += 1;
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
      gold: 150,
    },
    select: { id: true },
  });

  // Store gains
  const winnerGains = gains[winnerBrute.id];
  if (!winnerGains) {
    gains[winnerBrute.id] = [0, 150];
  } else {
    winnerGains[1] += 150;
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
  dailyGains: Record<number, [number, number]>,
  globalGains: Record<number, [number, number]>,
) => {
  if (!Object.keys(dailyGains).length && !Object.keys(globalGains).length) {
    return;
  }

  const now = moment.utc().valueOf();

  // Add gains together
  const gains: Record<number, [number, number]> = {};

  for (const [bruteIdString, currentGains] of Object.entries(dailyGains)) {
    const bruteId = +bruteIdString;
    const bruteGains = gains[bruteId];
    if (!bruteGains) {
      gains[bruteId] = [currentGains[0], currentGains[1]];
    } else {
      bruteGains[0] += currentGains[0];
      bruteGains[1] += currentGains[1];
    }
  }

  for (const [bruteIdString, currentGains] of Object.entries(globalGains)) {
    const bruteId = +bruteIdString;
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
  const bruteIdsWithItem = await prisma.bruteInventoryItem.findMany({
    where: {
      type: InventoryItemType.nameChange,
      bruteId: {
        in: bruteIds,
      },
    },
    select: { bruteId: true },
  });

  // Add 1x name change item to those brutes
  await prisma.bruteInventoryItem.updateMany({
    where: {
      bruteId: { in: bruteIdsWithItem.map((item) => item.bruteId) },
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
  await prisma.bruteInventoryItem.createMany({
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
    },
  });

  if (!brutes.length) {
    return;
  }

  // Delete brutes
  await prisma.brute.updateMany({
    where: {
      id: {
        in: brutes.map((brute) => brute.id),
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

  // Update clan points
  for (const brute of brutes) {
    if (brute.clanId) {
      await updateClanPoints(prisma, brute.clanId, 'remove', brute);
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

  // Get rolled modifiers from daily rates
  const rolledModifiers = Object.values(FightModifier).reduce((array, modifier) => {
    if (DailyModifierRates[modifier] > Math.random()) {
      array.push(modifier);
    }

    return array;
  }, [] as FightModifier[]);

  // Store rolled modifiers
  await ServerState.setModifiers(prisma, rolledModifiers);

  if (rolledModifiers.length) {
    DISCORD.sendModifiersNotification(rolledModifiers);
  }

  return rolledModifiers;
};

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
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

      // Update server state to release traffic
      ServerState.setReady(true);
    }

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

    // Delete brutes tagged for deletion
    await deleteBrutes(prisma);
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
