import {
  EventGetResponse, EventGetRoundResponse, EventListCurrentResponse,
  EventListResponse, ExpectedError,
  isUuid,
  NotFoundError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { sendError } from '../utils/sendError.js';
import { translate } from '../utils/translate.js';
import { traced } from '../utils/trace.js';

export const Events = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<EventListResponse>,
  ) => {
    try {
      const { page } = req.query;
      if (!page || Number.isNaN(+page)) {
        throw new ExpectedError(translate('invalidParameters'));
      }

      // Get events
      const events = await traced('events.list.findEvents', () => prisma.event.findMany({
        orderBy: { date: 'desc' },
        take: 7,
        skip: (+page - 1) * 7,
        include: {
          winner: {
            select: { name: true },
          },
        },
      }));

      res.status(200).send(events);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ bruteId: string; id: string }>,
    res: Response<EventGetResponse>,
  ) => {
    try {
      const { id } = req.params;

      if (!isUuid(id)) {
        throw new ExpectedError(translate('invalidParameters'));
      }

      // Get brute
      const brute = await traced('events.get.findBrute', () => prisma.brute.findFirst({
        where: { id: req.params.bruteId },
        select: { id: true, eventId: true },
      }));

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound'));
      }

      // Get event
      const event = await traced('events.get.findEvent', () => prisma.event.findFirst({
        where: { id },
        include: {
          winner: {
            select: { name: true },
          },
          tournament: {
            select: {
              id: true,
              rounds: true,
            },
          },
        },
      }));

      if (!event) {
        throw new NotFoundError(translate('eventNotFound'));
      }

      // Get brute count
      const bruteCount = await traced('events.get.countBrutes', () => prisma.brute.count({
        where: { eventId: event.id },
      }));

      // Get brute fights
      const eventTournament = event.tournament;
      const fights = (brute.eventId === event.id && eventTournament)
        ? await traced('events.get.findFights', () => prisma.fight.findMany({
          where: {
            tournamentId: eventTournament.id,
            tournamentStep: {
              lt: event.maxRound - 2,
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
            winnerId: true,
            fighters: true,
            brute1Id: true,
            brute2Id: true,
          },
        }))
        : [];

      // Get last rounds
      const lastRounds = eventTournament ? await traced('events.get.findLastRounds', () => prisma.fight.findMany({
        where: {
          tournamentId: eventTournament.id,
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
          winnerId: true,
          fighters: true,
          brute1Id: true,
          brute2Id: true,
        },
      })) : [];

      res.status(200).send({
        event,
        fights,
        lastRounds,
        participants: bruteCount,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  listCurrent: (prisma: PrismaClient) => async (
    _req: Request,
    res: Response<EventListCurrentResponse>,
  ) => {
    try {
      // Get events
      const events = await traced('events.listCurrent.findEvents', () => prisma.event.findMany({
        where: { finishedAt: null },
        orderBy: { date: 'asc' },
        include: {
          tournament: {
            select: { rounds: true },
          },
        },
      }));

      // Get brute count for each event
      const bruteCount = await traced('events.listCurrent.countBrutes', () => prisma.brute.groupBy({
        by: ['eventId'],
        where: { eventId: { in: events.map((event) => event.id) } },
        _count: { id: true },
      }));

      res.status(200).send(events.map((event) => ({
        ...event,
        bruteCount: bruteCount.find((count) => count.eventId === event.id)?._count.id || 0,
      })));
    } catch (error) {
      sendError(res, error);
    }
  },
  getRound: (prisma: PrismaClient) => async (
    req: Request<{ id: string, round: string }>,
    res: Response<EventGetRoundResponse>,
  ) => {
    try {
      const { id } = req.params;

      if (!isUuid(id) || Number.isNaN(+req.params.round)) {
        throw new ExpectedError(translate('invalidParameters'));
      }

      // Get event
      const event = await traced('events.getRound.findEvent', () => prisma.event.findFirst({
        where: { id },
        include: {
          tournament: {
            select: {
              fights: {
                where: {
                  tournamentStep: +req.params.round,
                },
                select: {
                  id: true,
                  fighters: true,
                  brute1: { select: { id: true, name: true } },
                  brute2: { select: { id: true, name: true } },
                },
              },
            },
          },
        },
      }));

      if (!event) {
        throw new NotFoundError(translate('eventNotFound'));
      }

      res.status(200).send(event);
    } catch (error) {
      sendError(res, error);
    }
  },
};
