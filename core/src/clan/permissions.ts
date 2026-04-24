import {
  Brute, Clan, ClanPermission, ClanRole
} from '@labrute/prisma';

/**
 * Check if a brute has at least one of the specified permissions in the clan
 */
export const hasPermission = (
  brute: (Pick<Brute, 'id' | 'clanId'> & {
    clanRole: Pick<ClanRole, 'permissions'> | null;
  }) | null,
  clan: Pick<Clan, 'id' | 'masterId'>,
  permissions: ClanPermission | ClanPermission[]
) => {
  if (!brute) return false;
  if (brute.clanId !== clan.id) return false;
  if (clan.masterId === brute.id) {
    return true;
  }

  const permissionsArray = Array.isArray(permissions) ? permissions : [permissions];
  return permissionsArray.some((p) => brute.clanRole?.permissions.includes(p));
};
