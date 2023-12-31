"use server";

import { redirect } from "next/navigation";

export const handleSubmit = async (e: FormData) => {
  const email = e.get("email");
  const password = e.get("password");
  const username = e.get("username");
  const bodyData: any = {
    email,
    password,
    name: username,
  };
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/signup";
  // try {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-guest": "error",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const jsonRes = await res.json();
  if (jsonRes?.statusCode >= 400) {
    return JSON.parse(JSON.stringify({ message: jsonRes.message.toString() }));
  }
  if (jsonRes.email) {
    redirect("/signin");
  }
};
