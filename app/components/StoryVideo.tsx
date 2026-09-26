"use client";

import { motion } from "framer-motion";

export default function StoryVideo() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.h2
        className="font-heading text-4xl text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Relive the Moment 🎬
      </motion.h2>

      <motion.div
        className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* controls added since browsers block unmuted autoplay mid-page */}
        <video
          src="/video/open.mp4"
          controls
          playsInline
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
