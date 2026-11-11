import type { Prisma } from '@labrute/prisma';

export const lockAccountSanction = (tx: Prisma.TransactionClient, id: string) => tx.$executeRaw`
  SELECT pg_advisory_xact_lock(hashtextextended(${`account-sanction:${id.toLowerCase()}`}, 0))
`;
