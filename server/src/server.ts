import express = require('express');

import { Version } from '@labrute/core';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';
import { GLOBAL, ServerContext } from './context.js';
import dailyJob from './dailyJob.js';
import './i18n.js';
import initRoutes from './routes.js';
import lockMiddleware from './utils/middlewares/locks.js';
import { readyCheck } from './utils/middlewares/readyCheck.js';

export function main(cx: ServerContext) {
  cx.logger.info(`Server started (v${Version})`);

  const app = express();
  const { port } = cx.config;

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(lockMiddleware);
  app.use(readyCheck);

  app.listen(port, () => {
    cx.logger.info(`Server listening on port ${port}`);

    // Trigger daily job
    dailyJob(cx.prisma)().catch((error: Error) => {
      cx.discord.sendError(error);
    });

    // Initialize daily scheduler
    schedule.scheduleJob('0 0 * * *', dailyJob(cx.prisma));
  });

  initRoutes(app, cx.config, cx.prisma);
}

/**
 * Initialize the global context, then run `main`
 */
export function mainWrapper() {
  // Note: We don't dispose the global context since the server is expected to
  // run forever
  main(GLOBAL);
}
