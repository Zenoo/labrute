import type {
  MultipleAccountCaseDetailResponse, ReviewMultipleAccountCaseRequest,
  UserMultipleAccountsListResponse,
} from '@labrute/core';
import type { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { auth } from '../utils/auth.js';
import {
  getMultipleAccountCase, listMultipleAccountCases, reviewMultipleAccountCase,
} from '../utils/multipleAccountCases.js';
import { sendError } from '../utils/sendError.js';

export const MultipleAccountCases = {
  list: (prisma: PrismaClient) => async (
    req: Request, res: Response<UserMultipleAccountsListResponse>,
  ) => {
    try {
      await auth(prisma, req, { admin: true });

      res.send(await listMultipleAccountCases(prisma, req.query.status, req.query.cursor));
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>, res: Response<MultipleAccountCaseDetailResponse>,
  ) => {
    try {
      await auth(prisma, req, { admin: true });

      res.send(await getMultipleAccountCase(prisma, req.params.id, req.query.offset));
    } catch (error) {
      sendError(res, error);
    }
  },
  review: (prisma: PrismaClient) => async (
    req: Request<{ id: string }, unknown, ReviewMultipleAccountCaseRequest>,
    res: Response<{ revision: number }>,
  ) => {
    try {
      const actor = await auth(prisma, req, { admin: true });
      res.send(await reviewMultipleAccountCase(prisma, req.params.id, actor.id, req.body));
    } catch (error) {
      sendError(res, error);
    }
  },
};
