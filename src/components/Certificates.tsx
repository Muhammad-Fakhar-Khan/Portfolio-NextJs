"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certificateCategories = {
  "School Certificates": [
    {
      title: "International Kangaroo Linguistic Contest",
      image: "/Assets/Certificates/School/School Certificates_page-0001.jpg",
    },
    {
      title: "School Debate Contest",
      image: "/Assets/Certificates/School/School Certificates_page-0009.jpg",
    },
    {
      title: "School Sports Day",
      image: "/Assets/Certificates/School/School Certificates_page-0010.jpg",
    },
  ],

  "University Certificates": [
    {
      title: "CIPE '25 Certificate",
      image: "/Assets/Certificates/CIPE'25.jpg",
    },
    {
      title: "Generative AI Certificate",
      image: "/Assets/Generative AI.jpg",
    },
    {
      title: "SSUET InHouse Project Exhibition'22 Certificate",
      image: "/Assets/Certificates/SSUET InHouse Project Exhibition'22.jpg",
    },
  ],

  "Courses Certificates": [
    {
      title: "OCI AI Foundation",
      image: "/Assets/Certificates/OCI AI Fundation/OCI25AICFA.jpeg",
    },
    {
      title: "Tailwind CSS",
      image: "/Assets/Certificates/Tailwind CSS/Muhammad Fakhar Khan-1.png",
    },
  ],

  "Event Certificates": [
    {
      title: "Technova'25 Certificate",
      image: "/Assets/Muhamad Fakhar Khan.png",
    },
    {
      title: "39th Multi-Topic International Symposium 2025",
      image: "/Assets/Certificates/39th IEEP.jpg",
    },
    {
      title: "E-Sport Module at Young Techno Fest'23",
      image: "/Assets/Certificates/Young Techno Fest'23.jpg",
    },
  ],

  "Other Certificates": [
    {
      title: "RAMADAN DRIVE 2024",
      image: "/Assets/Certificates/Ramadan Drive'24.jpg",
    },
  ],
} as const;

type CategoryKey = keyof typeof certificateCategories;
type Certificate = {
  title: string;
  image: string;
};

const categories = Object.keys(certificateCategories) as CategoryKey[];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(
    categories[0]
  );
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const filteredCertificates = certificateCategories[activeCategory];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
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
                onClick={() => setActiveCert(cert)}
                className="cursor-pointer bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition"
              >
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {cert.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-3 right-3 z-10 text-white text-2xl hover:text-red-400"
              >
                ✕
              </button>

              <div className="relative w-full h-[80vh]">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 text-center font-semibold">
                {activeCert.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
