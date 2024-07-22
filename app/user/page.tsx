// app/user/page.tsx
import React from "react";

// Async function to fetch data
async function fetchData() {
  const res = await fetch("http://localhost:3000/api/user/create");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function UserPage() {
  // Fetch data server-side
  const data = await fetchData();

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
