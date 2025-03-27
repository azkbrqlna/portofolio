"use client";

import { useState, useEffect } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update dark mode state in localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <footer className="flex items-center justify-between flex-row py-5 px-6 mt-auto  border-neutral-300 dark:border-neutral-800">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} All Rights Reserved | Azka Bariqlana
      </p>
      <button
        className="text-xl p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <RiSunLine className="text-yellow-500" />
        ) : (
          <RiMoonClearLine />
        )}
      </button>
    </footer>
  );
}
