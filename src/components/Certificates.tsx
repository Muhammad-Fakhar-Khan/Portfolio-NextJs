"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certificateCategories = {
  "School Certificates": [
    {
      title: "School Excellence Award",
      image: "/Assets/school1.png",
    },
  ],

  "University Certificates": [
    {
      title: "YoungDev Intern",
      image: "/Assets/Muhammad Fakhar Khan-1.png",
    },
    {
      title: "Generative AI Certificate",
      image: "/Assets/Generative AI.jpg",
    },
  ],

  "Event Certificates": [
    {
      title: "Technova'25 Certificate",
      image: "/Assets/Muhamad Fakhar Khan.png",
    },
  ],

  "Other Certificates": [
    {
      title: "Other Certificate",
      image: "/Assets/driving.png",
    },
  ],
} as const;

type CategoryKey = keyof typeof certificateCategories;

const categories = ["All", ...Object.keys(certificateCategories)] as const;

// Placeholder image if cert.image is missing
const placeholderImage = "/Assets/placeholder.png";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCertificates =
    activeCategory === "All"
      ? Object.values(certificateCategories).flat()
      : certificateCategories[activeCategory as CategoryKey] ?? [];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
      id="certificates"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Certifications & <span className="text-blue-500">Achievements</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition"
              >
                <div className="relative w-full h-64 mb-4">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <Image
                      src={placeholderImage}
                      alt="Placeholder"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-xl opacity-50"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
