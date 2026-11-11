import type { Prisma } from '@labrute/prisma';

/** Only moderation/automatic-sanction writes use this lock, never ordinary requests. */
export const lockMultipleAccountPolicy = (tx: Prisma.TransactionClient) => tx.$executeRaw`
  SELECT pg_advisory_xact_lock(hashtextextended('multiple-account-policy', 0))
`;
