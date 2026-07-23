"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-3 lg:py-2 text-center font-mono text-xs text-white/50 select-none">
      &copy; {year} AZKBRQLNA
    </footer>
  );
}
