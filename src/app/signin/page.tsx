"use client";
import React from "react";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import SubmitBtn from "../../components/SubmitBtn";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { checkMe } from "../page";
import axios from "axios";
// Password123!

const SignIn = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormData) => {
    const email = e.get("email");
    const password = e.get("password");
    const bodyData: any = {
      email,
      password,
    };
    const url = process.env.NEXT_PUBLIC_API_URL + "/auth/signin";
    const res = await axios.post(url, bodyData);
    // const res = await fetch(url, {
    //   // mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "x-guest": "error",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(bodyData),
    // });
    console.log("🚀 ~ file: page.tsx:26 ~ handleSubmit ~ res:", res);
    // const jsonRes = await res.json();
    console.log("sign up res>>> ", res);
    if (res.data.email) {
      checkMe();
    }
  };

  const title = "Sign In";
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full m-10">
        <form className="w-1/2" action={handleSubmit}>
          <h1 className="self-start text-xl mb-5">{title}</h1>
          <EmailInput />

          <PasswordInput />

          <SubmitBtn />
        </form>
      </div>
    </>
  );
};

export default SignIn;
