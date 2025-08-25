"use client";
import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            StreamMatch
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>
      </div>
    </div>
  );
}
