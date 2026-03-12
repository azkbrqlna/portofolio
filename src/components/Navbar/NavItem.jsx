"use client";

import Link from "next/link";

export default function NavItem({
  href,
  icon,
  text,
  onClick,
  isActive,
  activeColor,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-cera flex items-center gap-4 p-2 rounded-xl transition-all duration-300 ${
        isActive
          ? `font-bold bg-neutral-100 dark:bg-neutral-900 ${activeColor}` // Jika aktif, gunakan warna custom
          : "font-normal text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
      }`}
    >
      {/* Ikon akan mewarisi warna dari parent class di atas */}
      <div className="flex-shrink-0 transition-colors duration-300">{icon}</div>
      <span className="whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
    </Link>
  );
}
