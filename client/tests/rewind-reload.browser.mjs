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
import { fileURLToPath } from 'node:url';

// Exercise real WebGL bind groups: Node tests cannot detect a disposed shader
// being submitted to Pixi's filter renderer.
const entry = `
import { Application, Text } from 'pixi.js';
import { MotionBlurFilter } from 'pixi-filters/motion-blur';
import { OutlineFilter } from 'pixi-filters/outline';
import { FightReversal } from '/src/utils/fight/utils/FightReversal.ts';

try {
  const app = new Application();
  await app.init({
    width: 320,
    height: 180,
    preference: 'webgl',
    autoStart: false,
  });
  document.body.appendChild(app.canvas);
  const speed = { current: 1 };
  const reversal = new FightReversal(app, [], speed, () => false);
  app.ticker.update(0);
  const tick = () => {
    app.ticker.update(app.ticker.lastTime + 40);
    app.render();
  };
  const text = new Text({
    text: 'RELOAD',
    style: {
      fontSize: 30,
      fill: 'white',
    },
  });
  const outline = new OutlineFilter();
  const blur = new MotionBlurFilter({
    velocity: [50, 0],
    kernelSize: 9,
    offset: -0.5,
  });
  text.position.set(100, 60);
  text.filters = [outline, blur];
  app.stage.addChild(text);
  reversal.startStep();
  tick();
  blur.velocityX = 0;
  tick();
  tick();
  const recording = reversal.finishStep();
  text.destroy();
  blur.destroy();

  for (const rate of [0.5, 1, 2]) {
    speed.current = rate;
    const playing = reversal.play(recording);
    app.render();
    for (let frame = 0; frame < 10; frame++) {
      tick();
    }

    await playing;

    if (app.stage.children.length) {
      throw new Error('Replay leaked text');
    }
  }

  reversal.destroy();
  outline.destroy();
  app.destroy(true, { children: true });
  document.getElementById('result').textContent = 'passed: WebGL Reload rewind at 0.5x, 1x, 2x';
} catch (error) {
  document.getElementById('result').textContent = 'failed: ' + error.stack;
}
`;

const server = await createServer({
  configFile: false,
  appType: 'custom',
  root: fileURLToPath(new URL('..', import.meta.url)),
  optimizeDeps: {
    entries: [],
    noDiscovery: true,
    include: ['pixi.js', 'pixi-filters/motion-blur', 'pixi-filters/outline', 'pixi-filters/adjustment'],
  },
  server: {
    host: '127.0.0.1',
    port: 0,
  },
  plugins: [{
    name: 'rewind-reload-fixture',
    resolveId(id) {
      if (id === '/rewind-reload-entry.js') {
        return '\0rewind-reload-entry';
      }
    },
    load(id) {
      if (id === '\0rewind-reload-entry') {
        return entry;
      }
    },
  }],
});

server.middlewares.use('/rewind-reload', async (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(await server.transformIndexHtml('/rewind-reload',
    '<!doctype html><html><body><pre id="result">pending</pre><script type="module" src="/rewind-reload-entry.js"></script></body></html>'));
});
await server.listen();
const profile = mkdtempSync(join(tmpdir(), 'labrute-rewind-browser-'));

try {
  const browser = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', '--no-first-run', '--disable-extensions', '--disable-background-networking',
    '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
    '--user-data-dir=' + profile, '--dump-dom', '--virtual-time-budget=15000',
    'http://127.0.0.1:' + server.httpServer.address().port + '/rewind-reload',
  ], {
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let html = '';
  let stderr = '';

  browser.stdout.on('data', (chunk) => {
    html += chunk;
  });
  browser.stderr.on('data', (chunk) => {
    stderr += chunk;
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

  console.log(result || stderr.slice(-1500));
  assert.match(result ?? '', /^passed:/);
} finally {
  await server.close();
  const target = realpathSync(profile);

  assert.equal(dirname(target), realpathSync(tmpdir()));
  assert.ok(basename(target).startsWith('labrute-rewind-browser-'));
  rmSync(target, {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
}
