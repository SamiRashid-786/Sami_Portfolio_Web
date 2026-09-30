"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 w-full py-12 lg:py-0">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          <span className="inline-block py-1.5 px-4 rounded-sm border border-white/10 bg-[#18181B]/60 backdrop-blur-md text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Sami Rashid | AI & Automation Architect
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white uppercase leading-[1.1] max-w-5xl">
            Founder of Zarathos Corp. <br /> I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">intelligent agents.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-sans tracking-tight mt-8 leading-relaxed">
            I engineer AI systems that scale your business. From autonomous support bots to action-oriented workflows—reducing manual work and freeing your time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-12 w-full">
            <a
              href="#contact"
              className="px-10 py-5 rounded-sm bg-orange-500 hover:bg-orange-400 text-[#050505] font-black tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] w-full sm:w-auto text-center"
            >
              Book a Discovery Call
            </a>
            <a
              href="#process"
              className="group relative px-6 py-5 text-gray-400 font-bold tracking-widest uppercase transition-colors hover:text-white w-full sm:w-auto text-center"
            >
              View Architectures
              <span className="absolute bottom-4 left-6 right-6 h-[2px] bg-orange-500 scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </a>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end w-full mt-10 lg:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/5] sm:aspect-square rounded-sm overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all duration-500 group"
          >
            <Image
              src="/Professional Image 2.png"
              alt="Sami Rashid - Professional Image"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
