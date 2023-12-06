import express from 'express';

import { Version } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';
import dailyJob from './dailyJob.js';
import './i18n.js';
import initRoutes from './routes.js';
import Env from './utils/Env.js';
import startJob from './workers/startJob.js';
import { DISCORD, LOGGER } from './context.js';

const DEBUG_QUERIES = false;

LOGGER.info(`start server v${Version}`);

const prisma = new PrismaClient(DEBUG_QUERIES ? {
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
} : undefined);

if (DEBUG_QUERIES) {
  prisma.$on('query', (e) => {
    LOGGER.warn(`Query: ${e.query}`);
    LOGGER.warn(`Params: ${e.params}`);
    LOGGER.warn(`Duration: ${e.duration}ms`);
  });
}

const app = express();
const port = Env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(port, () => {
  LOGGER.info('server started, listening');

  // Trigger daily job
  dailyJob(prisma)().catch((error: Error) => {
    DISCORD.sendError(error);
  });

  // Initialize daily scheduler
  schedule.scheduleJob('0 0 * * *', dailyJob(prisma));

  // Start worker queue
  startJob(prisma).catch((error: Error) => {
    DISCORD.sendError(error);
  });
});

initRoutes(app, prisma);
