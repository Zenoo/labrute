import { spawn } from 'node:child_process';
import {
  closeSync, existsSync, mkdirSync, openSync, readdirSync, readFileSync, writeFileSync, writeSync,
} from 'node:fs';
import path from 'node:path';
import { once } from 'node:events';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repository = fileURLToPath(new URL('../', import.meta.url));

/** Discover executable tests, including nested specs, without accidentally running benchmarks/helpers. */
const findTests = (directory) => {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return findTests(fullPath);
    }

    return /\.(?:test|spec|browser)\.(?:[cm]?[jt]s)$/.test(entry.name) ? [fullPath] : [];
  }).sort();
};

export const createChecks = (root) => {
  const tool = (name) => path.join(root, 'node_modules', name);

  const checks = [
    {
      id: 'compile',
      label: 'Compile shared/server',
      cwd: root,
      args: [tool('typescript/bin/tsc'), '-b', 'tsconfig.build.json'],
    },
    {
      id: 'client-types',
      label: 'Client type-check',
      cwd: root,
      args: [tool('typescript/bin/tsc'), '-b', 'client/tsconfig.json'],
      requires: ['compile'],
    },
  ];

  for (const workspace of ['server', 'client', 'core', 'scripts']) {
    const files = findTests(path.join(root, workspace, 'tests'));

    if (!files.length) {
      continue;
    }

    checks.push({
      id: `${workspace}-tests`,
      label: `${workspace} tests (${files.length} files)`,
      cwd: path.join(root, workspace),
      args: [
        '--experimental-transform-types', '--experimental-test-module-mocks',
        '--test', '--test-reporter=spec',
        // Client suites create Vite servers and browser sessions; keep them serialized.
        ...(workspace === 'client' ? ['--test-concurrency=1'] : []),
        ...files,
      ],
      requires: workspace === 'scripts' ? [] : ['compile'],
    });
  }

  checks.push(
    {
      id: 'lint',
      label: 'ESLint',
      cwd: root,
      args: [tool('eslint/bin/eslint.js'), '.'],
    },
    {
      id: 'i18n',
      label: 'Translation checks',
      cwd: root,
      args: ['--loader', 'ts-node/esm', 'scripts/checkI18n.ts'],
    },
  );

  return checks;
};

/** Keep stdout/stderr in one log per check, continuing even when a different check fails. */
export const runChecks = async (checks, logDirectory, output = process.stdout, cancellation) => {
  mkdirSync(logDirectory, { recursive: true });
  const results = [];

  for (const check of checks) {
    const logPath = path.join(logDirectory, `${check.id}.log`);

    const dependency = check.requires?.find((id) => !results.some(
      (result) => result.id === id && result.status === 'PASS',
    ));

    const result = {
      id: check.id,
      label: check.label,
      status: 'BLOCKED',
      seconds: 0,
      logPath,
    };

    if (cancellation?.aborted) {
      result.status = 'CANCELLED';
      writeFileSync(logPath, 'Not run: verification was interrupted.\n');
    } else if (dependency) {
      writeFileSync(logPath, `Not run: prerequisite ${dependency} did not pass.\n`);
    } else {
      output.write(`Running ${check.label}...\n`);
      const started = performance.now();
      const descriptor = openSync(logPath, 'w');
      let interrupt;

      try {
        writeSync(descriptor, `${check.label}\nDirectory: ${check.cwd}\nArguments: ${JSON.stringify(check.args)}\n\n`);

        const child = spawn(process.execPath, check.args, {
          cwd: check.cwd,
          env: {
            ...process.env,
            FORCE_COLOR: undefined,
            NO_COLOR: '1',
          },
          // Direct file descriptors avoid buffering noisy suites in memory or the terminal.
          stdio: ['ignore', descriptor, descriptor],
        });

        interrupt = () => child.kill('SIGINT');
        cancellation?.addEventListener('abort', interrupt, { once: true });
        const [code, signal] = await once(child, 'close');

        result.status = code === 0 ? 'PASS' : 'FAIL';

        if (cancellation?.aborted) {
          result.status = 'CANCELLED';
        }

        writeSync(descriptor, `\nExit: ${signal ?? code}\n`);
      } catch (error) {
        result.status = 'FAIL';
        writeSync(descriptor, `\nCould not run check: ${error.message}\n`);
      } finally {
        if (interrupt) {
          cancellation?.removeEventListener('abort', interrupt);
        }

        closeSync(descriptor);
        result.seconds = Math.round((performance.now() - started) / 100) / 10;
      }
    }

    // The spec reporter emits these aggregate counts after all files, including browser checks.
    const counts = [...readFileSync(logPath, 'utf8').matchAll(/^ℹ (tests|pass|fail|skipped) (\d+)\r?$/gm)];

    if (counts.length) {
      result.tests = Object.fromEntries(counts.map((match) => [match[1], Number(match[2])]));
    }

    results.push(result);
  }

  const details = (result) => result.tests
    ? `${result.tests.pass} passed, ${result.tests.fail} failed, ${result.tests.skipped} skipped` : '';

  const rows = results.map((result) => [
    result.status.padEnd(7),
    result.label.padEnd(30),
    `${result.seconds}s`.padStart(7),
    path.basename(result.logPath),
    details(result),
  ].join('  '));

  const passed = results.filter((result) => result.status === 'PASS').length;
  const outcome = results.every((result) => result.status === 'PASS') ? 'PASS' : 'FAIL';

  output.write(`\n${outcome}: ${passed}/${results.length} checks passed\n\n`);
  output.write(`${rows.join('\n')}\n\nReport: ${path.join(logDirectory, 'summary.md')}\n`);

  // Relative Markdown links open the detailed logs directly from VS Code's Markdown preview.
  const report = [
    '# Verification results',
    '',
    `**${outcome}: ${passed}/${results.length} checks passed**`,
    '',
    '| Result | Check | Duration | Tests | Log |',
    '| --- | --- | --- | --- | --- |',
    ...results.map((result) => `| ${result.status} | ${result.label} | ${result.seconds}s | ${details(result)} | [Open log](./${result.id}.log) |`),
    '',
    'Conditional database tests may skip when their opt-in environment variables are absent. See test logs for skips.',
    '',
  ];

  writeFileSync(path.join(logDirectory, 'summary.md'), report.join('\n'));

  return results;
};

// Importing the runner in its regression tests must not launch the repository's full suite.
if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  if (Number(process.versions.node.split('.')[0]) < 24) {
    throw new Error('pnpm test requires Node 24 or newer for module mocks and TypeScript tests.');
  }

  const run = `${new Date().toISOString().replace(/[:.]/g, '-')}-${process.pid}`;
  const logDirectory = path.join(repository, 'test-results', run);

  mkdirSync(logDirectory, { recursive: true });
  writeFileSync(path.join(repository, 'test-results', 'latest.txt'), `${run}/summary.md\n`);
  process.stdout.write(`Detailed logs: ${logDirectory}\n\n`);
  const controller = new AbortController();
  const interrupt = () => controller.abort();

  process.once('SIGINT', interrupt);

  try {
    const results = await runChecks(
      createChecks(repository), logDirectory, process.stdout, controller.signal,
    );

    process.exitCode = results.every((result) => result.status === 'PASS') ? 0 : 1;

    if (controller.signal.aborted) {
      process.exitCode = 130;
    }
  } finally {
    process.removeListener('SIGINT', interrupt);
  }
}
