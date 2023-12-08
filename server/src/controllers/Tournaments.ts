import {
  ExpectedError, GLOBAL_TOURNAMENT_START_HOUR,
  TournamentHistoryResponse, TournamentsGetGlobalResponse,
} from '@labrute/core';
import { PrismaClient, TournamentType } from '@labrute/prisma';
import { Request, Response } from 'express';
import moment from 'moment';
import ServerState from '../utils/ServerState.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';
import { LOGGER } from '../context.js';

const Tournaments = {
  getDaily: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name || !req.params.date) {
        throw new Error('Invalid parameters');
      }

      // Get tournament
      const tournament = await prisma.tournament.findFirst({
        where: {
          date: { equals: moment.utc(req.params.date, 'YYYY-MM-DD').toDate() },
          type: TournamentType.DAILY,
          participants: {
            some: {
              name: req.params.name,
            },
          },
        },
        include: {
          steps: {
            include: {
              fight: {
                include: {
                  brute1: {
                    include: {
                      body: true,
                      colors: true,
                    },
                  },
                  brute2: {
                    include: {
                      body: true,
                      colors: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!tournament) {
        throw new ExpectedError('Tournament not found');
      }

      res.send(tournament);
    } catch (error) {
      sendError(res, error);
    }
  },
  registerDaily: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = user.brutes.find((b) => b.name === req.params.name);

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Prevent if brute can rank up
      if (brute.canRankUpSince) {
        throw new ExpectedError(translate('rankUpBeforeTournament', user));
      }

      // Update brute tournament date
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          registeredForTournament: true,
          nextTournamentDate: moment.utc().startOf('day').add(1, 'day').toDate(),
        },
        select: { id: true },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  updateStepWatched: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = user.brutes.find((b) => b.name === req.params.name);

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const tournament = await prisma.tournament.findFirst({
        where: {
          type: TournamentType.DAILY,
          date: moment.utc().startOf('day').toDate(),
          participants: {
            some: {
              name: req.params.name,
            },
          },
        },
        include: { steps: { include: { fight: true } } },
      });

      if (!tournament) {
        throw new ExpectedError(translate('tournamentNotFound', user));
      }

      const steps = [0, 32, 48, 56, 60, 63];

      const stepWatched = !brute.currentTournamentDate || moment.utc(brute.currentTournamentDate).isBefore(moment.utc().startOf('day'))
        ? 0
        : brute.currentTournamentStepWatched || 0;

      // If brute was eliminated, set tournament as fully watched
      if (!tournament.steps
        .find((step) => step.step >= steps[stepWatched + 1]
          && (step.fight.brute1Id === brute.id || step.fight.brute2Id === brute.id))) {
        await prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            currentTournamentDate: moment.utc().toDate(),
            currentTournamentStepWatched: 6,
          },
          select: { id: true },
        });
        // First watch of the day
      } else if (!brute.currentTournamentDate || moment.utc(brute.currentTournamentDate).isBefore(moment.utc().startOf('day'))) {
        await prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            currentTournamentDate: moment.utc().toDate(),
            currentTournamentStepWatched: 1,
          },
          select: { id: true },
        });
      } else {
        // Update brute watched tournament step
        await prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            currentTournamentStepWatched: { increment: 1 },
          },
          select: { id: true },
        });
      }

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  setDailyWatched: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = user.brutes.find((b) => b.name === req.params.name);

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Update brute tournament date
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          currentTournamentDate: moment.utc().toDate(),
          currentTournamentStepWatched: 6,
        },
        select: { id: true },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  getGlobal: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<TournamentsGetGlobalResponse>,
  ) => {
    const start = new Date();
    try {
      if (!req.params.name || !req.params.date) {
        throw new Error('Invalid parameters');
      }

      const date = moment.utc(req.params.date, 'YYYY-MM-DD');

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      // Get tournament
      const tournament = await prisma.tournament.findFirst({
        where: {
          date: { equals: date.toDate() },
          type: TournamentType.GLOBAL,
          participants: {
            some: {
              name: req.params.name,
              deletedAt: null,
            },
          },
        },
        select: {
          id: true,
          rounds: true,
        },
      });

      if (!tournament) {
        throw new ExpectedError('Tournament not found');
      }

      const now = moment.utc();
      const hour = now.hour();

      // Get brute steps (round 1 at 11h, round 2 at 12h, etc...)
      const steps = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: {
            // Only limit if same day
            lte: now.isSame(date, 'day') ? hour - GLOBAL_TOURNAMENT_START_HOUR + 1 : undefined,
          },
          fight: {
            OR: [
              { brute1Id: brute.id },
              { brute2Id: brute.id },
            ],
          },
        },
        orderBy: {
          step: 'asc',
        },
        select: {
          id: true,
          step: true,
          fightId: true,
          fight: {
            select: {
              winner: true,
              fighters: true,
              brute1: {
                select: {
                  name: true,
                  hp: true,
                  level: true,
                  strengthValue: true,
                  agilityValue: true,
                  speedValue: true,
                  gender: true,
                  body: true,
                  colors: true,
                },
              },
              brute2: {
                select: {
                  name: true,
                  hp: true,
                  level: true,
                  strengthValue: true,
                  agilityValue: true,
                  speedValue: true,
                  gender: true,
                  body: true,
                  colors: true,
                },
              },
            },
          },
        },
      });

      // Get last rounds
      const lastRounds = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: {
            gte: tournament.rounds - 2,
            // Only limit if same day
            lte: now.isSame(date, 'day') ? hour - GLOBAL_TOURNAMENT_START_HOUR + 1 : undefined,
          },
        },
        orderBy: {
          step: 'asc',
        },
        select: {
          id: true,
          step: true,
          fightId: true,
          fight: {
            select: {
              winner: true,
              fighters: true,
              brute1: {
                select: {
                  name: true,
                  hp: true,
                  level: true,
                  strengthValue: true,
                  agilityValue: true,
                  speedValue: true,
                  gender: true,
                  body: true,
                  colors: true,
                },
              },
              brute2: {
                select: {
                  name: true,
                  hp: true,
                  level: true,
                  strengthValue: true,
                  agilityValue: true,
                  speedValue: true,
                  gender: true,
                  body: true,
                  colors: true,
                },
              },
            },
          },
        },
      });

      // Check if current time has reached the end of the tournament
      const tournamentEnded = !now.isSame(date, 'day')
        || hour >= GLOBAL_TOURNAMENT_START_HOUR - 1 + tournament.rounds;

      // Get next opponent if exists
      let nextFight;
      if (!tournamentEnded) {
        nextFight = await prisma.tournamentStep.findFirst({
          where: {
            tournamentId: tournament.id,
            step: hour - GLOBAL_TOURNAMENT_START_HOUR + 2,
            fight: {
              OR: [
                { brute1Id: brute.id },
                { brute2Id: brute.id },
              ],
            },
          },
          include: {
            fight: {
              include: {
                brute1: {
                  select: { name: true },
                },
                brute2: {
                  select: { name: true },
                },
              },
            },
          },
        });
      }

      res.send({
        tournament: {
          ...tournament,
          steps,
        },
        lastRounds,
        done: tournamentEnded,
        nextOpponent: nextFight
          ? nextFight.fight.brute1.name === brute.name
            ? nextFight.fight.brute2?.name || ''
            : nextFight?.fight.brute1.name
          : null,
      });
    } catch (error) {
      sendError(res, error);
    }

    LOGGER.info(`Tournaments.getGlobal: ${new Date().getTime() - start.getTime()}ms`);
  },
  deleteDaily: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Get tournament step ids
      const tournamentSteps = await prisma.tournamentStep.findMany({
        where: {
          tournament: {
            type: TournamentType.DAILY,
            date: {
              gte: moment.utc().startOf('day').toDate(),
              lte: moment.utc().endOf('day').toDate(),
            },
          },
        },
        select: {
          id: true,
        },
      });

      // Delete all daily tournaments steps
      await prisma.tournamentStep.deleteMany({
        where: {
          id: { in: tournamentSteps.map((ts) => ts.id) },
        },
      });

      // Delete all fights from daily tournaments steps
      await prisma.fight.deleteMany({
        where: {
          TournamentStep: {
            some: { id: { in: tournamentSteps.map((ts) => ts.id) } },
          },
        },
      });

      // Delete all daily tournaments
      await prisma.tournament.deleteMany({
        where: {
          type: TournamentType.DAILY,
          date: {
            gte: moment.utc().startOf('day').toDate(),
            lte: moment.utc().endOf('day').toDate(),
          },
        },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteGlobal: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Get tournament step ids
      const tournamentSteps = await prisma.tournamentStep.findMany({
        where: {
          tournament: {
            type: TournamentType.GLOBAL,
            date: {
              gte: moment.utc().startOf('day').toDate(),
              lte: moment.utc().endOf('day').toDate(),
            },
          },
        },
        select: {
          id: true,
        },
      });

      // Delete all global tournaments steps
      await prisma.tournamentStep.deleteMany({
        where: {
          id: { in: tournamentSteps.map((ts) => ts.id) },
        },
      });

      // Delete all fights from global tournaments steps
      await prisma.fight.deleteMany({
        where: {
          TournamentStep: {
            some: { id: { in: tournamentSteps.map((ts) => ts.id) } },
          },
        },
      });

      // Delete global tournament
      await prisma.tournament.deleteMany({
        where: {
          type: TournamentType.GLOBAL,
          date: {
            gte: moment.utc().startOf('day').toDate(),
            lte: moment.utc().endOf('day').toDate(),
          },
        },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  getHistory: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<TournamentHistoryResponse>,
  ) => {
    try {
      if (!req.params.name) {
        throw new ExpectedError('Invalid parameters');
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
        select: { id: true, name: true },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      const tournaments = await prisma.tournament.findMany({
        where: {
          participants: {
            some: {
              id: brute.id,
            },
          },
        },
        select: {
          id: true,
          date: true,
          type: true,
          rounds: true,
          steps: {
            where: {
              fight: {
                AND: [
                  { OR: [{ brute1Id: brute.id }, { brute2Id: brute.id }] },
                  { loser: brute.name },
                ],
              },
            },
            select: { step: true },
          },
        },
        orderBy: {
          date: 'desc',
        },
        take: 100,
      });

      // Remove step for today's global tournament
      const today = moment.utc().startOf('day');
      const todayTournament = tournaments.find((t) => moment.utc(t.date).isSame(today, 'day') && t.type === TournamentType.GLOBAL);

      if (todayTournament) {
        todayTournament.steps = [];
      }

      res.send(tournaments);
    } catch (error) {
      sendError(res, error);
    }
  },
  isGlobalTournamentValid: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const isValid = await ServerState.isGlobalTournamentValid(prisma);

      res.send({ isValid });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Tournaments;
