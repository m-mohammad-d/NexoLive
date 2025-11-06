"use client";

import { Button } from "@/components/ui/button";
import { CloudOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-6">
      <div className="max-w-md w-full bg-gray-850 rounded-3xl shadow-2xl border border-gray-700 p-12 flex flex-col items-center text-center gap-6 animate-fadeIn">
        <CloudOff className="text-pink-500 w-16 h-16 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-white">
          Ooops! You’re offline
        </h1>
        <p className="text-gray-300">
          It seems you lost your internet connection. Don’t worry — you can
          still browse the pages you’ve already visited.
        </p>
        <Button
          variant="default"
          className="px-8 py-3 bg-pink-500 text-white hover:bg-pink-600 shadow-lg"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
