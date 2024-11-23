import {
  ClanChallengeBossResponse,
  ClanCreateResponse,
  ClanGetResponse, ClanGetThreadResponse,
  ClanGetThreadsResponse, ClanListResponse, ClanSort, ExpectedError, bosses, getFightsLeft,
  isUuid,
} from '@labrute/core';
import {
  BossName,
  Clan, ClanWarStatus, Prisma, PrismaClient,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import { DISCORD, LOGGER } from '../context.js';
import auth from '../utils/auth.js';
import updateClanPoints from '../utils/clan/updateClanPoints.js';
import generateFight from '../utils/fight/generateFight.js';
import { ilike } from '../utils/ilike.js';
import sendError from '../utils/sendError.js';
import ServerState from '../utils/ServerState.js';
import translate from '../utils/translate.js';

const Clans = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<ClanListResponse>,
  ) => {
    try {
      if (!req.query.page) {
        throw new ExpectedError('Missing page number');
      }

      const page = +req.query.page;
      if (page < 1) {
        throw new ExpectedError('Page number must be greater than 0');
      }

      const { search } = req.query;
      if (search && typeof search !== 'string') {
        throw new ExpectedError('Invalid search parameter');
      }

      const sort = req.query.sort ? +req.query.sort as ClanSort : ClanSort.points;

      let clans: (Clan & {
        'brutesId': string[],
        'masterName': string,
      })[] = [];

      if (search) {
        clans = await prisma.$queryRaw`
          SELECT c.*, array_agg(b.id) AS "brutesId", m.name AS "masterName"
          FROM "Clan" AS c
          LEFT JOIN "Brute" AS b ON c.id = b."clanId"
          LEFT JOIN "Brute" AS m ON c."masterId" = m.id
          WHERE c."deletedAt" IS NULL AND c.name ILIKE ${`%${search}%`}
          GROUP BY c.id, m.name
          ORDER BY ${Prisma.sql([sort === ClanSort.points ? 'points' : 'elo'])} DESC, c.name ASC
          OFFSET ${(page - 1) * 15}
          LIMIT 15;
        `;
      } else {
        clans = await prisma.$queryRaw`
          SELECT c.*, array_agg(b.id) AS "brutesId", m.name AS "masterName"
          FROM "Clan" AS c
          LEFT JOIN "Brute" AS b ON c.id = b."clanId"
          LEFT JOIN "Brute" AS m ON c."masterId" = m.id
          WHERE c."deletedAt" IS NULL
          GROUP BY c.id, m.name
          ORDER BY ${Prisma.sql([sort === ClanSort.points ? 'points' : 'elo'])} DESC, c.name ASC
          OFFSET ${(page - 1) * 15}
          LIMIT 15;
        `;
      }

      res.status(200).send(clans.map((clan) => ({
        id: clan.id,
        name: clan.name,
        deletedAt: clan.deletedAt,
        elo: clan.elo,
        limit: clan.limit,
        points: clan.points,
        boss: clan.boss,
        participateInClanWar: clan.participateInClanWar,
        damageOnBoss: clan.damageOnBoss,
        masterId: clan.masterId,
        master: {
          name: clan.masterName,
        },
        brutes: clan.brutesId.map((id: string) => ({ id })),
      })));
    } catch (error) {
      sendError(res, error);
    }
  },
  create: (prisma: PrismaClient) => async (
    req: Request<{ brute: string }>,
    res: Response<ClanCreateResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.brute || !req.query.name) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          eventId: null,
          userId: user.id,
        },
        select: {
          id: true,
          clanId: true,
          level: true,
          ranking: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is already in clan
      if (brute.clanId) {
        throw new ExpectedError(translate('alreadyInClan', user));
      }

      if (typeof req.query.name !== 'string') {
        throw new ExpectedError(translate('invalidClanName', user));
      }

      const clanName = req.query.name.trim();

      // Check for clan name length
      if (clanName.length < 3 || clanName.length > 50) {
        throw new ExpectedError(translate('clanNameLength', user));
      }

      // Check if clan name is available
      const clanExists = await prisma.clan.count({
        where: {
          deletedAt: null,
          name: ilike(clanName),
        },
      });

      if (clanExists) {
        throw new ExpectedError(translate('clanNameAlreadyTaken', user));
      }

      // Check name for banned words
      const banned: { count: bigint }[] = await prisma.$queryRaw`SELECT COUNT(*) FROM "BannedWord" WHERE ${clanName.toLowerCase()} LIKE CONCAT('%', word, '%')`;

      if (typeof banned?.[0]?.count !== 'bigint') {
        throw new Error('Error while checking banned words');
      }
      if (banned[0].count > 0) {
        throw new ExpectedError(translate('nameContainsBannedWord', user));
      }

      const clan = await prisma.clan.create({
        data: {
          name: clanName,
          master: { connect: { id: brute.id } },
          brutes: { connect: { id: brute.id } },
          boss: BossName.Cerberus,
        },
        select: { id: true, name: true },
      });

      // Update clan points
      await updateClanPoints(prisma, clan.id, 'add', brute);

      // Remove brute join request
      await prisma.brute.update({
        where: { id: brute.id },
        data: { wantToJoinClanId: null },
        select: { id: true },
      });

      res.status(200).send(clan);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response<ClanGetResponse>,
  ) => {
    try {
      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError('Missing clan id');
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        include: {
          master: {
            select: {
              id: true,
              gender: true,
              name: true,
              body: true,
              colors: true,
            },
          },
          brutes: {
            include: {
              user: {
                select: {
                  lastSeen: true,
                },
              },
            },
            orderBy: [
              { ranking: 'asc' },
              { level: 'desc' },
            ],
          },
          joinRequests: {
            include: {
              user: {
                select: {
                  lastSeen: true,
                },
              },
            },
            orderBy: [
              { ranking: 'asc' },
              { level: 'desc' },
            ],
          },
          bossDamages: {
            select: {
              brute: { select: { id: true, name: true } },
              damage: true,
            },
            orderBy: { damage: 'desc' },
          },
          attacks: {
            select: {
              id: true,
              status: true,
              type: true,
              defender: {
                select: {
                  id: true,
                  name: true,
                  master: {
                    select: {
                      id: true,
                      gender: true,
                      name: true,
                      body: true,
                      colors: true,
                    },
                  },
                },
              },
            },
            where: {
              status: {
                not: ClanWarStatus.finished,
              },
            },
          },
          defenses: {
            select: {
              id: true,
              status: true,
              type: true,
              attacker: {
                select: {
                  id: true,
                  name: true,
                  master: {
                    select: {
                      id: true,
                      gender: true,
                      name: true,
                      body: true,
                      colors: true,
                    },
                  },
                },
              },
            },
            where: {
              status: {
                not: ClanWarStatus.finished,
              },
            },
          },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound'));
      }

      // Reorder brutes to have the master first
      const masterIndex = clan.brutes.findIndex((b) => b.id === clan.masterId);

      if (masterIndex !== -1) {
        const [master] = clan.brutes.splice(masterIndex, 1);
        if (master) {
          clan.brutes.unshift(master);
        }
      }

      res.status(200).send(clan);
    } catch (error) {
      sendError(res, error);
    }
  },
  request: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          limit: true,
          brutes: { select: { id: true } },
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          eventId: null,
          userId: user.id,
        },
        select: { id: true, clanId: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is already in clan
      if (brute.clanId) {
        throw new ExpectedError(translate('alreadyInClan', user));
      }

      // Check if clan is full
      if (clan.brutes.length >= clan.limit) {
        throw new ExpectedError(translate('clanFull', user));
      }

      // Check if brute already sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (request) {
        throw new ExpectedError(translate('alreadyRequested', user));
      }

      // Create request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { connect: { id: brute.id } } },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  cancelRequest: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          limit: true,
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (!request) {
        throw new ExpectedError(translate('noRequestFound', user));
      }

      // Delete request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { disconnect: { id: brute.id } } },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  accept: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          limit: true,
          masterId: true,
          brutes: { select: { id: true } },
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const userBrutes = await prisma.brute.findMany({
        where: {
          userId: user.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Check if one of the user brutes is the clan master
      if (!userBrutes.some((b) => b.id === clan.masterId)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
        },
        select: {
          id: true,
          clanId: true,
          level: true,
          ranking: true,
        },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is already in clan
      if (brute.clanId) {
        throw new ExpectedError(translate('alreadyInClan', user));
      }

      // Check if clan is full
      if (clan.brutes.length >= clan.limit) {
        throw new ExpectedError(translate('clanFull', user));
      }

      // Check if brute sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (!request) {
        throw new ExpectedError(translate('noRequestFound', user));
      }

      // Update clan
      await prisma.clan.update({
        where: { id },
        data: {
          brutes: { connect: { id: brute.id } },
          joinRequests: { disconnect: { id: brute.id } },
        },
        select: { id: true },
      });

      // Update clan points
      await updateClanPoints(prisma, clan.id, 'add', brute);

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  reject: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          masterId: true,
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const userBrutes = await prisma.brute.findMany({
        where: {
          userId: user.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Check if one of the user brutes is the clan master
      if (!userBrutes.some((b) => b.id === clan.masterId)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          wantToJoinClanId: id,
        },
        select: { id: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Delete request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { disconnect: { id: brute.id } } },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  remove: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          masterId: true,
          brutes: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const userBrutes = await prisma.brute.findMany({
        where: {
          userId: user.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Check if one of the user brutes is the clan master
      if (!userBrutes.some((b) => b.id === clan.masterId)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
        },
        select: { id: true, level: true, ranking: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is in clan
      if (!clan.brutes.some((b) => b.id === brute.id)) {
        throw new ExpectedError(translate('bruteNotInClan', user));
      }

      // Update clan
      await prisma.clan.update({
        where: { id },
        data: {
          brutes: { disconnect: { id: brute.id } },
        },
        select: { id: true },
      });

      // Update clan points
      await updateClanPoints(prisma, clan.id, 'remove', brute);

      // Get current clan war
      const currentWar = await prisma.clanWar.findFirst({
        where: {
          OR: [
            { attackerId: id },
            { defenderId: id },
          ],
          status: ClanWarStatus.ongoing,
        },
        select: { id: true, fights: { select: { id: true } } },
      });

      if (currentWar) {
        const day = currentWar.fights.length + 1;

        // Get fighters for the current day
        const fighters = await prisma.clanWarFighters.findFirst({
          where: {
            clanWarId: currentWar.id,
            day,
            OR: [
              { attackers: { some: { id: brute.id } } },
              { defenders: { some: { id: brute.id } } },
            ],
          },
          select: {
            attackers: { select: { id: true } },
            defenders: { select: { id: true } },
          },
        });

        if (fighters) {
          // Remove brute from war current fighters

          if (fighters.attackers.some((b) => b.id === brute.id)) {
            await prisma.clanWarFighters.update({
              where: {
                clanWarId_day: {
                  clanWarId: currentWar.id,
                  day,
                },
              },
              data: {
                attackers: { disconnect: { id: brute.id } },
              },
            });
          } else {
            await prisma.clanWarFighters.update({
              where: {
                clanWarId_day: {
                  clanWarId: currentWar.id,
                  day,
                },
              },
              data: {
                defenders: { disconnect: { id: brute.id } },
              },
            });
          }
        }
      }

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  leave: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          masterId: true,
          brutes: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          userId: user.id,
          name: ilike(req.params.brute),
          deletedAt: null,
        },
        select: { id: true, level: true, ranking: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is in clan
      if (!clan.brutes.some((b) => b.id === brute.id)) {
        throw new ExpectedError(translate('bruteNotInClan', user));
      }

      // Check if brute is the clan master
      if (clan.masterId === brute.id) {
        // Check if clan has other members
        if (clan.brutes.length > 1) {
          throw new ExpectedError(translate('masterCannotLeave', user));
        }

        // Set clan as deleted
        await prisma.clan.update({
          where: { id: clan.id },
          data: {
            deletedAt: new Date(),
            master: { disconnect: true },
            brutes: { disconnect: { id: brute.id } },
          },
        });
      } else {
        // Update clan
        await prisma.clan.update({
          where: { id },
          data: {
            brutes: { disconnect: { id: brute.id } },
          },
          select: { id: true },
        });

        // Update clan points
        await updateClanPoints(prisma, clan.id, 'remove', brute);
      }

      // Get current clan war
      const currentWar = await prisma.clanWar.findFirst({
        where: {
          OR: [
            { attackerId: id },
            { defenderId: id },
          ],
          status: ClanWarStatus.ongoing,
        },
        select: { id: true, fights: { select: { id: true } } },
      });

      if (currentWar) {
        const day = currentWar.fights.length + 1;

        // Get fighters for the current day
        const fighters = await prisma.clanWarFighters.findFirst({
          where: {
            clanWarId: currentWar.id,
            day,
            OR: [
              { attackers: { some: { id: brute.id } } },
              { defenders: { some: { id: brute.id } } },
            ],
          },
          select: {
            attackers: { select: { id: true } },
            defenders: { select: { id: true } },
          },
        });

        if (fighters) {
          // Remove brute from war current fighters

          if (fighters.attackers.some((b) => b.id === brute.id)) {
            await prisma.clanWarFighters.update({
              where: {
                clanWarId_day: {
                  clanWarId: currentWar.id,
                  day,
                },
              },
              data: {
                attackers: { disconnect: { id: brute.id } },
              },
            });
          } else {
            await prisma.clanWarFighters.update({
              where: {
                clanWarId_day: {
                  clanWarId: currentWar.id,
                  day,
                },
              },
              data: {
                defenders: { disconnect: { id: brute.id } },
              },
            });
          }
        }
      }

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  getThreads: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string }>,
    res: Response<ClanGetThreadsResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, clanId: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const { id } = req.params;

      // Check if the brute is in the clan
      if (brute.clanId !== id) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: { masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Get clan threads
      const threads = await prisma.clanThread.findMany({
        where: {
          clanId: id,
          clan: {
            brutes: {
              some: { name: ilike(req.params.brute) },
            },
          },
        },
        include: {
          creator: { select: { id: true, name: true } },
          posts: {
            select: {
              date: true,
              author: { select: { id: true, name: true } },
            },
            orderBy: { date: 'desc' },
            take: 1,
          },
        },
        orderBy: [{ pinned: 'desc' }, { updatedAt: 'desc' }],
      });

      res.status(200).send({
        masterId: clan.masterId,
        threads,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  createThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string }, unknown, { title: string, content: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      if (!req.body.title || !req.body.content) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const { id } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, clanId: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if the brute is in the clan
      if (brute.clanId !== id) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const thread = await prisma.clanThread.create({
        data: {
          title: req.body.title,
          clan: { connect: { id } },
          creator: { connect: { id: brute.id } },
          posts: {
            create: {
              author: { connect: { id: brute.id } },
              message: req.body.content,
            },
          },
        },
        select: { id: true },
      });

      res.status(200).send(thread);
    } catch (error) {
      sendError(res, error);
    }
  },
  updateThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string, threadId: string },
      unknown, { title: string, content: string, postId: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      if (!req.body.title || !req.body.content || !req.body.postId) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
          clanId: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if the brute is in the clan
      if (brute.clanId !== id) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: { id: threadId },
        select: { id: true, creatorId: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      // Check if the brute is the thread creator
      if (brute.id !== thread.creatorId) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      await prisma.clanThread.update({
        where: { id: threadId },
        data: {
          title: req.body.title,
        },
        select: { id: true },
      });

      await prisma.clanPost.update({
        where: { id: req.body.postId },
        data: {
          message: req.body.content,
        },
        select: { id: true },
      });

      res.status(200).send({
        message: 'ok',
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  createPost: (prisma: PrismaClient) => async (
    req: Request<
      { brute: string, id: string },
      unknown,
      { content: string }
    >,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      if (!req.body.content) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const { id } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, clanId: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Get thread
      const thread = await prisma.clanThread.findFirst({
        where: { id },
        select: { id: true, clanId: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      // Check if the brute is in the clan
      if (brute.clanId !== thread.clanId) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const post = await prisma.clanPost.create({
        data: {
          thread: { connect: { id } },
          author: { connect: { id: brute.id } },
          message: req.body.content,
        },
        select: { id: true },
      });

      // Update thread updatedAt and post count
      await prisma.clanThread.update({
        where: { id },
        data: {
          updatedAt: new Date(),
          postCount: {
            increment: 1,
          },
        },
        select: { id: true },
      });

      res.status(200).send(post);
    } catch (error) {
      sendError(res, error);
    }
  },
  lockThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string, threadId: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id
        || !isUuid(req.params.id)
        || !req.params.threadId
        || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const clan = await prisma.clan.findFirst({
        where: {
          id, deletedAt: null,
        },
        select: { id: true, masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Check if brute is the clan master
      if (clan.masterId !== brute.id) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: {
          id: threadId,
          clanId: clan.id,
        },
        select: { id: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      await prisma.clanThread.update({
        where: { id: threadId },
        data: { locked: true },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  getThread: (prisma: PrismaClient) => async (
    req: Request<
      { brute: string, id: string, threadId: string },
      unknown,
      never,
      { page: string }
    >,
    res: Response<ClanGetThreadResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id
        || !isUuid(req.params.id)
        || !req.params.threadId
        || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      if (!req.query.page || +req.query.page < 1) {
        throw new ExpectedError(translate('invalidParameters', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, clanId: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if the brute is in the clan
      if (brute.clanId !== id) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: {
          id: threadId,
          clanId: id,
        },
        include: {
          posts: {
            take: 10,
            skip: (+req.query.page - 1) * 10,
            orderBy: { date: 'asc' },
            include: {
              author: true,
            },
          },
          clan: { select: { masterId: true, name: true } },
        },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      res.status(200).send(thread);
    } catch (error) {
      sendError(res, error);
    }
  },
  challengeBoss: (prisma: PrismaClient) => async (
    req: Request<
      { brute: string, id: string }
    >,
    res: Response<ClanChallengeBossResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Get current modifiers
      const modifiers = await ServerState.getModifiers(prisma);

      // Check if the brute has fights left
      if (getFightsLeft(brute, modifiers) <= 0) {
        throw new ExpectedError(translate('noFightsLeft', user));
      }

      const { id } = req.params;

      // Check if the brute is in the clan
      if (brute.clanId !== id) {
        throw new ExpectedError(translate('notYourClan', user));
      }

      const clan = await prisma.clan.findFirst({
        where: {
          id, deletedAt: null,
        },
        select: { id: true, boss: true, damageOnBoss: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Get boss
      const boss = bosses.find((b) => b.name === clan.boss);
      if (!boss) {
        throw new Error('Boss not found');
      }

      // Update brute last fight and fights left
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          lastFight: new Date(),
          fightsLeft: getFightsLeft(brute, modifiers) - 1,
        },
        select: { id: true },
      });

      // Generate fight (retry if failed)
      let generatedFight: Prisma.FightCreateInput | null = null;
      let expectedError: ExpectedError | null = null;
      let retry = 0;
      let bossXpGains = 0;
      let bossGoldGains = 0;

      while (!generatedFight && !expectedError && retry < 10) {
        try {
          retry += 1;

          const newGeneratedFight = await generateFight({
            prisma,
            team1: { brutes: [brute] },
            team2: {
              bosses: [
                { ...boss, startHP: boss.hp - Math.floor(clan.damageOnBoss / boss.count) },
              ],
            },
            modifiers,
            backups: false,
            achievements: false,
            clanId: clan.id,
          });
          generatedFight = newGeneratedFight.data;
          if (newGeneratedFight.boss) {
            bossXpGains = newGeneratedFight.boss.xp;
            bossGoldGains = newGeneratedFight.boss.gold;
          }
        } catch (error: unknown) {
          if (!(error instanceof Error)) {
            throw error;
          }
          if (error instanceof ExpectedError) {
            expectedError = error;
          } else {
            LOGGER.log(`Error while generating fight between ${brute.name} and ${clan.boss}, retrying...`);
            DISCORD.sendError(error);
          }
        }
      }

      if (expectedError || !generatedFight) {
        throw expectedError;
      }

      // Save important fight data
      const { id: fightId } = await prisma.fight.create({
        data: generatedFight,
        select: { id: true },
      });

      // Send fight id to client
      res.status(200).send({
        id: fightId,
        xp: bossXpGains,
        gold: bossGoldGains,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  pinThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string, threadId: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id
        || !isUuid(req.params.id)
        || !req.params.threadId
        || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const clan = await prisma.clan.findFirst({
        where: {
          id, deletedAt: null,
        },
        select: { id: true, masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Check if brute is the clan master
      if (clan.masterId !== brute.id) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: {
          id: threadId,
          clanId: clan.id,
        },
        select: { id: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      await prisma.clanThread.update({
        where: { id: threadId },
        data: { pinned: true },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  unpinThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string, threadId: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id
        || !isUuid(req.params.id)
        || !req.params.threadId
        || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const clan = await prisma.clan.findFirst({
        where: {
          id, deletedAt: null,
        },
        select: { id: true, masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Check if brute is the clan master
      if (clan.masterId !== brute.id) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: {
          id: threadId,
          clanId: clan.id,
        },
        select: { id: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      await prisma.clanThread.update({
        where: { id: threadId },
        data: { pinned: false },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteThread: (prisma: PrismaClient) => async (
    req: Request<{ brute: string, id: string, threadId: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id
        || !isUuid(req.params.id)
        || !req.params.threadId
        || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingId', user));
      }

      const { id, threadId } = req.params;

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const clan = await prisma.clan.findFirst({
        where: {
          id, deletedAt: null,
        },
        select: { id: true, masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const thread = await prisma.clanThread.findFirst({
        where: {
          id: threadId,
          clanId: clan.id,
        },
        select: { id: true, creatorId: true },
      });

      if (!thread) {
        throw new ExpectedError(translate('threadNotFound', user));
      }

      // Check if brute is the clan master or the thread creator
      if (clan.masterId !== brute.id && thread.creatorId !== brute.id) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      await prisma.clanPost.deleteMany({
        where: {
          threadId,
        },
      });

      await prisma.clanThread.delete({
        where: {
          id: threadId,
          clanId: clan.id,
        },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  setMaster: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: {
          id: true,
          masterId: true,
          brutes: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const userBrutes = await prisma.brute.findMany({
        where: {
          userId: user.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Check if one of the user brutes is the clan master
      if (!userBrutes.some((b) => b.id === clan.masterId)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.brute),
          deletedAt: null,
        },
        select: { id: true, level: true, ranking: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is in clan
      if (!clan.brutes.some((b) => b.id === brute.id)) {
        throw new ExpectedError(translate('bruteNotInClan', user));
      }

      // Update clan
      await prisma.clan.update({
        where: { id },
        data: { masterId: brute.id },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  toggleClanWarParticipation: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || !isUuid(req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const { id } = req.params;

      const clan = await prisma.clan.findFirst({
        where: { id, deletedAt: null },
        select: { id: true, participateInClanWar: true, masterId: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const userBrutes = await prisma.brute.findMany({
        where: {
          userId: user.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Check if one of the user brutes is the clan master
      if (!userBrutes.some((b) => b.id === clan.masterId)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      await prisma.clan.update({
        where: { id },
        data: { participateInClanWar: !clan.participateInClanWar },
        select: { id: true },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Clans;
