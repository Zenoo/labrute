import { GetResult } from '@fingerprintjs/fingerprintjs';
import { e } from '@labrute/core';

// A simple store for the fingerprint
let fingerprint: string | undefined;

export const setFingerprint = (f: string) => {
  fingerprint = f;
};

export const getFingerprint = () => fingerprint;

const k = (key: string) => key.replace(/([:|\\])/g, '\\$1');

const a = (x: Record<string, unknown>, y = '') => {
  let z: string[] = [];
  for (const w of Object.keys(x).sort()) {
    const v = x[w];
    const u = y ? `${y}.${w}` : w;
    const s = k(u);
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      z = z.concat(a(v as Record<string, unknown>, s));
    } else {
      z.push(`${s}:${JSON.stringify(v)}`);
    }
  }
  return z;
};

const b = (m: string) => {
  const n = m.split('');
  for (let o = 0; o < n.length; o++) {
    const p = (o * 13 + 7) % n.length;
    const temp1 = n[o] !== undefined ? n[o] : '';
    const temp2 = n[p] !== undefined ? n[p] : '';
    n[o] = typeof temp2 === 'string' ? temp2 : '';
    n[p] = typeof temp1 === 'string' ? temp1 : '';
  }
  let q = n.join('');
  const r = e(5);
  // eslint-disable-next-line no-bitwise
  q = Array.from(q).map((s, t) => String.fromCharCode(s.charCodeAt(0) ^ r.charCodeAt(t % r.length))).join('');
  q = q.split('').reverse().join('');
  q = btoa(q);
  const u = e(3);
  let v = '';
  for (let w = 0; w < q.length; w += 7) {
    v += q.slice(w, w + 7) + u;
  }
  return v;
};

export const formatFP = (input: GetResult): string => {
  const joined = a(input as unknown as Record<string, unknown>).join('|');
  return b(joined);
};
