"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate: string) {
  const diff = +new Date(targetDate) - +new Date();
  const clamped = Math.max(diff, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center mt-8">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-heading font-semibold">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm tracking-wide uppercase mt-1 opacity-80">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
