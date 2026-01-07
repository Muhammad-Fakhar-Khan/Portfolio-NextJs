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
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen pt-16 md:pt-0 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Hi, My Name is <span className="text-blue-500">Muhammad Fakhar Khan</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl">
          I am a passionate <span ref={typedEl} className="text-blue-400"></span>
        </h2>

        {/* <p className="text-gray-400 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
          I love building modern, responsive, and creative web experiences using
          cutting-edge technologies like Next.js, Tailwind CSS, and Prisma.
        </p> */}

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/Assets/Fakhar_Khan_CV.pdf"
            download="Muhammad_Fakhar_Khan_CV.pdf"
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
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 sm:mt-12 md:mt-0"
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/Assets/portfolio.png"
            alt="Muhammad Fakhar Khan"
            fill
            className="rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-blue-600/20 blur-[150px] rounded-full top-32 md:top-40 right-5 md:right-10 animate-pulse" />
    </section>
  );
}
