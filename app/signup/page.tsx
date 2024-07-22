"use client";

import Input from "../components/Input";
import { useState } from "react";
import axios from "axios";

const registerUser = async (email: string, password: string, name: string) => {
  try {
    await axios.post("/api/user/create", { email, password, name });
  } catch (e) {
    console.log(e);
  }
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function createUser(e: React.FormEvent) {
    e.preventDefault();
    try {
      registerUser(email, password, name);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Input onChange={(ee) => setName(ee)} label="Name"></Input>
      <Input onChange={(ee) => setEmail(ee)} label="Email"></Input>
      <Input onChange={(ee) => setPassword(ee)} label="Password"></Input>
      <button
        className="bg-black text-white p-4 rounded-lg"
        onClick={(e: React.SyntheticEvent) => createUser(e)}
      >
        Submit
      </button>
    </div>
  );
}
