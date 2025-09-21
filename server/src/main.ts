import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { ExpressInstrumentation, ExpressLayerType } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { AlwaysOnSampler, BatchSpanProcessor, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { PrismaInstrumentation } from '@prisma/instrumentation';
import { Buffer } from 'buffer';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import utc from 'dayjs/plugin/utc.js';
import urlJoin from 'url-join';
import { Config, loadConfig } from './config.js';

// Load dayjs plugins
dayjs.extend(utc);
dayjs.extend(isSameOrBefore);

function getAuthorizationHeader(clientId: string, clientSecret: string): string {
  const credentials: string = `${clientId}:${clientSecret}`;
  const token: string = Buffer.from(credentials).toString('base64');
  return `Basic ${token}`;
}

function initOpentelemetry(config: Config): NodeSDK {
  const exporter = new OTLPTraceExporter({
    url: urlJoin(config.eternaltwin.url, 'v1/traces'),
    headers: {
      authorization: getAuthorizationHeader(
        config.eternaltwin.clientRef,
        config.eternaltwin.secret,
      ),
    },
  });

  const otelSdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: config.eternaltwin.app,
      'deployment.environment.name': config.eternaltwin.channel,
    }),
    spanProcessors: [
      config.isProduction ? new BatchSpanProcessor(exporter) : new SimpleSpanProcessor(exporter),
    ],
    sampler: new AlwaysOnSampler(),
    instrumentations: [
      // Express instrumentation expects HTTP layer to be instrumented
      new HttpInstrumentation(),
      new ExpressInstrumentation({
        ignoreLayersType: [
          ExpressLayerType.MIDDLEWARE,
          ExpressLayerType.REQUEST_HANDLER,
          ExpressLayerType.ROUTER,
        ],
      }),
      new PrismaInstrumentation(),
    ],
  });

  return otelSdk;
}

async function main() {
  const config = await loadConfig();
  const otelSdk = initOpentelemetry(config);
  otelSdk.start();
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const server = await import('./server.js');
  server.mainWrapper();
}

await main();
