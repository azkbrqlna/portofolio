import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center mt-8 mb-8 reveal-right">
      <h2 className="text-md font-semibold">Connect with me :</h2>
      <div className="flex justify-center items-center gap-6 mt-8 space-x-1">
        {[
          {
            href: "https://www.linkedin.com/in/azka-bariqlana-06a3482a1/",
            icon: (
              <FaLinkedin className="text-2xl text-black dark:text-white" />
            ),
            rotate: "rotate-2",
          },
          {
            href: "https://github.com/azkbrqlna",
            icon: <FaGithub className="text-2xl text-black dark:text-white" />,
            rotate: "-rotate-2",
          },
          {
            href: "https://www.instagram.com/azkbrqlnaaa_/",
            icon: (
              <FaInstagram className="text-2xl text-black dark:text-white" />
            ),
            rotate: "rotate-1",
          },
        ].map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light transform ${link.rotate} hover:rotate-0 hover:scale-110 transition-all duration-300`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
