"use client";

import { useState, useEffect } from "react";
export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="flex items-center flex-col mb-6">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} Designed and Built by Azkbrqlna
      </p>
    </footer>
  );
}
