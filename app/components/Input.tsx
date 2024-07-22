"use client";

import { SetStateAction } from "react";

export default function Input({
  onChange,
  label,
}: {
  onChange: (value: SetStateAction<string>) => void;
  label: string;
}) {
  return (
    <>
      <div>
        <label className="block my-4 bg-blue-300">{label}</label>
        <input
          className="bg-slate-200"
          onChange={(e) => onChange(e.target.value)}
          type="text"
        />
        ;
      </div>
    </>
  );
}
