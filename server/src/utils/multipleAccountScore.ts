import type { MultipleAccountScore } from '@labrute/core';

export const MULTIPLE_ACCOUNT_SCORE_VERSION = 1;

export type MultipleAccountMetrics = {
  sharedBrowserAccounts: number;
  repeatedAccounts: number;
  sharedVisitorAccounts: number;
  crossNetworkAccounts: number;
};

/** Review priority only: weights are heuristic and have no role in automatic sanctions. */
export const scoreMultipleAccountGroup = (
  signal: 'browser' | 'fingerprint-ip',
  accountCount: number,
  metrics: MultipleAccountMetrics,
): MultipleAccountScore => {
  const factors: MultipleAccountScore['factors'] = [];

  const add = (
    key: MultipleAccountScore['factors'][number]['key'], maxPoints: number, count: number,
  ) => {
    const matchedAccounts = Number.isFinite(count)
      ? Math.max(0, Math.min(accountCount, Math.floor(count))) : 0;

    // One account alone is not shared evidence. Subgroups earn only proportional credit.
    const coverage = accountCount > 1 ? Math.max(0, matchedAccounts - 1) / (accountCount - 1) : 0;

    factors.push({
      key,
      points: Math.round(maxPoints * coverage),
      maxPoints,
      matchedAccounts,
      totalAccounts: accountCount,
    });
  };

  add('shared-browser', 45, metrics.sharedBrowserAccounts);

  if (signal === 'fingerprint-ip') {
    // This overlaps the device evidence above; keep the stronger anchor rather than adding both.
    const browserPoints = factors[0]?.points ?? 0;

    add('fingerprint-ip', Math.max(0, 20 - browserPoints), accountCount);
  }

  add('repeated-days', 20, metrics.repeatedAccounts);

  if (signal === 'browser') {
    // A fingerprint/IP case already shares a visitor ID by definition.
    add('shared-visitor', 15, metrics.sharedVisitorAccounts);
  }

  add('multiple-networks', 20, metrics.crossNetworkAccounts);

  return {
    version: MULTIPLE_ACCOUNT_SCORE_VERSION,
    percentage: Math.min(95, factors.reduce((total, factor) => total + factor.points, 0)),
    factors,
  };
};
