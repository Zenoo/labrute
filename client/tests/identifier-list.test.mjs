import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let server;
let IdentifierList;

before(async () => {
  server = await createServer({
    configFile: false,
    ssr: { external: ['react', 'react-dom'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ IdentifierList } = await server.ssrLoadModule('/src/components/IdentifierList.tsx'));
});

after(async () => { await server?.close(); });

for (const highlighted of [false, true]) {
  test(`stored markup is escaped, including highlighted identifiers (${highlighted})`, () => {
    const payload = '<img src=x onerror="alert(1)"><script>alert(1)</script>&';
    const html = renderToStaticMarkup(React.createElement(IdentifierList, {
      values: [payload], highlightedValues: highlighted ? [payload] : [],
    }));
    const escaped = '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;&amp;';
    assert.equal(html, `<div>${highlighted ? `<b>${escaped}</b>` : escaped}</div>`);
    assert.doesNotMatch(html, /<(img|script)\b/i);
  });
}

test('identifiers remain on separate lines, matches are bold, and duplicates are deduplicated', () => {
  assert.equal(renderToStaticMarkup(React.createElement(IdentifierList, {
    values: ['shared', 'other', 'shared'], highlightedValues: ['shared'],
  })), '<div><b>shared</b></div><div>other</div>');
  assert.equal(renderToStaticMarkup(React.createElement(IdentifierList, {
    values: [], highlightedValues: [],
  })), '');
});
