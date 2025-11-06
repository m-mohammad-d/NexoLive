"use client";

import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-6">
      <div className="max-w-md w-full bg-gray-850 rounded-3xl shadow-2xl border border-gray-700 p-12 flex flex-col items-center text-center gap-6 animate-fadeIn">
        <XCircle className="text-yellow-500 w-16 h-16 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-white">
          Something Went Wrong
        </h1>
        <p className="text-gray-300">
          Oops! An unexpected error occurred. Please try again or go back home.
        </p>
        <div className="flex gap-4">
          {reset && (
            <Button
              variant="default"
              className="px-6 py-2 bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg"
              onClick={reset}
            >
              Try Again
            </Button>
          )}
          <Button
            variant="default"
            className="px-6 py-2 bg-red-500 text-white hover:bg-red-600 shadow-lg"
            asChild
          >
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
