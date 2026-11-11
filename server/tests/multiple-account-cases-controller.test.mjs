import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { ForbiddenError } from '@labrute/core';

const actorId = '11111111-1111-4111-8111-111111111111';
const calls = [];
mock.module('../lib/utils/auth.js', { namedExports: {
  auth: async (_prisma, req, options) => {
    assert.equal(options.admin, true);
    if (!req.admin) throw new ForbiddenError('Admin required');
    return { id: actorId };
  },
} });
mock.module('../lib/utils/multipleAccountCases.js', { namedExports: {
  listMultipleAccountCases: async (...args) => { calls.push(['list', ...args]); return { cases: [], nextCursor: null }; },
  getMultipleAccountCase: async (...args) => { calls.push(['get', ...args]); return { case: { id: args[1] } }; },
  reviewMultipleAccountCase: async (...args) => { calls.push(['review', ...args]); return { revision: 2 }; },
} });
mock.module('../lib/context.js', { namedExports: { DISCORD: () => ({}), LOGGER: {}, GLOBAL: {} } });
const { MultipleAccountCases } = await import('../lib/controllers/MultipleAccountCases.js');
const response = () => ({ status(code) { this.code = code; return this; }, send(body) { this.body = body; } });

test('case listing, evidence and review endpoints reject non-admins before reading or writing cases', async () => {
  const before = calls.length;
  for (const route of ['list', 'get', 'review']) {
    const res = response();
    await MultipleAccountCases[route]({})({ admin: false, query: {}, params: { id: 'a'.repeat(64) }, body: {} }, res);
    assert.equal(res.body, 'Admin required');
    assert.equal(res.code, 403);
  }
  assert.equal(calls.length, before);
});

test('review uses the authenticated reviewer ID and delegates bounded filters and detail pagination', async () => {
  const db = {};
  const id = 'a'.repeat(64);
  const req = { admin: true, query: { status: 'open', cursor: 'b'.repeat(64), offset: '25' },
    params: { id }, body: { revision: 1, decision: 'dismissed', reason: 'Reviewed', reviewerId: 'forged' } };
  await MultipleAccountCases.list(db)(req, response());
  assert.deepEqual(calls.at(-1), ['list', db, 'open', 'b'.repeat(64), undefined]);
  await MultipleAccountCases.get(db)(req, response());
  assert.deepEqual(calls.at(-1), ['get', db, id, '25']);
  await MultipleAccountCases.review(db)(req, response());
  assert.equal(calls.at(-1)[3], actorId);
});
