"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Zap,
  Cpu,
  GitBranch,
  ShieldCheck,
  Smartphone,
  Star,
  Info,
  Calendar,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

interface ChangelogItem {
  version: string;
  date: string;
  type: string; // "Major" | "Minor" | "Patch"
  title: string;
  desc: string;
  changes: string[];
  icon: any;
}

const changelogData: ChangelogItem[] = [
  {
    version: "v1.5.1",
    date: "June 2026",
    type: "Major",
    title: "The Live Audio Revolution",
    desc: "A complete overhaul of the communication and voice logic, rebuilding the agent on Google's Gemini 3.1 Live WebRTC API.",
    icon: Zap,
    changes: [
      "Rebuilt voice architecture: Native full-duplex WebRTC streaming reduces command response latency to <500ms.",
      "Removed legacy WebSocket layer: Retired heavy WebSocket polling channels, optimizing memory and process thread consumption.",
      "Enhanced tool orchestration pipeline: LangGraph loops are compiled into binary bytecode blocks to shield private core loops.",
      "Multimodal vision enhancement: Direct screen OCR streams context frames directly to the live reasoning engine.",
      "Cleaned system lifecycle: Preload scripts whitelisted to isolate Renderer contexts from Node executions.",
    ],
  },
  {
    version: "v1.3.0",
    date: "March 2026",
    type: "Minor",
    title: "Mobile Link & ScreenPeeler OCR",
    desc: "Introduced the IRIS-X companion mobile linkage bridge and screen region character peeling.",
    icon: Smartphone,
    changes: [
      "Added Mobile Companion link: Secure local network bridging (ADB/WebSockets) for reading smartphone notifications and battery telemetry.",
      "Introduced ScreenPeeler (OCR): Global hotkey mapping (Ctrl + Alt + X) to take screen crop snippets and extract raw characters via AI to clipboard.",
      "Added motherboard HWID logs: Initial implementation of motherboard signature verification to enforce licensing over a maximum of two devices.",
      "Added Gmail & WhatsApp automation: Autopilot routines for scanning unread emails and scheduling messages.",
    ],
  },
  {
    version: "v1.2.0",
    date: "December 2025",
    type: "Minor",
    title: "Vector Search & Custom Macros",
    desc: "Ingested semantic memory layers using local LanceDB databases and local directory embedding indexes.",
    icon: Cpu,
    changes: [
      "Integrated local Vector DB: Added LanceDB indexing directories inside sandboxed application user data folders.",
      "Added Custom Macros: Multi-step macro sequence executing CLI instructions, file modifications, and telemetry updates.",
      "Added Localhost Wormholes: Local port tunneling to securely expose dev environments to the public internet.",
    ],
  },
  {
    version: "v1.1.0",
    date: "September 2025",
    type: "Minor",
    title: "Obfuscation Shield & Widgets",
    desc: "First integration of bytecode shielding protocols and floating visual overlays.",
    icon: ShieldCheck,
    changes: [
      "V8 Bytecode compiler transition: TypeScript main process files (.ts) compiled into raw unreadable V8 machine code (.jsc).",
      "Added Floating Desktop Widgets: Real-time UI panels showing map views, stock charts, and local weather summaries.",
      "String Obfuscation: Obfuscated core prompt models and API hooks to prevent simple extraction.",
    ],
  },
  {
    version: "v1.0.0",
    date: "June 2025",
    type: "Patch",
    title: "Ecosystem Launch",
    desc: "The initial public release of the IRIS AI client workspace, featuring basic local workstation controls.",
    icon: Star,
    changes: [
      "Core Electron client skeleton: Context-isolated preload layouts and React 19 visual UI pages.",
      "Workstation local controls: Basic native file operations (folder generation, text reading/writing, processes launching).",
      "BYOK support: Hashed credentials stored inside native Windows Credentials Manager and macOS Keychains.",
    ],
  },
];

export default function ChangelogPage() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-xs mb-8 backdrop-blur-md">
            <Activity className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">Ecosystem Momentum</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            RELEASE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              CHANGELOG.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Review the structural iterations, feature extensions, and performance upgrades of IRIS.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 relative z-20 max-w-4xl mx-auto">
        {/* Open Core Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-[#39FF14]/20 rounded-2xl p-6 md:p-8 mb-16 space-y-4"
        >
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
            <GitBranch className="w-5 h-5 text-[#39FF14]" />
            Transition to Sustainable Open Core Model
          </h3>
          <div className="text-zinc-400 text-xs font-mono leading-relaxed space-y-3">
            <p>
              In our earlier iterations (pre-v1.1.0), IRIS was developed as a 100% free and open-source project. However, to fund continuous engineering cycles, integrate low-latency SDK solutions (Gemini Live API), and construct advanced tools, IRIS has transitioned to an <strong>Open Core model</strong>.
            </p>
            <p>
              <strong>What remains open-source?</strong> The public repository contains the visual layout configuration, context-isolated preloads, visual React components, and general community templates.
            </p>
            <p>
              <strong>What is protected?</strong> The core reasoning orchestrator, dynamic tool execution main structures, and automated security locks are packaged inside unreadable V8 bytecode. 
            </p>
            <div className="p-4 rounded-xl bg-[#39FF14]/5 border border-[#39FF14]/10 text-[#39FF14]/90 space-y-2 mt-2">
              <span className="font-bold block">Sponsorship Inclusions:</span>
              <ul className="space-y-1 pl-2">
                <li>• **$15/mo Sponsor (Insider)**: Unlocks read access to `iris-insiders` containing functional hooks and code snippets. *Sponsorship at this level does not provide the full code.*</li>
                <li>• **$30/mo Sponsor (Builder)**: Access to testing prompts, logs, and workflow macros.</li>
                <li>• **$50/mo Sponsor (Alpha)**: Full read access to the raw, unprotected, uncompiled source code, precompiled releases, and commercial licenses.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12"
        >
          {changelogData.map((item, idx) => {
            const Icon = item.icon;
            const isMajor = item.type === "Major";
            return (
              <motion.div key={idx} variants={itemVariants} className="relative">
                {/* Timeline Dot */}
                <div
                  className={`
                    absolute -left-[35px] md:-left-[51px] top-1.5 w-5 h-5 rounded-full border flex items-center justify-center bg-black
                    ${isMajor ? "border-[#39FF14] text-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.3)]" : "border-zinc-500 text-zinc-500"}
                  `}
                >
                  <Icon className="w-3 h-3" />
                </div>

                {/* Changelog Card */}
                <div className="bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 space-y-4 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl font-bold font-mono ${isMajor ? "text-[#39FF14]" : "text-white"}`}>
                        {item.version}
                      </span>
                      <span className="text-zinc-500 text-xs font-mono font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <span
                      className={`
                        text-[9px] font-black uppercase font-mono px-2 py-0.5 rounded tracking-widest
                        ${
                          isMajor
                            ? "bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14]"
                            : "bg-white/5 border border-white/10 text-zinc-400"
                        }
                      `}
                    >
                      {item.type} Release
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-mono">{item.title}</h3>
                    <p className="text-zinc-400 text-xs font-mono leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">Changes:</span>
                    <ul className="space-y-2 font-mono text-xs text-zinc-400 pl-2 border-l border-white/10">
                      {item.changes.map((change, cIdx) => (
                        <li key={cIdx} className="leading-relaxed">
                          - {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-zinc-500 font-mono">
          <span>IRIS Development Roadmap</span>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 border border-white/10 hover:border-[#39FF14]/30 rounded-lg text-white font-bold transition-all"
          >
            Return to Dashboard
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
