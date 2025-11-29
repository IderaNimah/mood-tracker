"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex flex-col space-y-4 p-6 dark:bg-gray-900">
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

        <div ref={dropdownRef} className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Image
              src="/assets/avatar-lisa.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[90vw] sm:w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 transition-all duration-200">
              <p className="font-medium mb-1 text-gray-900 dark:text-white">
                Lisa Smith
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                lisa@gmail.com
              </p>
              <hr className="border-gray-200 dark:border-gray-700 mb-2" />
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Settings
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Log Out
              </button>
            </div>
          )}
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
          className="mt-6 bg-[#4865DB] text-white font-redditsans font-medium py-3 px-6 rounded-xl shadow-md transition hover:bg-blue-700"
        >
          Log today’s mood
        </button>
      </div>

      {isModalOpen && <MoodModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}
