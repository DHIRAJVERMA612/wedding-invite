"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";
import AddToCalendar from "./AddToCalendar";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <img
        src="/images/hero-bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <motion.p
          className="text-sm md:text-base tracking-widest uppercase opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Together with our families
        </motion.p>

        <motion.h1
          className="font-script text-6xl md:text-8xl mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dhiraj &amp; Saroj
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Son of Shri. Munna Lal Verma &amp; Mrs. Anita Devi
          <br />
          Daughter of Shri. Suresh Prasad &amp; Mrs. Koushlya Devi
        </motion.p>

        <motion.p
          className="mt-6 text-xl md:text-2xl font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Wednesday, 25th November 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <Countdown targetDate="2026-11-25T19:00:00" />
          <AddToCalendar
            title="Dhiraj & Saroj's Wedding"
            details="Join us as we celebrate our wedding!"
            location="Rajshahi Resort, Bagodih, Suriya, Giridih, Jharkhand 825320"
            startDateTime="20261125T190000"
            endDateTime="20261125T220000"
          />
        </motion.div>

        <motion.img
          src="/images/ring.png"
          alt="ring"
          className="mt-8 w-32 h-52 mx-auto"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
