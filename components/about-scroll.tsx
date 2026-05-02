"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function AboutScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 1, 1, 0.1]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[150vh] bg-[#050505] py-32 flex items-center justify-center px-6 sm:px-12"
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-5xl mx-auto">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-8">
            The Philosophy
          </h2>
          <p className="text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.2] font-light text-white">
            We don't just build websites. We craft <span className="italic font-serif text-white">immersive digital environments</span> that captivate audiences, elevate brands, and leave a lasting impression in a noisy world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
