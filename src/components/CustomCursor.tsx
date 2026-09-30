"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[100] shadow-[0_0_10px_rgba(249,115,22,1)]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-orange-500 rounded-full pointer-events-none z-[99]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
