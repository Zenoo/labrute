import { isUuid, NotFoundError } from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { auth } from '../utils/auth.js';
import { sendError } from '../utils/sendError.js';
import { traced } from '../utils/trace.js';
import { adminGridQuery } from '../utils/adminGridQuery.js';

const pageSize = 20;

const contains = (value: string) => ({
  contains: value.replace(/[\\%_]/g, (character) => `\\${character}`),
  mode: 'insensitive' as const,
});

const nameOrId = (search: string, identifier = search) => {
  if (!search) {
    return undefined;
  }

  if (isUuid(identifier)) {
    return [{ id: identifier.toLowerCase() }, { name: contains(search) }];
  }

  return [{ name: contains(search) }];
};

const getRows = (
  prisma: PrismaClient, collection: string, search: string, skip: number, rawGrid: unknown,
) => {
  const page = {
    skip,
    take: pageSize + 1,
  };

  const userId = search.replace(/^USER-(?=[a-f0-9-]{36}$)/i, '');
  const userSearch = nameOrId(search, userId);

  switch (collection) {
    case 'users': {
      const grid = adminGridQuery(rawGrid, {
        id: 'userId',
        name: 'text',
        lastSeen: 'date',
        bannedAt: 'nullableDate',
      });

      return traced('adminLists.users.findPage', () => prisma.user.findMany({
        ...page,
        where: {
          AND: { OR: userSearch },
          ...grid.where,
        },
        orderBy: grid.orderBy ?? [{ lastSeen: 'desc' }, { id: 'desc' }],
        select: {
          id: true,
          name: true,
          bannedAt: true,
          lastSeen: true,
        },
      }));
    }

    case 'banned-users': {
      const grid = adminGridQuery(rawGrid, {
        id: 'userId',
        name: 'text',
        bannedAt: 'date',
        banReason: 'nullableText',
      });

      const where: Prisma.UserWhereInput = {
        bannedAt: { not: null },
        OR: userSearch && [...userSearch, { banReason: contains(search) }],
        AND: grid.where,
      };

      return traced('adminLists.bannedUsers.findPage', () => prisma.user.findMany({
        ...page,
        where,
        orderBy: grid.orderBy ?? [{ bannedAt: 'desc' }, { id: 'desc' }],
        select: {
          id: true,
          name: true,
          bannedAt: true,
          banReason: true,
        },
      }));
    }

    case 'brutes': {
      const grid = adminGridQuery(rawGrid, {
        id: 'id',
        name: 'text',
        level: 'number',
        deletedAt: 'nullableDate',
      });

      return traced('adminLists.brutes.findPage', () => prisma.brute.findMany({
        ...page,
        where: {
          AND: { OR: nameOrId(search) },
          ...grid.where,
        },
        orderBy: grid.orderBy ?? { id: 'asc' },
        select: {
          id: true,
          name: true,
          level: true,
          deletedAt: true,
        },
      }));
    }

    case 'clans': {
      const grid = adminGridQuery(rawGrid, {
        id: 'id',
        name: 'text',
        points: 'number',
        deletedAt: 'nullableDate',
      });

      return traced('adminLists.clans.findPage', () => prisma.clan.findMany({
        ...page,
        where: {
          AND: { OR: nameOrId(search) },
          ...grid.where,
        },
        orderBy: grid.orderBy ?? { id: 'asc' },
        select: {
          id: true,
          name: true,
          points: true,
          deletedAt: true,
        },
      }));
    }

    case 'banned-words': {
      const grid = adminGridQuery(rawGrid, { word: 'text' });

      return traced('adminLists.bannedWords.findPage', () => prisma.bannedWord.findMany({
        ...page,
        where: {
          word: search ? contains(search) : undefined,
          AND: grid.where,
        },
        orderBy: grid.orderBy ?? [{ word: 'asc' }, { id: 'asc' }],
        select: {
          id: true,
          word: true,
        },
      }));
    }

    default: {
      throw new NotFoundError('Unknown admin collection');
    }
  }
};

export const listAdminRows = (prisma: PrismaClient) => async (
  req: Request<{ collection: string }>,
  res: Response,
) => {
  try {
    await auth(prisma, req, { admin: true });

    const { page = '0', search = '' } = req.query;

    if (typeof page !== 'string' || !/^\d{1,9}$/.test(page)
      || typeof search !== 'string' || search.length > 255 || search.includes('\0')) {
      res.status(400).send({ message: 'Invalid admin list filters' });

      return;
    }

    const skip = Number(page) * pageSize;

    if (skip >= 2 ** 31) {
      res.status(400).send({ message: 'Invalid admin list page' });

      return;
    }

    const rows = await getRows(prisma, req.params.collection, search.trim(), skip, req.query.grid);

    res.set('Cache-Control', 'private, no-store').send({
      rows: rows.slice(0, pageSize),
      hasNext: rows.length > pageSize,
    });
  } catch (error) {
    sendError(res, error);
  }
};
