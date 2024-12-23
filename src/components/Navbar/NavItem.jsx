import Link from "next/link";

export default function NavItem({ children, href }) {
  return (
    <Link
      className="font-cera text-md transition duration-150 ease-in-out hover:-translate-y-1 hover:font-bold"
      href={href}
    >
      {children}
    </Link>
  );
}
