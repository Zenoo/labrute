import { BruteReportStatus, Prisma } from '@labrute/prisma';
import type { AdminGridQuery } from '@labrute/core';

type ReportSort = AdminGridQuery['sort'];

type ReportPosition = {
  id: string;
  count: number;
  date: Date;
  handledAt: Date | null;
  bruteName?: string;
};

export const encodeReportCursor = (
  report: ReportPosition,
  status: BruteReportStatus,
  sort?: ReportSort,
) => Buffer.from(JSON.stringify({
  status,
  id: report.id,
  count: report.count,
  date: report.date,
  handledAt: report.handledAt,
  bruteName: sort?.field === 'bruteName' ? report.bruteName : undefined,
  sort,
})).toString('base64url');

export const reportContinuation = (
  cursor: unknown,
  status: BruteReportStatus,
  sort?: ReportSort,
): Prisma.BruteReportWhereInput => {
  if (cursor === undefined) {
    return {};
  }

  if (typeof cursor !== 'string' || cursor.length > 4096) {
    throw new Error('Invalid report cursor');
  }

  const position = JSON.parse(Buffer.from(cursor, 'base64url').toString()) as {
    status: unknown;
    id: unknown;
    count: unknown;
    date: unknown;
    handledAt: unknown;
    bruteName?: unknown;
    sort?: ReportSort;
  };

  if (!position || position.status !== status || typeof position.id !== 'string'
    || position.sort?.field !== sort?.field || position.sort?.direction !== sort?.direction
    || typeof position.count !== 'number' || !Number.isSafeInteger(position.count)
    || typeof position.date !== 'string' || !Number.isFinite(Date.parse(position.date))
    || (position.handledAt !== null && (typeof position.handledAt !== 'string'
      || !Number.isFinite(Date.parse(position.handledAt))))) {
    throw new Error('Invalid report cursor');
  }

  const { id, count } = position;
  const date = new Date(position.date);
  const handledAt = position.handledAt === null ? null : new Date(position.handledAt);

  if (sort) {
    const values = {
      count,
      date,
      handledAt,
      bruteName: position.bruteName,
    };

    if (!Object.prototype.hasOwnProperty.call(values, sort.field)) {
      throw new Error('Invalid report sort');
    }

    const value = values[sort.field as keyof typeof values];
    const comparison = sort.direction === 'asc' ? 'gt' : 'lt';

    if (sort.field === 'bruteName' && typeof value !== 'string') {
      throw new Error('Invalid report name cursor');
    }

    if (value === null) {
      return {
        handledAt: null,
        id: { lt: id },
      };
    }

    return {
      OR: [
        { [sort.field]: { [comparison]: value } },
        ...(sort.field === 'handledAt' ? [{ handledAt: null }] : []),
        {
          [sort.field]: value,
          id: { lt: id },
        },
      ],
    };
  }

  // Store sort values in the cursor: the anchor can be moderated or deleted before the next request.
  if (status === BruteReportStatus.pending) {
    return {
      OR: [
        { count: { lt: count } },
        {
          count,
          date: { lt: date },
        },
        {
          count,
          date,
          id: { lt: id },
        },
      ],
    };
  }

  if (handledAt === null) {
    return {
      handledAt: null,
      id: { lt: id },
    };
  }

  return {
    OR: [
      { handledAt: { lt: handledAt } },
      { handledAt: null },
      {
        handledAt,
        id: { lt: id },
      },
    ],
  };
};
