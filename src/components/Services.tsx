"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { title: "Agentic Workflows", desc: "Multi-step AI workers that execute complex tasks, not just generate text." },
    { title: "AI-Driven Automations", desc: "Seamless API connections that eliminate manual data entry and system friction." },
    { title: "Action-Oriented Voice/Chatbots", desc: "Internal assistants and customer-facing bots powered by your proprietary data via RAG." },
  ];

  return (
    <section id="services" className="py-32 px-6 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-16">
          Core <span className="text-orange-500">Services</span>
        </h2>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-10 rounded-sm bg-[#18181B]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col h-full"
            >
              <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase tracking-widest group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-400 font-sans text-base leading-relaxed mt-auto">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
