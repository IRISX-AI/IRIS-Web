"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function DeprecatedSite() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 flex flex-col items-center justify-center relative overflow-hidden px-6 font-sans selection:bg-white selection:text-black">
      {/* Minimalist Ambient Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-200 h-200 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent opacity-50 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 px-4 py-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
            Service Relocated
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold capitalize tracking-tight text-white mb-6"
        >
          We have moved.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-400 text-xl max-w-sm mx-auto leading-relaxed mb-12 font-normal"
        >
          This platform has been officially closed. You can find us at our new
          location.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:w-auto"
        >
          <a
            href="https://irisxhq.vercel.app/"
            className="group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto font-medium overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Visit irisxhq.vercel.app</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
