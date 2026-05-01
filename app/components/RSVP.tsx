"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Thank you ${name}! Your response is recorded 🎉`);
    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">
      
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        RSVP 💌
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className="w-full border p-2 rounded"
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
        >
          <option>Yes</option>
          <option>No</option>
        </select>

        <textarea
          placeholder="Message for couple"
          className="w-full border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
        >
          Send RSVP
        </button>

      </motion.form>

    </div>
  );
}