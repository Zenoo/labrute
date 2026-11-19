import { Prisma } from '@labrute/prisma';

export const isAppealReferenceCollision = (error: unknown) => {
  if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== 'P2002') {
    return false;
  }

  const target = error.meta?.target;

  return Array.isArray(target)
    ? target.length === 1 && target[0] === 'appealReference'
    : target === 'User_appealReference_key';
};

/** Retry reference collisions only. Other uniqueness errors retain their existing handling. */
export const retryAppealReferenceCollision = async <T>(write: () => Promise<T>): Promise<T> => {
  for (let attempt = 0; ; attempt++) {
    try {
      return await write();
    } catch (error) {
      if (!isAppealReferenceCollision(error) || attempt >= 4) {
        throw error;
      }
      // The failed create rolled back. Its database default generates a new random reference.
    }
  }
};
