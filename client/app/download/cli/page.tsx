"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Terminal,
  Copy,
  Check,
  Cpu,
  ShieldCheck,
  ArrowLeft,
  Server,
  Zap,
  HardDrive,
} from "lucide-react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function CliDownloadPage() {
  const [copied, setCopied] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm install -g iris-mini");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEnv = () => {
    navigator.clipboard.writeText(
      "iris config set GEMINI_API_KEY=your_key_here",
    );
    setCopiedEnv(true);
    setTimeout(() => setCopiedEnv(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#39FF14]/30 pt-24 overflow-hidden relative">
      <Header />

      <main className="max-w-5xl mx-auto px-6 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/download"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#39FF14] font-mono text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Desktop Client
          </Link>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-start"
        >
          <div className="absolute top-0 right-0 w-125 h-125 bg-[#39FF14]/5 blur-[120px] rounded-full pointer-events-none" />

          <motion.div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest mb-6">
            <Terminal className="w-3 h-3" />
            NPM REGISTRY V1.3.0
          </motion.div>

          <motion.h1 className="relative z-10 text-5xl md:text-7xl font-black tracking-tight mb-6">
            HEADLESS <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#39FF14] to-[#ccffcc] drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]">
              CLI ENGINE.
            </span>
          </motion.h1>

          <motion.p className="relative z-10 max-w-2xl text-zinc-300 text-lg mb-10 leading-relaxed font-mono">
            A lightweight, globally accessible Node.js package. Execute native
            OS commands, trigger macros, and manage files entirely through the
            terminal without the GUI overhead.
          </motion.p>

          <motion.div className="w-full relative z-10 mb-16">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-1">
              Global Installation
            </div>
            <div className="group flex items-center justify-between bg-[#0a0a0a] border border-white/10 hover:border-[#39FF14]/50 w-full rounded-2xl p-4 md:p-6 shadow-2xl transition-all">
              <div className="flex items-center gap-4 overflow-x-auto">
                <span className="text-zinc-600 font-mono select-none">$</span>
                <code className="text-lg md:text-xl font-mono text-zinc-200 whitespace-nowrap">
                  <span className="text-[#39FF14]">npm</span> install -g
                  iris-mini
                </code>
              </div>
              <button
                onClick={handleCopyInstall}
                className="cursor-pointer flex items-center justify-center shrink-0 w-12 h-12 bg-white/5 hover:bg-[#39FF14]/20 rounded-xl text-zinc-400 hover:text-[#39FF14] transition-colors ml-4"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-[#39FF14]" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>

          <div className="w-full grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#39FF14]" />
                1. Configuration
              </h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                IRIS CLI requires your personal API key (BYOK) to execute
                reasoning tasks. Store it securely in the local configuration
                file.
              </p>
              <div className="flex items-center justify-between bg-black border border-white/10 rounded-xl p-3">
                <code className="text-xs font-mono text-zinc-300 overflow-hidden text-ellipsis">
                  iris config set GEMINI_API_KEY=...
                </code>
                <button
                  onClick={handleCopyEnv}
                  className="text-zinc-500 hover:text-[#39FF14] p-2"
                >
                  {copiedEnv ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#39FF14]" />
                2. Execution
              </h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Once configured, you can pass natural language execution
                commands directly to the engine from any directory.
              </p>
              <div className="bg-black border border-white/10 rounded-xl p-3">
                <code className="text-xs font-mono text-[#39FF14]">
                  $ iris run "organize my downloads folder"
                </code>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Specs Footer */}
        <motion.section className="mt-20 pt-8 border-t border-white/5 relative z-10">
          <div className="flex flex-wrap items-center gap-6 text-zinc-500 font-mono text-xs tracking-widest">
            <span className="flex items-center gap-2">
              <Server className="w-4 h-4 text-zinc-400" /> CI/CD COMPATIBLE
            </span>
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-zinc-400" /> NODE.JS 24+ REQUIRED
            </span>
            <span className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-zinc-400" /> {"<"} 15MB
              FOOTPRINT
            </span>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
