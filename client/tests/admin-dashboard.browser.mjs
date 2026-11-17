import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import {
  mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import {
  basename, dirname, join, resolve,
} from 'node:path';
import { createServer } from 'vite';

const entry = `
import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MemoryRouter, Routes, Route, Link} from 'react-router';
import {ThemeProvider, useTheme} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {AdminDashboard} from '/src/layouts/AdminDashboard.tsx';
import {AdminView} from '/src/views/admin/AdminView.tsx';
import {AdminDirectoryView} from '/src/views/admin/AdminDirectoryView.tsx';
import {ReportAdminView} from '/src/views/admin/ReportAdminView.tsx';
import {BruteAdminView} from '/src/views/admin/BruteAdminView.tsx';
import {ClanAdminView} from '/src/views/admin/ClanAdminView.tsx';
import {UserAdminView} from '/src/views/admin/UserAdminView.tsx';
import {BannedUsersView} from '/src/views/BannedUsersView.tsx';
import {KnownFingerprintsView} from '/src/views/KnownFingerprintsView.tsx';
import {BannedWordsAdminView} from '/src/views/admin/BannedWordsAdminView.tsx';
import {UserLogView} from '/src/views/admin/UserLogView.tsx';
import {AlertProvider} from '/src/hooks/useAlert.tsx';
import {ColorModeContext} from '/src/theme/ColorModeContext.tsx';
import {light} from '/src/theme/light.ts';
import {dark} from '/src/theme/dark.ts';
import {LS_KEY_THEME, LS_KEY_ADMIN_THEME} from '/src/utils/constants.ts';
import fixture from 'virtual:dashboard-data';
dayjs.extend(utc);
const h=React.createElement;
localStorage.setItem(LS_KEY_THEME,'light');
localStorage.setItem(LS_KEY_ADMIN_THEME,'light');
function Game() {
  const theme=useTheme();
  const colorMode=React.useContext(ColorModeContext);
  return h('div',{},h('span',{'data-testid':'game-mode'},theme.palette.mode),
    h('button',{onClick:colorMode.toggleColorMode},'Toggle game mode'),
    h(Link,{to:'/admin-panel/report'},'Return to admin'));
}
function App() {
  const [mode,setMode]=useState('light');
  return h(ColorModeContext.Provider,{value:{toggleColorMode:()=>setMode(m=>{const next=m==='light'?'dark':'light';localStorage.setItem(LS_KEY_THEME,next);return next;})}},
    h(ThemeProvider,{theme:mode==='light'?light:dark},
      h(LocalizationProvider,{dateAdapter:AdapterDayjs},
        h(MemoryRouter,{initialEntries:['/admin-panel']},h(AlertProvider,{},h(Routes,{},
          h(Route,{path:'/',element:h(Game)}),
          h(Route,{path:'/admin-panel',element:h(AdminDashboard)},
            h(Route,{index:true,element:h(AdminView)}),
            h(Route,{path:'report',element:h(ReportAdminView)}),
            h(Route,{path:'banned-users',element:h(BannedUsersView)}),
            h(Route,{path:'known-fingerprints',element:h(KnownFingerprintsView)}),
            h(Route,{path:'banned-words',element:h(BannedWordsAdminView)}),
            h(Route,{path:'user/logs/:userId?',element:h(UserLogView)}),
            h(Route,{path:'user',element:h(AdminDirectoryView,{directory:'user'})}),
            h(Route,{path:'user/:id',element:h(UserAdminView)}),
            h(Route,{path:'clan',element:h(AdminDirectoryView,{directory:'clan'})}),
            h(Route,{path:'clan/:clanId',element:h(ClanAdminView)}),
            h(Route,{path:'brute',element:h(AdminDirectoryView,{directory:'brute'})}),
            h(Route,{path:'brute/:bruteName',element:h(BruteAdminView)}))))))));
}
createRoot(document.getElementById('root')).render(h(App));
const wait=async fn=>{for(let i=0;i<400;i++){if(fn())return;await new Promise(r=>setTimeout(r,20));}throw Error('Timeout '+fn);};
const check=(value,message)=>{if(!value)throw Error(message);};
const button=label=>[...document.querySelectorAll('button')].find(b=>b.textContent===label);
const nav=label=>[...document.querySelectorAll('nav a')].find(a=>a.textContent===label&&a.getClientRects().length);
const goNav=async label=>{if(innerWidth<900){document.querySelector('button[aria-label="Open navigation"]').click();await wait(()=>document.querySelector('[role="presentation"] nav'));}nav(label).click();await new Promise(r=>setTimeout(r,300));};
const menuPaper=()=>nav('Reports')?.closest('.MuiDrawer-paper');
const openMenu=async()=>{
 if(innerWidth<900){
   document.querySelector('button[aria-label="Open navigation"]').click();
 }
 await wait(()=>menuPaper()?.getBoundingClientRect().left===0);
 return menuPaper();
};
const closeMobileMenu=async()=>{
 if(innerWidth<900){
   document.querySelector('.MuiDrawer-root .MuiBackdrop-root').click();
   await wait(()=>!menuPaper());
 }
};
const checkColorScheme=(menu,mode)=>{
 check(getComputedStyle(document.documentElement).colorScheme===mode,'Page scrollbar scheme should be '+mode);
 check(getComputedStyle(menu).colorScheme===mode,'Navigation scrollbar scheme should be '+mode);
};
const grid=label=>document.querySelector('[role="grid"][aria-label="'+label+'"]');
const rows=label=>[...grid(label)?.querySelectorAll('[role="row"][data-id]')??[]];
const pageButton=(label,direction)=>grid(label)?.closest('.MuiDataGrid-root').querySelector('button[aria-label="Go to '+direction+' page"]');
const header=(label,field)=>grid(label).querySelector('[role="columnheader"][data-field="'+field+'"]');
const reportLinks=()=>rows('Reports').flatMap(row=>[...row.querySelectorAll('a')]).filter(a=>a.textContent.startsWith('Reported-'));
const input=label=>[...document.querySelectorAll('input')].find(i=>i.labels?.[0]?.textContent===label);
const setInput=(node,value)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(node,value);node.dispatchEvent(new Event('input',{bubbles:true}));};
const filterColumn=async (label,field)=>{
 header(label,field).querySelector('.MuiDataGrid-menuIcon button').click();
 const filterItem=()=>[...document.querySelectorAll('[role="menuitem"]')].find(item=>item.textContent==='Filter');
 await wait(filterItem);
 filterItem().click();
 const fieldInput=()=>document.querySelector('.MuiDataGrid-filterFormValueInput input');
 await wait(fieldInput);
 return fieldInput();
};
const closeFilter=()=>document.querySelector('main h1').click();
const operatorOptions=async ()=>{
 const select=document.querySelector('.MuiDataGrid-filterFormOperatorInput select, .MuiDataGrid-filterFormOperatorInput [role="combobox"]');
 if(select instanceof HTMLSelectElement) return [...select.options];
 select.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,button:0}));
 const options=()=>[...document.querySelectorAll('[role="option"]')];
 await wait(()=>options().length);
 return options();
};
const selectOperator=async label=>{
 const option=(await operatorOptions()).find(item=>item.textContent.toLowerCase()===label);
 check(option,'Missing grid operator: '+label);
 if(option instanceof HTMLOptionElement){
   option.parentElement.value=option.value;
   option.parentElement.dispatchEvent(new Event('change',{bubbles:true}));
 }else{
   option.click();
 }
};
(async()=>{
 await wait(()=>button('Delete daily tournaments'));
 button('Delete daily tournaments').click();
 await wait(()=>document.querySelector('[role="dialog"]'));
 check(fixture.maintenance===0,'Maintenance ran before confirmation');
 button('cancel').click();
 await wait(()=>!document.querySelector('[role="dialog"]'));
 check(fixture.maintenance===0,'Cancel ran maintenance');
 await goNav('Reports');
 await wait(()=>reportLinks().length===20);
 check(!document.querySelector('img[src*="header"]'),'Player header in dashboard');
 const menu=await openMenu();
 checkColorScheme(menu,'light');
 document.querySelector('button[aria-label="accept"]').click();
 await wait(()=>reportLinks().length===19);
 const alert=()=>document.querySelector('.MuiSnackbar-root [role="alert"]');
 await wait(()=>{
   if(!alert()) return false;
   const rect=alert().getBoundingClientRect();
   const x=Math.min(menu.getBoundingClientRect().right,rect.right)-8;
   const y=(rect.top+rect.bottom)/2;
   return x>rect.left && alert().contains(document.elementFromPoint(x,y));
 });
 await closeMobileMenu();
 pageButton('Reports','next').click();pageButton('Reports','next').click();
 await wait(()=>button('Retry'));
 check(reportLinks().length===19,'Failure discarded rows');
 button('Retry').click();
 await wait(()=>reportLinks()[0]?.textContent==='Reported-20');
 check(reportLinks().length===20,'Report pages were appended');
 check(fixture.requests.filter(x=>x.cursor==='20').length===2,'Duplicate load or retry changed cursor');
 pageButton('Reports','previous').click();
 await wait(()=>reportLinks()[0]?.textContent==='Reported-1');
 check(!reportLinks().some(a=>a.textContent==='Reported-0'),'Moderated report returned on previous page');
 const before=getComputedStyle(document.querySelector('main').parentElement).backgroundColor;
 document.querySelector('button[aria-label="Toggle color mode"]').click();
 await wait(()=>getComputedStyle(document.querySelector('main').parentElement).backgroundColor!==before
   && localStorage.getItem(LS_KEY_ADMIN_THEME)==='dark');
 checkColorScheme(await openMenu(),'dark');
 await closeMobileMenu();
 check(localStorage.getItem(LS_KEY_ADMIN_THEME)==='dark','Admin mode was not saved');
 check(localStorage.getItem(LS_KEY_THEME)==='light','Admin toggle changed the game preference');
 document.querySelector('a[href="/"]').click();
 await wait(()=>document.querySelector('[data-testid="game-mode"]')?.textContent==='light');
 check(getComputedStyle(document.documentElement).colorScheme==='normal','Dashboard color scheme leaked into the game');
 check(!getComputedStyle(document.documentElement).getPropertyValue('--labrute-snackbar-z-index'),'Dashboard notification layer leaked into the game');
 button('Toggle game mode').click();
 await wait(()=>document.querySelector('[data-testid="game-mode"]').textContent==='dark');
 check(localStorage.getItem(LS_KEY_ADMIN_THEME)==='dark','Game toggle changed the admin preference');
 button('Toggle game mode').click();
 await wait(()=>document.querySelector('[data-testid="game-mode"]').textContent==='light');
 document.querySelector('a[href="/admin-panel/report"]').click();
 await wait(()=>reportLinks().length===19);
 check(getComputedStyle(document.querySelector('main').parentElement).backgroundColor!==before,'Admin mode did not survive remount');
 check(document.querySelector('button[aria-label="Toggle color mode"] svg[data-testid="LightModeIcon"]'),'Admin did not retain dark mode');

 // A delayed accepted response must not contaminate the rejected filter.
 document.querySelector('input[value="accepted"]').click();
 document.querySelector('input[value="rejected"]').click();
 await wait(()=>document.querySelector('main').textContent.includes('No rejected reports'));
 await new Promise(r=>setTimeout(r,250));
 check(reportLinks().length===0,'Late filter response contaminated results');
 await goNav('Banned users');
 await wait(()=>button('Retry'));
 check(document.querySelector('main').textContent.includes('Results unavailable'),'Failed request looked like an empty ban list');
 button('Retry').click();
 await wait(()=>rows('Banned users').length===20);
 pageButton('Banned users','next').click();
 await wait(()=>rows('Banned users').length===1);
 document.querySelector('button[aria-label="Unban Player 20"]').click();
 await wait(()=>document.querySelector('[role="dialog"]'));
 button('continue').click();
 await wait(()=>rows('Banned users').length===20);
 const banFilter=await filterColumn('Banned users','name');
 setInput(banFilter,'PLAYER 01');
 await wait(()=>rows('Banned users').length===1);
 check(rows('Banned users')[0].textContent.includes('Player 01'),'Banned-user filter missed a matching row');
 setInput(banFilter,'missing');
 await wait(()=>grid('Banned users').textContent.includes('No matching banned users'));
 closeFilter();
 check(document.documentElement.scrollWidth<=innerWidth,'Banned users table overflows viewport');
 await goNav('Banned words');
 await wait(()=>rows('Banned words').length===20);
 check(fixture.listRequests.filter(([kind])=>kind==='words').length===1,'Banned words prefetched later pages');
 pageButton('Banned words','next').click();
 await wait(()=>rows('Banned words')[0]?.textContent.includes('Word 20'));
 header('Banned words','word').click();
 await wait(()=>fixture.listRequests.at(-1)?.[2]?.sort?.direction==='asc');
 header('Banned words','word').click();
 await wait(()=>rows('Banned words')[0]?.textContent.includes('Word 20'));
 check(fixture.listRequests.at(-1)[1]===0,'Word sorting did not reset pagination');
 const wordFilter=await filterColumn('Banned words','word');
 setInput(wordFilter,'Word 01');
 await wait(()=>rows('Banned words')[0]?.textContent.includes('Word 01'));
 check(fixture.listRequests.at(-1)[2].filter.value==='Word 01','Word filter did not reach the server');
 await selectOperator('is empty');
 await wait(()=>fixture.listRequests.at(-1)?.[2]?.filter?.operator==='isEmpty');
 check(!('value' in fixture.listRequests.at(-1)[2].filter),'Blank operator sent a value');
 await selectOperator('is any of');
 const multiInput=()=>document.querySelector('.MuiDataGrid-filterFormValueInput input[role="combobox"]');
 for(const word of ['Word 01','Word 20']){
   await wait(multiInput);
   setInput(multiInput(),word);
   multiInput().dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
 }
 await wait(()=>fixture.listRequests.at(-1)?.[2]?.filter?.value?.length===2);
 check(JSON.stringify(fixture.listRequests.at(-1)[2].filter.value)===JSON.stringify(['Word 01','Word 20']),'Membership values were lost');
 await wait(()=>rows('Banned words').length===2);
 closeFilter();
 await goNav('Known fingerprints');
 await wait(()=>rows('Known fingerprints').length===2);
 header('Known fingerprints','description').click();
 await wait(()=>rows('Known fingerprints')[0]?.textContent.includes('Android'));
 const fingerprintFilter=await filterColumn('Known fingerprints','description');
 setInput(fingerprintFilter,'iOS');
 await wait(()=>rows('Known fingerprints').length===1 && rows('Known fingerprints')[0].textContent.includes('iOS'));
 check(fixture.fingerprintRequests===1,'A client-side column filter requested another page');
 closeFilter();
 await goNav('User logs');
 const userIds=input('User IDs');
 setInput(userIds,'11111111-1111-4111-8111-111111111111');
 userIds.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
 await wait(()=>rows('User logs').length===20);
 pageButton('User logs','next').click();
 await wait(()=>rows('User logs')[0]?.textContent.includes('Log 20'));
 await wait(()=>pageButton('User logs','next').disabled);
 check(rows('User logs').length===1,'User logs appended pages');
 const dateFilter=await filterColumn('User logs','date');
 setInput(dateFilter,'2026-11-02');
 await wait(()=>rows('User logs')[0]?.textContent.includes('was banned'));
 check(fixture.logRequests.at(-1).page===1,'Date filter did not reset log pagination');
 closeFilter();
 await goNav('Users');
 await wait(()=>rows('Users')[0]?.querySelector('a'));
 const userFilter=await filterColumn('Users','id');
 const appeal='USER-22222222-2222-4222-8222-222222222222';
 setInput(userFilter,appeal);
 await wait(()=>fixture.listRequests.some(([kind,page,query])=>kind==='users'&&page===0&&query.filter?.value===appeal));
 closeFilter();
 await wait(()=>rows('Users')[0]?.querySelector('a'));
 rows('Users')[0].querySelector('a').click();
 await wait(()=>document.querySelector('main').textContent.includes('Account ban information'));
 check(fixture.opened.at(-1)[1]===appeal.slice(5),'User detail did not open by ID');
 await goNav('Clans');
 await wait(()=>rows('Clans')[0]);
 rows('Clans')[0].click();
 await wait(()=>button('Delete clan'));
 check(fixture.opened.at(-1)[0]==='clan','Clan row did not open the editor');
 await goNav('Brutes');
 await wait(()=>rows('Brutes')[0]?.querySelector('a'));
 rows('Brutes')[0].querySelector('a').click();
 await wait(()=>input('Target level'));
 setInput(input('Target level'),'6');
 await wait(()=>!button('Grant XP').disabled);
 button('Grant XP').click();
 await wait(()=>fixture.grants.length===1);
 await wait(()=>input('XP').value==='26');
 check(fixture.grants[0].id==='11111111-1111-4111-8111-111111111111'&&fixture.grants[0].target===6,'Wrong XP request');
 setInput(input('Target level'),'3.5');
 await wait(()=>button('Grant XP').disabled);
 check(document.documentElement.scrollWidth<=innerWidth,'Dashboard overflows viewport');
 document.getElementById('result').textContent='passed';
})().catch(e=>document.getElementById('result').textContent=e.stack);
`;

const data = `
const brute={id:'11111111-1111-4111-8111-111111111111',name:'Test',level:3,xp:2,gender:'male',ranking:0,body:'',colors:'',
 destinyPath:[],skills:[],weapons:[],pets:[],ascendedSkills:[],ascendedWeapons:[],ascendedPets:[],
 hpStat:10,hpValue:10,hpModifier:1,strengthStat:1,strengthValue:1,strengthModifier:1,
 agilityStat:1,agilityValue:1,agilityModifier:1,speedStat:1,speedValue:1,speedModifier:1,
 pupilsCount:0,currentTournamentStepWatched:0,fightsLeft:6,victories:0,tournamentWins:0,deletedAt:null};
const profile={id:'22222222-2222-4222-8222-222222222222',name:'Directory user',lastSeen:'2026-11-01',
 bannedAt:null,brutes:[],achievements:[],lang:'en',gold:0,bruteLimit:3};
const clan={id:'33333333-3333-4333-8333-333333333333',name:'Directory clan',deletedAt:null,
 limit:10,points:0,elo:1000,boss:'GoldClaw',damageOnBoss:0,participateInClanWar:false,brutes:[]};
let banned=Array.from({length:21},(_,i)=>({id:'user-'+i,name:'Player '+String(i).padStart(2,'0'),bannedAt:'2026-11-01',banReason:'spam'}));
const words=Array.from({length:21},(_,i)=>({id:'word-'+i,word:'Word '+String(i).padStart(2,'0')}));
function list(kind, data, page, query) {
  fixture.listRequests.push([kind,page,query]);
  const {filter,sort}=query;
  const matching=filter ? data.filter(row=>{
   const value=String(row[filter.field]??'');
   if(filter.operator==='isEmpty') return value==='';
   if(filter.operator==='isAnyOf') return filter.value.includes(value);
   return value.toLowerCase().includes(filter.value.replace(/^USER-/i,'').toLowerCase());
  }) : [...data];
  if(sort) matching.sort((a,b)=>String(a[sort.field]).localeCompare(String(b[sort.field]))*(sort.direction==='asc'?1:-1));
  return {rows:matching.slice(page*20,(page+1)*20),hasNext:matching.length>(page+1)*20};
}
const fixture={user:{admin:true,name:'Administrator',termsAccepted:true,brutes:[]},
 requests:[],logRequests:[],listRequests:[],opened:[],grants:[],maintenance:0,failed:false,accepted:false,banListFailed:false,fingerprintRequests:0,
 Tournament:{async isGlobalTournamentValid(){return {isValid:true};},async deleteDaily(){fixture.maintenance++;}},
 Admin:{
  async bannedUsers(page, query){
   if(!fixture.banListFailed){fixture.banListFailed=true;throw Error('Simulated banned-user request failure');}
   return list('bans',banned,page,query);
  },
  async bannedWords(page, query){return list('words',words,page,query);},
  async users(page, query){return list('users',[profile],page,query);},
  async brutes(page, query){return list('brutes',[brute],page,query);},
  async clans(page, query){return list('clans',[clan],page,query);},
 },
 User:{
  async getNextModifiers(){return {};},
  async knownFingerprintsList(){fixture.fingerprintRequests++;return [
   {id:'first',description:'iOS',createdAt:'2026-11-01'},
   {id:'second',description:'Android',createdAt:'2026-11-01'},
  ];},
  async unban({userId}){banned=banned.filter(user=>user.id!==userId);},
  async getForAdmin({identifier}){fixture.opened.push(['user',identifier]);return {user:profile,securityHistory:[],banHistory:[],duplicates:[]};},
  async multipleAccounts(){return {cases:[],nextCursor:null};},
 },
 Clan:{async getForAdmin(id){fixture.opened.push(['clan',id]);return clan;}},
 UserLog:{
  async list(params){
   fixture.logRequests.push(params);
   const {page,grid}=params;
   const type=grid.filter?.value==='2026-11-02'?'BANNED':undefined;
   return {
    logs:Array.from({length:page===1&&!type?20:1},(_,i)=>({id:String(i),userId:params.userIds[0],date:'2026-11-01',
     user:{name:'Log '+((page-1)*20+i)},type:type??'CONNECT'})),
    hasNext:page===1&&!type,
   };
  },
 },
 Brute:{async getForAdmin(){return {brute,duplicates:[]};},async grantXP(id,target){fixture.grants.push({id,target});return {xp:26,addedXP:24};}},
 BruteReport:{
  async list(status,cursor){
   fixture.requests.push({status,cursor});
   await new Promise(r=>setTimeout(r,status==='accepted'?180:30));
   if(cursor==='20'&&!fixture.failed){fixture.failed=true;throw Error('Simulated failure');}
   if(status==='rejected')return {reports:[],nextCursor:null};
   const start=Number(cursor||0);
   const reports=Array.from({length:20},(_,i)=>({id:String(start+i),count:1,bruteName:'Reported-'+(start+i),date:'2026-11-01',users:[]}));
   return {reports:fixture.accepted&&status==='pending'?reports.filter(row=>row.id!=='0'):reports,nextCursor:start===0?'20':null};
  },async accept(){await new Promise(r=>setTimeout(r,20));fixture.accepted=true;}
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
    resolveId(source) {
      if (source === '/dashboard-entry.jsx' || source === 'virtual:dashboard-data') {
        return '\0' + source;
      }

      const mocks = {
        '/hooks/useAuth': 'auth',
        '/hooks/useServer': 'server',
        '/hooks/useFingerprint': 'fingerprint',
        '/components/Brute/Body/BruteRender': 'portrait',
      };

      for (const [suffix, name] of Object.entries(mocks)) {
        if (source.endsWith(suffix) || source.endsWith(suffix.slice(1))) {
          return '\0dashboard-' + name;
        }
      }

    },
    load(id) {
      switch (id) {
        case '\0/dashboard-entry.jsx': return entry;
        case '\0virtual:dashboard-data': return data;
        case '\0dashboard-auth': return 'import fixture from "virtual:dashboard-data"; export const useAuth=()=>({user:fixture.user,authing:false,signin(){}});';
        case '\0dashboard-server': return 'import fixture from "virtual:dashboard-data"; export const useServer=()=>fixture;';
        case '\0dashboard-fingerprint': return 'export const useFingerprint=()=>({loading:false});';
        case '\0dashboard-portrait': return 'export const BruteRender=()=>null;';
        default: return null;
      }
    },
  }],
});

server.middlewares.use('/dashboard-fixture', async (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(await server.transformIndexHtml('/dashboard-fixture', '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id="root"></div><pre id="result"></pre><script type="module" src="/dashboard-entry.jsx"></script></body></html>'));
});
await server.listen();
const screenshots = resolve('../test-results/admin-dashboard');

mkdirSync(screenshots, { recursive: true });
const browserDirectory = mkdtempSync(join(tmpdir(), 'labrute-dashboard-browser-'));

const pause = (ms) => new Promise((resolveWait) => setTimeout(resolveWait, ms));
let browser;
let socket;

try {
  browser = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--disable-extensions',
    '--user-data-dir=' + browserDirectory, '--remote-debugging-port=0', 'about:blank',
  ], {
    windowsHide: true,
    stdio: 'ignore',
  });
  let port;

  for (let attempt = 0; attempt < 200; attempt++) {
    try {
      port = readFileSync(join(browserDirectory, 'DevToolsActivePort'), 'utf8').split('\n')[0];
      break;
    } catch {
      await pause(50);
    }
  }

  assert.ok(port, 'Chrome did not start');
  const targets = await (await fetch('http://127.0.0.1:' + port + '/json')).json();

  socket = new WebSocket(targets.find((target) => target.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolveOpen, reject) => {
    socket.addEventListener('open', resolveOpen, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
  const pending = new Map();
  let sequence = 0;

  socket.addEventListener('message', ({ data: message }) => {
    const result = JSON.parse(message);

    if (result.id) {
      const request = pending.get(result.id);

      pending.delete(result.id);

      if (result.error) {
        request.reject(new Error(JSON.stringify(result.error)));
      } else {
        request.resolve(result.result);
      }
    }
  });

  const command = (method, params = {}) => new Promise((resolveCommand, reject) => {
    const id = ++sequence;

    pending.set(id, {
      resolve: resolveCommand,
      reject,
    });
    socket.send(JSON.stringify({
      id,
      method,
      params,
    }));
  });

  const [width, height] = (process.env.DASHBOARD_WINDOW_SIZE || '1440,1000').split(',').map(Number);

  await command('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
  await command('Page.navigate', { url: 'http://127.0.0.1:' + server.httpServer.address().port + '/dashboard-fixture' });
  let result;

  for (let attempt = 0; attempt < 500; attempt++) {
    const evaluation = await command('Runtime.evaluate', {
      expression: 'document.getElementById("result")?.textContent',
      returnByValue: true,
    });

    result = evaluation.result.value;

    if (result) {
      break;
    }

    await pause(50);
  }

  const screenshot = await command('Page.captureScreenshot');

  writeFileSync(join(screenshots, width < 600 ? 'mobile.png' : 'desktop.png'), Buffer.from(screenshot.data, 'base64'));
  assert.equal(result, 'passed');
  console.log('Dashboard browser: table pagination, filters, retries, theme, navigation and XP passed at ' + width + 'px');

} finally {
  socket?.close();
  browser?.kill();

  if (browser && browser.exitCode === null) {
    await new Promise((resolveExit) => browser.once('exit', resolveExit));
  }

  await server.close();
  const target = realpathSync(browserDirectory);

  assert.equal(dirname(target), realpathSync(tmpdir()));
  assert.ok(basename(target).startsWith('labrute-dashboard-browser-'));
  rmSync(target, {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
}
