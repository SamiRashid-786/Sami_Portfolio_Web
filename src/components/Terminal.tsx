"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Terminal() {
  const lines = [
    "> INITIATING_WORKFLOW...",
    "> USER_INTENT_DETECTED: Schedule Consultation",
    "> QUERYING_KNOWLEDGE_BASE (RAG)...",
    "> EXECUTING_API_CALL (Calendar)...",
    "> AUTOMATION_COMPLETE."
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 px-6 border-b border-white/5 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-16 text-center">
          Under the <span className="text-orange-500">Hood</span>
        </h2>
        
        <div ref={ref} className="rounded-sm border border-white/5 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.05)]">
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#18181B]/80">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">agent_execution.sh</span>
          </div>
          <div className="p-8 font-mono text-sm md:text-base leading-loose min-h-[320px] bg-[#050505]">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.6 }}
                className={i === lines.length - 1 ? "text-orange-500 font-bold" : "text-gray-300"}
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-orange-500 mt-2 align-middle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
