import {
  ExpectedError, ForbiddenError, GLOBAL_TOURNAMENT_START_HOUR,
  NotFoundError,
  TournamentHistoryResponse, TournamentsGetDailyResponse, TournamentsGetGlobalResponse,
  TournamentsUpdateStepWatchedResponse,
  TournementsUpdateGlobalRoundWatchedResponse,
} from '@labrute/core';
import {
  PrismaClient,
  TournamentType,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import ServerState from '../utils/ServerState.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';
import { ilike } from '../utils/ilike.js';

const Tournaments = {
  getDaily: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<TournamentsGetDailyResponse>,
  ) => {
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
              name: ilike(req.params.name),
            },
          },
        },
        include: {
          fights: {
            select: {
              id: true,
              brute1: true,
              brute2: true,
              winner: true,
              loser: true,
              tournamentStep: true,
              fighters: true,
            },
          },
        },
      });

      if (!tournament) {
        throw new NotFoundError('Tournament not found');
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
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          eventId: null,
          userId: user.id,
        },
        select: {
          id: true,
          canRankUpSince: true,
        },
      });

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
      }

      // Prevent if brute can rank up
      if (brute.canRankUpSince) {
        throw new ForbiddenError(translate('rankUpBeforeTournament', user));
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
    res: Response<TournamentsUpdateStepWatchedResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
          currentTournamentDate: true,
          currentTournamentStepWatched: true,
        },
      });

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
      }

      const tournament = await prisma.tournament.findFirst({
        where: {
          type: TournamentType.DAILY,
          date: moment.utc().startOf('day').toDate(),
          participants: {
            some: {
              name: ilike(req.params.name),
            },
          },
        },
        select: {
          fights: {
            select: {
              tournamentStep: true,
              brute1Id: true,
              brute2Id: true,
            },
          },
        },
      });

      if (!tournament) {
        throw new NotFoundError(translate('tournamentNotFound', user));
      }

      const steps = [0, 32, 48, 56, 60, 63];

      const stepWatched = !brute.currentTournamentDate || moment.utc(brute.currentTournamentDate).isBefore(moment.utc().startOf('day'))
        ? 0
        : brute.currentTournamentStepWatched || 0;
      let newStepWatched = stepWatched;

      // If brute was eliminated, set tournament as fully watched
      if (!tournament.fights
        .find((fight) => fight.tournamentStep >= (steps[stepWatched + 1] || 63)
          && (fight?.brute1Id === brute.id || fight.brute2Id === brute.id))) {
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

        newStepWatched = 6;
      } else if (!brute.currentTournamentDate || moment.utc(brute.currentTournamentDate).isBefore(moment.utc().startOf('day'))) {
        // First watch of the day
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

        newStepWatched = 1;
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

      newStepWatched = stepWatched + 1;

      res.send({
        step: newStepWatched,
      });
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
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
          currentTournamentDate: true,
        },
      });

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
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
    try {
      if (!req.params.name || !req.params.date) {
        throw new Error('Invalid parameters');
      }

      const date = moment.utc(req.params.date, 'YYYY-MM-DD');

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
        },
      });

      if (!brute) {
        throw new NotFoundError('Brute not found');
      }

      // Get tournament
      const tournament = await prisma.tournament.findFirst({
        where: {
          date: { equals: date.toDate() },
          type: TournamentType.GLOBAL,
          participants: {
            some: {
              name: ilike(req.params.name),
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
        res.send({
          tournament: null,
          done: true,
          lastRounds: [],
          nextOpponent: null,
        });
        return;
      }

      const now = moment.utc();
      const hour = now.hour();

      // Get brute fights (round 1 at 11h, round 2 at 12h, etc...)
      const fights = await prisma.fight.findMany({
        where: {
          tournamentId: tournament.id,
          tournamentStep: {
            // Only limit if same day
            lte: now.isSame(date, 'day') ? hour - GLOBAL_TOURNAMENT_START_HOUR + 1 : undefined,
          },
          OR: [
            { brute1Id: brute.id },
            { brute2Id: brute.id },
          ],
        },
        orderBy: {
          tournamentStep: 'asc',
        },
        select: {
          id: true,
          tournamentStep: true,
          winner: true,
          fighters: true,
          brute1Id: true,
          brute2Id: true,
        },
      });

      // Get last rounds
      const lastRounds = await prisma.fight.findMany({
        where: {
          tournamentId: tournament.id,
          tournamentStep: {
            gte: tournament.rounds - 2,
            // Only limit if same day
            lte: now.isSame(date, 'day') ? hour - GLOBAL_TOURNAMENT_START_HOUR + 1 : undefined,
          },
        },
        orderBy: {
          tournamentStep: 'asc',
        },
        select: {
          id: true,
          tournamentStep: true,
          winner: true,
          fighters: true,
          brute1Id: true,
          brute2Id: true,
        },
      });

      // Check if current time has reached the end of the tournament
      const tournamentEnded = !now.isSame(date, 'day')
        || hour >= GLOBAL_TOURNAMENT_START_HOUR - 1 + tournament.rounds;

      // Get next opponent if exists
      let nextFight;
      if (!tournamentEnded) {
        nextFight = await prisma.fight.findFirst({
          where: {
            tournamentId: tournament.id,
            tournamentStep: hour - GLOBAL_TOURNAMENT_START_HOUR + 2,
            OR: [
              { brute1Id: brute.id },
              { brute2Id: brute.id },
            ],
          },
          select: {
            tournamentStep: true,
            brute1: {
              select: { name: true },
            },
            brute2: {
              select: { name: true },
            },
          },
        });
      }

      res.send({
        tournament: {
          ...tournament,
          fights,
        },
        lastRounds,
        done: tournamentEnded,
        nextOpponent: nextFight
          ? nextFight.brute1?.name === brute.name
            ? nextFight.brute2?.name || ''
            : nextFight.brute1?.name
          : null,
        nextRound: nextFight?.tournamentStep,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteDaily: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req, { admin: true });

      // Get tournament IDs
      const tournaments = await prisma.tournament.findMany({
        where: {
          type: TournamentType.DAILY,
          date: {
            gte: moment.utc().startOf('day').toDate(),
            lte: moment.utc().endOf('day').toDate(),
          },
        },
        select: { id: true },
      });

      const tournamentIds = tournaments.map((t) => t.id);

      // Delete all fights from daily tournaments
      await prisma.fight.deleteMany({
        where: {
          tournamentId: { in: tournamentIds },
        },
      });

      // Delete all daily tournaments
      await prisma.tournament.deleteMany({
        where: {
          id: { in: tournamentIds },
        },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteGlobal: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req, { admin: true });

      // Get tournament ID
      const tournament = await prisma.tournament.findFirst({
        where: {
          type: TournamentType.GLOBAL,
          date: {
            gte: moment.utc().startOf('day').toDate(),
            lte: moment.utc().endOf('day').toDate(),
          },
        },
        select: { id: true },
      });

      if (!tournament) {
        throw new NotFoundError(translate('tournamentNotFound', user));
      }

      // Delete all fights from global tournament
      await prisma.fight.deleteMany({
        where: {
          tournamentId: tournament.id,
        },
      });

      // Delete global tournament
      await prisma.tournament.deleteMany({
        where: {
          id: tournament.id,
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
          name: ilike(req.params.name),
          deletedAt: null,
        },
        select: { id: true, name: true },
      });

      if (!brute) {
        throw new NotFoundError('Brute not found');
      }

      // Get the last 100 tournaments for this brute
      const tournaments = await prisma.tournament.findMany({
        where: {
          date: { lt: new Date() },
          type: { not: TournamentType.BATTLE_ROYALE },
          participants: {
            some: {
              id: brute.id,
            },
          },
        },
        orderBy: {
          date: 'desc',
        },
        take: 100,
        select: {
          id: true,
          date: true,
          type: true,
          rounds: true,
        },
      });

      // Initialize as last place
      const tournamentsWithPlace: (typeof tournaments[number] & {
        place: number;
      })[] = tournaments.map((tournament) => ({
        ...tournament,
        place: 2 ** tournament.rounds,
      }));

      // Get the count of fights won for the brute for each tournament
      const fightsWon = await prisma.fight.findMany({
        where: {
          tournamentId: {
            in: tournaments.map((t) => t.id),
          },
          OR: [
            { brute1Id: brute.id },
            { brute2Id: brute.id },
          ],
          winner: brute.name,
        },
        select: {
          tournamentId: true,
          tournamentStep: true,
        },
      });

      // Update the place for each tournament
      tournamentsWithPlace.forEach((tournament) => {
        const fights = fightsWon
          .filter((f) => f.tournamentId === tournament.id)
          .sort((a, b) => a.tournamentStep - b.tournamentStep);

        const firstFight = fights[0];
        if (firstFight) {
          // Take bye into account for global tournaments
          const fightsWithBye = tournament.type === TournamentType.GLOBAL
            ? firstFight.tournamentStep !== 1
              ? fights.length + 1
              : fights.length
            : fights.length;

          // eslint-disable-next-line no-param-reassign, no-underscore-dangle
          tournament.place = 2 ** (tournament.rounds - fightsWithBye);
        }
      });

      res.send(tournamentsWithPlace);
    } catch (error) {
      sendError(res, error);
    }
  },
  isGlobalTournamentValid: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      await auth(prisma, req, { admin: true });

      const isValid = await ServerState.isGlobalTournamentValid(prisma);

      res.send({ isValid });
    } catch (error) {
      sendError(res, error);
    }
  },
  updateGlobalRoundWatched: (prisma: PrismaClient) => async (
    req: Request<{ name: string, fight: string }>,
    res: Response<TournementsUpdateGlobalRoundWatchedResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
          globalTournamentRoundWatched: true,
          globalTournamentWatchedDate: true,
          name: true,
        },
      });

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: req.params.fight,
        },
        select: {
          loser: true,
          tournamentStep: true,
        },
      });

      if (!fight) {
        throw new NotFoundError(translate('fightNotFound', user));
      }

      const now = moment.utc();
      let roundWatched = fight.tournamentStep;

      // Skip to last round if brute lost
      if (fight.loser === brute.name) {
        roundWatched = 999;
      }

      // Update brute watched tournament step
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          globalTournamentRoundWatched: roundWatched,
          globalTournamentWatchedDate: now.toDate(),
        },
        select: { id: true },
      });

      res.send({
        globalTournamentRoundWatched: roundWatched,
        globalTournamentWatchedDate: now.toDate(),
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  skipWatchingGlobal: (prisma: PrismaClient) => async (
    req: Request<{ name: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
        },
      });

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
      }

      // Update brute watched tournament step
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          globalTournamentRoundWatched: 999,
          globalTournamentWatchedDate: new Date(),
        },
        select: { id: true },
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Tournaments;
