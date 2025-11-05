import { Fight } from '@labrute/prisma';

export const isWinner = <F extends { id: string; name: string }>(
  fighter: F | null | undefined,
  fight: Partial<Pick<Fight, 'winnerId' | 'winner'>>,
) => {
  if (!fighter) {
    return false;
  }

  if (fight.winnerId) {
    return fight.winnerId === fighter.id;
  }

  // Fallback to old method using winner name
  return fight.winner === fighter.name;
};

export const isLoser = <F extends { id: string; name: string }>(
  fighter: F | null | undefined,
  fight: Partial<Pick<Fight, 'loserId' | 'loser'>>,
) => {
  if (!fighter) {
    return false;
  }

  if (fight.loserId) {
    return fight.loserId === fighter.id;
  }

  // Fallback to old method using loser name
  return fight.loser === fighter.name;
};
