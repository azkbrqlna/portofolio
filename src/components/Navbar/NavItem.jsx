import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ children, href, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`font-cera text-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:font-bold ${
        isActive ? "font-bold" : "font-normal"
      }`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
