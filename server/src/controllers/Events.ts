import {
  EventGetResponse, EventListResponse, ExpectedError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Events = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<EventListResponse>,
  ) => {
    try {
      if (!req.query.page || Number.isNaN(+req.query.page)) {
        throw new ExpectedError(translate('invalidParameters'));
      }

      // Get events
      const events = await prisma.event.findMany({
        orderBy: { date: 'desc' },
        take: 7,
        skip: +req.query.page * 7,
        include: {
          winner: {
            select: { name: true },
          },
        },
      });

      res.status(200).send(events);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ bruteId: string; id?: string }>,
    res: Response<EventGetResponse>,
  ) => {
    try {
      let { id } = req.params;

      if (!id) {
        // Get last event
        const lastEvent = await prisma.event.findFirst({
          orderBy: { date: 'desc' },
          select: { id: true },
        });

        if (!lastEvent) {
          throw new ExpectedError(translate('eventNotFound'));
        }

        id = lastEvent.id;
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: { id: req.params.bruteId },
        select: { id: true, eventId: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound'));
      }

      // Get event
      const event = await prisma.event.findFirst({
        where: { id },
        include: {
          winner: {
            select: { name: true },
          },
          tournament: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!event || !event.tournament) {
        throw new ExpectedError(translate('eventNotFound'));
      }

      // Get brute fights
      const fights = brute.eventId === event.id ? await prisma.fight.findMany({
        where: {
          tournamentId: event.tournament.id,
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
      }) : [];

      // Get last rounds
      const lastRounds = await prisma.fight.findMany({
        where: {
          tournamentId: event.tournament.id,
          tournamentStep: {
            gte: event.maxRound - 2,
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

      res.status(200).send({
        event,
        fights,
        lastRounds,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Events;
