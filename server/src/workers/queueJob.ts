import { Prisma, PrismaClient } from '@labrute/prisma';
import { Worker } from 'worker_threads';
import DiscordUtils from '../utils/DiscordUtils.js';

const queueJob = async (prisma: PrismaClient, worker: string, payload: unknown) => {
  // Check if the queue is empty
  const count = await prisma.workerJob.count();

  await DiscordUtils.sendLog(`Queuing ${worker} job`);

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
    // eslint-disable-next-line no-new
    new Worker(`./lib/workers/${worker}.js`, {
      workerData: {
        jobId: job.id,
        payload,
      },
    });
  }
};

export default queueJob;