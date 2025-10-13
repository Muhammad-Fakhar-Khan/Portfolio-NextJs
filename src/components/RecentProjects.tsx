"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function RecentProjects() {
  const projects = [
    {
      title: "MindScape VR",
      description:
        "A VR-based educational experience that combines storytelling with immersive 3D exploration for engaging learning.",
      image: "/Assets/MindScape-VR.png",
      link: "https://github.com/Muhammad-Fakhar-Khan/mindscapevr",
      tech: ["Unity", "C#", "VR", "3D Design"],
    },
    {
      title: "Expense Tracker",
      description:
        "A responsive Next.js app to track daily expenses with a clean UI and dynamic visual analytics.",
      image: "/Assets/ExpenseTracker.png",
      link: "https://github.com/Muhammad-Fakhar-Khan/my-app",
      tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Rock Paper Scissor Game",
      description:
        "An interactive game built using JavaScript, featuring smooth animations and a fun, user-friendly interface.",
      image: "/Assets/Rock Paper Scissor.png",
      link: "https://github.com/Muhammad-Fakhar-Khan/Rock-Paper-Scissor",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-20 flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Projects I&apos;ve <span className="text-blue-500">Completed</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20 overflow-hidden transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/40 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <Github className="w-5 h-5 mr-2" /> View Code
                </a>
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-200" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <a
          href="https://github.com/Muhammad-Fakhar-Khan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg text-white font-medium text-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
          View More Projects
        </a>
      </motion.div>
    </section>
  );
}
