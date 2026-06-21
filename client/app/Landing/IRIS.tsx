"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PowerOff, Lock, Github, Mail } from "lucide-react";

const BOOT_LINES = [
  "neural_core.shutdown()",
  "terminating active sessions...",
  "revoking public endpoints...",
  "archiving deployment...",
  "status: OFFLINE",
];

const IRIS = () => {
  const [bootIndex, setBootIndex] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    if (bootIndex >= BOOT_LINES.length) {
      setBootDone(true);
      return;
    }
    const t = setTimeout(() => setBootIndex((i) => i + 1), 280);
    return () => clearTimeout(t);
  }, [bootIndex]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono selection:bg-[#39FF14] selection:text-black relative overflow-hidden flex items-center justify-center px-6">
      {/* Cyber-grid ambient background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          {/* Status row */}
          <div className="flex items-center justify-between border-b border-white/5 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                System Status
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-400/90 font-bold px-2 py-0.5 rounded border border-red-400/20 bg-red-400/5">
              Offline
            </span>
          </div>

          {/* Icon + headline */}
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
              <PowerOff className="w-6 h-6 text-zinc-400" />
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
              This deployment of IRIS
              <br />
              <span className="text-zinc-500">has been shut down.</span>
            </h1>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              This was the original public build of IRIS AI. It's been
              retired and fully decommissioned — every route on this domain
              has been removed. The project continues, privately, under new
              infrastructure that isn't public yet.
            </p>
          </div>

          {/* Boot-style shutdown log */}
          <div className="rounded-xl border border-white/5 bg-black/60 p-4 space-y-1.5 text-[11px]">
            {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#39FF14]/60">$</span>
                <span
                  className={
                    i === BOOT_LINES.length - 1
                      ? "text-red-400/90 font-bold"
                      : "text-zinc-500"
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            {!bootDone && (
              <span className="inline-block w-1.5 h-3 bg-[#39FF14]/60 animate-pulse ml-4" />
            )}
          </div>

          {/* What this means */}
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-3 text-xs text-zinc-400">
              <Lock className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
              <span>
                Old links, README badges, and bookmarks pointing here will no
                longer resolve to a working app.
              </span>
            </div>
          </div>

          {/* Contact — only outlet left */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/201Harsh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-[#39FF14] hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href="mailto:contact@irisxai.dev"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-[#39FF14] hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>

        <p className="text-center text-[10px] text-zinc-700 mt-6 tracking-wide">
          IRIS AI — Built by Harsh Pandey
        </p>
      </motion.div>
    </div>
  );
};

export default IRIS;