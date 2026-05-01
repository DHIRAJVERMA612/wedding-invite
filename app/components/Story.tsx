"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Story 💖
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        It all started with a simple hello… and turned into something beautiful.
        From laughter to long conversations, every moment brought us closer.
        Now, we begin a new journey together as one ❤️
      </motion.p>

    </div>
  );
}