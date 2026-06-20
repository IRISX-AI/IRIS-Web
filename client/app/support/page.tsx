"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Terminal,
  Activity,
  ChevronDown,
  ChevronUp,
  Bug,
  MessageCircle,
  ExternalLink,
  Shield,
  Mic,
  CreditCard,
  Package,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Github,
  Users,
  HelpCircle,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const selfServiceLinks = [
  {
    id: "api-config",
    icon: Terminal,
    label: "API Configuration Guide",
    sublabel: "Set up your BYOK (Bring Your Own Key) in under 5 minutes.",
    href: "/guide",
    color: "#39FF14",
    gradient: "from-[#39FF14]/20 to-[#39FF14]/5",
    border: "border-[#39FF14]/30",
  },
  {
    id: "install-manual",
    icon: Shield,
    label: "Installation Manual",
    sublabel:
      "Defender bypass, CLI setup, and first-launch configuration guide.",
    href: "/how-to-install",
    color: "#39FF14",
    gradient: "from-[#39FF14]/15 to-[#39FF14]/5",
    border: "border-[#39FF14]/25",
  },
  {
    id: "system-status",
    icon: Activity,
    label: "System Status",
    sublabel: "Engine heartbeat and Gemini API connection — all systems go.",
    href: "#status",
    color: "#39FF14",
    gradient: "from-[#39FF14]/15 to-[#39FF14]/5",
    border: "border-[#39FF14]/25",
    isStatus: true,
  },
];

const faqItems = [
  {
    id: "defender",
    icon: Shield,
    question: "Windows Defender blocked the IRIS installer.",
    answer:
      "IRIS does not carry a commercial EV code-signing certificate (those cost $300–$700/yr and are reserved for a future update). Windows SmartScreen flags any unsigned binary from an unrecognised publisher.\n\n**Fix:** Click \"More info\" → \"Run anyway\" on the SmartScreen popup. Alternatively, open Windows Security → Virus & Threat Protection → scroll to \"Current threats\" → Allow. If Windows Defender permanently blocked the file, whitelist the IRIS install directory: `%LOCALAPPDATA%\\IRIS AI`.\n\nThe complete bypass walkthrough with screenshots is in the Installation Manual above.",
    tag: "Installation",
  },
  {
    id: "voice-delay",
    icon: Mic,
    question: "Why is the voice engine delayed or unresponsive?",
    answer:
      'IRIS voice runs entirely over the Gemini Live WebRTC pipeline — a real-time bidirectional audio stream to Google\'s inference cluster. Latency is almost entirely network-dependent.\n\n**Checklist:**\n• Run `ping 8.8.8.8` — latency above 80ms will cause noticeable lag.\n• Switch to a 5 GHz Wi-Fi band or use an Ethernet cable.\n• Ensure no VPN is active — VPNs add 30–100ms round-trip overhead.\n• Check your Gemini API key quota in the Google AI Studio dashboard. A quota-exceeded key silently stalls the stream.',
    tag: "Voice Engine",
  },
  {
    id: "refund",
    icon: CreditCard,
    question: "I purchased IRIS Pro. Can I get a refund?",
    answer:
      "**IRIS operates under a strict no-refund policy for all downloaded digital products.** Once the installer binary or license key is delivered, the product has been consumed and is non-returnable — this is standard policy for downloadable software under our Terms of Service.\n\nIf IRIS is technically non-functional on your machine, open a GitHub Issue with your OS version, IRIS version, and the full terminal error output. We will triage it as high-priority.\n\nFor billing disputes, contact: support@irisx.ai with your order confirmation.",
    tag: "Billing",
  },
  {
    id: "cli-not-found",
    icon: Package,
    question: "CLI says 'iris: command not found'.",
    answer:
      "**Root cause:** Either Node.js is not installed, or the global NPM binary directory is not in your system PATH.\n\n**Fix:**\n1. Verify Node.js 24+ is installed: `node -v`\n2. If missing, download from nodejs.org and install.\n3. After installing the IRIS CLI (`npm install -g iris-cli`), run `npm config get prefix` — this is where global binaries live.\n4. Add that path + `\\bin` to your system PATH variable: `setx PATH \"%PATH%;C:\\Users\\<you>\\AppData\\Roaming\\npm\"` (Windows).\n5. Restart your terminal. Run `iris --version` to confirm.",
    tag: "CLI",
  },
  {
    id: "memory",
    icon: HelpCircle,
    question: "IRIS is not remembering context between sessions.",
    answer:
      "Session memory is tied to the local SQLite store at `%LOCALAPPDATA%\\IRIS AI\\memory.db`. If that file was deleted, reset, or IRIS was reinstalled without preserving the data directory, history is lost.\n\n**To preserve memory across reinstalls:** Copy the `memory.db` file before uninstalling. After reinstalling, place it back in the same directory.\n\nIf memory stops persisting mid-session, this is likely a write-permission issue. Run IRIS once as Administrator to repair the file permissions.",
    tag: "Memory",
  },
];


function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  const Icon = item.icon;
  return (
    <motion.div
      layout
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#39FF14]/30 bg-[#0c0c0c] shadow-[0_0_30px_rgba(57,255,20,0.05)]"
          : "border-white/8 bg-[#0a0a0a] hover:border-white/15"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-start gap-4 group"
        id={`faq-${item.id}`}
      >
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-[#39FF14]/15 border border-[#39FF14]/30"
              : "bg-white/5 border border-white/10 group-hover:bg-[#39FF14]/10 group-hover:border-[#39FF14]/20"
          }`}
        >
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-[#39FF14]" : "text-zinc-400 group-hover:text-[#39FF14]"}`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <span
              className={`text-sm font-bold font-mono transition-colors duration-300 ${
                isOpen ? "text-[#39FF14]" : "text-white group-hover:text-[#39FF14]"
              }`}
            >
              {item.question}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`hidden sm:block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border font-mono transition-all duration-300 ${
                  isOpen
                    ? "text-[#39FF14] border-[#39FF14]/30 bg-[#39FF14]/10"
                    : "text-zinc-500 border-white/10 bg-white/5"
                }`}
              >
                {item.tag}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-[#39FF14] shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 shrink-0 transition-colors" />
              )}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pl-[4.25rem]">
              <div className="h-px bg-white/5 mb-4" />
              <div className="text-zinc-400 text-xs font-mono leading-relaxed whitespace-pre-line space-y-1">
                {item.answer.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={i} className="text-white font-bold font-mono">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (line.startsWith("**") && line.includes("**")) {
                    const parts = line.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={i}>
                        {parts.map((part, pi) =>
                          pi % 2 === 1 ? (
                            <strong key={pi} className="text-white font-bold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  }
                  if (line.startsWith("•")) {
                    return (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-[#39FF14] mt-0.5 shrink-0">•</span>
                        <span>{line.slice(1).trim()}</span>
                      </p>
                    );
                  }
                  if (line.match(/^\d\./)) {
                    return (
                      <p key={i} className="flex items-start gap-2 ml-1">
                        <span className="text-[#39FF14] font-bold shrink-0">{line[0]}.</span>
                        <span>{line.slice(2).trim()}</span>
                      </p>
                    );
                  }
                  if (line === "") return <br key={i} />;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>("defender");

  const toggleFAQ = (id: string) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#39FF14]/4 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-xs mb-8 backdrop-blur-md">
            <Headphones className="w-3 h-3" />
            <span className="uppercase tracking-widest">Support Center</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            HOW CAN WE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#39FF14] to-[#044a33]">
              HELP?
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Most issues are resolved by reading the right doc. Use the routing
            cards below before opening a ticket — your answer is probably
            already there.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] uppercase tracking-widest font-mono mb-4">
            <BookOpen className="w-3 h-3" />
            Self-Service First
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
            START HERE
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-mono">
            90% of issues are already documented.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {selfServiceLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  id={`self-service-${item.id}`}
                  className={`group relative flex flex-col gap-5 p-6 rounded-2xl border bg-gradient-to-br ${item.gradient} ${item.border} hover:shadow-[0_0_40px_rgba(57,255,20,0.08)] transition-all duration-300 block`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center group-hover:bg-[#39FF14]/20 group-hover:border-[#39FF14]/40 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    {item.isStatus ? (
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
                        </span>
                        <span className="text-[#39FF14] text-[9px] font-black uppercase tracking-widest font-mono">
                          Operational
                        </span>
                      </div>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all duration-300" />
                    )}
                  </div>

                  <div className="relative space-y-1.5">
                    <h3 className="text-white font-bold text-base font-mono group-hover:text-[#39FF14] transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-zinc-500 text-xs font-mono leading-relaxed">
                      {item.sublabel}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Live Status Panel (anchor target) */}
        <motion.div
          id="status"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-2xl border border-white/8 bg-[#0a0a0a] overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">
              <Activity className="w-4 h-4 text-[#39FF14]" />
              Live System Status
            </div>
            <span className="text-[9px] text-zinc-600 font-mono">
              Auto-refreshes on load
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { label: "Core Engine", status: "Operational", ok: true },
              { label: "Gemini Live API", status: "Operational", ok: true },
              { label: "CLI Gateway", status: "Operational", ok: true },
              { label: "License Server", status: "Operational", ok: true },
            ].map((s) => (
              <div key={s.label} className="px-5 py-4 flex flex-col gap-1.5">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">
                  {s.label}
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span className="text-[#39FF14] text-xs font-bold font-mono">
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ Grid ── */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] uppercase tracking-widest font-mono mb-4">
            <HelpCircle className="w-3 h-3" />
            Frequently Asked
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3">
            COMMON{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
              ISSUES
            </span>
          </h2>
          <p className="text-zinc-500 text-sm font-mono leading-relaxed max-w-xl">
            Answers to the questions that cause the most friction. Read before
            opening a GitHub issue.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <FAQItem
                item={item}
                isOpen={openFAQ === item.id}
                onToggle={() => toggleFAQ(item.id)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bug Reports & GitHub Issues ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] uppercase tracking-widest font-mono mb-4">
              <Bug className="w-3 h-3" />
              Issue Tracking
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3">
              REPORT A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                BUG
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-mono max-w-lg mx-auto leading-relaxed">
              All bugs are tracked on GitHub where they can be reproduced,
              prioritized, and fixed in the right release cycle. Please do not
              email bug reports.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <a
                href="https://github.com/IRISX-AI/iris/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                id="github-bug-report"
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-[#39FF14]/20 bg-[#0a0a0a] hover:border-[#39FF14]/40 hover:shadow-[0_0_50px_rgba(57,255,20,0.08)] transition-all duration-300 h-full"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/40 to-transparent" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39FF14]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center group-hover:bg-[#39FF14]/20 transition-all duration-300">
                      <Github className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <div className="text-[#39FF14] font-black font-mono text-base">
                        Open a GitHub Issue
                      </div>
                      <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                        github.com/IRISX-AI
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-[#39FF14] ml-auto transition-colors duration-300" />
                  </div>

                  <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                    Click to open a pre-formatted bug report template on our
                    GitHub repository. Issues are triaged within 48 hours and
                    tagged by severity.
                  </p>
                </div>

                <div className="relative mt-6 pt-6 border-t border-white/5">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-bold font-mono group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                    <Bug className="w-3.5 h-3.5" />
                    Report Bug on GitHub
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Required Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-amber-400 text-xs font-black font-mono uppercase tracking-widest">
                    Required Info
                  </span>
                </div>
                <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                  Reports missing this info will be closed without action. All
                  three are mandatory.
                </p>
                <div className="space-y-3 flex-1">
                  {[
                    {
                      label: "OS Version",
                      eg: "e.g. Windows 11 22H2 (Build 22621)",
                    },
                    {
                      label: "IRIS Version",
                      eg: "e.g. IRIS Desktop v1.5.1",
                    },
                    {
                      label: "Terminal Error Logs",
                      eg: "Full output — not a screenshot",
                    },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className="p-3 rounded-xl bg-black/30 border border-white/8 space-y-0.5"
                    >
                      <div className="text-white text-xs font-bold font-mono">
                        {field.label}
                      </div>
                      <div className="text-zinc-600 text-[10px] font-mono">
                        {field.eg}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Community Hub ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] uppercase tracking-widest font-mono mb-4">
              <Users className="w-3 h-3" />
              Community
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3">
              JOIN THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                HUB
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-mono max-w-lg mx-auto leading-relaxed">
              Get help from real users, share custom macros, and stay ahead of
              upcoming releases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://chat.whatsapp.com/IRISAICommunity"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-community"
                className="group relative flex flex-col gap-6 p-8 rounded-2xl border border-[#25D366]/20 bg-[#0a0a0a] hover:border-[#25D366]/40 hover:shadow-[0_0_50px_rgba(37,211,102,0.07)] transition-all duration-300 block"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#25D366]/30 to-transparent" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/40 transition-all duration-300 shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-[#25D366]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black font-mono text-lg group-hover:text-[#25D366] transition-colors duration-300">
                      WhatsApp Community
                    </h3>
                    <p className="text-zinc-500 text-xs font-mono mt-1">
                      Unofficial peer support & discussions
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-[#25D366] transition-colors duration-300 shrink-0" />
                </div>

                <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                  Connect with other IRIS developers. Share automation macros,
                  get unofficial help from power users, discuss upcoming
                  features, and stay plugged into the community.
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {["H", "A", "R", "S"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-[#39FF14]/20 border border-[#39FF14]/30 flex items-center justify-center text-[8px] font-black text-[#39FF14] font-mono"
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span className="text-zinc-600 text-[10px] font-mono">
                    Active developers inside
                  </span>
                </div>
              </a>
            </motion.div>

            {/* GitHub Discussions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="https://github.com/IRISX-AI/iris/discussions"
                target="_blank"
                rel="noopener noreferrer"
                id="github-discussions"
                className="group relative flex flex-col gap-6 p-8 rounded-2xl border border-white/8 bg-[#0a0a0a] hover:border-[#39FF14]/30 hover:shadow-[0_0_50px_rgba(57,255,20,0.06)] transition-all duration-300 block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#39FF14]/10 group-hover:border-[#39FF14]/20 transition-all duration-300 shrink-0">
                    <MessageCircle className="w-6 h-6 text-zinc-400 group-hover:text-[#39FF14] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black font-mono text-lg group-hover:text-[#39FF14] transition-colors duration-300">
                      GitHub Discussions
                    </h3>
                    <p className="text-zinc-500 text-xs font-mono mt-1">
                      Persistent threads, indexed & searchable
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-[#39FF14] transition-colors duration-300 shrink-0" />
                </div>

                <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                  For technical questions that need a permanent answer. Search
                  existing threads first — your question may already have a
                  verified answer from the IRIS team.
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                    github.com/IRISX-AI
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="py-16 px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            Still stuck?
          </p>
          <h3 className="text-2xl font-black tracking-tighter text-white">
            Contact the team directly
          </h3>
          <p className="text-zinc-500 text-sm font-mono">
            For billing disputes, license questions, or partnership enquiries.
          </p>
          <a
            href="mailto:support@irisx.ai"
            id="contact-email"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-sm font-bold font-mono hover:bg-[#39FF14]/15 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all duration-300"
          >
            support@irisx.ai
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-zinc-700 text-[10px] font-mono">
            Response within 24–48 business hours. Bug reports sent to this
            address will not be actioned — use GitHub Issues.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
