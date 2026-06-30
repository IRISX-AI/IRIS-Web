"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function DeprecatedSite() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-6 selection:bg-green-500/30 selection:text-green-200">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid pattern overlay for a tech feel */}
      <div className="absolute inset-0 bg-[linear-linear(to_right,#80808012_1px,transparent_1px),linear-linear(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md text-green-400 text-sm mb-8 tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
          System Update
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          We have{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            moved
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed mb-12"
        >
          This website is no longer active. Please visit our new platform to
          continue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full sm:w-auto"
        >
          <a
            href="https://irisxhq.vercel.app"
            className="group relative flex items-center justify-center gap-4 px-8 py-4 rounded-xl bg-black border border-green-500/50 text-green-400 hover:text-black hover:bg-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 overflow-hidden"
          >
            {/* Hover scan effect */}
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />

            <span className="relative z-10 font-medium text-lg uppercase tracking-wider">
              Visit New Website
            </span>
            <div className="relative z-10 p-1 rounded-full bg-green-500/20 group-hover:bg-black/20 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
