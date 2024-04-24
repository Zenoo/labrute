import { ExpectedError } from '@labrute/core';
import { Request, Response, NextFunction } from 'express';
import sendError from '../sendError.js';

interface Locks {
  [key: string]: NodeJS.Timeout | undefined
}

const locks: Locks = {};

function deleteLock(key: string) {
  if (locks[key]) {
    clearTimeout(locks[key]);
    delete locks[key];
  }
}

export default function lockMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');

    if (!id || id === 'null') {
      return sendError(res, new ExpectedError('Invalid authorization header content'));
    }

    const key = `${method}:${path}:${id}`;

    if (locks[key]) {
      return sendError(res, new ExpectedError('Too many requests'));
    }

    locks[key] = setTimeout(() => {
      deleteLock(key);
    }, 10000);

    res.on('finish', () => {
      delete locks[key];
    });

    res.on('close', () => {
      deleteLock(key);
    });

    res.on('error', () => {
      deleteLock(key);
    });

    res.on('finish', () => {
      deleteLock(key);
    });
  }

  return next();
}
