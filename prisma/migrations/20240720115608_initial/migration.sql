-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('Google', 'GitHub', 'Credentials');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "email" TEXT NOT NULL,
    "password" TEXT,
    "provider" "Provider" NOT NULL DEFAULT 'Credentials',
    "photo" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
