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
        </div>
      </div>
    </nav>
  );
}
