import { ClanPermission, PrismaClient } from '@labrute/prisma';

export { ClanPermission };

export const hasPermission = (
  clan: {
    masterId: string | null;
    brutes?: {
      id: string;
      clanRole: {
        permissions: ClanPermission[];
      } | null;
    }[];
  },
  brute: string | {
    id: string;
    clanRole: {
      permissions: ClanPermission[];
    } | null;
  },
  permission: ClanPermission,
): boolean => {
  const bruteId = typeof brute === 'string' ? brute : brute.id;

  if (clan.masterId === bruteId) {
    return true;
  }

  const foundBrute = typeof brute === 'string'
    ? clan.brutes?.find((b) => b.id === brute)
    : brute;

  if (!foundBrute) return false;

  return foundBrute.clanRole?.permissions.includes(permission) ?? false;
};









