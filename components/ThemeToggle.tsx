"use client"; // needed because we’re using React interactivity

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      <span>{dark ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
