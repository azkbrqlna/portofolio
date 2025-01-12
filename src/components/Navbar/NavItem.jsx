import Link from "next/link";

export default function NavItem({ children, href, onClick }) {
  return (
    <Link
      className="font-cera text-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:font-bold"
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
