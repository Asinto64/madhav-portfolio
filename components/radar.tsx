"use client";

import { motion } from "motion/react";

const radar = [
  ["Games radar", "Story-rich RPGs, open-world systems, and gameplay trailers with strong art direction."],
  ["Books radar", "Habit, money, sci-fi, focus, and business books that are popular because they are useful."],
  ["Music radar", "Bedroom studio setups, synth-heavy production, sample packs, and arrangement breakdowns."],
  ["Business radar", "Creator-led brands, SaaS, marketplaces, and content-to-commerce models."],
];

export function Radar() {
  return (
    <section id="radar" className="py-32 px-6 sm:px-12 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end justify-between border-b border-[#111]/10 pb-10">
          <h2 className="text-[clamp(3rem,5vw,4rem)] font-serif tracking-tight text-[#111] leading-none">
            Recommendation<br />Radar
          </h2>
          <p className="max-w-md text-lg text-[#111]/60 font-sans leading-relaxed">
            A sharper section for the things I can explore, reference, or turn into future projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {radar.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-[#111]/5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-serif text-[#111] mb-4">{title}</h3>
              <p className="text-lg text-[#111]/70 font-sans leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
