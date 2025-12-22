import { ClanPermission, PrismaClient } from '@labrute/prisma';

export { ClanPermission };

export const hasPermission = (
  clan: {
    masterId: string | null;
    brutes: {
      id: string;
      clanRoles: {
        role: {
          permissions: ClanPermission[];
        };
      }[];
    }[];
  },
  bruteId: string,
  permission: ClanPermission,
): boolean => {
  if (clan.masterId === bruteId) {
    return true;
  }

  const brute = clan.brutes.find((b) => b.id === bruteId);

  if (!brute) return false;

  return brute.clanRoles.some((r) => r.role.permissions.includes(permission));
};


export const getBruteRoles = async (
  prisma: PrismaClient,
  bruteId: string,
  clanId: string,
) => {
  const memberRoles = await prisma.clanMemberRole.findMany({
    where: {
      bruteId,
      role: { clanId },
    },
    include: {
      role: true,
    },
  });

  return memberRoles.map((mr) => mr.role);
};






