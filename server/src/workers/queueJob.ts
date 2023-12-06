import { Prisma, PrismaClient } from '@labrute/prisma';
import { Worker } from 'worker_threads';
import { DISCORD, LOGGER } from '../context.js';
import { forwardWorkerLog } from '../logger/parent-port.js';

const queueJob = async (prisma: PrismaClient, worker: string, payload: unknown) => {
  // Check if the queue is empty
  const count = await prisma.workerJob.count();

  LOGGER.log(`Queuing ${worker} job`);

  // Create a new job
  const job = await prisma.workerJob.create({
    data: {
      worker,
      payload: payload as Prisma.JsonObject,
    },
    select: { id: true },
  });

  // Start the worker if the queue was empty
  if (count === 0) {
    const w = new Worker(`./lib/workers/${worker}.js`, {
      workerData: {
        jobId: job.id,
        payload,
      },
    });

    w.on('message', forwardWorkerLog(LOGGER));

    w.on('error', (error) => {
      LOGGER.error(`worker error: ${error}`);
      DISCORD.sendError(error);
    });

    w.once('exit', () => {
      LOGGER.info('worker exit');
      w.removeAllListeners();
    });
  }
};

export default queueJob;