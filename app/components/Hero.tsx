"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-100 text-center">
      
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-grey-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dhiraj ❤️ Saroj
      </motion.h1>

      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        We are getting married!
      </motion.p>

      <motion.p
        className="mt-2 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        10 December 2026
      </motion.p>

    </div>
  );
}