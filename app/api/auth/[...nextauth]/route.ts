import { authOptions } from "@/app/utils/auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}
