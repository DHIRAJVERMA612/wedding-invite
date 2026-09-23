"use client";

import { motion } from "framer-motion";

export default function Wedding() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      <img
        src="/images/wedding-bg.png"
        alt="Wedding ceremony"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-white max-w-2xl">

        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Wedding 💍
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          25 November 2026
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          7:00 PM
        </motion.p>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          Grand Palace Banquet
        </motion.p>

      </div>

    </section>
  );
}