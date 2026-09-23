"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/story-bg.jpg"
        alt="Our story background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark/soft overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Story Content */}
      <div className="relative z-10 text-white max-w-3xl">

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Story 💖
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          It all started with a simple hello… and turned into something
          beautiful. From laughter to long conversations, every moment
          brought us closer.

          <br />
          <br />

          Now, we begin a new journey together as one ❤️
        </motion.p>

      </div>

    </div>
  );
}