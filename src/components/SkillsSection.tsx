"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = {
    "Languages & Frameworks": [
      "TypeScript",
      "JavaScript",
      "HTML",
      "React.js",
      "Next.js",
      "Flutter",
    ],
    "Styling & 3D": ["Vanilla CSS", "Tailwind CSS", "Three.js"],
    Backend: ["SQL", "WordPress", "Prisma"],
    Tools: ["Blender", "Unity", "ESLint", "npm / Node.js ecosystem"],
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-6 py-24 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full top-10 left-20 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[130px] rounded-full bottom-10 right-20 animate-ping"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-blue-600/20"
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              {category}
            </h3>

            <ul className="space-y-3 text-gray-300 text-center">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 hover:text-white transition-all duration-300 shadow-inner hover:shadow-blue-500/30"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ y: Math.random() * 800, x: Math.random() * 1200 }}
            animate={{
              y: [Math.random() * 1000, -50],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
