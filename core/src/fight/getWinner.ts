import { Brute, Fight, Prisma } from '@labrute/prisma';

// TODO: Remove this function on release
// As we now store winnerId in Fight model
export const getWinnerId = (fight: Partial<Pick<Fight, 'winnerId' | 'winner' | 'brute1Id' | 'brute2Id'>> & {
  brute1?: Pick<Brute, 'id' | 'name'> | Prisma.BruteCreateNestedOneWithoutFightsInput | null;
  brute2?: Pick<Brute, 'id' | 'name'> | Prisma.BruteCreateNestedOneWithoutFightsInput | null;
}) => {
  if (fight.winnerId) {
    return fight.winnerId;
  }

  const brute1Id = fight.brute1Id ?? (fight.brute1 && 'id' in fight.brute1 ? fight.brute1.id : fight.brute1?.connect?.id);
  const brute2Id = fight.brute2Id ?? (fight.brute2 && 'id' in fight.brute2 ? fight.brute2.id : fight.brute2?.connect?.id);

  if (!brute1Id || !brute2Id) {
    throw new Error('Brute IDs are missing');
  }

  // Fallback to old method using winner name
  if (fight.brute1 && !('name' in fight.brute1)) {
    throw new Error('Brute1 name is missing for winner determination');
  }

  if (fight.brute1?.name === fight.winner) {
    return brute1Id;
  }

  if (fight.brute2 && !('name' in fight.brute2)) {
    throw new Error('Brute2 name is missing for winner determination');
  }

  if (fight.brute2 && fight.brute2.name === fight.winner) {
    return brute2Id;
  }

  throw new Error('Winner not found');
};

// TODO: Remove this function on release
// As we now store winnerId in Fight model
export const getLoserId = (fight: Partial<Pick<Fight, 'loserId' | 'loser' | 'brute1Id' | 'brute2Id'>> & {
  brute1?: Pick<Brute, 'id' | 'name'> | null;
  brute2?: Pick<Brute, 'id' | 'name'> | null;
}) => {
  if (fight.loserId) {
    return fight.loserId;
  }

  const brute1Id = fight.brute1Id ?? fight.brute1?.id;
  const brute2Id = fight.brute2Id ?? fight.brute2?.id;

  if (!brute1Id || !brute2Id) {
    throw new Error('Brute IDs are missing');
  }

  // Fallback to old method using loser name
  if (fight.brute1?.name === fight.loser) {
    return brute1Id;
  }
  if (fight.brute2 && fight.brute2.name === fight.loser) {
    return brute2Id;
  }

  throw new Error('Loser not found');
};
