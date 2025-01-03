import {
  ExpectedError, ForbiddenError, LimitError, MissingElementError, NotFoundError,
} from '@labrute/core';
import { Prisma } from '@labrute/prisma';
import type { Response } from 'express';
import { DISCORD } from '../context.js';

export enum ErrorCodeStatus {
  UnexpectedServerError = 500,
  BadRequest = 400,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  HeaderRangeNotSatisfiable = 416,
  NotImplemented = 501,
  WrongHeaderAccept = 406,
  AccessDenied = 401,
}

const sendError = (res: Response, error: unknown) => {
  if (!(error instanceof Error)) {
    throw error;
  }
  if (error instanceof ExpectedError) res.status(500);
  if (error instanceof ForbiddenError) res.status(403);
  if (error instanceof MissingElementError) res.status(501);
  if (error instanceof LimitError) res.status(409);
  if (error instanceof NotFoundError) res.status(404);

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2000':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2001':
        res.status(ErrorCodeStatus.NotFound).send(error.message);
        break;
      case 'P2002':
        res.status(ErrorCodeStatus.Conflict).send(error.message);
        break;
      case 'P2003':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2004':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2005':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2006':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2007':
        res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
        break;
      case 'P2008':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2009':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2010':
        res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
        break;
      case 'P2011':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2012':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2013':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2014':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2015':
        res.status(ErrorCodeStatus.NotFound).send(error.message);
        break;
      case 'P2016':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2017':
        res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
        break;
      case 'P2018':
        res.status(ErrorCodeStatus.NotFound).send(error.message);
        break;
      case 'P2019':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2020':
        res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
        break;
      case 'P2021':
        res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
        break;
      case 'P2022':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2023':
        res.status(ErrorCodeStatus.BadRequest).send(error.message);
        break;
      case 'P2025':
        res.status(ErrorCodeStatus.NotFound).send(error.message);
        break;
      default: {
        res.send(`Wrong data format: ${error.code}`);
        break;
      }
    }
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
  } else if (error instanceof Error) {
    res.status(ErrorCodeStatus.UnexpectedServerError).send(error.message);
  } else {
    res.status(ErrorCodeStatus.NotImplemented).send(error);
  }

  if (!(error instanceof ExpectedError)
      || !(error instanceof ForbiddenError)
      || !(error instanceof MissingElementError)
      || !(error instanceof LimitError)
      || !(error instanceof NotFoundError)) {
    try {
      DISCORD().sendError(error, res);
    } catch (discordError) {
      console.error(discordError);
    }
  }
};

export default sendError;

export const sendWorkerError = (error: Error) => {
  if (!(error instanceof ExpectedError)) {
    try {
      DISCORD().sendError(error);
    } catch (discordError) {
      console.error(discordError);
    }
  }
};
