"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "AGENTIC AI WORKFLOWS • AI-DRIVEN AUTOMATIONS • ACTION-ORIENTED CHATBOTS & VOICEBOTS • ";
  
  return (
    <div className="w-full bg-[#18181B]/60 border-b border-white/5 py-6 overflow-hidden flex whitespace-nowrap backdrop-blur-md">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-8 items-center text-sm font-bold tracking-[0.2em] uppercase text-gray-400"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex gap-8 items-center">
            <span>AGENTIC AI WORKFLOWS</span>
            <span className="text-orange-500">•</span>
            <span>AI-DRIVEN AUTOMATIONS</span>
            <span className="text-orange-500">•</span>
            <span>ACTION-ORIENTED CHATBOTS & VOICEBOTS</span>
            <span className="text-orange-500">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
