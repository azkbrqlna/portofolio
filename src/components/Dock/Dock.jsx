import Link from "next/link";
import { Dock, DockIcon } from "../ui/dock";

export default function DockItems({ children, href }) {
  return (
    <Dock iconMagnification={60} iconDistance={100}>
      <DockIcon className="bg-black/10 dark:bg-white/10 p-3 rounded-full hover:scale-110 transition-transform duration-200">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      </DockIcon>
    </Dock>
  );
}
