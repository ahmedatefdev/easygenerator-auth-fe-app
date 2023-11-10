"use client";
import React, { useCallback } from "react";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import SubmitBtn from "../../components/SubmitBtn";
import { useRouter } from "next/navigation";
import axios from "axios";
import SignInBTN from "@/components/SignInBTN";
import SignUpBTN from "@/components/SignUpBTN";

const SignIn = () => {
  const router = useRouter();
  const handleSubmit = useCallback(async (e: FormData) => {
    const email = e.get("email");
    const password = e.get("password");
    const bodyData: any = {
      email,
      password,
    };
    const url = process.env.NEXT_PUBLIC_API_URL + "/auth/signin";
    const res = await axios.post(url, bodyData, { withCredentials: true });

    if (res.data) {
      router.push("/");
    }
  }, []);

  const title = "Sign In";
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full m-10">
        <form className="w-1/2" action={handleSubmit}>
          <h1 className="self-start text-xl mb-5">{title}</h1>
          <EmailInput />

          <PasswordInput />

          <SubmitBtn />
          
          <SignUpBTN />
        </form>
      </div>
    </>
  );
};

export default SignIn;
