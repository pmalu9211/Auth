"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className="font-serif">
      pratham is the greatest human in the world, if not he is destined to
      become one soon enough.
      <button className="bg-red-500" onClick={() => signOut()}>
        Sign out
      </button>
      <button className="bg-red-600" onClick={() => signIn()}>
        Sign in
      </button>
      {JSON.stringify(session)}
      <button
        onClick={
          () =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            }) //after completing signup
        }
      >
        Sign in with Google
      </button>
      <button
        onClick={() => {
          router.push("/api/auth/signup");
        }}
        className="bg-blue-600"
      >
        Signup
      </button>
    </div>
  );
}
