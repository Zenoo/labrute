/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import {
  BruteWithBodyColors, Fighter, getRandomBody, getRandomColors,
} from '@labrute/core';
import {
  AchievementName,
  LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import moment from 'moment';
import DiscordUtils from './utils/DiscordUtils.js';
import ServerState from './utils/ServerState.js';
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

  DiscordUtils.sendLog(`Gave the beta achievement to ${brutes.length} brutes`);
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

  DiscordUtils.sendLog(`Gave the bug achievement to ${admins.length} admins`);
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

  if (!brutesWithoutBodyColors.length) {
    return;
  }

  DiscordUtils.sendLog(`${brutesWithoutBodyColors.length} brutes without body or colors`);

  for (const brute of brutesWithoutBodyColors) {
    await prisma.brute.update({
      where: {
        id: brute.id,
      },
      data: {
        body: { create: getRandomBody(brute.gender) },
        colors: { create: getRandomColors(brute.gender) },
      },
      select: { id: true },
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
    let winners: BruteWithBodyColors[] = [];
    let lastFight: Prisma.FightCreateInput | null = null;
    while (roundBrutes.length > 1) {
      for (let i = 0; i < roundBrutes.length - 1; i += 2) {
        const brute1 = roundBrutes[i];
        const brute2 = roundBrutes[i + 1];

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
            generatedFight = await generateFight(
              prisma,
              brute1,
              brute2,
              false,
              true,
              roundBrutes.length === 2,
            );
          } catch (error) {
            DiscordUtils.sendLog(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
            DiscordUtils.sendError(error);
          }

          retries++;
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
          select: { id: true },
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
      // Add 100 Gold to winner user
      await prisma.tournamentEarning.create({
        data: {
          bruteId: winner.id,
          date: today.toDate(),
          points: 100,
        },
        select: { id: true },
      });

      // Allow rank up for winner if opponent wasn't lower rank
      if (!winner.canRankUpSince && winner.ranking >= loser.ranking) {
        await prisma.brute.update({
          where: { id: winner.id },
          data: { canRankUpSince: new Date() },
          select: { id: true },
        });
      }
    }

    // Send Discord notification
    DiscordUtils.sendTournamentNotification(tournament, brutes);
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

  DiscordUtils.sendLog(`${tournamentsToCreate} daily tournaments created`);
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

  // Set tournament as valid
  await ServerState.setGlobalTournamentValid(prisma, true);

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

  DiscordUtils.sendLog(`Total brutes: ${brutes.length}`);

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
          generatedFight = await generateFight(
            prisma,
            brute1,
            brute2,
            false,
            true,
            roundBrutes.length === 2,
          );
        } catch (error) {
          DiscordUtils.sendLog(`Error while generating a tournament fight between ${brute1.name} and ${brute2.name}, retrying...`);
          DiscordUtils.sendError(error);
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
        select: { id: true },
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

  // Add 150 Gold to the winner user
  await prisma.tournamentEarning.create({
    data: {
      bruteId: roundBrutes[0].id,
      date: today.toDate(),
      points: 150,
    },
    select: { id: true },
  });

  // Update tournament with rounds
  await prisma.tournament.update({
    where: { id: tournament.id },
    data: { rounds: round - 1 },
    select: { id: true },
  });

  DiscordUtils.sendLog('Global tournament created');
};

const handleXpGains = async (prisma: PrismaClient) => {
  const now = moment.utc().valueOf();

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
        where: {
          xpDistributed: false,
        },
      },
    },
  });

  // Get all steps that have not been handled yet
  const steps = tournaments.flatMap((tournament) => tournament.steps);

  if (!steps.length) {
    return;
  }

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

    // +1 XP to the winner
    await prisma.brute.update({
      where: { id: winnerFighter.id },
      data: { xp: { increment: 1 } },
      select: { id: true },
    });

    xpGains[step.fight.winner] = {
      bruteId: winnerFighter.id,
      xp: (xpGains[step.fight.winner]?.xp || 0) + 1,
    };

    // Update step
    await prisma.tournamentStep.update({
      where: { id: step.id },
      data: { xpDistributed: true },
      select: { id: true },
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
      select: { id: true },
    });
  }

  DiscordUtils.sendLog(`${moment.utc().valueOf() - now}ms to handle ${Object.keys(xpGains).length} xp gains`);
};

const handleTournamentEarnings = async (prisma: PrismaClient) => {
  const now = moment.utc().valueOf();

  const earnings = await prisma.tournamentEarning.findMany({
    where: {
      date: {
        lte: moment.utc().subtract(1, 'day').endOf('day').toDate(),
      },
    },
    include: {
      brute: {
        select: {
          id: true,
          userId: true,
        },
      },
    },
  });

  if (!earnings.length) {
    return;
  }

  for (const earning of earnings) {
    if (earning.points && earning.brute.userId) {
      // Add Gold to the user
      await prisma.user.update({
        where: { id: earning.brute.userId },
        data: { gold: { increment: earning.points } },
        select: { id: true },
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
        select: { id: true, count: true },
      });

      if (existingAchievement) {
        // Only update max damage if it's higher
        if (earning.achievement === AchievementName.maxDamage) {
          if ((existingAchievement.count || 0) < earning.achievementCount) {
            await prisma.achievement.update({
              where: {
                id: existingAchievement.id,
              },
              data: {
                count: earning.achievementCount,
              },
              select: { id: true },
            });
          }
        } else {
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
            select: { id: true },
          });
        }
      } else {
        // Create new achievement
        await prisma.achievement.create({
          data: {
            name: earning.achievement,
            count: earning.achievementCount,
            userId: earning.brute.userId,
            bruteId: earning.brute.id,
          },
          select: { id: true },
        });
      }
    }

    // Delete earning
    await prisma.tournamentEarning.delete({
      where: { id: earning.id },
    });
  }

  DiscordUtils.sendLog(`${moment.utc().valueOf() - now}ms to handle ${earnings.length} tournament earnings`);
};

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
    let start = new Date();
    // Update server state to hold traffic
    await ServerState.setReady(prisma, false);
    console.log(`Server state updated in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Handle daily tournaments
    await handleDailyTournaments(prisma);
    console.log(`Daily tournaments handled in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Handle global tournament
    await handleGlobalTournament(prisma);
    console.log(`Global tournament handled in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Update server state to release traffic
    await ServerState.setReady(prisma, true);
    console.log(`Server state updated in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Grant beta achievement to all brutes who don't have it yet
    await grantBetaAchievement(prisma);
    console.log(`Beta achievement granted in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Grant bug achievements to all admins who don't have it yet
    await grantBugAchievement(prisma);
    console.log(`Bug achievement granted in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Generate missing body and colors
    await generateMissingBodyColors(prisma);
    console.log(`Missing body and colors generated in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Handle XP won the previous day
    await handleXpGains(prisma);
    console.log(`XP gains handled in ${new Date().getTime() - start.getTime()}ms`);

    start = new Date();
    // Handle tournament earnings from the previous day
    await handleTournamentEarnings(prisma);
    console.log(`Tournament earnings handled in ${new Date().getTime() - start.getTime()}ms`);
  } catch (error) {
    DiscordUtils.sendError(error);
    // Delete misformatted tournaments
    await deleteMisformattedTournaments(prisma);

    // Update server state to release traffic
    await ServerState.setReady(prisma, true);
  }
};

export default dailyJob;