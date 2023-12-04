import express from 'express';

import { Version } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';
import dailyJob from './dailyJob.js';
import './i18n.js';
import initRoutes from './routes.js';
import DiscordUtils from './utils/DiscordUtils.js';
import Env from './utils/Env.js';
import startJob from './workers/startJob.js';

const DEBUG_QUERIES = false;

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
    console.warn(`Query: ${e.query}`);
    console.warn(`Params: ${e.params}`);
    console.warn(`Duration: ${e.duration}ms`);
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
  DiscordUtils.sendLog(`**Server started (v${Version})**`).catch((e) => {
    console.error(e);
  });

  // Trigger daily job
  dailyJob(prisma)().catch((error) => {
    DiscordUtils.sendError(error).catch((e) => {
      console.error(e);
    });
  });

  // Initialize daily scheduler
  schedule.scheduleJob('0 0 * * *', dailyJob(prisma));

  // Start worker queue
  startJob(prisma).catch((error) => {
    DiscordUtils.sendError(error).catch((e) => {
      console.error(e);
    });
  });
});

initRoutes(app, prisma);
