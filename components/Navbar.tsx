"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="relative z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold bg-gardient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200  bg-clip-text text-transparent">
              Tinder
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/matches"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
            >
              Discover
            </Link>
            <Link
              href="/matches/list"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              Matches
            </Link>
            <Link
              href="/chat"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
            >
              Messages
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
