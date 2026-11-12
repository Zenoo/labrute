import assert from 'node:assert/strict';
import {
  after, before, test,
} from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { createServer } from 'vite';

let server;
let Evidence;

before(async () => {
  server = await createServer({
    configFile: false,
    ssr: { external: ['react', 'react-dom', 'react-router'] },
    optimizeDeps: {
      noDiscovery: true,
      entries: [],
    },
    server: {
      middlewareMode: true,
      watch: null,
      hmr: false,
    },
  });
  ({ MultipleAccountCaseEvidence: Evidence } = await server.ssrLoadModule('/src/components/admin/MultipleAccountCaseEvidence.tsx'));
});
after(async () => server?.close());

test('case evidence escapes stored identifiers, names, exemptions and review reasons', () => {
  const attack = '<img src=x onerror=alert(1)>';
  const now = new Date('2026-11-11T12:00:00Z');

  const detail = {
    case: {
      id: 'a'.repeat(64),
      signal: 'browser',
      ruleVersion: 1,
      accountCount: 4,
      threshold: 3,
      status: 'open',
      firstSeen: now,
      lastSeen: now,
      windowStart: now,
      windowEnd: now,
      browserId: attack,
      fingerprint: attack,
      ip: attack,
      excludedCount: 1,
    },
    users: [{
      id: attack,
      name: attack,
      bannedAt: null,
    }],
    exemptions: [{
      userId: attack,
      browserId: attack,
      reason: attack,
      createdAt: now,
    }],
    reviews: [{
      id: 'review',
      reviewerId: attack,
      decision: 'dismissed',
      reason: attack,
      createdAt: now,
    }],
  };

  const html = renderToStaticMarkup(
    React.createElement(MemoryRouter, {}, React.createElement(Evidence, { detail })),
  );

  assert.ok(!html.includes('<img'));
  assert.ok(html.includes('&lt;img'));
  assert.ok(html.includes('does not ban accounts'));
  assert.ok(html.includes('Uncalibrated signal'));
  assert.ok(html.includes('Latest 25 review decisions'));
});

test('deleted accounts remain identifiable and truncated exemption context is labelled', () => {
  const now = new Date();

  const detail = {
    case: {
      signal: 'browser',
      ruleVersion: 1,
      accountCount: 4,
      threshold: 3,
      status: 'open',
      firstSeen: now,
      lastSeen: now,
      windowStart: now,
      windowEnd: now,
      excludedCount: 101,
    },
    users: [{
      id: 'deleted-id',
      name: null,
      bannedAt: null,
    }],
    exemptions: [],
    reviews: [],
  };

  const html = renderToStaticMarkup(
    React.createElement(MemoryRouter, {}, React.createElement(Evidence, { detail })),
  );

  assert.ok(html.includes('Deleted account'));
  assert.ok(html.includes('deleted-id'));
  assert.ok(html.includes('first 100 excluded pairs'));
  assert.ok(html.includes('No review decisions yet'));
});
