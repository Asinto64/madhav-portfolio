"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <main className="relative bg-[#f4f0ea] text-[#111] pt-32 pb-20 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* 3D Abstract Element from Unsplash */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[10%] right-[-10%] md:right-[5%] w-[600px] h-[600px] pointer-events-none mix-blend-multiply opacity-60"
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600" 
          alt="Abstract 3D Shape" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-8"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#e63946]">
            Design Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4rem,10vw,8rem)] font-serif leading-[0.95] tracking-tight text-[#111]"
        >
          Madhav <br />
          <span className="text-black/30 italic">Gupta.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-lg text-xl text-[#111]/70 leading-relaxed font-sans"
        >
          Second-year student at CGC Mohali. Crafting editorial digital experiences, interfaces, and visual systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center gap-6 text-[#111]/50"
        >
          <div className="w-16 h-[1px] bg-[#111]/20" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Scroll to explore</span>
        </motion.div>
      </div>
    </main>
  );
}
