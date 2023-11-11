"use client";
import React, { useCallback, useState } from "react";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import SubmitBtn from "../../components/SubmitBtn";
import { useRouter } from "next/navigation";
import axios from "axios";
import SignUpBTN from "@/components/SignUpBTN";
import { ErrorText } from "../../components/ErrorText";

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async (e: FormData) => {
    setError("");
    const email = e.get("email");
    const password = e.get("password");
    const bodyData: any = {
      email,
      password,
    };
    const url = process.env.NEXT_PUBLIC_API_URL + "/auth/signin";
    try {
      const res = await axios.post(url, bodyData, { withCredentials: true });

      if (res.data) {
        router.push("/");
      }
    } catch (error: any) {
      console.log("🚀 ~ error:", error);
      return setError("Error: " + error?.response?.data?.message || "Error");
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
        {!!error && <ErrorText error={error} />}
      </div>
    </>
  );
};

export default SignIn;
