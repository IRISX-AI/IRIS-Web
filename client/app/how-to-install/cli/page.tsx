"use client";

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { Terminal } from "@/app/constants/Terminal";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CliInstallGuide() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#39FF14]/30 pt-24 overflow-hidden relative">
      <Header />

      <main className="max-w-4xl mx-auto px-6 relative z-10 pb-24">
        {/* ── BACK NAVIGATION ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/how-to-install"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#39FF14] font-mono text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Desktop Installation
          </Link>
        </motion.div>

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#39FF14]/10 rounded-xl">
              <TerminalIcon className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              CLI Installation
            </h1>
          </div>
          <p className="text-zinc-400 text-lg">
            Global NPM package installation guide. Requires{" "}
            <strong className="text-white">Node.js 24+</strong> to be installed
            on your machine.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <div className="bg-zinc-900 border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-zinc-500 font-mono text-xs ml-2">
                iris-setup.sh
              </span>
            </div>

            <div className="p-4 md:p-6 h-125 overflow-y-auto custom-scrollbar">
              <Terminal
                commands={[
                  "npm install -g iris-mini",
                  "iris",
                  "AIzaSy...[REDACTED]",
                  "Lyra",
                  "y",
                ]}
                outputs={{
                  0: [
                    "added 42 packages in 3s",
                    "✔ Installed iris-mini globally.",
                  ],
                  1: [
                    "██╗██████╗ ██╗███████╗",
                    "██║██╔══██╗██║██╔════╝",
                    "██║██████╔╝██║███████╗",
                    "██║██╔══██╗██║╚════██║",
                    "██║██║  ██║██║███████║",
                    "╚═╝╚═╝  ╚═╝╚═╝╚══════╝",
                    "",
                    "SETUP   ·   Command Line Interface",
                    "────────────────────────────────────────────────────────",
                    "Initial setup required.",
                    "",
                    "─────── 1 / 2 · API KEY ───────",
                    "? Enter your Gemini API key:",
                  ],
                  2: [
                    "✔ Validating key format...",
                    "",
                    "─────── 2 / 2 · VOICE ───────",
                    "? Pick a voice (Lyra/Puck)",
                  ],
                  3: [
                    "─────── REVIEW ───────",
                    "API key  →  •••••••••••••••••",
                    "Voice    →  Lyra",
                    "? Save and launch IRIS? (Y/n)",
                  ],
                  4: [
                    "✔ Configuration saved.",
                    "",
                    "─────── STARTING ───────",
                    "✔ Loading config...",
                    "✔ Connecting API...",
                    "",
                    "[ SYSTEM ONLINE ]",
                    "[ PORT ]    http://localhost:6753",
                    "[ EXIT ]    Press Ctrl + C to stop",
                    "========================================================",
                  ],
                }}
                typingSpeed={20}
                delayBetweenCommands={1000}
              />
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
