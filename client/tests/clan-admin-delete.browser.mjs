import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import {
  mkdtempSync, realpathSync, rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import {
  basename, dirname, join,
} from 'node:path';
import { createServer } from 'vite';

const entry = `
import React from 'react';
import {createRoot} from 'react-dom/client';
import {MemoryRouter, Routes, Route} from 'react-router';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {ClanAdminView} from '/src/views/admin/ClanAdminView.tsx';
import {ConfirmProvider} from '/src/hooks/useConfirm.tsx';
import fixture from 'virtual:clan-data';
dayjs.extend(utc);
const h = React.createElement;
createRoot(document.getElementById('root')).render(
  h(MemoryRouter, {initialEntries:['/clan/ghost']},
    h(LocalizationProvider, {dateAdapter:AdapterDayjs},
      h(ConfirmProvider, {}, h(Routes, {},
        h(Route, {path:'/clan/:clanId', element:h(ClanAdminView)})))))
);
const wait = async fn => {
  for (let i=0;i<300;i++) {
    if (fn()) return;
    await new Promise(resolve => setTimeout(resolve,20));
  }
  throw new Error('Timed out: '+fn);
};
const button = label => [...document.querySelectorAll('button')].find(b => b.textContent === label);
const check = (value, message) => {if (!value) throw new Error(message);};
(async () => {
  await wait(() => button('Delete clan'));
  button('Delete clan').click();
  await wait(() => document.querySelector('[role="dialog"]'));
  check(fixture.deletes === 0, 'Deleted before confirmation');
  button('cancel').click();
  await wait(() => !document.querySelector('[role="dialog"]'));
  check(fixture.deletes === 0, 'Cancel deleted the clan');
  button('Delete clan').click();
  await wait(() => button('continue'));
  button('continue').click();
  await wait(() => fixture.alerts.some(a => a[0] === 'error'));
  await wait(() => getComputedStyle(button('Delete clan')).cursor === 'pointer');
  button('Delete clan').click();
  await wait(() => button('continue'));
  button('continue').click();
  await wait(() => fixture.alerts.some(a => a[1] === 'Clan deleted'));
  check(fixture.deletes === 2, 'Unexpected deletion count');
  await wait(() => getComputedStyle(button('Delete clan')).cursor === 'not-allowed');
  await wait(() => !document.querySelector('[role="dialog"]'));
  button('Delete clan').click();
  await new Promise(resolve => setTimeout(resolve, 50));
  check(!document.querySelector('[role="dialog"]'), 'Deleted clan can be deleted again');
  document.getElementById('result').textContent = 'passed';
})().catch(error => {document.getElementById('result').textContent = error.stack;});
`;

const data = `
const clan = {id:'ghost',name:'Ghost clan',deletedAt:null,masterId:'deleted-brute',
  limit:10,points:0,elo:1000,boss:'GoldClaw',damageOnBoss:0,participateInClanWar:false,brutes:[]};
const fixture = {deletes:0,alerts:[],Clan:{
  async getForAdmin() {return clan;},
  async adminDelete(id) {
    if (id !== clan.id) throw new Error('Wrong clan');
    fixture.deletes++;
    if (fixture.deletes === 1) throw new Error('Simulated failure');
  }
}};
export default fixture;
`;

const server = await createServer({
  root: process.cwd(),
  configFile: false,
  appType: 'custom',
  optimizeDeps: { include: ['@labrute/prisma'] },
  server: {
    host: '127.0.0.1',
    port: 0,
    hmr: false,
  },
  plugins: [{
    name: 'clan-admin-fixture',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source === '/clan-entry.jsx' || source === 'virtual:clan-data') {
        return '\0' + source;
      }

      if (importer?.replaceAll('\\', '/').endsWith('/views/admin/ClanAdminView.tsx')) {
        const mocks = {
          '../../hooks/useAuth': 'auth',
          '../../hooks/useServer': 'server',
          '../../hooks/useAlert': 'alert',
          '../../components/Page': 'page',
        };

        if (mocks[source]) {
          return '\0clan-' + mocks[source];
        }
      }
    },
    load(id) {
      switch (id) {
        case '\0/clan-entry.jsx': return entry;
        case '\0virtual:clan-data': return data;
        case '\0clan-auth': return 'export const useAuth=()=>({user:{admin:true,brutes:[]}});';
        case '\0clan-server': return 'import fixture from "virtual:clan-data"; export const useServer=()=>fixture;';
        case '\0clan-alert': return 'import fixture from "virtual:clan-data"; const alert={open:(...args)=>fixture.alerts.push(args)}; export const useAlert=()=>alert;';
        case '\0clan-page': return 'import React from "react"; export const Page=({children})=>React.createElement("main",{},children);';
        default: return null;
      }
    },
  }],
});

server.middlewares.use('/clan-fixture', async (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(await server.transformIndexHtml('/clan-fixture', '<!doctype html><html><body><div id="root"></div><pre id="result"></pre><script type="module" src="/clan-entry.jsx"></script></body></html>'));
});
await server.listen();
const browserDirectory = mkdtempSync(join(tmpdir(), 'labrute-clan-browser-'));

try {
  const browser = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--disable-extensions',
    '--user-data-dir=' + browserDirectory, '--dump-dom', '--virtual-time-budget=12000',
    'http://127.0.0.1:' + server.httpServer.address().port + '/clan-fixture',
  ], {
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let html = '';
  let errors = '';

  browser.stdout.on('data', chunk => {
    html += chunk;
  });
  browser.stderr.on('data', chunk => {
    errors += chunk;
  });
  const timeout = setTimeout(() => browser.kill(), 45000);

  try {
    await new Promise((resolve, reject) => {
      browser.on('exit', resolve);
      browser.on('error', reject);
    });
  } finally {
    clearTimeout(timeout);
  }

  const result = html.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];

  assert.equal(result, 'passed', result || errors.slice(-1500));
  console.log('Clan admin browser: confirmation, cancellation, failure retry and deletion passed');
} finally {
  await server.close();
  const target = realpathSync(browserDirectory);

  assert.equal(dirname(target), realpathSync(tmpdir()));
  assert.ok(basename(target).startsWith('labrute-clan-browser-'));
  rmSync(target, {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
}
