"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Sparkles, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function DocsOverviewPage() {
  const containerVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Banner */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
      >
        <Image
          src="/banner.png"
          alt="IRIS AI Documentation Banner"
          width={1200}
          height={400}
          priority
          className="w-full h-auto object-cover max-h-62.5"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Header Info */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          Documentation Core
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          SYSTEM <span className="text-[#39FF14]">OVERVIEW.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          IRIS is a voice-first neural execution system built to perform
          real-world actions directly on your local workstation. By using
          Google's bleeding-edge Gemini 3.1 Live API with bidirectional WebRTC
          audio, IRIS bridges the gap between reasoning and execution.
        </p>
      </motion.div>

      {/* Real-time Audio Processing Flow */}
      <motion.div
        variants={itemVariants}
        className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <Zap className="w-5 h-5 text-[#39FF14]" />
          What is Voice-First?
        </h3>
        <p className="text-zinc-400 font-mono text-sm leading-relaxed">
          Traditional AI models are text-first: you type, wait, read. IRIS
          operates bidirectionally with real-time WebRTC audio streaming,
          bringing latency under 500ms. Speak naturally, interrupt anytime—IRIS
          listens, thinks, and executes dynamically.
        </p>

        {/* Visual Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 text-center font-mono text-xs text-zinc-300">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-center items-center gap-2">
            <span className="text-white font-bold">1. Voice Input</span>
            <span className="text-zinc-500">Full Duplex Audio</span>
          </div>
          <div className="flex items-center justify-center text-zinc-500 text-lg">
            ➔
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-center items-center gap-2">
            <span className="text-[#39FF14] font-bold">2. Gemini Live API</span>
            <span className="text-zinc-500">Inference & Intent</span>
          </div>
          <div className="flex items-center justify-center text-zinc-500 text-lg">
            ➔
          </div>
          <div className="bg-[#39FF14]/5 border border-[#39FF14]/20 p-4 rounded-xl flex flex-col justify-center items-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.05)]">
            <span className="text-[#39FF14] font-bold">3. Native OS Exec</span>
            <span className="text-zinc-500">LangGraph Tooling</span>
          </div>
        </div>
      </motion.div>

      {/* Difference Column */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#39FF14]" />
            What makes IRIS different?
          </h4>
          <ul className="space-y-3 font-mono text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-[#39FF14]">•</span>
              <span>
                <strong>Proprietary Orchestration:</strong> Protected,
                high-performance agent loops utilizing LangGraph state machines.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#39FF14]">•</span>
              <span>
                <strong>Pure Local Execution:</strong> Unlike web wrappers, IRIS
                executes CLI commands, manipulates desktop windows, and operates
                hardware.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#39FF14]">•</span>
              <span>
                <strong>System-Level Access:</strong> Sandboxed but deep access
                to directories, galleries, active processes, and ADB bridges.
              </span>
            </li>
          </ul>
        </div>

        {/* Open Core Disclaimer */}
        <div className="bg-[#050505] border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Open Core Architecture
          </h4>
          <p className="font-mono text-xs text-zinc-400 leading-relaxed">
            IRIS follows an open-core licensing model. The public repository
            controls the frontend shell, electron layout, and standard UI
            widgets. The core voice engine, neural orchestration loops, and
            system-level actions are packaged as protected main process modules
            to secure intellectual property.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
