// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-pink-100 text-center">
      
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-pink-600"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Dhiraj ❤️ Saroj
//       </motion.h1>

//       <motion.p
//         className="mt-4 text-xl text-gray-800"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         We are getting married!
//       </motion.p>

//       <motion.p
//         className="mt-2 text-lg text-gray-700"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         10 December 2026
//       </motion.p>

//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";

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
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
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
        <motion.img
          src="/images/ring.png"
          alt="ring"
          className="mt-6 w-16 h-16 mx-auto"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
/>
        <motion.p
          className="mt-2 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          10 December 2026
        </motion.p>

      </div>

    </div>
  );
}