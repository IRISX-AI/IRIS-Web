"use client";

import { motion } from "framer-motion";

export default function IRIS() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center relative overflow-hidden font-mono px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#39FF14]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full border border-[#39FF14]/20 bg-[#050505] p-8 rounded-2xl text-center relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        {/* Animated Neon Top Bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-[#39FF14] font-bold">
            System Update
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-4 text-white">
          This Website Has Been Scrapped
        </h1>

        {/* Message */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          We have completely taken down this version of the site. The old
          code is deprecated, and all routes have been cleared.
        </p>

        {/* Divider */}
        <div className="h-[1px] w-full bg-zinc-800 my-4" />

        {/* Status Notice */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#39FF14] text-xs font-bold uppercase tracking-widest"
        >
          A brand new version is coming soon.
        </motion.p>
      </motion.div>

      {/* Simple Footer */}
      <div className="absolute bottom-6 text-[10px] text-zinc-600 tracking-wider uppercase">
        IRIS • All old endpoints deleted
      </div>
    </div>
  );
}