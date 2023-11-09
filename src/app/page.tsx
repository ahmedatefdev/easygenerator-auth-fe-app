"use client";

import axios from "axios";

export const checkMe = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/whoami";
  const res = await axios.get(url);

  console.log("sign in res>>> ", res);
};

export default async function Home() {
  checkMe();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center flex-col gap-10">
        <h1 className="text-4xl">Welcome to the application.</h1>
        <button
          // onClick={() => {}}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          SignOut
        </button>
      </div>
    </main>
  );
}
