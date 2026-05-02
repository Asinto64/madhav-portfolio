"use client";

import { motion } from "motion/react";

const works = [
  {
    title: "Lumina Edge",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1481481312838-ce9a33afce1f?q=80&w=1600",
  },
  {
    title: "Onyx Type",
    category: "Typography & Brand",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600",
  }
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 sm:px-12 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-none tracking-tight text-[#111] mb-16">
          Featured Work
        </h2>
        
        <div className="flex flex-col gap-24">
          {works.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-xl mb-6">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-serif text-[#111]">{work.title}</h3>
                  <p className="text-[#111]/60 font-sans mt-2">{work.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
