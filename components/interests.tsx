"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const interests = [
  {
    id: "games",
    title: "Video Games",
    subtitle: "Systems, worlds, and interaction",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1600",
    colSpan: "md:col-span-2",
  },
  {
    id: "books",
    title: "Books",
    subtitle: "Taste, patience, and better thinking",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600",
    colSpan: "md:col-span-1",
  },
  {
    id: "music",
    title: "Music Production",
    subtitle: "Mood, texture, and sonic detail",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600",
    colSpan: "md:col-span-1",
  },
  {
    id: "business",
    title: "Business Models",
    subtitle: "How ideas become systems",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
    colSpan: "md:col-span-2",
  },
];

function InterestCard({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-xl bg-[#111] group min-h-[400px] ${item.colSpan}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e63946] mb-2">
            {item.subtitle}
          </p>
          <h3 className="text-3xl font-serif text-white tracking-tight">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function Interests() {
  return (
    <section id="interests" className="py-32 px-6 sm:px-12 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-serif tracking-tight text-[#111] mb-4">
            Interests & Explorations
          </h2>
          <p className="text-xl text-[#111]/60 font-sans max-w-2xl">
            Beyond the screen, these four worlds deeply influence my approach to design and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((item, index) => (
            <InterestCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
