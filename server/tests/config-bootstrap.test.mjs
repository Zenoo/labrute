import assert from 'node:assert/strict';
import { test } from 'node:test';
import Cryptr from 'cryptr';
import {
  emptyConfig, readConfig, readTelemetryConfig,
} from '../lib/config.js';

test('production telemetry boots before the database fingerprint secret is available', async () => {
  const env = { NODE_ENV: 'production' };
  const telemetry = readTelemetryConfig(env);

  assert.equal(telemetry.isProduction, true);
  assert.deepEqual(telemetry.eternaltwin, emptyConfig.eternaltwin);
  await assert.rejects(readConfig(env), /FP_AES_SECRET/);

  const secret = 'synthetic-fingerprint-secret-32!!';
  const cryptr = new Cryptr('synthetic-config-key');

  const database = {
    config: {
      findMany: async () => [
        {
          key: 'CRYPTR_SECRET',
          value: 'synthetic-config-key',
        },
        {
          key: 'FP_AES_SECRET',
          value: cryptr.encrypt(secret),
        },
      ],
    },
  };

  const config = await readConfig(env, database);

  assert.equal(config.fpAesSecret, secret);
  assert.deepEqual(readTelemetryConfig(env), {
    isProduction: config.isProduction,
    eternaltwin: config.eternaltwin,
  });

  // A successful telemetry bootstrap must not bypass full production validation.
  database.config.findMany = async () => [
    {
      key: 'CRYPTR_SECRET',
      value: 'synthetic-config-key',
    },
    {
      key: 'FP_AES_SECRET',
      value: cryptr.encrypt('short'),
    },
  ];

  await assert.rejects(readConfig(env, database), /FP_AES_SECRET/);
});

test('telemetry preserves legacy Eternaltwin environment aliases and modern precedence', async () => {
  const legacyEnv = {
    NODE_ENV: 'production',
    ETWIN_URL: 'https://legacy.example/',
    ETWIN_CLIENT_ID: 'legacy-client',
    ETWIN_CLIENT_SECRET: 'legacy-secret',
  };

  assert.deepEqual(readTelemetryConfig(legacyEnv).eternaltwin, {
    ...emptyConfig.eternaltwin,
    url: legacyEnv.ETWIN_URL,
    clientRef: legacyEnv.ETWIN_CLIENT_ID,
    secret: legacyEnv.ETWIN_CLIENT_SECRET,
  });

  const env = {
    ...legacyEnv,
    ETERNALTWIN_URL: 'https://modern.example/',
    ETERNALTWIN_CLIENT_REF: 'modern-client',
    ETERNALTWIN_SECRET: 'modern-secret',
    ETERNALTWIN_APP: 'custom-app',
    ETERNALTWIN_CHANNEL: 'custom-channel',
    FP_AES_SECRET: 'synthetic-fingerprint-secret-32!!',
  };

  const telemetry = readTelemetryConfig(env);
  const config = await readConfig(env);

  assert.deepEqual(telemetry.eternaltwin, {
    url: env.ETERNALTWIN_URL,
    clientRef: env.ETERNALTWIN_CLIENT_REF,
    secret: env.ETERNALTWIN_SECRET,
    app: env.ETERNALTWIN_APP,
    channel: env.ETERNALTWIN_CHANNEL,
  });
  assert.deepEqual(telemetry.eternaltwin, config.eternaltwin);
  assert.equal(readTelemetryConfig({}).isProduction, false);
});
