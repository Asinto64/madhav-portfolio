"use client";

import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    title: "Aura",
    category: "Creative Direction",
    image: "https://images.pexels.com/photos/28448433/pexels-photo-28448433.jpeg?auto=compress&cs=tinysrgb&w=1400",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: "02",
    title: "Echo",
    category: "Web3 Interface",
    image: "https://images.pexels.com/photos/5009185/pexels-photo-5009185.jpeg?auto=compress&cs=tinysrgb&w=1400",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "03",
    title: "Vanguard",
    category: "Brand Identity",
    image: "https://images.pexels.com/photos/27495266/pexels-photo-27495266.jpeg?auto=compress&cs=tinysrgb&w=1400",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "04",
    title: "Nexus",
    category: "Motion Design",
    video: "/media/reference-1.mp4",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-2",
  },
];

export function BentoPortfolio() {
  return (
    <section id="work" className="py-32 px-6 sm:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-4">
              Selected Work
            </h2>
            <p className="text-4xl md:text-6xl font-light">
              Featured <span className="font-serif italic text-white/60">Projects</span>
            </p>
          </div>
          <a href="#" className="text-sm font-medium uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors relative group">
            View Archive
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 ${project.colSpan} ${project.rowSpan}`}
            >
              {/* Media Background */}
              <div className="absolute inset-0 w-full h-full">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    {project.id}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-serif italic text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
