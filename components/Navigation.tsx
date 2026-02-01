"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `px-3 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-gray-700/50 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-700/30"
    }`;
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/20 z-50 border-b border-gray-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            Philip John G. Calape
          </Link>
          <div className="hidden md:flex space-x-2">
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClassName("/about")}>
              About
            </Link>
            <Link href="/projects" className={getLinkClassName("/projects")}>
              Projects
            </Link>
            <Link href="/skills" className={getLinkClassName("/skills")}>
              Skills
            </Link>
            <Link href="/contact" className={getLinkClassName("/contact")}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
