import React from "react";

export function PasswordInput() {
  return (
    <div className="mb-6 w-full">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium w-1/2 text-gray-900 dark:text-white "
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
        name="password"
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
        title="Password must be at least 8 characters long, contain at least 1 letter, 1 number, and 1 special character" />
    </div>
  );
}
