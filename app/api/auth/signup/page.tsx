// import { PrismaClient } from "@prisma/client/extension";
"use client";

import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import createUser from "../../../utils/user";

export default async function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <Input onChange={(ee) => setName(ee)} label="Name"></Input>
      <Input onChange={(ee) => setEmail(ee)} label="Email"></Input>
      <Input onChange={(ee) => setPassword(ee)} label="Password"></Input>
      <Button
        name="Submit"
        onClick={() => createUser(name, email, password)}
      ></Button>
    </div>
  );
}

// const prisma = new PrismaClient()
// 3
// 4export default async function handle(req, res) {
// 5  const posts = await prisma.post.findMany()
// 6  res.json(posts)
// 7}
