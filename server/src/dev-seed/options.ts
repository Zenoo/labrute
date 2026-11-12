import { parseArgs } from 'node:util';

export const parseSeedOptions = (args: string[], env: NodeJS.ProcessEnv) => {
  const { values } = parseArgs({
    args,
    options: {
      reset: { type: 'string' },
      'user-id': { type: 'string' },
      seed: {
        type: 'string',
        default: '12345',
      },
      help: {
        type: 'boolean',
        short: 'h',
      },
    },
  });

  if (values.help) {
    return null;
  }

  if (env.NODE_ENV === 'production') {
    throw new Error('Development seeding is disabled in production.');
  }

  if (!env.DATABASE_URL) {
    throw new Error('Set DATABASE_URL to a local development database.');
  }

  const url = new URL(env.DATABASE_URL);

  if (!['postgres:', 'postgresql:'].includes(url.protocol)
    || !['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) {
    throw new Error('Development seeding requires a loopback PostgreSQL URL.');
  }

  const database = decodeURIComponent(url.pathname.slice(1));

  if (!database || ['postgres', 'template0', 'template1'].includes(database)) {
    throw new Error('Select an application development database.');
  }

  const schema = url.searchParams.get('schema') ?? 'public';

  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(schema)) {
    throw new Error('Invalid schema name.');
  }

  if (values.reset !== undefined && values.reset !== database) {
    throw new Error('--reset must spell the target database name exactly.');
  }

  const userId = values['user-id'];

  if (userId && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId)) {
    throw new Error('--user-id must be your local Eternaltwin UUID.');
  }

  const seed = Number(values.seed);

  if (!Number.isSafeInteger(seed) || seed < 1 || seed >= 2147483647) {
    throw new Error('--seed must be an integer between 1 and 2147483646.');
  }

  return {
    database,
    schema,
    reset: values.reset !== undefined,
    userId,
    seed,
  };
};

export type SeedOptions = NonNullable<ReturnType<typeof parseSeedOptions>>;

// Existing generators use Math.random. Scope the deterministic stream to this CLI invocation.
export const withSeedRandom = async <T>(seed: number, run: () => Promise<T>): Promise<T> => {
  const previous = Math.random;
  let state = seed;

  Math.random = () => {
    state = (state * 16807) % 2147483647;

    return (state - 1) / 2147483646;
  };

  try {
    return await run();
  } finally {
    Math.random = previous;
  }
};
