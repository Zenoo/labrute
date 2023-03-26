import { ExpectedError, GLOBAL_TOURNAMENT_START_HOUR, TournamentsGetGlobalResponse } from '@labrute/core';
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

      // Prevent if brute can rank up
      if (brute.canRankUp) {
        throw new ExpectedError('Rank up before participating in a tournament');
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
        throw new ExpectedError('Tournament not found');
      }

      const now = moment.utc();
      const hour = now.hour();

      // Get max step
      const maxStep = (await prisma.tournamentStep.findFirstOrThrow({
        where: {
          tournamentId: tournament.id,
        },
        orderBy: {
          step: 'desc',
        },
      })).step;

      // Get brute steps (round 1 at 11h, round 2 at 12h, etc...)
      const steps = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: {
            lte: Math.min(hour - GLOBAL_TOURNAMENT_START_HOUR + 1, maxStep - 3),
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

      // Get last rounds
      const lastRounds = await prisma.tournamentStep.findMany({
        where: {
          tournamentId: tournament.id,
          step: {
            gte: maxStep - 2,
            lte: hour - GLOBAL_TOURNAMENT_START_HOUR + 1,
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
      const tournamentEnded = hour >= GLOBAL_TOURNAMENT_START_HOUR - 1 + maxStep;

      // Get next opponent if exists
      const nextFight = await prisma.tournamentStep.findFirst({
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

      res.send({
        tournament: {
          ...tournament,
          steps,
        },
        lastRounds,
        done: tournamentEnded,
        rounds: maxStep,
        nextOpponent: nextFight
          ? nextFight.fight.brute1.name === brute.name
            ? nextFight.fight.brute2.name
            : nextFight?.fight.brute1.name
          : null,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteDaily: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError('Unauthorized');
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
        throw new ExpectedError('Unauthorized');
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
};

export default Tournaments;
