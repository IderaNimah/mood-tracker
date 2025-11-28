"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MoodModal from "@/components/MoodModal"; 

export default function Header() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="flex flex-col space-y-4 p-6 dark:bg-gray-900">
      {/* Top Row: Logo + Profile */}
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
        <p className="text-2xl text-[#4865DB] text-center">Hello, Lisa!</p>
        <h2 className="text-4xl font-redditsans font-bold text-[#21214D] dark:text-white text-center">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 text-center mt-2">{formattedDate}</p>

      
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 bg-[#4865DB] text-white font-redditsans font-medium py-3 px-6 rounded-xl shadow-md transition"
        >
          Log today’s mood
        </button>
      </div>

      {/* Mood Modal */}
      {isModalOpen && <MoodModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}
