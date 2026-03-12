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
      // Tambahkan w-auto md:w-full dan overflow-hidden di baris ini
      className={`font-cera flex items-center gap-4 p-2 rounded-full md:rounded-xl transition-all duration-300 w-auto md:w-full overflow-hidden ${
        isActive
          ? `font-bold bg-neutral-100 dark:bg-neutral-900 ${activeColor}`
          : "font-normal text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
      }`}
    >
      <div className="flex-shrink-0 transition-colors duration-300 flex items-center justify-center w-[20px]">
        {icon}
      </div>
      <span className="hidden md:block whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
    </Link>
  );
}
