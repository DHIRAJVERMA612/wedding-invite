"use client";

import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      title: "Haldi Ceremony 💛",
      date: "8 December 2026",
      location: "Bride's Home",
    },
    {
      title: "Wedding 💍",
      date: "10 December 2026",
      location: "Grand Palace Banquet",
    },
    {
      title: "Reception 🎉",
      date: "12 December 2026",
      location: "City Hall",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-16">
      
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Wedding Events 📅
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 px-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="mt-2">{event.date}</p>
            <p className="text-gray-600">{event.location}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}