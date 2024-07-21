import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Create a response with a specific status code
  const response = NextResponse.json(
    { message: "Hello from Next.js!" },
    { status: 206 } // Created
  );

  // Set a cookie
  response.cookies.set("myCookie", "cookieValue", {
    path: "/",
    httpOnly: true,
  });

  // Set a header
  response.headers.set("X-Custom-Header", "myHeaderValue");

  return response;
}
