import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const checker = fileURLToPath(new URL('../checkI18n.ts', import.meta.url));
const loader = import.meta.resolve('ts-node/esm');

const runChecker = ({
  client = '', locales = {}, server = '', serverLocale = {},
}) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'labrute-i18n-'));
  const clientSource = path.join(root, 'client', 'src');
  const clientLocales = path.join(clientSource, 'i18n', 'locales', 'en');
  const serverSource = path.join(root, 'server', 'src');
  const serverLocales = path.join(root, 'server', 'i18n');

  try {
    fs.mkdirSync(clientLocales, { recursive: true });
    fs.mkdirSync(serverSource, { recursive: true });
    fs.mkdirSync(serverLocales, { recursive: true });
    fs.writeFileSync(path.join(clientSource, 'example.tsx'), client);
    fs.writeFileSync(path.join(serverSource, 'example.ts'), server);
    fs.writeFileSync(path.join(serverLocales, 'en.json'), JSON.stringify(serverLocale));

    // This key is registered indirectly in production and is an explicit checker exception.
    const namespaces = {
      common: { event: { started: 'Started' } },
      ...locales,
    };

    for (const [namespace, content] of Object.entries(namespaces)) {
      fs.writeFileSync(path.join(clientLocales, `${namespace}.json`), JSON.stringify(content));
    }

    // Run the actual package command against isolated input, without changing repository locales.
    const result = spawnSync(process.execPath, ['--loader', loader, checker], {
      cwd: root,
      encoding: 'utf8',
    });

    assert.equal(result.error, undefined);
    assert.match(result.stdout, /CLIENT I18N CHECK/, result.stderr);
    assert.match(result.stdout, /SERVER I18N CHECK/, result.stderr);

    return result;
  } finally {
    assert.equal(path.dirname(root), os.tmpdir());
    fs.rmSync(root, {
      recursive: true,
      force: true,
    });
  }
};

test('namespace arrays bind to the first namespace, with explicit keys and common fallback', () => {
  const result = runChecker({
    client: `
      const { t } = useTranslation(
        ['home', 'event'],
        { useSuspense: false },
      );
      t('heroTitle');
      t('event:title');
      t('shared');
    `,
    locales: {
      home: { heroTitle: 'Home' },
      event: { title: 'Event' },
      common: {
        shared: 'Shared',
        event: { started: 'Started' },
      },
    },
  });

  assert.equal(result.status, 0, result.stdout);
});

test('object aliases and tuple bindings support literal namespaces and hook options', () => {
  const result = runChecker({
    client: `
      const { t: homeT } = useTranslation('home', { useSuspense: false });
      const [eventT] = useTranslation(['event', 'home']);
      homeT('title');
      eventT('title');
    `,
    locales: {
      home: { title: 'Home' },
      event: { title: 'Event' },
    },
  });

  assert.equal(result.status, 0, result.stdout);
});

test('the default namespace, Trans keys, and plural suffixes remain supported', () => {
  const result = runChecker({
    client: `
      const { t } = useTranslation();
      t('count', { count: 2 });
      <Trans i18nKey="home:title" />;
    `,
    locales: {
      common: {
        event: { started: 'Started' },
        count_one: 'One',
        count_other: 'Many',
      },
      home: { title: 'Home' },
    },
  });

  assert.equal(result.status, 0, result.stdout);
});

test('genuinely missing, unmatched dynamic, and unused client/server keys still fail', () => {
  const result = runChecker({
    client: "const { t } = useTranslation(['home', 'event']); t('missing'); t(`absent.${state}`);",
    locales: { home: { obsolete: 'Unused' } },
    server: "translate('missingServer', user);",
    serverLocale: { obsoleteServer: 'Unused' },
  });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /home\.missing/);
  assert.match(result.stdout, /home\.absent\.\*/);
  assert.match(result.stdout, /home\.obsolete/);
  assert.match(result.stdout, /missingServer/);
  assert.match(result.stdout, /obsoleteServer/);
});

test('a secondary namespace cannot silently satisfy an unqualified first-namespace key', () => {
  const result = runChecker({
    client: "const { t } = useTranslation(['home', 'event']); t('onlyEvent');",
    locales: {
      home: {},
      event: { onlyEvent: 'Event only' },
    },
  });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /home\.onlyEvent/);
});
