"use client";

import React, { FormEvent, useState } from "react";
import { InteractiveInput } from "../../components/InteractiveInput";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import SubmitBtn from "../../components/SubmitBtn";
import SignUpBTN from "@/components/SignUpBTN";
import SignInBTN from "@/components/SignInBTN";
import { ErrorText } from "@/components/ErrorText";
import { handleSubmit } from "./handleSubmitServerAction";
const SignUp = () => {
  const [error, setError] = useState("");
  const handelError = (error: any) => {
    setError(error);
  };

  const title = "Sign Up";

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full m-10">
        <form
          className="w-1/2"
          action={async (e) => {
            const res: any = await handleSubmit(e);
            if (res) {
              return setError(res?.message || "Error");
            }
          }}
        >
          <h1 className="self-start text-xl mb-5">{title}</h1>
          <EmailInput />
          <div className="mb-6 w-full">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                name="username"
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                pattern="[a-zA-Z0-9]+"
                title="Username must only contain letters and numbers"
                required
              />
            </div>
          </div>

          <PasswordInput />
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <InteractiveInput />
          </div>
          <SubmitBtn />
          <SignInBTN />
        </form>
        {!!error && <ErrorText error={error} />}
      </div>
    </>
  );
};

export default SignUp;
