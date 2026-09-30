"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Executive AI Assistant",
      stack: "LangGraph, LiveKit, Meta API, OpenAI",
      desc: "Personal assistant handling WhatsApp chat/voice, booking appointments, and logging details to Google Sheets.",
      link: "#",
    },
    {
      title: "LeadFlow",
      stack: "Python, LangGraph, CrewAI, HubSpot API",
      desc: "Automates B2B outbound sales by researching companies and writing highly personalized email sequences based on prospect LinkedIn activity.",
      link: "#",
    },
    {
      title: "InvoicePulse",
      stack: "Python, n8n, LangGraph, Qdrant, QuickBooks API",
      desc: "Automates accounts payable by extracting data from emailed vendor invoices, matching against POs, and flagging discrepancies.",
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-32 px-6 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-16">
          Case <span className="text-orange-500">Studies</span>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col h-full p-8 rounded-sm bg-[#18181B]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-black text-white mb-3 uppercase tracking-wide group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-orange-500 text-xs font-mono font-bold tracking-wider rounded-sm">
                    {project.stack}
                  </span>
                </div>
                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest hover:text-orange-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
