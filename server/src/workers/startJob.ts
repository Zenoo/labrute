import { PrismaClient } from '@labrute/prisma';
import { Worker } from 'worker_threads';
import DiscordUtils from '../utils/DiscordUtils.js';

const startJob = async (prisma: PrismaClient) => {
  // Get the number of jobs
  const count = await prisma.workerJob.count();

  DiscordUtils.sendLog(`${count} job${count === 1 ? '' : 's'} left in queue`);

  // Get the first job
  const job = await prisma.workerJob.findFirst({
    orderBy: { id: 'asc' },
  });

  if (!job) {
    return;
  }

  const worker = new Worker(`./lib/workers/${job.worker}.js`, {
    workerData: {
      jobId: job.id,
      payload: job.payload,
    },
  });

  worker.on('error', (error) => {
    if (error.message === 'ExitWorker') {
      return;
    }

    DiscordUtils.sendError(error);
  });
};

export default startJob;