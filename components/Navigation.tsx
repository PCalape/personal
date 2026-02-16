"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = (href: string, mobile = false) => {
    const isActive = pathname === href;
    const baseClasses = mobile
      ? "block px-3 py-2 text-base font-medium transition-colors border-l-4"
      : "px-3 py-2 rounded-md transition-colors";

    if (isActive) {
      return `${baseClasses} ${
        mobile
          ? "bg-gray-700/50 text-white border-blue-400"
          : "bg-gray-700/50 text-white"
      }`;
    }
    return `${baseClasses} ${
      mobile
        ? "text-gray-300 hover:text-white hover:bg-gray-700/30 border-transparent hover:border-gray-500"
        : "text-gray-300 hover:text-white hover:bg-gray-700/30"
    }`;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold text-white truncate pr-4"
            onClick={closeMenu}
          >
            Philip John G. Calape
          </Link>

          {/* Desktop Navigation */}
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
            <a
              href="/resume.pdf"
              download="Philip_John_Calape_Resume.pdf"
              className="px-3 py-2 rounded-md transition-colors bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={getLinkClassName("/", true)}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={getLinkClassName("/about", true)}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={getLinkClassName("/projects", true)}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className={getLinkClassName("/skills", true)}
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className={getLinkClassName("/contact", true)}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download="Philip_John_Calape_Resume.pdf"
              className="block px-3 py-2 text-base font-medium transition-colors border-l-4 bg-blue-600 hover:bg-blue-700 text-white border-blue-400"
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
