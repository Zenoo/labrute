import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import {
  ForbiddenError, getXPForTargetLevel, getXPNeeded,
} from '@labrute/core';
import { BruteReportStatus } from '@labrute/prisma';
import { encodeReportCursor, reportContinuation } from '../lib/utils/reportPagination.js';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {},
    DISCORD: () => ({}),
  },
});
mock.module('../lib/utils/auth.js', {
  namedExports: {
    auth: async (_db, req, options) => {
      if (options.admin ? !req.admin : !req.admin && !req.moderator) {
        throw new ForbiddenError('Permission required');
      }

      return {
        id: 'admin',
        admin: !!req.admin,
      };
    },
  },
});
mock.module('../lib/utils/sendError.js', {
  namedExports: {
    sendError: (res, error) => res.status(error instanceof ForbiddenError ? 403 : 400)
      .send(error.message),
  },
});
mock.module('../lib/utils/trace.js', {
  namedExports: { traced: async (_name, callback) => callback() },
});
const { BruteReports } = await import('../lib/controllers/BruteReports.js');
const { Brutes } = await import('../lib/controllers/Brutes.js');
const { UserLogs } = await import('../lib/controllers/UserLogs.js');
const { listAdminRows } = await import('../lib/controllers/AdminLists.js');
const { adminGridQuery } = await import('../lib/utils/adminGridQuery.js');

const predicate = (kind, operator, value) => adminGridQuery({
  filter: {
    field: 'column',
    operator,
    value,
  },
}, { column: kind }).where;

test('text operators preserve literal patterns and include missing values in negated matches', () => {
  for (const operator of ['contains', 'equals', 'startsWith', 'endsWith']) {
    assert.deepEqual(predicate('text', operator, 'a_b%'), {
      column: {
        [operator]: 'a\\_b\\%',
        mode: 'insensitive',
      },
    });
  }

  for (const [operator, comparison] of [['doesNotContain', 'contains'], ['doesNotEqual', 'equals']]) {
    assert.deepEqual(predicate('nullableText', operator, 'ban'), {
      OR: [
        {
          column: {
            not: { [comparison]: 'ban' },
            mode: 'insensitive',
          },
        },
        { column: null },
      ],
    });
  }

  assert.deepEqual(predicate('nullableText', 'isEmpty'), {
    OR: [{ column: '' }, { column: null }],
  });
  assert.deepEqual(predicate('nullableText', 'isNotEmpty'), { column: { not: '' } });
  assert.deepEqual(predicate('text', 'isAnyOf', ['name', 'a_b%', 'name']), {
    OR: [
      {
        column: {
          equals: 'name',
          mode: 'insensitive',
        },
      },
      {
        column: {
          equals: 'a\\_b\\%',
          mode: 'insensitive',
        },
      },
    ],
  });
});

test('numeric operators respect integer boundaries and support multiple values', () => {
  for (const [operator, filter] of [
    ['>', { gte: -1 }], ['>=', { gte: -1 }], ['<', { lte: -2 }], ['<=', { lte: -2 }],
  ]) {
    assert.deepEqual(predicate('number', operator, '-1.5'), { column: filter });
  }

  assert.deepEqual(predicate('number', '>', '2147483647'), { OR: [] });
  assert.deepEqual(predicate('number', '!=', '1.5'), {});
  assert.deepEqual(predicate('number', '=', '0'), { column: 0 });
  assert.deepEqual(predicate('number', 'isAnyOf', ['0', '-2', '1.25']), { column: { in: [0, -2] } });
  assert.deepEqual(predicate('number', 'isEmpty'), { OR: [] });
  assert.deepEqual(predicate('number', 'isNotEmpty'), {});
});

test('date and single-select operators respect UTC days and declared values', () => {
  const date = new Date('2026-11-17T00:00:00Z');
  const next = new Date('2026-11-18T00:00:00Z');

  assert.deepEqual(predicate('nullableDate', 'not', '2026-11-17'), {
    OR: [{ column: { lt: date } }, { column: { gte: next } }],
  });
  assert.deepEqual(predicate('date', 'onOrBefore', '2026-11-17'), { column: { lt: next } });
  assert.deepEqual(predicate('date', 'onOrAfter', '2026-11-17'), { column: { gte: date } });
  assert.deepEqual(predicate('nullableDate', 'isEmpty'), { column: null });
  assert.deepEqual(predicate('nullableDate', 'isNotEmpty'), { column: { not: null } });
  assert.deepEqual(predicate(['BANNED', 'CREATE_BRUTE'], 'not', 'BANNED'), {
    column: { not: 'BANNED' },
  });
  assert.deepEqual(predicate(['BANNED'], 'isAnyOf', ['BANNED']), {
    column: { in: ['BANNED'] },
  });
  assert.throws(() => predicate(['BANNED'], 'isAnyOf', ['unknown']), /Invalid grid/);

  const userId = '11111111-1111-4111-8111-111111111111';

  assert.deepEqual(predicate('userId', 'isAnyOf', ['USER-' + userId, 'incomplete']), {
    column: { in: [userId] },
  });
});

const response = () => ({
  code: 200,
  status(code) {
    this.code = code;

    return this;
  },
  send(body) {
    this.body = body;
  },
  set(key, value) {
    this[key] = value;

    return this;
  },
});

test('admin ban pages read only currently banned users and include a continuation flag', async () => {
  const id = '22222222-2222-4222-8222-222222222222';
  const requests = [];
  const users = Array.from({ length: 21 }, () => ({ id }));

  const list = listAdminRows({
    user: {
      findMany: async (query) => {
        requests.push(query);

        return users.slice(query.skip, query.skip + query.take);
      },
    },
  });

  const params = { collection: 'banned-users' };
  const first = response();

  await list({
    admin: true,
    params,
    query: { search: `USER-${id}` },
  }, first);

  assert.equal(first.body.rows.length, 20);
  assert.equal(first.body.hasNext, true);
  assert.equal(first['Cache-Control'], 'private, no-store');
  assert.equal(requests[0].take, 21);
  assert.deepEqual(requests[0].where.bannedAt, { not: null });
  assert.deepEqual(requests[0].where.OR[0], { id });
  assert.deepEqual(Object.keys(requests[0].select), ['id', 'name', 'bannedAt', 'banReason']);

  const second = response();

  await list({
    admin: true,
    params,
    query: { page: '1' },
  }, second);
  assert.deepEqual(second.body, {
    rows: [{ id }],
    hasNext: false,
  });
  assert.equal(requests[1].skip, 20);

  const forbidden = response();

  await list({
    moderator: true,
    params,
    query: {},
  }, forbidden);
  assert.equal(forbidden.code, 403);
  assert.equal(requests.length, 2);
});

test('admin word pages apply literal search before reading the requested page', async () => {
  const list = listAdminRows({
    bannedWord: {
      findMany: async (query) => {
        assert.equal(query.skip, 60);
        assert.equal(query.take, 21);
        assert.deepEqual(query.where.word, {
          contains: 'a\\_b\\%',
          mode: 'insensitive',
        });

        return [{
          id: 'word',
          word: 'a_b%',
        }];
      },
    },
  });

  const res = response();

  await list({
    admin: true,
    params: { collection: 'banned-words' },
    query: {
      page: '3',
      search: 'a_b%',
    },
  }, res);
  assert.deepEqual(res.body, {
    rows: [{
      id: 'word',
      word: 'a_b%',
    }],
    hasNext: false,
  });
});

test('native grid sort and filter are applied before paging with a stable tie-breaker', async () => {
  const queries = [];

  const list = listAdminRows({
    brute: {
      findMany: async (query) => {
        queries.push(query);

        return [];
      },
    },
  });

  const params = { collection: 'brutes' };

  const grid = {
    sort: {
      field: 'level',
      direction: 'desc',
    },
    filter: {
      field: 'name',
      operator: 'contains',
      value: 'a_b%',
    },
  };

  await list({
    admin: true,
    params,
    query: {
      page: '2',
      grid: JSON.stringify(grid),
    },
  }, response());
  assert.deepEqual(queries[0].orderBy, [{ level: 'desc' }, { id: 'desc' }]);
  assert.deepEqual(queries[0].where.name, {
    contains: 'a\\_b\\%',
    mode: 'insensitive',
  });
  assert.equal(queries[0].skip, 40);
  assert.equal(queries[0].take, 21);

  const invalid = response();

  await list({
    admin: true,
    params,
    query: {
      grid: JSON.stringify({
        sort: {
          field: 'user',
          direction: 'asc',
        },
      }),
    },
  }, invalid);
  assert.equal(invalid.code, 400);
  assert.equal(queries.length, 1);
});

test('user logs apply the event filter before taking a page and indicate the exact last page', async () => {
  const userId = '11111111-1111-4111-8111-111111111111';
  const requests = [];

  const db = {
    userLog: {
      findMany: async (query) => {
        requests.push(query);

        return Array.from({ length: 40 }, (_, id) => ({ id }))
          .slice(query.skip, query.skip + query.take);
      },
    },
  };

  for (const page of [1, 2]) {
    const res = response();

    await UserLogs.list(db)({
      admin: true,
      body: {
        userIds: [userId],
        type: 'BANNED',
        page,
      },
    }, res);

    assert.equal(res.body.logs.length, 20);
    assert.equal(res.body.logs[0].id, (page - 1) * 20);
    assert.equal(res.body.hasNext, page === 1);
    assert.deepEqual(requests.at(-1).where, {
      userId: { in: [userId] },
      type: 'BANNED',
    });
    assert.deepEqual(requests.at(-1).orderBy, [{ date: 'desc' }, { id: 'desc' }]);
  }

  const invalid = response();

  await UserLogs.list(db)({
    admin: true,
    body: {
      userIds: [userId],
      page: 0,
    },
  }, invalid);
  assert.equal(invalid.code, 400);
  assert.equal(requests.length, 2);
});

// Evaluate the Prisma predicates against a changing result set, rather than stubbing page outputs.
const matches = (row, where) => Object.entries(where).every(([field, value]) => {
  if (field === 'OR') {
    return value.some((part) => matches(row, part));
  }

  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return row[field] !== null && row[field] < value.lt;
  }

  if (value instanceof Date) {
    return row[field]?.getTime() === value.getTime();
  }

  return row[field] === value;
});

for (const status of Object.values(BruteReportStatus)) {
  test(`reports continue after removed anchors and tied sort values: ${status}`, async () => {
    const rows = Array.from({ length: 47 }, (_, index) => ({
      id: String(1000 - index),
      status,
      count: 5,
      date: new Date('2026-11-01'),
      handledAt: status === 'pending' || index >= 35 ? null : new Date('2026-11-02'),
    }));

    const expected = rows.map((row) => row.id);

    const db = {
      bruteReport: {
        findMany: async ({
          where, take, skip, orderBy,
        }) => {
          assert.equal(skip, undefined);
          assert.equal(orderBy.at(-1).id, 'desc');

          return rows.filter((row) => matches(row, where)).slice(0, take);
        },
      },
    };

    const first = response();

    await BruteReports.list(db)({
      moderator: true,
      params: { status },
      query: {},
    }, first);
    assert.equal(first.body.reports.length, 20);
    const loaded = first.body.reports.map((row) => row.id);

    // Accept/refuse some loaded reports, including the cursor anchor itself.
    rows.splice(19, 1);
    rows.splice(3, 1);
    rows.splice(0, 1);
    let cursor = first.body.nextCursor;

    while (cursor) {
      const next = response();

      await BruteReports.list(db)({
        moderator: true,
        params: { status },
        query: { cursor },
      }, next);
      loaded.push(...next.body.reports.map((row) => row.id));
      cursor = next.body.nextCursor;
    }

    assert.deepEqual(loaded, expected);
    assert.equal(new Set(loaded).size, expected.length);
  });
}

test('report header sorting keeps a keyset cursor after the report anchor is removed', async () => {
  const sort = {
    field: 'count',
    direction: 'asc',
  };

  const filter = {
    field: 'bruteName',
    operator: 'contains',
    value: 'match',
  };

  const position = {
    id: 'anchor',
    count: 2,
    date: new Date('2026-11-01'),
    handledAt: null,
  };

  const cursor = encodeReportCursor(position, 'pending', sort);

  const prisma = {
    bruteReport: {
      findMany: async ({
        where, orderBy, take, skip,
      }) => {
        assert.equal(skip, undefined);
        assert.equal(take, 21);
        assert.deepEqual(orderBy, [{ count: 'asc' }, { id: 'desc' }]);
        assert.deepEqual(where, {
          status: 'pending',
          OR: [
            { count: { gt: 2 } },
            {
              count: 2,
              id: { lt: 'anchor' },
            },
          ],
          AND: {
            bruteName: {
              contains: 'match',
              mode: 'insensitive',
            },
          },
        });

        return [];
      },
    },
  };

  const res = response();

  await BruteReports.list(prisma)({
    moderator: true,
    params: { status: 'pending' },
    query: {
      cursor,
      grid: JSON.stringify({
        sort,
        filter,
      }),
    },
  }, res);
  assert.deepEqual(res.body, {
    reports: [],
    nextCursor: null,
  });
  assert.throws(() => reportContinuation(cursor, 'pending'));
});

test('report cursors reject malformed and cross-filter data; permissions precede reads', async () => {
  assert.throws(() => reportContinuation('garbage', 'pending'));

  const cursor = encodeReportCursor({
    id: 'x',
    count: 1,
    date: new Date(),
    handledAt: null,
  }, 'accepted');

  assert.throws(() => reportContinuation(cursor, 'pending'));
  const res = response();

  await BruteReports.list({})({
    params: { status: 'pending' },
    query: {},
  }, res);
  assert.equal(res.code, 403);
});

test('XP grants sum each intervening level, preserve excess XP and reject invalid targets', () => {
  assert.equal(getXPForTargetLevel({
    level: 3,
    xp: 2,
  }, 6), getXPNeeded(4) + getXPNeeded(5) + getXPNeeded(6));
  assert.equal(getXPForTargetLevel({
    level: 3,
    xp: 999,
  }, 6), 999);
  assert.equal(getXPForTargetLevel({
    level: 1,
    xp: 0,
  }, 2), getXPNeeded(2));

  for (const target of [0, 3, 2, 4.5, NaN, Infinity, '6', 10001]) {
    assert.throws(() => getXPForTargetLevel({
      level: 3,
      xp: 2,
    }, target));
  }
});

test('XP endpoint protects permissions, rejects deleted/missing brutes and detects concurrent changes', async () => {
  const brute = {
    id: 'brute',
    level: 3,
    xp: 2,
  };

  let writes = 0;
  let count = 1;
  let found = brute;

  const db = {
    brute: {
      findFirst: async ({ where }) => {
        assert.deepEqual(where, {
          id: brute.id,
          deletedAt: null,
        });

        return found;
      },
      updateMany: async ({ where, data }) => {
        writes++;
        assert.deepEqual(where, {
          ...brute,
          deletedAt: null,
        });
        assert.equal(data.xp, getXPForTargetLevel(brute, 6));

        return { count };
      },
    },
  };

  const invoke = async (admin, targetLevel = 6) => {
    const res = response();

    await Brutes.grantXP(db)({
      admin,
      params: { id: brute.id },
      body: { targetLevel },
    }, res);

    return res;
  };

  assert.equal((await invoke(false)).code, 403);
  assert.equal(writes, 0);
  assert.equal((await invoke(true, 3.5)).code, 400);
  assert.equal(writes, 0);
  const success = await invoke(true);

  assert.equal(success.body.addedXP, getXPForTargetLevel(brute, 6) - brute.xp);
  count = 0;
  assert.match((await invoke(true)).body, /changed/);
  found = null;
  assert.match((await invoke(true)).body, /not found/);
  assert.equal(writes, 2);
});
