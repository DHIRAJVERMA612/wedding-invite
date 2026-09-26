"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/couple1.jpg",
    "/images/couple2.jpg",
    "/images/couple3.jpg",
  ];

  return (
    <div className="min-h-screen bg-white py-16 text-center">
      
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Our Memories 📸
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img}
              alt="wedding photo"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}