"use client";

import { useEffect, useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-5 right-5">
      
      <audio ref={audioRef} loop>
        <source src="/music/wedding.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {playing ? "Pause Music 🎵" : "Play Music 🎶"}
      </button>

    </div>
  );
}