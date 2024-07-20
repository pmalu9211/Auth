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
      <label>{label}</label>
      <input onChange={(e) => onChange(e.target.value)} type="text" />;
    </>
  );
}
