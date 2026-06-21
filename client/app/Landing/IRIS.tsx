"use client";

import { motion } from "framer-motion";
import { Lock, Terminal, Activity } from "lucide-react";

export default function IRIS() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#39FF14] selection:text-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* ── BACKGROUND EFFECTS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#39FF14]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 w-full"
      >
        {/* ── STATUS BADGE ── */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs mb-8 backdrop-blur-md font-mono shadow-[0_0_15px_rgba(239,68,68,0.1)]">
          <Lock className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-bold">
            Access Restricted
          </span>
        </div>

        {/* ── ICONOGRAPHY ── */}
        <div className="w-24 h-24 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group">
          <div className="absolute inset-0 rounded-2xl bg-[#39FF14]/5 opacity-50" />
          <Terminal className="w-10 h-10 text-zinc-500" />
          {/* Animated scanning line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-[#39FF14]/50 shadow-[0_0_10px_#39FF14] animate-[scan_2s_ease-in-out_infinite]" />
        </div>

        {/* ── TYPOGRAPHY ── */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase text-white drop-shadow-lg">
          NEURAL CORE <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-zinc-500 to-zinc-800">
            RELOCATED.
          </span>
        </h1>

        <p className="text-zinc-400 text-sm md:text-base font-mono leading-relaxed mb-8">
          The open-source web interface for IRIS has been permanently
          deprecated. To protect proprietary agent logic and ensure maximum
          execution speed, the system architecture has transitioned to a
          closed-core model.
        </p>

        {/* ── SYSTEM TERMINAL BOX ── */}
        <div className="w-full bg-[#050505] border border-white/5 rounded-xl p-5 text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#39FF14]/50" />

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-3 h-3 text-[#39FF14]" />
              System Status
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-500 text-[10px] font-mono font-bold uppercase tracking-widest">
                Migration in Progress
              </span>
            </div>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <p className="text-zinc-500">
              <span className="text-[#39FF14] mr-2">➜</span>
              Disconnecting legacy WebSockets...{" "}
              <span className="text-white">OK</span>
            </p>
            <p className="text-zinc-500">
              <span className="text-[#39FF14] mr-2">➜</span>
              Purging public vector indices...{" "}
              <span className="text-white">OK</span>
            </p>
            <p className="text-zinc-500">
              <span className="text-[#39FF14] mr-2">➜</span>
              Establishing secure private HQ...{" "}
              <span className="animate-pulse text-amber-500">PENDING</span>
            </p>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-12 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
          A new command hub is under construction. Stand by.
        </div>
      </motion.div>
    </div>
  );
}
