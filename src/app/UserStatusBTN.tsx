"use client";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const logout = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/logout";

  const res = await axios.get(url, { withCredentials: true });
};
export function UserStatusBTN({ res }: any) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        if (res) {
          await logout();
        }
        router.push("/signin");
      }}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {res ? "SignOut" : "SignIn"}
    </button>
  );
}
