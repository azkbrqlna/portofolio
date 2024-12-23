"use client";

import { useState } from "react";
export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="flex items-center justify-center flex-col py-5 mt-auto">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} Designed and Built by Azkbrqlna
      </p>
    </footer>
  );
}
