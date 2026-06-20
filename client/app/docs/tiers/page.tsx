"use client";

import { motion } from "framer-motion";
import {
  Coins,
  Check,
  X,
  GitBranch,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

interface TierDetail {
  name: string;
  price: string;
  desc: string;
  features: string[];
  unlocked: boolean[];
  badge?: string;
  link: string;
}

const tiersData: TierDetail[] = [
  {
    name: "Free Tier",
    price: "Free",
    desc: "Baseline public repository for exploring the frontend UI architecture & layouts.",
    features: [
      "Public Frontend Shell (React + Tailwind)",
      "Community Layout Config",
      "Public GitHub Issue Tracker",
      "Core Voice Engine Orchestration",
      "Deep System-Level Actions Source",
      "Local Self-Hosting Access",
    ],
    unlocked: [true, true, true, false, false, false],
    link: "https://github.com/IRISX-AI/IRIS-AI",
  },
  {
    name: "IRIS Supporter",
    price: "$5/mo",
    desc: "Directly back development progress and receive standard insights on upcoming features.",
    features: [
      "GitHub Sponsor Badge",
      "Development Progress Logs",
      "Monthly Project Summaries",
      "Core Voice Engine Orchestration",
      "Deep System-Level Actions Source",
      "Local Self-Hosting Access",
    ],
    unlocked: [true, true, true, false, false, false],
    badge: "Community",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "IRIS Insider",
    price: "$15/mo",
    desc: "Gain read access to the iris-insiders repository to examine functional agent snippets.",
    features: [
      "Private Repo Access (iris-insiders)",
      "Working Core Agent Code Snippets",
      "Experimental UI Previews",
      "Early voice pipeline showcases",
      "Deep System-Level Actions Source",
      "Local Self-Hosting Access",
    ],
    unlocked: [true, true, true, true, false, false],
    badge: "Popular",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "IRIS Builder",
    price: "$30/mo",
    desc: "Perfect for developers looking to build on top of prototype systems and custom workflows.",
    features: [
      "Access to iris-labs repository",
      "Experimental Agent & Prompt scripts",
      "Technical Electron/V8 bytecode logs",
      "Standalone alpha tooling trials",
      "Block architectural diagrams",
      "Local Self-Hosting Access",
    ],
    unlocked: [true, true, true, true, true, false],
    badge: "Developer",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "Alpha & Enterprise",
    price: "$50/mo+",
    desc: "Complete proximity to bleeding-edge systems, full source access, and custom licenses.",
    features: [
      "Access to iris-alpha repository",
      "Precompiled upcoming desktop builds",
      "High-tier closed tools previews",
      "Private code-level patch changelogs",
      "Commercial License agreement",
      "Priority feature feedback reviews",
    ],
    unlocked: [true, true, true, true, true, true],
    badge: "Enterprise",
    link: "https://github.com/sponsors/201Harsh",
  },
];

export default function DocsTiersPage() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest uppercase">
          <Coins className="w-3.5 h-3.5" />
          Licensing Model
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          SPONSORSHIP <span className="text-[#39FF14]">TIERS.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-mono">
          IRIS operates under an Open Core development methodology. Public repos host the frontend layers, while sponsors fund core engine modules.
        </p>
      </motion.div>

      {/* Sustainable Open Core model description */}
      <motion.div variants={itemVariants} className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
          <GitBranch className="w-5 h-5 text-[#39FF14]" />
          Sustainable Engineering Model
        </h3>
        <p className="text-zinc-400 text-xs font-mono leading-relaxed">
          Open Core allows IRIS to distribute high-fidelity user interface configurations, layouts, and tools under a standard MIT license, while safeguarding proprietary agent orchestration techniques and live voice routing protocols under private code structures.
        </p>
      </motion.div>

      {/* Tiers Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiersData.map((tier, idx) => {
          const isAlpha = tier.badge === "Enterprise";
          const isInsider = tier.badge === "Popular";
          const isBuilder = tier.badge === "Developer";
          return (
            <div
              key={idx}
              className={`
                bg-[#050505] border rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300
                ${
                  isAlpha
                    ? "border-purple-500/30 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
                    : isInsider || isBuilder
                    ? "border-[#39FF14]/30 hover:border-[#39FF14]/50 hover:shadow-[0_0_25px_rgba(57,255,20,0.1)]"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              {/* Badge overlay */}
              {tier.badge && (
                <div
                  className={`
                    absolute top-4 right-4 text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded tracking-widest
                    ${
                      isAlpha
                        ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                        : "bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14]"
                    }
                  `}
                >
                  {tier.badge}
                </div>
              )}

              {/* Title & Price */}
              <div className="space-y-4">
                <div className="font-mono">
                  <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">{tier.name}</h3>
                  <div className="text-2xl md:text-3xl font-black text-white mt-1">{tier.price}</div>
                </div>
                <p className="text-zinc-500 text-xs font-mono leading-relaxed">{tier.desc}</p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 font-mono text-xs">
                  {tier.features.map((feat, fIdx) => {
                    const isUnlocked = tier.unlocked[fIdx];
                    return (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        {isUnlocked ? (
                          <Check className={`w-3.5 h-3.5 shrink-0 ${isAlpha ? "text-purple-400" : "text-[#39FF14]"}`} />
                        ) : (
                          <X className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                        )}
                        <span className={isUnlocked ? "text-zinc-300" : "text-zinc-600 line-through"}>
                          {feat}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer border transition-all duration-200
                    ${
                      isAlpha
                        ? "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 text-purple-300"
                        : isInsider || isBuilder
                        ? "bg-[#39FF14]/10 border-[#39FF14]/20 hover:bg-[#39FF14]/20 text-[#39FF14]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 text-zinc-300"
                    }
                  `}
                >
                  {isAlpha ? "Contact Support" : "Support on GitHub"}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Dual Licensing Details */}
      <motion.div variants={itemVariants} className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 font-mono text-xs">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
          Dual Licensing Distribution Agreement
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-500">
          <div className="space-y-2">
            <span className="text-white font-bold block">1. Community Open Code</span>
            <p className="leading-relaxed">
              Standard UI layout configurations, templates, widgets, and IPC preloads are governed under the open-source MIT License. You are free to modify layouts, connect public hooks, and integrate layouts.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white font-bold block">2. Commercial & Sponsor Code</span>
            <p className="leading-relaxed">
              Private repository scripts, custom core hooks, experimental agent parameters, and bytecode engines require commercial developer permissions. Redistribution of compiled V8 main loops is prohibited.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
