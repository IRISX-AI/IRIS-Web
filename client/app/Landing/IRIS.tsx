"use client";

import { motion } from "framer-motion";
import { AlertOctagon, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function DeprecatedSite() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden ns px-6 selection:bg-[#39FF14] selection:text-black">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Scanning Laser Line */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        className="absolute left-0 w-full h-[2px] bg-[#39FF14]/50 shadow-[0_0_20px_#39FF14] z-0 pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center"
      >
        {/* --- WARNING ICON --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 1, 0.5, 1], y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)] mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
            <AlertOctagon className="w-10 h-10 text-red-500 relative z-10" />
          </div>
        </motion.div>

        {/* --- STATUS BADGE --- */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "anticipate" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs mb-6 tracking-widest uppercase font-bold ">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Status: Offline
          </div>
        </motion.div>

        {/* --- SIMPLE HEADLINE --- */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          THIS WEBSITE IS <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900">CLOSED.</span>
        </motion.h1>

        {/* --- SIMPLE MESSAGE --- */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12 "
        >
          The old version of IRIS has been completely shut down. We have moved everything to a brand new, secure website. Click the button below to continue.
        </motion.p>

        {/* --- GIANT REDIRECT BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="w-full sm:w-auto"
        >
          {/* REPLACE THE HREF BELOW WITH YOUR NEW DOMAIN */}
          <a 
            href="https://YOUR-NEW-SITE-URL.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between sm:justify-center gap-6 px-8 py-5 rounded-2xl bg-[#050505] border border-[#39FF14]/40 hover:border-[#39FF14] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_40px_rgba(57,255,20,0.3)] w-full overflow-hidden"
          >
            {/* Button Hover Sweep */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
            
            <div className="relative z-10 flex flex-col text-left sm:text-center">
              <span className="text-white font-bold text-xl uppercase tracking-wider group-hover:text-[#39FF14] transition-colors">
                Go To The New Website
              </span>
              <span className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 ">
                Click here to continue
              </span>
            </div>
            
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center group-hover:bg-[#39FF14] group-hover:text-black transition-all text-[#39FF14]">
              <ArrowRight className="w-6 h-6 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </div>
          </a>
        </motion.div>
      </motion.div>
      
    
    </div>
  );
}