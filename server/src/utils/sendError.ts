import { ExpectedError } from '@labrute/core';
import { Prisma } from '@labrute/prisma';
import { Response } from 'express';
import DiscordUtils from './DiscordUtils.js';

const sendError = (res: Response, error: unknown) => {
  res.status(500);
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2025': {
        res.send(error.message);
        break;
      }
      default: {
        console.error(error.message);
        res.send(`Wrong data format: ${error.code}`);
        break;
      }
    }
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    res.send(error.message);
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    res.send(error.message);
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.error(error.message);
    res.send('Wrong data format');
  } else if (error instanceof Error) {
    res.send(error.message);
  } else {
    res.send(error);
  }

  if (!(error instanceof ExpectedError)) {
    DiscordUtils.sendError(error, res);
  }
};

export default sendError;

export const sendWorkerError = (error: unknown) => {
  if (!(error instanceof ExpectedError)) {
    DiscordUtils.sendError(error);
  }
};