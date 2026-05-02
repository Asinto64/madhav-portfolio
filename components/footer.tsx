"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 sm:px-12 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-serif text-white mb-2">Madhav Gupta.</h2>
          <p className="text-white/50 font-sans text-sm">Editorial Student Portfolio &copy; {new Date().getFullYear()}</p>
        </div>
        
        <div className="flex gap-8 font-sans">
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
