"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/couple_1.jpg",
    "/images/couple_2.jpg",
    "/images/couple_3.jpg",
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4 text-center">

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Memories 📸
      </motion.h2>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={img}
              alt={`Wedding memory ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
}