"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <header className="flex flex-col space-y-4 p-6 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={160}
            height={0}
            className="h-auto"
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/avatar-lisa.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:px-6 md:px-8">
        <p className="text-2xl text-blue-700 text-center">Hello, Lisa!</p>
        <h2 className="text-4xl font-redditsans font-bold text-blue-950 dark:text-white text-center">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 text-center mt-2">{formattedDate}</p>
      </div>
    </header>
  );
}
