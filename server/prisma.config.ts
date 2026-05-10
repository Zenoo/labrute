import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  migrations: {
    seed: 'node --loader ts-node/esm src/seed.ts',
  },
});
