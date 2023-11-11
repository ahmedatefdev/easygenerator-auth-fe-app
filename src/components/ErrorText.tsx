"use client";
import React from "react";

export function ErrorText({ error }: { error: string }): React.ReactNode {
  return (
    <p className="mt-10 text-l text-red-600 dark:text-red-500">
      <span className="font-medium">Oh, snapp!</span> {error}.
    </p>
  );
}
