"use client";

import { signIn } from "next-auth/react";
import Input from "../components/Input";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <Input onChange={(ee) => setEmail(ee)} label="Email"></Input>
      <Input onChange={(ee) => setPassword(ee)} label="Password"></Input>
      <button
        className="bg-black text-white p-4 rounded-lg"
        onClick={() =>
          signIn("credentials", {
            callbackUrl: "http://localhost:3000/",
            email: email,
            password: password,
          })
        }
      >
        Submit
      </button>
    </div>
  );
}
