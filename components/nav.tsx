"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled ? "glass px-6 py-3" : "px-0 py-0"
        }`}>
          <a href="#" className="text-xl font-bold tracking-tight text-[#111]">
            Madhav Gupta.
          </a>
          
          <div className="hidden gap-8 text-sm font-medium text-[#111]/70 sm:flex">
            <a href="#about" className="hover:text-[#111] transition-colors">About</a>
            <a href="#services" className="hover:text-[#111] transition-colors">Services</a>
            <a href="#work" className="hover:text-[#111] transition-colors">Work</a>
            <a href="#interests" className="hover:text-[#111] transition-colors">Interests</a>
          </div>

          <a 
            href="#contact" 
            className="hidden sm:inline-flex px-6 py-2.5 text-sm font-medium bg-[#111] text-white rounded-full hover:bg-black hover:scale-105 transition-all shadow-md"
          >
            Contact
          </a>
          
          <button className="sm:hidden text-[#111]">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
