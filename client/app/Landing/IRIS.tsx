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
      
      <div className="absolute inset-0 z-0 bg-[radial-linear(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none" />
      
      
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        className="absolute left-0 w-full h-0.5 bg-[#39FF14]/50 shadow-[0_0_20px_#39FF14] z-0 pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center"
      >
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

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          THIS WEBSITE IS <span className="text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-900">CLOSED.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12 "
        >
          The old version of IRIS has been completely shut down. We have moved everything to a brand new, secure website. 
        </motion.p>
      </motion.div>
      
    
    </div>
  );
}
