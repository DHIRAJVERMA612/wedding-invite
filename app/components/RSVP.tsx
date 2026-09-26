"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 👉 Replace this with your own Formspree endpoint (see note below the form).
// Sign up free at https://formspree.io, create a form, and paste your
// unique endpoint URL here — it looks like https://formspree.io/f/xxxxxxx
const FORM_ENDPOINT = "https://formspree.io/f/myezdazp";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setMessage("");
        setAttending("Yes");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/rsvp-bg.jpg"
        alt="RSVP background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.h2
        className="relative z-10 font-heading text-4xl text-white mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        RSVP 💌
      </motion.h2>

      {status === "sent" ? (
        <motion.div
          className="relative z-10 bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-lg font-heading">
            Thank you{name ? `, ${name}` : ""}! 🎉
          </p>
          <p className="mt-2 text-gray-600">
            Your response has been sent to the couple.
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white/95 p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            name="attending"
            className="w-full border p-2 rounded"
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea
            name="message"
            placeholder="Message for couple"
            className="w-full border p-2 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Confirm Your Presence"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong — please try again.
            </p>
          )}
        </motion.form>
      )}
    </div>
  );
}
