import { FORWARDED_FOR_HEADER, REAL_IP_HEADER } from '@labrute/core';
import type { Request } from 'express';
import { isIP } from 'node:net';

export const normalizeIp = (value: unknown): string | null => {
  if (typeof value !== 'string') return null;

  const ip = value.trim();

  if (!ip || ip.length > 45 || ip.includes('%')) return null;

  const family = isIP(ip);

  if (!family) return null;

  if (family === 4) return ip;

  const canonical = new URL(`http://[${ip}]/`).hostname.slice(1, -1);
  const mapped = /^::ffff:([a-f0-9]+):([a-f0-9]+)$/.exec(canonical);

  if (!mapped) return canonical;

  const high = parseInt(mapped[1] ?? '', 16);
  const low = parseInt(mapped[2] ?? '', 16);

  return `${Math.floor(high / 256)}.${high % 256}.${Math.floor(low / 256)}.${low % 256}`;
};

const firstHeaderIp = (value: unknown) => {
  if (typeof value !== 'string') return null;

  const separator = value.indexOf(',');

  return normalizeIp(separator < 0 ? value : value.slice(0, separator));
};

type IpRequest = Pick<Request, 'headers' | 'socket'>;
const clientIps = new WeakMap<IpRequest, string | null>();

export const getClientIp = (request: IpRequest): string | null => {
  const cached = clientIps.get(request);

  if (cached !== undefined) return cached;

  // Preserve the deployed header precedence. Normalization does not authenticate these headers;
  // changing proxy trust requires confirming the provider's forwarding and origin-access contract.
  const ip = firstHeaderIp(request.headers[FORWARDED_FOR_HEADER])
    ?? firstHeaderIp(request.headers[REAL_IP_HEADER])
    ?? normalizeIp(request.socket.remoteAddress);

  clientIps.set(request, ip);

  return ip;
};
