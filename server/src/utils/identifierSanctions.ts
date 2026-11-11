import { ExpectedError, isUuid } from '@labrute/core';
import {
  Prisma, PrismaClient, User
} from '@labrute/prisma';
import { isFingerprintFormatValid } from './fingerprintIdentity.js';

const reviewReason = (reason: unknown) => {
  if (typeof reason !== 'string' || !reason.trim() || reason.trim().length > 500) {
    throw new ExpectedError('A review reason between 1 and 500 characters is required');
  }
  return reason.trim();
};

type IdentifierRestrictions = {
  browserRestricted: boolean;
  fingerprintRestricted: boolean;
};

const identifierRestrictionQuery = (
  userId: Prisma.Sql,
  browserId: string,
  fingerprint: string,
) => {
  const normalizedBrowserId = browserId.toLowerCase();

  // Check current evidence only. Approval overrides device matching, never an account or IP ban.
  return Prisma.sql`
    SELECT
      NOT approved.value AND EXISTS (
        SELECT 1 FROM "BannedBrowser" WHERE id = ${normalizedBrowserId}
      ) AS "browserRestricted",
      NOT approved.value AND EXISTS (
        SELECT 1 FROM "BannedFingerprint" WHERE id = ${fingerprint}
      ) AND NOT EXISTS (
        SELECT 1 FROM "KnownFingerprint" WHERE id = ${fingerprint}
      ) AS "fingerprintRestricted"
    FROM (SELECT EXISTS (
      SELECT 1 FROM "SharedBrowserExemption"
      WHERE "userId" = ${userId} AND "browserId" = ${normalizedBrowserId}
    ) AS value) approved
  `;
};

export const getIdentifierRestrictions = async (
  prisma: PrismaClient,
  userId: string,
  browserId: string,
  fingerprint: string,
) => {
  const [result] = await prisma.$queryRaw<IdentifierRestrictions[]>(
    identifierRestrictionQuery(Prisma.sql`${userId}::uuid`, browserId, fingerprint),
  );

  if (!result) throw new Error('Could not determine identifier restrictions');

  return result;
};

type AuthenticationUser = Pick<User,
  'id' | 'lang' | 'admin' | 'moderator' | 'bannedAt' | 'banReason'
  | 'ips' | 'fingerprints' | 'browserIds' | 'lastSeen'
> & IdentifierRestrictions;

export const findUserForAuthentication = async (
  prisma: PrismaClient,
  id: string,
  token: string,
  browserId: string,
  fingerprint: string,
) => {
  // Preserve fresh moderation checks without adding a round trip to every authenticated request.
  const [user] = await prisma.$queryRaw<AuthenticationUser[]>`
    SELECT u.id, u.lang::text AS lang, u.admin, u.moderator, u."bannedAt", u."banReason",
      u.ips, u.fingerprints, u."browserIds", u."lastSeen",
      restrictions."browserRestricted", restrictions."fingerprintRestricted"
    FROM "User" u
    CROSS JOIN LATERAL (
      ${identifierRestrictionQuery(Prisma.sql`u.id`, browserId, fingerprint)}
    ) restrictions
    WHERE u.id = ${id}::uuid AND u."connexionToken" = ${token}::uuid
    LIMIT 1
  `;
  return user ?? null;
};

export const setIdentifierRestriction = async (
  prisma: PrismaClient,
  kind: 'browser' | 'fingerprint',
  value: string,
  restricted: boolean,
  actorId: string,
  reason: unknown,
) => {
  const reviewedReason = reviewReason(reason);
  const validIdentifier = restricted
    ? kind === 'browser' ? typeof value === 'string' && value.length === 36 && isUuid(value)
      : isFingerprintFormatValid(value)
    : typeof value === 'string' && value.length > 0 && value.length <= 255;

  if (!isUuid(actorId) || !validIdentifier) throw new ExpectedError('Invalid restriction identifier');

  const subjectId = kind === 'browser' ? value.toLowerCase() : value;

  await prisma.$transaction(async (tx) => {
    // Serialize a change and its audit event, including concurrent restrict/release requests.
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtextextended(${`${kind}:${subjectId}`}, 0))`;

    const result = kind === 'browser'
      ? restricted
        ? await tx.bannedBrowser.createMany({ data: [{ id: subjectId }], skipDuplicates: true })
        : await tx.bannedBrowser.deleteMany({ where: { id: subjectId } })
      : restricted
        ? await tx.bannedFingerprint.createMany({ data: [{ id: subjectId }], skipDuplicates: true })
        : await tx.bannedFingerprint.deleteMany({ where: { id: subjectId } });

    if (result.count) {
      await tx.securityAction.create({
        data: {
          subjectType: kind, subjectId, actorId, reason: reviewedReason,
          action: restricted ? 'restrict' : 'release',
        }
      });
    }
  });
};

export const editSharedBrowserExemptions = async (
  prisma: PrismaClient,
  browserId: string,
  userIds: string[],
  actorId: string,
  reason: unknown,
  removeBrowser = false,
) => {
  const reviewedReason = reviewReason(reason);
  if (!isUuid(actorId) || browserId.length !== 36 || !isUuid(browserId)
    || !Array.isArray(userIds) || userIds.some((id) => typeof id !== 'string' || !isUuid(id))) {
    throw new ExpectedError('Invalid shared-browser identifiers');
  }
  const subjectId = browserId.toLowerCase();
  const requested = new Set(removeBrowser ? [] : userIds.map((id) => id.toLowerCase()));
  await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtextextended(${`shared-browser:${subjectId}`}, 0))`;
    if (!removeBrowser) await tx.sharedBrowser.upsert({
      where: { id: subjectId },
      create: { id: subjectId, description: reviewedReason },
      update: { description: reviewedReason },
    });
    const existing = await tx.sharedBrowserExemption.findMany({ where: { browserId: subjectId } });
    for (const member of existing) {
      const retained = requested.has(member.userId);
      if (retained && member.reason === reviewedReason) {
        requested.delete(member.userId);
        continue;
      }
      if (retained) {
        await tx.sharedBrowserExemption.update({
          where: { userId_browserId: { userId: member.userId, browserId: subjectId } },
          data: { reason: reviewedReason },
        });
        requested.delete(member.userId);
      } else await tx.sharedBrowserExemption.delete({
        where: { userId_browserId: { userId: member.userId, browserId: subjectId } },
      });
      await tx.securityAction.create({
        data: {
          subjectType: 'shared-browser', subjectId, userId: member.userId, actorId,
          action: retained ? 'update-grant' : 'revoke', reason: reviewedReason,
        }
      });
    }
    for (const userId of requested) {
      await tx.sharedBrowserExemption.create({
        data: {
          browserId: subjectId, userId, createdBy: actorId, reason: reviewedReason,
        }
      });
      await tx.securityAction.create({
        data: {
          subjectType: 'shared-browser', subjectId, userId, actorId,
          action: 'grant', reason: reviewedReason,
        }
      });
    }
    if (removeBrowser) await tx.sharedBrowser.delete({ where: { id: subjectId } });
  });
};
