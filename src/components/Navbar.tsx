"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left Side: Social Icons (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/Muhammad-Fakhar-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/fakhar-khan-296608288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/Assets/1.png" // Replace with your logo path
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Right Side: Gmail */}
        <div>
          <a
            href="mailto:fakharkhan3312@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm"
          >
            fakharkhan3312@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
