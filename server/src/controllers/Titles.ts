import {
  ExpectedError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Titles = {
  refresh: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { userId: string }>,
    res: Response,
  ) => {
    try {
      // Not used as we don't store titles in the database yet
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      res.status(200).send({
        message: 'Refreshing titles...',
      });

      // eslint-disable-next-line no-new
      new Worker('./lib/workers/refreshTitles.js');
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Titles;
