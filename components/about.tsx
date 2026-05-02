"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [40, 0, 0, -40]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[120vh] bg-[#f4f0ea] py-32 flex items-center justify-center px-6 sm:px-12 border-b border-[#111]/5"
    >
      <div className="sticky top-1/3 w-full max-w-5xl mx-auto">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
        >
          <p className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.2] font-serif text-[#111] tracking-tight">
            I am a second-year bachelor's student at Chandigarh Group of Colleges, Mohali, building a portfolio around <span className="text-[#111]/40 italic">curiosity, taste, games, books, music production, and business ideas.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
