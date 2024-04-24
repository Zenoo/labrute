import { ExpectedError } from '@labrute/core';
import { Request, Response, NextFunction } from 'express';
import sendError from '../sendError.js';

interface Locks {
  [key: string]: {
    timeout: NodeJS.Timeout,
    count: 0
  }
}

const locks: Locks = {};

function deleteLock(key: string) {
  if (locks[key]) {
    clearTimeout(locks[key].timeout);
    delete locks[key];
  }
}

export default async function lockMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');

    if (!id || id === 'null') {
      return sendError(res, new ExpectedError('Invalid authorization header content'));
    }

    const key = `${method}:${path}:${id}`;

    if (locks[key]) {
      locks[key].count++;
      await new Promise((resolve) => { setTimeout(resolve, locks[key].count * 5000); });
      return next();
    }

    locks[key] = {
      timeout: setTimeout(() => {
        deleteLock(key);
      }, 10000),
      count: 0,
    };

    res.on('close', () => {
      deleteLock(key);
    });

    res.on('finish', () => {
      deleteLock(key);
    });
  }

  return next();
}
