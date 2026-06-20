"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  EyeOff,
  Database,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function PrivacyPolicyPage() {
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

      {/* Banner / Title */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-xs mb-8 backdrop-blur-md">
            <Shield className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">Data Protection & Privacy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            PRIVACY <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              COMPLIANCE.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Local-First Architecture. You own your code, your system telemetry, and your keys.
          </p>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-6 relative z-20 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Card 1: Local-First Principle */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/5 blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                <Lock className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Local-First Architecture</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS is designed for developers who care deeply about privacy, workspace security, and source-code intellectual property. Unlike cloud wrappers that harvest files, IRIS executes all structural orchestration locally.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Workspace isolation: Directories are scanned, read, and indexed locally on your own machine.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Zero keylogging: Global macros and phantom inputs are captured and injected strictly on-device.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Zero Server Telemetry */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <EyeOff className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Zero Server Telemetry</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We do not maintain centralized telemetry or logging collection servers. 
            </p>
            <ul className="space-y-3 text-zinc-400 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="text-[#39FF14] font-bold">•</span>
                <span><strong>No Analytics:</strong> IRIS does not compile statistics regarding your terminal outputs, file creations, or script operations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#39FF14] font-bold">•</span>
                <span><strong>No Tracking:</strong> Voice prompts, system metrics, and keyboard overlays are never uploaded back to any centralized IRIS database.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: The BYOK Disclaimer */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">The BYOK (Bring Your Own Key) Disclosure</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS runs strictly in a BYOK configuration. To facilitate reasoning, code generation, search crawls, and multimodal tasks, the client routes local data queries to third-party endpoints.
            </p>
            <div className="p-4 rounded-xl border border-orange-500/10 bg-orange-500/5 text-orange-400/80 text-xs leading-relaxed">
              <strong>IMPORTANT:</strong> Because data is routed directly to Google AI Studio (Gemini 3.1 Live API), Groq Cloud API, and Tavily Search API, all search queries, prompts, and context parameters are governed by the privacy guidelines and policies of those specific providers. Please review their terms before adding keys.
            </div>
          </motion.div>

          {/* Card 4: Local Storage & Vector DB */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Database className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Local Vector Storage & Key Encryption</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              All memory elements, index structures, notes, and keys are stored locally on your hard disk:
            </p>
            <ul className="space-y-2 text-zinc-500 text-xs pl-2 border-l border-[#39FF14]/30">
              <li>• <strong>API Keys:</strong> Stored securely using the native OS keychain interface (Windows Credential Manager / macOS Keychain).</li>
              <li>• <strong>Vector Databases:</strong> Local LanceDB embeddings are written locally and sandboxed under the desktop app data path.</li>
              <li>• <strong>Local note cache:</strong> Markdown logs and macros remain exclusively inside the application sandbox structure.</li>
            </ul>
          </motion.div>

          {/* Card 5: Mobile App Bridge */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Smartphone className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Mobile Companion Bridge (IRIS-X)</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The IRIS-X mobile companion application routes notification streams, system indicators, and push payloads directly over local network bridges (via native Android Debug Bridge [ADB] tunnels or local WebSocket connections).
            </p>
            <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs text-zinc-400 leading-relaxed">
              The companion system has no analytics layer, does not hook into advertising scripts, and communicates exclusively with the local desktop environment.
            </div>
          </motion.div>
        </motion.div>

        {/* Return Button */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-zinc-500">
          <span>Last Updated: June 2026</span>
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
