/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import {
  BruteWithBodyColors, Fighter, getRandomBody, getRandomColors,
} from '@labrute/core';
import {
  LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import moment from 'moment';
import { Worker } from 'worker_threads';
import DiscordUtils from './utils/DiscordUtils.js';
import generateFight from './utils/fight/generateFight.js';
import shuffle from './utils/shuffle.js';

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
  });

  if (brutes.length) {
    // Grant beta achievement
    await prisma.achievement.createMany({
      data: brutes.map((brute) => ({
        name: 'beta',
        bruteId: brute.id,
        userId: brute.userId,
        count: 1,
      })),
    });

    await DiscordUtils.sendLog(`Gave the beta achievement to ${brutes.length} brutes`);
  }
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
    include: { steps: true },
  });

  // Delete misformatted tournaments
  const misformattedTournaments = tournamentsAlreadyCreated.filter(
    (tournament) => tournament.steps.length !== 63,
  );

  if (misformattedTournaments.length) {
    await prisma.tournamentStep.deleteMany({
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

const generateMissingBodyColors = async (prisma: PrismaClient) => {
  const brutesWithoutBodyColors = await prisma.brute.findMany({
    where: {
      deletedAt: null,
      OR: [
        { body: null },
        { colors: null },
      ],
    },
  });

  for (const brute of brutesWithoutBodyColors) {
    await prisma.brute.update({
      where: {
        id: brute.id,
      },
      data: {
        body: { create: getRandomBody(brute.gender) },
        colors: { create: getRandomColors(brute.gender) },
      },
    });
  }
};

const generateMissingSpritesheets = async (prisma: PrismaClient) => {
  const brutesWithoutSpritesheet = await prisma.brute.findMany({
    where: {
      deletedAt: null,
      spritesheet: null,
      body: {
        isNot: null,
      },
      colors: {
        isNot: null,
      },
    },
    include: {
      body: true,
      colors: true,
    },
  });

  for (const brute of brutesWithoutSpritesheet) {
    // Generate spritesheet
    // eslint-disable-next-line no-new
    new Worker('./lib/workers/generateSpritesheet.js', {
      workerData: brute,
    });
  }
};

const handleDailyTournaments = async (prisma: PrismaClient) => {
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
    include: {
      body: true,
      colors: true,
    },
  });

  // All brutes are assigned, do nothing
  if (registeredBrutes.length === 0) {
    return;
  }

  // Shuffle brutes
  const shuffledBrutes = shuffle(registeredBrutes);

  const tournamentsToCreate = Math.ceil(shuffledBrutes.length / 64);

  // Create groups of 64 brutes
  let tournaments: BruteWithBodyColors[][] = Array(tournamentsToCreate)
    .fill([])
    .map((_, index) => shuffledBrutes.slice(index * 64, index * 64 + 64));

  // Fill last group with generated brutes
  if (tournaments.length && tournaments[tournaments.length - 1].length) {
    const lastTournament = tournaments[tournaments.length - 1];

    const highestLevelBrute = lastTournament
      .sort((a, b) => a.level - b.level)[lastTournament.length - 1].level;

    // Get generated brutes at level lower or equal to highest level brute
    let generatedBrutes = await prisma.brute.findMany({
      where: {
        deletedAt: null,
        user: null,
        level: {
          lte: highestLevelBrute,
        },
      },
      include: {
        body: true,
        colors: true,
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

  // Remove empty tournaments and shuffle each tournament
  tournaments = tournaments.filter(Boolean).map((tournament) => shuffle(tournament));

  // Create tournaments
  for (const brutes of tournaments) {
    // Create tournament
    const tournament = await prisma.tournament.create({
      data: {
        date: new Date(),
        participants: {
          connect: brutes.map((brute) => ({ id: brute.id })),
        },
      },
    });

    // Create tournament steps (1 to 32 for first round, 33 to 48 for 2nd, etc etc)
    let step = 1;
    let roundBrutes = [...brutes];
    let winners: BruteWithBodyColors[] = [];
    let lastFight: Prisma.FightCreateInput | null = null;
    while (roundBrutes.length > 1) {
      for (let i = 0; i < roundBrutes.length - 1; i += 2) {
        const brute1 = roundBrutes[i];
        const brute2 = roundBrutes[i + 1];

        // Generate fight (retry if failed)
        let generatedFight: Prisma.FightCreateInput | null = null;

        while (!generatedFight) {
          try {
            generatedFight = await generateFight(
              prisma,
              brute1,
              brute2,
              false,
              true,
              roundBrutes.length === 2,
            );
          } catch (error) {
            await DiscordUtils.sendLog(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
            await DiscordUtils.sendError(error);
          }
        }

        lastFight = generatedFight;

        // Create fight
        const fight = await prisma.fight.create({
          data: lastFight,
          select: { id: true },
        });

        // Add winner to next round
        winners.push(brute1.name === lastFight.winner ? brute1 : brute2);

        // Create tournament step
        await prisma.tournamentStep.create({
          data: {
            tournament: { connect: { id: tournament.id } },
            step,
            fight: { connect: fight },
          },
        });

        step++;
      }

      // Continue with winners
      roundBrutes = [...winners];
      winners = [];
    }

    if (!lastFight) {
      throw new Error('No last fight');
    }

    const fight = lastFight;

    const winner = brutes.find((brute) => brute.name === fight.winner);
    if (!winner) {
      throw new Error('No winner');
    }

    const loser = brutes.find((brute) => brute.name === fight.loser);
    if (!loser) {
      throw new Error('No loser');
    }

    // Only for real brutes
    if (winner.userId) {
      // Add 100 Sacripoints to winner user
      await prisma.tournamentEarning.create({
        data: {
          bruteId: winner.id,
          date: today.toDate(),
          points: 100,
        },
      });

      // Allow rank up for winner if opponent wasn't lower rank
      if (!winner.canRankUpSince && winner.ranking >= loser.ranking) {
        await prisma.brute.update({
          where: { id: winner.id },
          data: { canRankUpSince: new Date() },
        });
      }
    }

    // Send Discord notification
    await DiscordUtils.sendTournamentNotification(tournament, brutes);
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

  await DiscordUtils.sendLog(`${tournamentsToCreate} daily tournaments created`);
};

const handleGlobalTournament = async (prisma: PrismaClient) => {
  const today = moment.utc().startOf('day');

  // Check if global tournament is already handled
  const globalTournament = await prisma.tournament.count({
    where: {
      date: today.toDate(),
      type: TournamentType.GLOBAL,
    },
  });

  if (globalTournament) {
    return;
  }

  // Get all real brutes
  const brutes = await prisma.brute.findMany({
    where: {
      deletedAt: null,
      user: {
        isNot: null,
      },
    },
    include: {
      body: true,
      colors: true,
    },
  });

  await DiscordUtils.sendLog(`Total brutes: ${brutes.length}`);

  // Shuffle brutes
  const shuffledBrutes = shuffle(brutes);

  // Create global tournament
  const tournament = await prisma.tournament.create({
    data: {
      date: today.toDate(),
      type: TournamentType.GLOBAL,
      participants: {
        connect: shuffledBrutes.map((brute) => ({ id: brute.id })),
      },
    },
  });

  // For the global tournament, tournamentStep.step represents the round number
  let round = 1;
  let roundBrutes = [...shuffledBrutes];
  const byes: BruteWithBodyColors[] = [];

  // Handle byes for first round (power of 2)
  if (roundBrutes.length !== 2 ** Math.floor(Math.log2(roundBrutes.length))) {
    // Get number of byes
    const byesCount = 2 ** (Math.floor(Math.log2(roundBrutes.length)) + 1) - roundBrutes.length;

    // Add byes
    byes.push(...roundBrutes.splice(roundBrutes.length - byesCount, byesCount));
  }

  // Create tournament steps
  while (roundBrutes.length > 1) {
    const nextBrutes: BruteWithBodyColors[] = [];

    for (let i = 0; i < roundBrutes.length - 1; i += 2) {
      const brute1 = roundBrutes[i];
      const brute2 = roundBrutes[i + 1];

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
          generatedFight = await generateFight(
            prisma,
            brute1,
            brute2,
            false,
            true,
            roundBrutes.length === 2,
          );
        } catch (error) {
          await DiscordUtils.sendLog(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
          await DiscordUtils.sendError(error);
        }

        retries++;
      }

      // Create fight
      const fight = await prisma.fight.create({
        data: generatedFight,
        select: { id: true },
      });

      // Add winner to next round
      nextBrutes.push(brute1.name === generatedFight.winner ? brute1 : brute2);

      // Create tournament step
      await prisma.tournamentStep.create({
        data: {
          tournament: { connect: { id: tournament.id } },
          step: round,
          fight: { connect: fight },
        },
      });
    }

    // Add byes to next round
    if (byes.length) {
      nextBrutes.push(...byes);
      byes.length = 0;
    }

    // Continue with next round
    roundBrutes = [...nextBrutes];
    round++;
  }

  if (roundBrutes.length !== 1) {
    throw new Error('Invalid tournament');
  }

  if (!roundBrutes[0].userId) {
    throw new Error('Tournament winner has no user');
  }

  // Add 150 SacriPoints to the winner user
  await prisma.tournamentEarning.create({
    data: {
      bruteId: roundBrutes[0].id,
      date: today.toDate(),
      points: 150,
    },
  });

  await DiscordUtils.sendLog('Global tournament created');
};

const handleXpGains = async (prisma: PrismaClient) => {
  // Get tournaments from yesterday
  const tournaments = await prisma.tournament.findMany({
    where: {
      date: {
        gte: moment.utc().subtract(1, 'day').startOf('day').toDate(),
        lt: moment.utc().startOf('day').toDate(),
      },
    },
    include: {
      steps: {
        include: {
          fight: true,
        },
      },
    },
  });

  // Get all steps that have not been handled yet
  const steps = tournaments.flatMap((tournament) => tournament.steps)
    .filter((step) => !step.xpDistributed);

  // Keep track of xp gains per brute
  const xpGains: Record<string, { bruteId: number, xp: number }> = {};

  for (const step of steps) {
    const winnerFighter = (step.fight.fighters as unknown as Fighter[])
      .find((fighter) => !fighter.master && fighter.name === step.fight.winner);

    if (!winnerFighter) {
      // Skip to next step
      // eslint-disable-next-line no-continue
      continue;
    }

    // Get winner
    const winner = await prisma.brute.findFirst({
      where: {
        id: winnerFighter.id,
        deletedAt: null,
      },
      select: { id: true },
    });

    if (!winner) {
      // Skip to next step
      // eslint-disable-next-line no-continue
      continue;
    }

    // +1 XP to the winner
    await prisma.brute.update({
      where: { id: winner.id },
      data: { xp: { increment: 1 } },
    });

    xpGains[step.fight.winner] = {
      bruteId: winner.id,
      xp: (xpGains[step.fight.winner]?.xp || 0) + 1,
    };

    // Update step
    await prisma.tournamentStep.update({
      where: { id: step.id },
      data: { xpDistributed: true },
    });
  }

  // Add logs for each brute
  for (const brute of Object.values(xpGains)) {
    await prisma.log.create({
      data: {
        date: moment.utc().toDate(),
        currentBrute: { connect: { id: brute.bruteId } },
        type: LogType.tournamentXp,
        xp: brute.xp,
      },
    });
  }
};

const handleTournamentEarnings = async (prisma: PrismaClient) => {
  const earnings = await prisma.tournamentEarning.findMany({
    where: {
      date: {
        lte: moment.utc().subtract(1, 'day').endOf('day').toDate(),
      },
    },
    include: {
      brute: true,
    },
  });

  for (const earning of earnings) {
    if (earning.points && earning.brute.userId) {
      // Add SacriPoints to the user
      await prisma.user.update({
        where: { id: earning.brute.userId },
        data: { sacrificePoints: { increment: earning.points } },
      });
    }

    // Add achievements to the brute
    if (earning.achievement && earning.achievementCount) {
      // Get existing achievement
      const existingAchievement = await prisma.achievement.findFirst({
        where: {
          name: earning.achievement,
          bruteId: earning.brute.id,
        },
      });

      if (existingAchievement) {
        // Update existing achievement
        await prisma.achievement.update({
          where: {
            id: existingAchievement.id,
          },
          data: {
            count: {
              increment: earning.achievementCount,
            },
          },
        });
      } else {
        // Create new achievement
        await prisma.achievement.create({
          data: {
            name: earning.achievement,
            count: earning.achievementCount,
            userId: earning.brute.userId,
            bruteId: earning.brute.id,
          },
        });
      }
    }

    // Delete earning
    await prisma.tournamentEarning.delete({
      where: { id: earning.id },
    });
  }
};

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
    // Grant beta achievement to all brutes who don't have it yet
    await grantBetaAchievement(prisma);

    // Generate missing body and colors
    await generateMissingBodyColors(prisma);

    // Generate missing spritesheets
    await generateMissingSpritesheets(prisma);

    // Handle XP won the previous day
    await handleXpGains(prisma);

    // Handle tournament earnings from the previous day
    await handleTournamentEarnings(prisma);

    // Handle daily tournaments
    await handleDailyTournaments(prisma);

    // Handle global tournament
    await handleGlobalTournament(prisma);
  } catch (error) {
    DiscordUtils.sendError(error).catch(console.error);
    // Delete misformatted tournaments
    await deleteMisformattedTournaments(prisma);
  }
};

export default dailyJob;