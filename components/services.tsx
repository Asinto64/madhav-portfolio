"use client";

import { motion } from "motion/react";

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    desc: "Crafting intuitive, engaging interfaces that prioritize user experience without sacrificing aesthetic quality. Every pixel serves a purpose.",
  },
  {
    num: "02",
    title: "Creative Direction",
    desc: "Guiding the visual narrative from concept to execution. Establishing a cohesive brand language that speaks directly to the target audience.",
  },
  {
    num: "03",
    title: "Prototyping",
    desc: "Building high-fidelity, interactive prototypes to validate ideas quickly and ensure a seamless handoff to development teams.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 sm:px-12 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-none tracking-tight text-[#111] mb-6">
            What I Do
          </h2>
          <p className="text-lg text-[#111]/60 font-sans leading-relaxed">
            Bridging the gap between conceptual thinking and practical execution. I focus on creating digital experiences that are both beautiful and fundamentally useful.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-6 items-start border-b border-[#111]/10 pb-10"
            >
              <span className="text-sm font-bold text-[#e63946] pt-2">{s.num}</span>
              <div>
                <h3 className="text-3xl font-serif text-[#111] mb-3">{s.title}</h3>
                <p className="text-[#111]/70 leading-relaxed font-sans">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
