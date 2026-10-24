import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const createClient = () =>
  new PrismaClient({
    adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "" }),
  });

const prisma = global.prisma || createClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
