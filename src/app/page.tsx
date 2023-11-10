"use client";

import { useCallback, useEffect, useState } from "react";
import { UserStatusBTN } from "./UserStatusBTN";
import axios from "axios";

export default function Home() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const checkMe = useCallback(async () => {
    setLoading(true);
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/auth/whoami";
      const res = await axios.get(url, {
        withCredentials: true,
      });

      setIsAuth(!res.data.error);
    } catch (error) {
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkMe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center flex-col gap-10">
        <h1 className="text-4xl">{loading ? "Loading..." : "Welcome to the application."}</h1>
        {!loading && <UserStatusBTN res={isAuth} />}
      </div>
    </main>
  );
}
