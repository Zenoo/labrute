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
          deleted: false,
          user: {
            id: user.id,
          },
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      const tomorrow = moment.utc().add(1, 'day').startOf('day').toDate();

      // Update brute tournament date
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          tournament: tomorrow,
        },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Tournaments;
