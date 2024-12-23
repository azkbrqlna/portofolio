export default function NavItem({ children, href }) {
  return (
    <a
      className="font-cera text-md transition duration-150 ease-in-out hover:-translate-y-1 hover:font-bold"
      href={href}
    >
      {children}
    </a>
  );
}
