import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  migrations: {
    seed: 'node --loader ts-node/esm src/seed.ts',
  },
});
