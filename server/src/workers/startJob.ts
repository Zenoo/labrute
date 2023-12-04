import { PrismaClient } from '@labrute/prisma';
import { Worker } from 'worker_threads';
import DiscordUtils from '../utils/DiscordUtils.js';

const startJob = async (prisma: PrismaClient) => {
  // Get the number of jobs
  const count = await prisma.workerJob.count();

  await DiscordUtils.sendLog(`${count} job${count === 1 ? '' : 's'} left in queue`);

  // Get the first job
  const job = await prisma.workerJob.findFirst({
    orderBy: { id: 'asc' },
  });

  if (!job) {
    return;
  }

  // eslint-disable-next-line no-new
  new Worker(`./lib/workers/${job.worker}.js`, {
    workerData: job.payload,
  });
};

export default startJob;