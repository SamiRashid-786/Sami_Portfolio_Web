"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    { title: "Audit & Strategy", desc: "Pinpointing operational bottlenecks and designing custom AI architecture." },
    { title: "Custom Engineering", desc: "Building autonomous agents, RAG pipelines, and intelligent workflows." },
    { title: "Deployment & Hosting", desc: "Containerized deployment for secure, 24/7 scalable operations." },
  ];

  return (
    <section id="process" className="py-32 px-6 border-b border-white/5 bg-[#050505] overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative pl-8 md:pl-16">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-20">
          How I <span className="text-orange-500">Work</span>
        </h2>

        <div ref={ref} className="absolute left-0 top-[120px] bottom-0 w-[2px] bg-gradient-to-b from-orange-600 via-orange-400 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]" />

        <div className="space-y-20 relative">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className="relative"
            >
              <div className="absolute -left-[37px] md:-left-[69px] top-1.5 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)] border-2 border-[#050505]" />
              <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-widest">Node 0{i + 1}</div>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider mb-3">{phase.title}</h3>
              <p className="text-gray-400 font-sans">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
