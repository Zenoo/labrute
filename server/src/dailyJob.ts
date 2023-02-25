/* eslint-disable no-console */
import {
  BruteWithBodyColors, getRandomBody, getRandomColors, pad,
} from '@labrute/core';
import { PrismaClient, TournamentType } from '@labrute/prisma';
import moment from 'moment';
import { Worker } from 'worker_threads';
import DiscordUtils from './utils/DiscordUtils.js';
import generateFight from './utils/fight/generateFight.js';
import shuffle from './utils/shuffle.js';

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
    // eslint-disable-next-line no-await-in-loop
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

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
    // Generate missing body and colors
    await generateMissingBodyColors(prisma);

    // Generate missing spritesheets
    await generateMissingSpritesheets(prisma);

    const today = moment.utc().startOf('day');
    const tomorrow = moment.utc(today).add(1, 'day');

    console.log('-------------------------------');
    console.log('- Starting tournament handler -');

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
      console.log('- Tournaments already handled -');
      console.log('-------------------------------');
      return;
    }

    // Shuffle brutes
    const shuffledBrutes = shuffle(registeredBrutes);

    const tournamentsToCreate = Math.ceil(shuffledBrutes.length / 64);

    console.log(`-  Tournaments to create: ${pad(tournamentsToCreate, 3, ' ')} -`);

    // Create groups of 64 brutes
    let tournaments: BruteWithBodyColors[][] = Array(tournamentsToCreate)
      .fill([])
      .map((_, index) => shuffledBrutes.slice(index * 64, index * 64 + 64));

    // Fill last group with generated brutes
    if (tournaments.length && tournaments[tournaments.length - 1].length) {
      const lastTournament = tournaments[tournaments.length - 1];
      const brutesInLastTournament = lastTournament.length;

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

        console.log(`-     Brutes canceled: ${pad(brutesInLastTournament, 3, ' ')}    -`);
      }
    }

    // Remove empty tournaments and shuffle each tournament
    tournaments = tournaments.filter(Boolean).map((tournament) => shuffle(tournament));

    // Create tournaments
    for (const brutes of tournaments) {
      // Create tournament
      // eslint-disable-next-line no-await-in-loop
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
      while (roundBrutes.length > 1) {
        for (let i = 0; i < roundBrutes.length - 1; i += 2) {
          const brute1 = roundBrutes[i];
          const brute2 = roundBrutes[i + 1];

          // eslint-disable-next-line no-await-in-loop
          const generatedFight = await generateFight(prisma, brute1, brute2);

          // Create fight
          // eslint-disable-next-line no-await-in-loop
          const fight = await prisma.fight.create({
            data: generatedFight,
            select: { id: true },
          });

          // Add winner to next round
          winners.push(brute1.name === generatedFight.winner ? brute1 : brute2);

          // Create tournament step
          // eslint-disable-next-line no-await-in-loop
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

      // Send Discord notification
      // eslint-disable-next-line no-await-in-loop
      await DiscordUtils.sentTournamentNotification(tournament, brutes);

      console.log('-              OK             -');
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

    console.log('-     Tournaments handled     -');
    console.log('-------------------------------');

    // TODO: Handle big tourney
  } catch (error) {
    DiscordUtils.sendLog(error).catch(console.error);
    // Delete misformatted tournaments
    await deleteMisformattedTournaments(prisma);
  }
};

export default dailyJob;