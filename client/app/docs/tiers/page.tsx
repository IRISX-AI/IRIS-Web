"use client";

import { motion } from "framer-motion";
import {
  Coins,
  Check,
  X,
  GitBranch,
  ShieldCheck,
  ExternalLink,
  ShieldAlert,
  Info,
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
      "Standard PIN-only OS Vault lockdown",
      "Basic UI Widgets & Shell structure",
    ],
    unlocked: [true, true, true, true, true],
    link: "https://github.com/IRISX-AI/IRIS-AI",
  },
  {
    name: "IRIS Paid (Pro)",
    price: "$5 USD / ₹500 INR (One-Time)",
    desc: "Unlocks the core voice processing engine and all advanced system automation capabilities for lifetime usage.",
    features: [
      "Hands-Free Wake Up Word ('Hey, IRIS')",
      "ScreenPeeler Multimodal AI OCR (Ctrl + Alt + X)",
      "Phantom Control Ghost Keyboard (Ctrl + Alt + Space)",
      "Gmail Inbox Integration & Messaging Protocols",
      "Android Mobile Telekinesis Control (ADB pairing)",
      "DALL-E & Midjourney Image Generation Tools",
      "Deep Research Agent (Llama 3 Web Crawler)",
      "Localhost Wormhole Public internet tunnels",
      "OS Vault Lockdown: Biometric Face matching encryption",
    ],
    unlocked: [true, true, true, true, true, true, true, true, true, true],
    badge: "One-Time",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "Sponsor Tier (Base Backer)",
    price: "$10 USD / mo",
    desc: "Directly back the IRIS core ecosystem and fund continuous development updates.",
    features: [
      "GitHub Sponsor Verification Badge",
      "Development Progress Logs & Logs Access",
      "Monthly Ecosystem Progress Reports",
      "Behind-the-Scenes Engineering Logs",
    ],
    unlocked: [true, true, true, true],
    badge: "Base Monthly",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "IRIS Insider",
    price: "$15 USD / mo",
    desc: "Gain read access to the iris-insiders repository to examine functional agent snippets.",
    features: [
      "Private Repo Access (iris-insiders)",
      "Working Core Agent Code Snippets",
      "Experimental UI Previews",
      "Early voice pipeline showcases",
    ],
    unlocked: [true, true, true, true],
    badge: "Popular",
    link: "https://github.com/sponsors/201Harsh",
  },
  {
    name: "Alpha & Enterprise",
    price: "$50 USD / mo+",
    desc: "Complete proximity to bleeding-edge systems, full source access, and custom licenses.",
    features: [
      "Access to iris-alpha repository",
      "Precompiled upcoming desktop builds",
      "High-tier closed tools previews",
      "Private code-level patch changelogs",
      "Commercial License agreement & Support",
    ],
    unlocked: [true, true, true, true, true],
    badge: "Enterprise",
    link: "https://github.com/sponsors/201Harsh",
  },
];

const comparisonData = [
  { feature: "Wake Up Word Activation", free: "❌ Disabled", paid: "✅ 'Hey, IRIS' / 'IRIS'" },
  { feature: "ScreenPeeler AI OCR", free: "❌ Disabled", paid: "✅ AI scan snippet (Ctrl+Alt+X)" },
  { feature: "Phantom Ghost Keyboard", free: "❌ Disabled", paid: "✅ Inline global injection (Ctrl+Alt+Space)" },
  { feature: "Gmail Integration", free: "❌ Disabled", paid: "✅ Read, scan and draft emails" },
  { feature: "Mobile Telekinesis (Android)", free: "❌ Disabled", paid: "✅ Full ADB remote actions & telemetry" },
  { feature: "AI Image Generation", free: "❌ Disabled", paid: "✅ Native DALL-E & Midjourney calls" },
  { feature: "Deep Research Agent", free: "❌ Disabled", paid: "✅ Multi-step web crawlers" },
  { feature: "Localhost Wormhole Tunnels", free: "❌ Disabled", paid: "✅ Expose local ports instantly" },
  { feature: "OS Vault Security", free: "🔒 standard PIN only", paid: "🛡️ Biometric Face Recognition + PIN" },
  { feature: "System Actions Core", free: "❌ Mock UI only", paid: "✅ Fully functional local main engine" },
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs tracking-widest uppercase font-mono">
          <Coins className="w-3.5 h-3.5" />
          Licensing Model
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          SPONSORSHIP <span className="text-[#39FF14]">TIERS.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-mono">
          IRIS operates under an Open Core development methodology. Public repos
          host the frontend shell layouts, while sponsor licensing unlocks the core execution engine.
        </p>
      </motion.div>

      {/* Sustainable Open Core model description */}
      <motion.div
        variants={itemVariants}
        className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4"
      >
        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
          <GitBranch className="w-5 h-5 text-[#39FF14]" />
          Sustainable Engineering Model
        </h3>
        <p className="text-zinc-400 text-xs leading-relaxed font-mono">
          Open Core allows IRIS to distribute user interface configurations, templates, and widgets under a standard MIT license, while safeguarding proprietary agent orchestration techniques and live voice routing protocols under private code structures.
        </p>
      </motion.div>

      {/* COMPARISON OF FREE VS PAID SECTION */}
      <motion.div
        variants={itemVariants}
        className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
          <Info className="w-5 h-5 text-[#39FF14]" />
          Free vs Paid (Pro) Matrix
        </h3>
        <p className="text-zinc-400 text-xs leading-relaxed font-mono">
          Compare the core differences between the open-source Free UI Shell and the fully-loaded Paid (Pro) Engine.
        </p>

        {/* Comparison Grid Table */}
        <div className="overflow-x-auto border border-white/5 rounded-xl">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 text-white font-bold">Feature Capability</th>
                <th className="p-4 text-zinc-400 font-bold">Free Edition</th>
                <th className="p-4 text-[#39FF14] font-bold">Paid Pro ($5 / ₹500 one-time)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/40">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-zinc-300 font-semibold">{row.feature}</td>
                  <td className="p-4 text-zinc-500">{row.free}</td>
                  <td className="p-4 text-zinc-200">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Tiers Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {tiersData.map((tier, idx) => {
          const isPro = tier.badge === "One-Time";
          const isAlpha = tier.badge === "Enterprise";
          const isInsider = tier.badge === "Popular";
          const isBuilder = tier.badge === "Base Monthly";
          return (
            <div
              key={idx}
              className={`
                bg-[#050505] border rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300
                ${
                  isPro
                    ? "border-[#39FF14] bg-[#39FF14]/5 shadow-[0_0_25px_rgba(57,255,20,0.05)]"
                    : isAlpha
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
                    absolute top-4 right-4 text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest font-mono
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
                  <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">
                    {tier.name}
                  </h3>
                  <div className="text-xl md:text-2xl font-black text-white mt-1">
                    {tier.price}
                  </div>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed font-mono">
                  {tier.desc}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs font-mono">
                  {tier.features.map((feat, fIdx) => {
                    const isUnlocked = tier.unlocked[fIdx];
                    return (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        {isUnlocked ? (
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 ${isAlpha ? "text-purple-400" : "text-[#39FF14]"}`}
                          />
                        ) : (
                          <X className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                        )}
                        <span
                          className={
                            isUnlocked
                              ? "text-zinc-300"
                              : "text-zinc-600 line-through"
                          }
                        >
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
                    w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer border transition-all duration-200 font-mono
                    ${
                      isPro
                        ? "bg-[#39FF14] text-black border-[#39FF14] hover:bg-transparent hover:text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                        : isAlpha
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

      {/* REFUND POLICY SECTION */}
      <motion.div
        variants={itemVariants}
        className="bg-[#0f0a05] border border-orange-500/20 rounded-2xl p-6 md:p-8 space-y-4 font-mono text-xs"
      >
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-orange-500" />
          Ecosystem Refund Policy Summary
        </h4>
        <p className="text-zinc-400 leading-relaxed">
          Due to the nature of perpetual software licenses and the GitHub Sponsors platform integration, all transactions for the IRIS Pro Engine are <strong>100% final and non-refundable</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-500 pt-2 border-t border-white/5">
          <div className="space-y-1">
            <span className="text-white font-bold block">1. Why are purchases non-refundable?</span>
            <p className="leading-relaxed">
              Upon sponsoring, you gain immediate, irrevocable access to the private repository network and raw binaries. Because we cannot mathematically verify deletion of local offline software packages, we cannot issue chargeback adjustments.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white font-bold block">2. Test Before You Pay</span>
            <p className="leading-relaxed">
              Please download and install the free IRIS Base Engine to verify that configuration, BYOK API tokens, and visual panels connect properly on your hardware before initiating the one-time $5 / ₹500 checkout.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Dual Licensing Details */}
      <motion.div
        variants={itemVariants}
        className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 text-xs font-mono"
      >
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
          Dual Licensing Distribution Agreement
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-500">
          <div className="space-y-2">
            <span className="text-white font-bold block">
              1. Community Open Code
            </span>
            <p className="leading-relaxed">
              Standard UI layout configurations, templates, widgets, and IPC preloads are governed under the open-source MIT License. You are free to modify layouts, connect public hooks, and integrate layouts.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white font-bold block">
              2. Commercial & Sponsor Code
            </span>
            <p className="leading-relaxed">
              Private repository scripts, custom core hooks, experimental agent parameters, and bytecode engines require commercial developer permissions. Redistribution of compiled V8 main loops is prohibited.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
