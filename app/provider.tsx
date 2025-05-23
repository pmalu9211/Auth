"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider
      // session={session}
      // Default base path if your app lives at the root "/"
      basePath=""
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  );
}
