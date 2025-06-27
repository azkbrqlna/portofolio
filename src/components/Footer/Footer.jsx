"use client";

import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <footer className="flex items-center justify-between flex-row py-5 px-6 mt-auto border-neutral-300 dark:border-neutral-800">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} All Rights Reserved | Azka Bariqlana
      </p>
      <button
        onClick={toggleTheme}
        className="text-xl p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
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
