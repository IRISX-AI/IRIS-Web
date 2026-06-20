"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Key,
  EyeOff,
  Fingerprint,
  AlertTriangle,
  ServerOff,
} from "lucide-react";

export default function DocsSecurityPage() {
  const containerVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs  tracking-widest uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          Security Protocols
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          CODE <span className="text-[#39FF14]">PROTECTION.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl ">
          IRIS implements enterprise-grade application security to safeguard
          private orchestration scripts, encrypt keys, and validate local
          runtime integrity.
        </p>
      </motion.div>

      {/* Security Guarantees Cards */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "100% BYOK Model",
            desc: "Bring Your Own Key. IRIS runs using your custom API credentials. No centralized usage metering or remote middleware proxying.",
            icon: Key,
          },
          {
            title: "Local OS Keychain",
            desc: "All credentials and keys are stored securely using your operating system's native keychain database, encrypted locally.",
            icon: Lock,
          },
          {
            title: "Zero Remote Calls",
            desc: "No analytics tracking or validation handshakes. The application runs locally and never transmits configuration profiles.",
            icon: ServerOff,
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#050505] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#39FF14]/30 hover:shadow-[0_0_20px_rgba(57,255,20,0.05)] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 w-fit">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base ">{item.title}</h3>
              <p className="text-zinc-500 text-xs  leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Core Protection Shielding */}
      <motion.div
        variants={itemVariants}
        className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <EyeOff className="w-5 h-5 text-[#39FF14]" />
          Shielding Mechanisms & Compilation
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl ">
          To maintain structural integrity and secure the main execution logic
          from tampering or unauthorized modifications, IRIS employs a
          multi-tiered binaries shield.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4  text-xs text-zinc-300">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 h-fit">
                01
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">
                  V8 Bytecode Compilation
                </span>
                <p className="text-zinc-500 leading-relaxed">
                  All TypeScript files inside the Main Process (including{" "}
                  <code className="text-[#39FF14]">iris-ai.ts</code> and{" "}
                  <code className="text-[#39FF14]">tools.ts</code>) are compiled
                  directly into raw machine binary V8 bytecode (.jsc files).
                  This prevents standard reverse engineering and source viewing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 h-fit">
                02
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">
                  String Obfuscation
                </span>
                <p className="text-zinc-500 leading-relaxed">
                  System instruction templates, prompt definitions, and tool
                  mapping descriptors are converted into cryptographic,
                  runtime-evaluated function routines. Performing a global
                  search for plaintext API keys or instructions returns null
                  results.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 h-fit">
                03
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">
                  ASAR Hash Integrity Checks
                </span>
                <p className="text-zinc-500 leading-relaxed">
                  At package build time, a SHA-256 hash map signature is
                  hardcoded. When the application initializes, a background
                  thread performs real-time file validation checks on the
                  archives. Any detected modification results in an immediate
                  safety termination.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 h-fit">
                04
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">
                  Window & Context Isolation
                </span>
                <p className="text-zinc-400 block font-semibold leading-relaxed">
                  The renderer framework operates under strict sandboxing
                  settings. Render context files cannot trigger Node scripts
                  directly. All requests must go through a whitelisted IPC
                  bridge that filters invalid properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security Warning & Vault */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Vault Configuration */}
        <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all ">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-[#39FF14]" />
            Local Security Vault
          </h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            IRIS integrates with native facial biometric systems and standard
            numeric PIN codes to lock down local execution privileges.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
              <span className="text-zinc-400">Lock System Vault</span>
              <code className="text-[#39FF14] text-[10px]">
                "Lock the system vault"
              </code>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
              <span className="text-zinc-400">Biometric Face Check</span>
              <code className="text-[#39FF14] text-[10px]">
                Multi-Face Validation
              </code>
            </div>
          </div>
        </div>

        {/* System Warnings */}
        <div className="bg-[#050505] border border-orange-500/20 rounded-2xl p-6 space-y-4 hover:border-orange-500/30 transition-all ">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Execution Disclaimer
          </h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            IRIS operates with extensive OS-level interaction privileges. It can
            manage files, invoke terminal routines, and run local automation
            macros.
          </p>
          <ul className="space-y-1.5 text-zinc-400 text-xs pl-2 border-l border-orange-500/20">
            <li>• Ensure API keys are kept private.</li>
            <li>• Custom macros should be audited prior to execution.</li>
            <li>• Standard processes run under user permission profiles.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
