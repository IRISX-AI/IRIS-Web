"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Terminal as TerminalIcon,
  Play,
  Key,
  Smartphone,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function InstallGuide() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100  selection:bg-[#39FF14]/30 pt-24 overflow-hidden relative">
      <Header />

      <main className="max-w-5xl mx-auto px-6 relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs  tracking-widest mb-6">
            DOCUMENTATION
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase">
            How to Install <span className="text-[#39FF14]">IRIS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-200 text-lg">
            Step-by-step instructions to install the native IRIS Desktop
            Application.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full mb-12 bg-linear-to-r from-zinc-900 to-zinc-950 border border-[#39FF14]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(57,255,20,0.1)] hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#39FF14]/10 rounded-xl">
              <Key className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Prerequisite: API Keys
              </h3>
              <p className="text-zinc-200 text-sm">
                IRIS operates on a Bring Your Own Key (BYOK) model. You must
                have a Google Gemini API key to run the application.
              </p>
            </div>
          </div>
          <Link
            href="/guide"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-[#39FF14]/20 border border-white/10 hover:border-[#39FF14]/50 text-white rounded-xl  text-sm transition-all group"
          >
            Read API Guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#39FF14]" />
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-4">
            <Monitor className="w-8 h-8 text-[#39FF14]" />
            <h2 className="text-3xl font-bold">Desktop App Setup</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-900 border border-[#39FF14]/50 flex items-center justify-center text-[#39FF14]  font-bold text-sm">
                  1
                </div>
                <div className="w-px h-full bg-linear-to-b from-[#39FF14]/50 to-transparent my-2"></div>
              </div>
              <div className="pb-8 pt-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Download the Installer
                </h4>
                <p className="text-zinc-200 text-sm">
                  Navigate to the{" "}
                  <Link
                    href="/download"
                    className="text-[#39FF14] hover:underline"
                  >
                    Download page
                  </Link>{" "}
                  and get the latest native <code>.exe</code> file for Windows.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-900 border border-[#39FF14]/50 flex items-center justify-center text-[#39FF14]  font-bold text-sm">
                  2
                </div>
                <div className="w-px h-full bg-linear-to-b from-[#39FF14]/50 to-transparent my-2"></div>
              </div>
              <div className="pb-8 pt-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Run & Bypass Defender
                </h4>
                <p className="text-zinc-200 text-sm">
                  Run the installer. If the Windows SmartScreen popup appears,
                  click <strong className="text-white">More Info</strong> and
                  then <strong className="text-white">Run Anyway</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#39FF14] text-black flex items-center justify-center  font-bold text-sm shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                  3
                </div>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  Configure Keys & Launch
                </h4>
                <p className="text-zinc-200 text-sm">
                  Open the installed application, paste your Gemini API key into
                  the settings menu, and begin using the software.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/p/DWtGRIRgXFq/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full bg-black hover:bg-zinc-900 border border-white/10 hover:border-[#39FF14]/50 text-white font-bold py-5 rounded-2xl transition-all overflow-hidden mt-6"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#39FF14]/0 via-[#39FF14]/10 to-[#39FF14]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Play className="w-5 h-5 text-[#39FF14] fill-[#39FF14]" />
            Watch Video Tutorial
          </a>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/how-to-install/cli"
            className="group flex flex-col md:flex-row items-center justify-between gap-6 bg-[#050505] border border-white/10 hover:border-[#39FF14]/50 rounded-2xl p-6 md:p-8 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-xl group-hover:bg-[#39FF14]/10 transition-colors">
                <TerminalIcon className="w-8 h-8 text-zinc-200 group-hover:text-[#39FF14] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#39FF14] transition-colors">
                  Headless CLI Installation
                </h3>
                <p className="text-zinc-200 text-sm">
                  Looking to install the global NPM package? View the CLI
                  documentation.
                </p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-[#39FF14] group-hover:translate-x-2 transition-all shrink-0" />
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-[#39FF14] to-green-900 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#050505] border border-white/10 rounded-4xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Smartphone className="w-48 h-48 text-[#39FF14]" />
            </div>

            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-[#39FF14]" />
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  IRIS-X Mobile
                </h2>
              </div>
              <p className="text-zinc-200 text-lg mb-6 leading-relaxed">
                An upcoming Android companion app. Enable remote device control,
                background task scheduling, and mobile notification syncing.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 rounded-lg text-sm font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
                </span>
                Development in Progress
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dashed border-[#39FF14]/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <Smartphone className="w-12 h-12 text-[#39FF14]/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white  font-bold text-lg">Q3</span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
