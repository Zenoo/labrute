import {
  BruteReportsListRequest, BruteReportsListResponse, BruteReportsSendRequest,
  ExpectedError,
} from '@labrute/core';
import { BruteReportReason, BruteReportStatus, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { LOGGER } from '../context.js';
import auth from '../utils/auth.js';
import updateClanPoints from '../utils/clan/updateClanPoints.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const BruteReports = {
  list: (prisma: PrismaClient) => async (
    req: Request<BruteReportsListRequest>,
    res: Response<BruteReportsListResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Admin only
      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Get reports
      const reports = await prisma.bruteReport.findMany({
        where: {
          status: req.params.status,
        },
        include: {
          brute: {
            select: {
              id: true,
              name: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          count: 'desc',
        },
      });

      res.status(200).send(reports);
    } catch (error) {
      sendError(res, error);
    }
  },
  send: (prisma: PrismaClient) => async (
    req: Request<BruteReportsSendRequest>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const { name, reason } = req.params;

      if (!name || !reason) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      if (!BruteReportReason[reason]) {
        throw new ExpectedError(translate('invalidReason', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if an existing report exists
      const existingReport = await prisma.bruteReport.findFirst({
        where: {
          bruteId: brute.id,
          reason,
          status: BruteReportStatus.pending,
        },
        include: {
          users: {
            select: {
              id: true,
            },
          },
        },
      });

      // Check if user already reported this brute
      if (existingReport && existingReport.users.some((u) => u.id === user.id)) {
        throw new ExpectedError(translate('bruteAlreadyReported', user));
      }

      if (existingReport) {
        // Increment count and add user
        await prisma.bruteReport.update({
          where: {
            id: existingReport.id,
          },
          data: {
            count: {
              increment: 1,
            },
            users: {
              connect: {
                id: user.id,
              },
            },
          },
          select: { id: true },
        });
      } else {
        // Create report
        await prisma.bruteReport.create({
          data: {
            brute: {
              connect: {
                id: brute.id,
              },
            },
            users: {
              connect: {
                id: user.id,
              },
            },
          },
          select: { id: true },
        });
      }

      LOGGER.log(`New report for ${brute.name} by ${user.name}`);

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  accept: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Admin only
      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const report = await prisma.bruteReport.findFirst({
        where: {
          id: +req.params.id,
        },
        include: {
          brute: {
            select: {
              id: true,
              name: true,
              clanId: true,
              level: true,
              ranking: true,
            },
          },
        },
      });

      if (!report) {
        throw new ExpectedError(translate('reportNotFound', user));
      }

      await prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.accepted,
        },
        select: { id: true },
      });

      // Add name to banned words
      await prisma.bannedWord.create({
        data: {
          word: report.brute.name.toLowerCase(),
        },
        select: { id: true },
      });

      // Delete brute
      await prisma.brute.update({
        where: {
          id: report.bruteId,
        },
        data: {
          deletedAt: new Date(),
          // Remove from clan
          clanId: null,
          // Delete join requests
          wantToJoinClanId: null,
        },
        select: { id: true },
      });

      // Update clan points
      if (report.brute.clanId) {
        await updateClanPoints(prisma, report.brute.clanId, 'remove', report.brute);
      }

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  reject: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Admin only
      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const report = await prisma.bruteReport.findFirst({
        where: {
          id: +req.params.id,
        },
      });

      if (!report) {
        throw new ExpectedError(translate('reportNotFound', user));
      }

      await prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.rejected,
        },
        select: { id: true },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default BruteReports;
