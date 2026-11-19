import { isUuid } from './isUuid.js';

export const formatAppealCode = (
  userId: string, caseCode?: string | null, appealReference?: string | null,
) => {
  if (appealReference !== undefined && appealReference !== null) {
    return `AP-${appealReference.toUpperCase()}`;
  }

  return caseCode ? `MC-${caseCode}/USER-${userId}` : `USER-${userId}`;
};

export const parseAppealCode = (value: string): {
  caseCode: string | null;
  userId: string | null;
  reference?: string;
} | null => {
  const normalized = value.trim().toLowerCase();

  if (/^ap-[0-9a-f]{16}$/.test(normalized)) {
    return {
      caseCode: null,
      userId: null,
      reference: normalized.slice(3).toUpperCase(),
    };
  }

  const parts = normalized.split('/');
  const first = parts[0] ?? '';

  if (first.startsWith('user-') && isUuid(first.slice(5)) && parts.length === 1) {
    return {
      caseCode: null,
      userId: first.slice(5),
    };
  }

  if (!first.startsWith('mc-') || !isUuid(first.slice(3)) || parts.length > 2) {
    return null;
  }

  const account = parts[1];

  if (account !== undefined && (!account.startsWith('user-') || !isUuid(account.slice(5)))) {
    return null;
  }

  return {
    caseCode: `MC-${first.slice(3)}`,
    userId: account?.slice(5) ?? null,
  };
};
