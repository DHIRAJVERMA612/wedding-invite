"use client";

export default function MapButton({ query }: { query: string }) {
  const url = `https://maps.app.goo.gl/yy63iEG11HBshTmR6`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 px-5 py-2 rounded-full border border-white/70 text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
    >
      Get Directions
    </a>
  );
}
