"use client";

import { motion } from "motion/react";

export function LiveTicker() {
  const items = [
    "Design Engineering",
    "Creative Direction",
    "Typography",
    "Interactions",
    "Web Experiences",
    "Visual Systems",
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="relative py-12 overflow-hidden bg-[#f4f0ea] border-y border-[#111]/10">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f4f0ea] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f4f0ea] to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 px-8 items-center"
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-[2.5rem] font-serif italic text-[#111]/20 tracking-wide">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e63946]/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
