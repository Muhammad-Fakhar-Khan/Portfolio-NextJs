"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      side: "right",
      role: "Web Development Intern",
      company: "Cohexify",
      duration: "Mar 2024 – Aug 2024",
      tasks: [
        "Assisted in the design and deployment of client websites.",
        "Collaborated with senior developers to improve performance and UX.",
      ],
    },
    {
      side: "left",
      role: "WordPress Developer",
      company: "Stolidzone Technologies",
      duration: "Nov 2024 – Apr 2025",
      tasks: [
        "Developed and maintained responsive websites for multiple clients.",
        "Delivered projects within tight deadlines while ensuring high quality.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full top-20 left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[130px] rounded-full bottom-10 right-10 animate-ping"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight"
      >
        What I have done so far <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Work Experience
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full h-full transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: exp.side === "left" ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative w-full md:w-1/2 px-6 py-8 ${
              exp.side === "left"
                ? "md:pr-16 md:text-right"
                : "md:pl-16 md:ml-auto"
            }`}
          >
            {/* Connector Dot */}
            <div
              className={`absolute top-10 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-600/30 ${
                exp.side === "left"
                  ? "right-[-12px] md:right-[-18px]"
                  : "left-[-12px] md:left-[-18px]"
              }`}
            ></div>

            {/* Experience Card */}
            <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-blue-500 hover:shadow-blue-600/20 transition-all duration-500">
              <div
                className={`flex items-center ${
                  exp.side === "left" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <Briefcase size={36} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-300 font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul
                className={`list-disc list-inside text-gray-300 space-y-2 text-sm ${
                  exp.side === "left" ? "inline-block text-right" : "text-left"
                }`}
              >
                {exp.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition-all duration-200"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
