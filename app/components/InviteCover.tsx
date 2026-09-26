"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

// 👉 Import your existing sections
import Hero from "./Hero";
import Welcome from "./Welcome";
import Story from "./Story";
//import Events from "./Events";
import Haldi from "./Haldi";
import Mehendi from "./Mehendi";
import Wedding from "./Wedding";
import Reception from "./Reception";
import Gallery from "./Gallery";
import RSVP from "./RSVP";
import Music from "./Music";

export default function InviteCover() {
  const [state, setState] = useState("cover"); 
  // "cover" → "video" → "site"

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    setState("video");
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="h-screen w-full">

      {/* 🟤 STEP 1: Cover Screen */}
     {state === "cover" && (
  <div
    onClick={handleOpen}
    className="relative h-full w-full flex items-center justify-center cursor-pointer"
  >
    {/* Background Image */}
    <img
      src="/images/cover.jpg"
      alt="cover"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay (optional dark effect for better text visibility) */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Text */}
    <div className="relative z-10 text-center">
      <motion.div
        className="text-5xl mx-auto"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        💌
      </motion.div>

      <p className="mt-4 font-script text-4xl text-yellow-300">
        With love, we invite you...
      </p>

      <p className="mt-2 text-white text-sm tracking-widest uppercase">
        Dhiraj &amp; Saroj
      </p>

      <p className="mt-6 text-white/80 text-xs tracking-wide uppercase">
        Tap anywhere to open
      </p>
    </div>
  </div>
)}

      {/* 🎬 STEP 2: Video */}
      {state === "video" && (
        <video
          ref={videoRef}
          src="/video/open.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setState("site")}
        />
      )}

      {/* 💍 STEP 3: FULL WEBSITE */}
      {state === "site" && (
        <div className="bg-white">
          <Hero />

          <Welcome />

          <Story />

          <Haldi />

          <Mehendi />

          <Wedding />

          <Reception />

          <Gallery />

          <RSVP />

          <Music />
        </div>
      )}

    </div>
  );
}