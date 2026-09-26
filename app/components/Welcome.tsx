"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="min-h-[60vh] bg-white flex items-center justify-center px-6 py-16 text-center">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-4xl md:text-5xl mb-6 text-pink-600">
          A note from us
        </p>
        <p className="font-body text-lg md:text-xl leading-relaxed text-gray-700">
          To our family and friends — thank you for being part of our story
          from the very beginning. Your love and support mean everything to
          us, and we can't imagine celebrating this new chapter without you
          by our side. We can't wait to see you there!
        </p>
        <p className="mt-6 font-heading text-xl">— Dhiraj &amp; Saroj</p>
      </motion.div>
    </section>
  );
}
