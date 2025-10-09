"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function HeroSection() {
  const typedEl = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedEl.current) return;

    const typed = new Typed(typedEl.current, {
      strings: [
        "Front-End Developer",
        "Web Designer",
        "Graphic Designer",
        "Logo Designer",
        "Computer Engineer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, My Name is{" "}
          <span className="text-blue-500">Muhammad Fakhar Khan</span>
        </h1>

        <h2 className="text-2xl md:text-3xl">
          I am a passionate{" "}
          <span ref={typedEl} className="text-blue-400"></span>
        </h2>

        <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
          I love building modern, responsive, and creative web experiences using
          cutting-edge technologies like Next.js, Tailwind CSS, and Prisma.
        </p>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          {/* <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
          >
            Contact Me
          </a> */}

          {/* 💾 Download Button */}
          <a
            href="/Assets/Fakhar_Khan_CV"
            download="Muhammad_Fakhar_Khan_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
          >
            <Download size={20} /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/Assets/portfolio.png"
            alt="Muhammad Fakhar Khan"
            fill
            className="rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
          
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full top-40 right-10 animate-pulse" />
    </section>
  );
}
