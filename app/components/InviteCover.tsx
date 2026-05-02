"use client";

import { useState, useRef } from "react";

// 👉 Import your existing sections
import Hero from "./Hero";
import Story from "./Story";
import Events from "./Events";
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
      <p className="text-4xl font-mono text-yellow-300">
        Tap to Reveal
      </p>

      <p className="mt-2 text-white text-sm">
        Dhiraj ❤️ Saroj Wedding
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
          <Story />
          <Events />
          <Gallery />
          <RSVP />
          <Music />
        </div>
      )}

    </div>
  );
}