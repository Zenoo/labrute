import { PrismaClient } from '@labrute/prisma';
import { Worker } from 'worker_threads';
import { DISCORD, LOGGER } from '../context.js';
import { forwardWorkerLog } from '../logger/parent-port.js';

const startJob = async (prisma: PrismaClient) => {
  LOGGER.debug('startJob: start');

  // Get the number of jobs
  const count = await prisma.workerJob.count();

  LOGGER.log(`${count} job${count === 1 ? '' : 's'} left in queue`);

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
      payload: JSON.parse(job.payload) as unknown,
    },
  });

  worker.on('message', forwardWorkerLog(LOGGER));

  worker.on('error', (error) => {
    LOGGER.error(`worker error: ${error?.message}`);
    DISCORD.sendError(error);
  });

  worker.once('exit', () => {
    LOGGER.info('worker exit');
    worker.removeAllListeners();
  });
};

export default startJob;
