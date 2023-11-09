'use client'

import React from "react";

export const InteractiveInput = () => (
  <input
    type="password"
    id="confirm_password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="•••••••••"
    required
    name="confirm_password"
    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    title="Password must be at least 8 characters long, contain at least 1 letter, 1 number, and 1 special character"
    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordInput = document.getElementById("password") as HTMLInputElement;
      const confirmPasswordInput = e.target;

      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
      } else {
        confirmPasswordInput.setCustomValidity("");
      }
    }}
  />
);
