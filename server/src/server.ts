import * as dotenv from 'dotenv';
import express from 'express';

import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { PrismaClient } from '@labrute/prisma';
import path from 'path';
import schedule from 'node-schedule';
import initRoutes from './routes.js';
import './i18n.js';
import dailyJob from './dailyJob.js';

dotenv.config();

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
const port = process.env.PORT || 9000;
const REPO_ROOT = path.join(fileURLToPath(import.meta.url), '..', '..');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Get client build
app.use(express.static(path.join(REPO_ROOT, 'client', 'build')));

app.listen(port, () => {
  console.warn(`App running: http://localhost:${port}/`);

  // Trigger daily job
  dailyJob(prisma)().catch((error) => {
    console.error(error);
  });

  // Initialize daily scheduler
  schedule.scheduleJob('0 0 * * *', dailyJob(prisma));
});

initRoutes(app, prisma);
