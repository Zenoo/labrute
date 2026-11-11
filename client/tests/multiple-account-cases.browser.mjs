import { createServer } from 'vite';
import { spawn } from 'node:child_process';
import { mkdtempSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join } from 'node:path';

const data = `
const time = '2026-11-11T12:00:00Z';
const makeCase = (id, signal, count) => ({id: id.repeat(64), signal, accountCount: count,
  threshold: signal === 'browser' ? 3 : 30, status: 'open', revision: 1, ruleVersion: 1,
  appealCode: id.repeat(8)+'-'+id.repeat(4)+'-4'+id.repeat(3)+'-8'+id.repeat(3)+'-'+id.repeat(12),
  confidence: 'uncalibrated', detectedAt: time, firstSeen: time, lastSeen: time,
  windowStart: time, windowEnd: time, browserId: id + '-browser', excludedCount: 0});
const cases = [makeCase('a', 'fingerprint-ip', 31), makeCase('b', 'browser', 4), makeCase('c', 'browser', 5)];
const fixture = window.__fixture = { requests: [], errors: [], reviews: [], User: {
  async getForAdmin({identifier}) {
    fixture.requests.push(['profile',identifier]);
    return {duplicates:[],securityHistory:[{id:'audit',action:'ban',actorId:null,createdAt:time,
      reason:'Case-linked automatic ban'}],user:{id:identifier,name:'Profile case account',lang:'en',
      admin:false,moderator:false,connexionToken:'test',bruteLimit:3,gold:0,fightSpeed:1,
      backgroundMusic:true,dinorpgDone:null,createdAt:time,lastSeen:time,bannedAt:time,
      banReason:'multipleAccounts',brutes:[],achievements:[],displayVersusPage:false,
      alwaysDisplayScrubber:false,displayOpponentDetails:false,transferedBrutesCount:0,termsAccepted:true}};
  },
  async multipleAccounts(status, cursor, userId) {
    fixture.requests.push(['list', status, cursor]);
    if(userId) return {cases:[{...cases[0], accountAction:{caseId:cases[0].id, userId,
      policyVersion:1,status:'banned',reason:'Case-linked automatic ban',attempts:1,updatedAt:time}}],nextCursor:null};
    const rows = cases.filter(c => status === 'all' || c.status === status);
    return {cases: cursor ? rows.slice(2) : rows.slice(0, 2), nextCursor: !cursor && rows.length > 2 ? 'page2' : null};
  },
  async multipleAccountCase(id, offset = 0) {
    fixture.requests.push(['detail', id, offset]);
    const row = cases.find(c => c.id === id || ('MC-'+c.appealCode).toLowerCase() === id.trim().toLowerCase());
    if (id[0] === 'a') await new Promise(resolve => setTimeout(resolve, 180));
    return {case: {...row}, users: Array.from({length: Math.min(25, row.accountCount - offset)}, (_, i) =>
      ({id: id[0] + '-user-' + (offset+i), name: 'Account' + (offset+i), bannedAt: null})),
      nextAccountOffset: offset+25 < row.accountCount ? offset+25 : null, exemptions: [],
      reviews: fixture.reviews.filter(r => r.caseId === id)};
  },
  async reviewMultipleAccountCase(id, input) {
    fixture.requests.push(['review', id, input]);
    const row = cases.find(c => c.id === id);
    if (input.revision !== row.revision) throw new Error('stale review');
    row.revision++; row.status = input.decision;
    fixture.reviews.push({id: 'review', caseId: id, reviewerId: 'admin', ...input, createdAt: time});
    return {revision: row.revision};
  }
} };
export default fixture;
`;
const entry = `
import React from 'react';
import {createRoot} from 'react-dom/client';
import {MemoryRouter, Routes, Route} from 'react-router';
import {MultipleAccountsView} from '/src/views/admin/MultipleAccountsView.tsx';
import {UserAdminView} from '/src/views/admin/UserAdminView.tsx';
import fixture from 'virtual:case-data';
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(MemoryRouter, {}, React.createElement(MultipleAccountsView)));
const wait = async (fn) => { for(let i=0;i<300;i++){if(fn()) return; await new Promise(r=>setTimeout(r,20));} throw new Error('Timed out: '+fn); };
const button = (label) => [...document.querySelectorAll('button')].find(b => b.textContent.includes(label));
const assert = (condition, message) => {if(!condition) throw new Error(message);};
(async () => {
  await wait(() => button('fingerprint-ip'));
  button('Next cases').click();
  await wait(() => button('browser - 5'));
  button('Previous cases').click();
  await wait(() => button('fingerprint-ip'));
  button('fingerprint-ip').click();
  await wait(() => fixture.requests.some(r => r[0] === 'detail' && r[1][0] === 'a'));
  button('browser - 4').click();
  await wait(() => document.body.textContent.includes('b-browser'));
  await new Promise(r=>setTimeout(r,230));
  assert(!document.body.textContent.includes('a-browser'), 'stale response replaced current evidence');
  button('fingerprint-ip').click();
  await wait(() => document.body.textContent.includes('a-browser'));
  button('Next accounts').click();
  await wait(() => document.body.textContent.includes('Account25'));
  assert(!document.body.textContent.includes('Account0 ('), 'account pagination kept old users');
  button('Previous accounts').click();
  await wait(() => document.body.textContent.includes('Account0 ('));
  document.querySelectorAll('[role="combobox"]')[1]
    .dispatchEvent(new MouseEvent('mousedown', {bubbles:true, button:0}));
  await wait(() => [...document.querySelectorAll('[role="option"]')].some(x => x.textContent === 'Needs action'));
  [...document.querySelectorAll('[role="option"]')].find(x => x.textContent === 'Needs action').click();
  const input = document.querySelector('textarea');
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(input, 'Review <b>literal</b> evidence');
  input.dispatchEvent(new Event('input', {bubbles:true}));
  await wait(() => !button('Save review').disabled);
  button('Save review').click();
  await wait(() => fixture.reviews.length === 1 && document.body.textContent.includes('Review <b>literal</b> evidence'));
  assert(!document.querySelector('b'), 'review text was interpreted as HTML');
  assert(fixture.requests.filter(r => r[0] === 'review').length === 1, 'duplicate review');
  assert(fixture.reviews[0].caseId[0] === 'a', 'review saved for wrong selection');
  const appealInput = document.querySelector('input');
  const appealCode = 'MC-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(appealInput, appealCode);
  appealInput.dispatchEvent(new Event('input', {bubbles:true}));
  await wait(() => !button('Find appeal').disabled);
  button('Find appeal').click();
  await wait(() => document.body.textContent.includes('b-browser'));
  assert(document.body.textContent.includes(appealCode), 'appeal did not resolve the requested case');
  assert(fixture.errors.length === 0, JSON.stringify(fixture.errors));
  root.render(React.createElement(MemoryRouter, {key:'profile', initialEntries:['/admin-panel/user/11111111-1111-4111-8111-111111111111']},
    React.createElement(Routes,{},React.createElement(Route,{path:'/admin-panel/user/:id', element:React.createElement(UserAdminView)}))));
  await wait(() => document.body.textContent.includes('Case-linked automatic ban'));
  assert(document.body.textContent.includes('Multiple-account cases and automatic actions'), 'profile missing cases');
  assert(!document.body.textContent.includes('Users sharing fingerprints'), 'legacy fingerprint table still mounted');
  assert(!document.body.textContent.includes('Users sharing browser IDs'), 'legacy browser table still mounted');
  assert([...document.querySelectorAll('a')].some(a => a.getAttribute('href')?.includes('/admin-panel/multiple-accounts?case=')), 'profile missing case deep link');
  assert(document.body.textContent.includes('Latest 25 account sanction decisions'), 'profile missing audit trail');
  document.body.dataset.caseResult = 'passed';
  document.getElementById('result').textContent = JSON.stringify({result:'passed', requests:fixture.requests.length,
    checks:['case pagination','account pagination','stale response discarded','reason escaped','review saved once','appeal code lookup','user profile uses cases and action audit']});
})().catch(error => {document.body.dataset.caseResult='failed';document.getElementById('result').textContent=error.stack;});
`;

const server = await createServer({ root: process.cwd(), configFile: false, appType: 'custom',
  optimizeDeps: { include: ['@labrute/prisma'] },
  server: { host: '127.0.0.1', port: 0, hmr: false },
  plugins: [{ name: 'case-fixture', enforce: 'pre',
    resolveId(source, importer) {
      if (source === 'virtual:case-data' || source === '/case-entry.jsx') return '\0' + source;
      if (importer && /\/(?:views\/admin\/(?:MultipleAccountsView|UserAdminView)|components\/admin\/UserCasePanel)\.tsx$/.test(importer.replaceAll('\\', '/'))) {
        if (source.endsWith('/hooks/useAuth')) return '\0case-auth';
        if (source.endsWith('/hooks/useServer')) return '\0case-server';
        if (source.endsWith('/hooks/useAlert')) return '\0case-alert';
        if (source.endsWith('/components/Page')) return '\0case-page';
      }
    },
    load(id) {
      if (id === '\0virtual:case-data') return data;
      if (id === '\0/case-entry.jsx') return entry;
      if (id === '\0case-auth') return 'const user={admin:true}; export const useAuth=()=>({user});';
      if (id === '\0case-server') return 'import data from "virtual:case-data"; export const useServer=()=>data;';
      if (id === '\0case-alert') return 'import data from "virtual:case-data"; const alert={open:(...args)=>data.errors.push(args)}; export const useAlert=()=>alert;';
      if (id === '\0case-page') return 'import React from "react"; export const Page=({children})=>React.createElement("main",{},children);';
    },
  }] });
server.middlewares.use('/case-fixture', async (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(await server.transformIndexHtml('/case-fixture', '<!doctype html><html><body><div id="root"></div><pre id="result"></pre><script type="module" src="/case-entry.jsx"></script></body></html>'));
});
await server.listen();
const browserDir = mkdtempSync(join(tmpdir(), 'labrute-case-browser-'));
console.log('BROWSER_DIR=' + browserDir);
try {
  const browser = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--disable-extensions', '--disable-background-networking',
    '--user-data-dir=' + browserDir, '--dump-dom', '--virtual-time-budget=10000',
    'http://127.0.0.1:' + server.httpServer.address().port + '/case-fixture',
  ], { windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
  let html = '';
  let stderr = '';
  browser.stdout.on('data', chunk => {html += chunk;});
  browser.stderr.on('data', chunk => {stderr += chunk;});
  const timeout = setTimeout(() => browser.kill(), 45000);
  await new Promise((resolve, reject) => {browser.on('exit', resolve);browser.on('error', reject);});
  clearTimeout(timeout);
  const result = html.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];
  console.log('BROWSER_RESULT=' + (result || 'missing result'));
  if (!html.includes('data-case-result="passed"')) {
    console.log(stderr.slice(-1500));
    process.exitCode = 1;
  }
} finally {
  await server.close();
  const target = realpathSync(browserDir);
  if (dirname(target) !== realpathSync(tmpdir()) || !basename(target).startsWith('labrute-case-browser-')) {
    throw new Error('Unexpected browser cleanup directory');
  }
  rmSync(target, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
}
