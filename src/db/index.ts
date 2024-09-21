import { PrismaClient } from "@prisma/client";


let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.caches) {
    global.caches= new PrismaClient();
  }

  prisma = global.caches;
}

export const db = prisma;
