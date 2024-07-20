"use server";

import { Prisma, PrismaClient } from "@prisma/client";
// const prisma = new Prisma();
const prisma = new PrismaClient();

export default async function createUser(
  name: string,
  email: string,
  password: string
) {
  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}
