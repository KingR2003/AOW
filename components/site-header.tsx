"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md">
      <nav className="w-full bg-white text-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="SkillKwiz Logo"
              width={200}
              height={60}
              className="w-auto h-12 object-contain"
              priority
            />
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={`relative group py-2 px-4 text-sm lg:text-base transition-all font-medium ${
                pathname === "/" ? "text-[#00418d]" : "text-gray-600 hover:text-[#00418d]"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-[#00418d] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-2 px-4 text-sm lg:text-base transition-all font-medium ${
                pathname === "/about" ? "text-[#00418d]" : "text-gray-600 hover:text-[#00418d]"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-[#00418d] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-2 px-4 text-sm lg:text-base transition-all font-medium ${
                pathname === "/services" ? "text-[#00418d]" : "text-gray-600 hover:text-[#00418d]"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-[#00418d] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-2 px-4 text-sm lg:text-base transition-all font-medium ${
                pathname === "/blog" ? "text-[#00418d]" : "text-gray-600 hover:text-[#00418d]"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-[#00418d] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none z-20 ml-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-white w-full shadow-lg border-b">
            <Link
              href="/"
              className="text-gray-700 py-3 text-lg w-full text-center hover:text-[#00418d] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 py-3 text-lg w-full text-center hover:text-[#00418d] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 py-3 text-lg w-full text-center hover:text-[#00418d] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 py-3 text-lg w-full text-center hover:text-[#00418d] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
