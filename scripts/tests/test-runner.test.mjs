import assert from 'node:assert/strict';
import {
  mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { createChecks, runChecks } from '../test.mjs';

const temporaryDirectory = () => mkdtempSync(path.join(os.tmpdir(), 'labrute test runner-'));

const cleanup = (directory) => {
  assert.equal(path.dirname(directory), os.tmpdir());
  rmSync(directory, {
    recursive: true,
    force: true,
  });
};

test('checks continue after failure, block dependent suites, and keep stdout/stderr in linked logs', async () => {
  const directory = temporaryDirectory();
  const logDirectory = path.join(directory, 'logs');
  let terminal = '';

  try {
    const results = await runChecks([
      {
        id: 'compile',
        label: 'Compile',
        cwd: directory,
        args: ['-e', 'console.log("build details"); console.error("build failed"); process.exitCode = 1;'],
      },
      {
        id: 'dependent',
        label: 'Requires compiled code',
        cwd: directory,
        args: ['-e', 'throw new Error("must not run")'],
        requires: ['compile'],
      },
      {
        id: 'independent',
        label: 'Independent tests',
        cwd: directory,
        args: ['-e', [
          'console.log("independent output");',
          'console.log("ℹ tests 3");',
          'console.log("ℹ pass 2");',
          'console.log("ℹ fail 0");',
          'console.log("ℹ skipped 1");',
        ].join('\n')],
      },
    ], logDirectory, {
      write: (text) => {
        terminal += text;
      },
    });

    assert.deepEqual(results.map((result) => result.status), ['FAIL', 'BLOCKED', 'PASS']);
    const buildLog = readFileSync(path.join(logDirectory, 'compile.log'), 'utf8');

    assert.match(buildLog, /build details/);
    assert.match(buildLog, /build failed/);
    assert.match(readFileSync(path.join(logDirectory, 'dependent.log'), 'utf8'), /prerequisite compile/);
    assert.match(readFileSync(path.join(logDirectory, 'summary.md'), 'utf8'), /\[Open log\]\(\.\/independent.log\)/);
    assert.match(terminal, /FAIL/);
    assert.match(terminal, /PASS/);
    assert.match(terminal, /2 passed, 0 failed, 1 skipped/);
    assert.ok(!terminal.includes('independent output'), 'detailed output belongs in logs');
  } finally {
    cleanup(directory);
  }
});

test('interruption stops the active check and marks remaining checks cancelled', async () => {
  const directory = temporaryDirectory();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 100);

  try {
    const checks = ['active', 'remaining'].map((id) => ({
      id,
      label: id,
      cwd: directory,
      args: ['-e', 'setInterval(() => {}, 1000);'],
    }));

    const results = await runChecks(checks, directory, { write() {} }, controller.signal);

    assert.deepEqual(results.map((result) => result.status), ['CANCELLED', 'CANCELLED']);
  } finally {
    clearTimeout(timer);
    cleanup(directory);
  }
});

test('discovery includes nested specs, browser checks, and script tests while excluding benchmarks/helpers', () => {
  const directory = temporaryDirectory();

  try {
    for (const relative of [
      'server/tests/nested/example.spec.mjs', 'client/tests/example.test.mjs',
      'client/tests/example.browser.mjs', 'scripts/tests/checker.test.mjs',
      'core/tests/example.test.ts', 'client/tests/example.bench.mjs', 'server/tests/helpers.mjs',
    ]) {
      const file = path.join(directory, relative);

      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, '');
    }

    const checks = createChecks(directory);

    assert.deepEqual(checks.map((check) => check.id), [
      'compile', 'client-types', 'server-tests', 'client-tests', 'core-tests',
      'scripts-tests', 'lint', 'i18n',
    ]);
    const client = checks.find((check) => check.id === 'client-tests');

    assert.ok(client.args.includes('--test-concurrency=1'));
    assert.ok(client.args.some((arg) => arg.endsWith('example.browser.mjs')));
    assert.ok(!checks.some((check) => check.args.some((arg) => /bench|helpers/.test(arg))));
    assert.deepEqual(checks.find((check) => check.id === 'scripts-tests').requires, []);
  } finally {
    cleanup(directory);
  }
});
