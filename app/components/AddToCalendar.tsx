"use client";

// Builds a Google Calendar "add event" link.
// startDateTime / endDateTime format: "YYYYMMDDTHHMMSS"
function buildGoogleCalendarUrl({
  title,
  details,
  location,
  startDateTime,
  endDateTime,
}: {
  title: string;
  details: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
}) {
  const base = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details,
    location,
    dates: `${startDateTime}/${endDateTime}`,
  });
  return `${base}?${params.toString()}`;
}

export default function AddToCalendar({
  title,
  details,
  location,
  startDateTime,
  endDateTime,
}: {
  title: string;
  details: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
}) {
  const url = buildGoogleCalendarUrl({
    title,
    details,
    location,
    startDateTime,
    endDateTime,
  });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-5 py-2 rounded-full border border-white/70 text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
    >
      Add to Calendar
    </a>
  );
}
