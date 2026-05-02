"use client";

import { motion } from "motion/react";

const experience = [
  {
    year: "2024 — Present",
    role: "Freelance Designer",
    company: "Independent",
    desc: "Working with early-stage startups to establish their initial brand identity and product interfaces.",
  },
  {
    year: "2023 — 2024",
    role: "Design Intern",
    company: "Studio Abstract",
    desc: "Assisted senior designers in creating editorial layouts and interactive web prototypes for high-profile clients.",
  },
  {
    year: "2023",
    role: "B.Sc. Student",
    company: "CGC Mohali",
    desc: "Currently in my second year, focusing on interaction design, typography, and frontend web development.",
  },
];

export function Experience() {
  return (
    <section className="py-32 px-6 sm:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-none tracking-tight text-[#111] mb-16 text-center">
          Experience
        </h2>
        
        <div className="flex flex-col gap-12">
          {experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-16 border-t border-[#111]/10 pt-8"
            >
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-[#e63946] uppercase tracking-widest">{exp.year}</span>
              </div>
              <div className="md:w-3/4 flex flex-col md:flex-row gap-4 justify-between">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-serif text-[#111] mb-1">{exp.role}</h3>
                  <p className="text-[#111]/50 text-sm">{exp.company}</p>
                </div>
                <div className="md:w-1/2">
                  <p className="text-[#111]/70 leading-relaxed font-sans">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
