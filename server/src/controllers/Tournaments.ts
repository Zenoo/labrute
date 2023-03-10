import { TournamentsGetGlobalResponse } from '@labrute/core';
import { PrismaClient, TournamentType } from '@labrute/prisma';
import { Request, Response } from 'express';
import moment from 'moment';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

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
        throw new Error('Tournament not found');
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
        throw new Error('Invalid parameters');
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          user: {
            id: user.id,
          },
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
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
        throw new Error('Invalid parameters');
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          user: {
            id: user.id,
          },
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
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
        throw new Error('Tournament not found');
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
        throw new Error('Invalid parameters');
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          user: {
            id: user.id,
          },
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
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
    try {
      if (!req.params.name || !req.params.date) {
        throw new Error('Invalid parameters');
      }

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
        throw new Error('Brute not found');
      }

      // Get tournament
      const tournament = await prisma.tournament.findFirst({
        where: {
          date: { equals: moment.utc(req.params.date, 'YYYY-MM-DD').toDate() },
          type: TournamentType.GLOBAL,
          participants: {
            some: {
              name: req.params.name,
              deletedAt: null,
            },
          },
        },
      });

      if (!tournament) {
        throw new Error('Tournament not found');
      }

      const now = moment.utc();
      const hour = now.hour();

      // Get brute steps (round 1 at 11h, round 2 at 12h, etc...)
      const steps = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: { lte: hour - 10 },
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
      });

      // Get max step
      const maxStep = (await prisma.tournamentStep.findFirstOrThrow({
        where: {
          tournamentId: tournament.id,
        },
        orderBy: {
          step: 'desc',
        },
      })).step;

      // Get last rounds
      const lastRounds = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: {
            gte: maxStep - 2,
            lte: hour - 10,
          },
        },
        orderBy: {
          step: 'asc',
        },
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
      });

      // Check if current time has reached the end of the tournament
      const tournamentEnded = hour >= 10 + maxStep;

      res.send({
        tournament: {
          ...tournament,
          steps,
        },
        lastRounds,
        done: tournamentEnded,
        rounds: maxStep,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Tournaments;
