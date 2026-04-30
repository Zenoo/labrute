import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  migrations: {
    seed: 'node --loader ts-node/esm src/seed.ts',
  },
});
