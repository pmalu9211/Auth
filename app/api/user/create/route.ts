import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("Content-Type");
  console.log("content type", contentType);

  const data = await req.json();

  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = data;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    if (!user) {
      return NextResponse.json(
        { message: "you are can't create an account here" },
        {
          status: 400,
        }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { message: "you are can't create an account here" },
      {
        status: 400,
      }
    );
  }

  // Create a response with a specific status code
  // console.log(data);
  const response = NextResponse.json(
    { message: "Hello from Next.js!" },
    { status: 200 } // Created
  );
  return response;
}
