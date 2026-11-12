import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import {
  ExpectedError, ForbiddenError, LimitError, MissingElementError, NotFoundError, InvalidAPIUseError,
} from '@labrute/core';

const logged = [];
const invalid = [];

mock.module('../lib/context.js', {
  namedExports: {
    DISCORD: () => ({
      sendError: (error) => logged.push(error),
      invalidAPIUse: (_res, id) => invalid.push(id),
    }),
  },
});
const { sendError } = await import('../lib/utils/sendError.js');

const response = () => ({
  status(code) {
    this.code = code;

    return this;
  },
  send(body) {
    this.body = body;
  },
});

test('expected forbidden, conflict and not-found errors keep their intended HTTP status', () => {
  for (const [error, code] of [[new ForbiddenError('Admin required'), 403],
    [new LimitError('Reload case'), 409], [new NotFoundError('Case missing'), 404],
    [new MissingElementError('Missing'), 501], [new ExpectedError('Invalid'), 500]]) {
    const res = response();

    sendError(res, error);
    assert.equal(res.code, code);
    assert.equal(res.body, error.message);
  }

  assert.equal(logged.length, 0);
});

test('unexpected errors still return 500 and preserve error telemetry', () => {
  const error = new Error('Database unavailable');
  const res = response();

  sendError(res, error);
  assert.equal(res.code, 500);
  assert.equal(logged.at(-1), error);
});

test('invalid API usage keeps its separate telemetry', () => {
  const error = new InvalidAPIUseError({ id: 'actor' }, 'Invalid API use');
  const res = response();
  const before = logged.length;

  sendError(res, error);
  assert.equal(res.code, 500);
  assert.equal(invalid.at(-1), 'actor');
  assert.equal(logged.length, before);
});
