"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function WordPressProjects() {
  const projects = [
    {
      title: "CodeTec Solutions",
      description:
        "A modern business website built with Elementor — optimized for speed, clarity, and client conversions.",
      image: "/Assets/codetec Solutions.png",
      link: "https://codetecsolutions.com/",
    },
    {
      title: "Saving Heaven",
      description:
        "An elegant eCommerce site delivering a seamless shopping experience with stunning product layouts.",
      image: "/Assets/saving heavenavif.avif",
      link: "https://savingheaven.com/",
    },
    {
      title: "Rose Thobes",
      description:
        "A luxurious WordPress store with refined UI, dynamic product sections, and mobile-first design.",
      image: "/Assets/rosethobes.png",
      link: "https://www.rosethobes.com/",
    },
    {
      title: "Precission Engineering",
      description:
        "Professional corporate website featuring service-based architecture and crisp, modern aesthetics.",
      image: "/Assets/Precision-Engineering.png",
      link: "https://precissioneng.com/",
    },
    {
      title: "Oceanic Logistics",
      description:
        "A clean, efficient logistics website focused on clarity, navigation, and brand professionalism.",
      image: "/Assets/oceanic.png",
      link: "https://www.oceaniclogistics.com/",
    },
  ];

  return (
    <section
      id="wordpress-projects"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        WordPress <span className="text-blue-500">Projects</span>
      </motion.h2>
      <p className="text-gray-400 mb-16 text-center max-w-2xl">
        A selection of professional WordPress sites I’ve designed and developed — 
        combining creativity, responsiveness, and performance.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/40 shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30"
              >
                Visit Site
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
