import type { PrismaConfig } from "prisma/config";

// No runtime imports here on purpose: in the production image this file is
// read by a globally installed prisma CLI with no local node_modules.
try {
  process.loadEnvFile();
} catch {
  // no .env file; rely on the environment
}

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: 'ts-node --compiler-options {"module":"CommonJS"} db/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.sqlite",
  },
} satisfies PrismaConfig;
