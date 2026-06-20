"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Activity,
  Sparkles,
  Github,
  Shield,
  ShieldAlert,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#10b981] selection:text-black">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md">
            <Activity className="w-3 h-3" />
            <span className="uppercase tracking-widest">
              Pricing & Licensing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            SIMPLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#10b981] to-[#044a33]">
              PRICING.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            One-time payment. Zero complicated setups or monthly subscriptions.
            Secure a lifetime license to the IRIS Pro engine instantly via
            GitHub Sponsors.
          </p>

          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-mono text-gray-400 cursor-default hover:bg-white/10 transition-colors">
              <ShieldAlert className="w-4 h-4 text-orange-500/80" />
              <span>Strict No-Refund Policy (Standard GitHub Terms)</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-12 relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/10 flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">IRIS Base Engine</h3>
              <div className="text-4xl font-black text-white mb-4">
                $0 / ₹0
                <span className="text-lg font-normal text-gray-500 tracking-normal">
                  {" "}
                  forever
                </span>
              </div>
              <p className="text-sm text-gray-400 h-10">
                The ultimate local workstation controller. Core OS integration
                completely free.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs">
              <div className="text-gray-500 mb-2 uppercase tracking-widest font-bold">
                Base Capabilities
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Architecture:</span>{" "}
                  <span>Bring Your Own Key (BYOK)</span>
                </li>
                <li className="flex justify-between">
                  <span>Usage Limits:</span> <span>Unlimited Local</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 flex-1">
              <FeatureItem text="Native File System & Directory Access" />
              <FeatureItem text="Terminal & CLI Script Execution" />
              <FeatureItem text="Desktop Window Management" />
              <FeatureItem text="Live DOM Manipulation (CSS/JS Injection)" />
              <FeatureItem text="Screen Optics & OCR Text Extraction" />
              <FeatureItem text="Push-to-Talk Voice Activation" />
            </div>

            <button className="w-full mt-10 py-4 rounded-xl border border-white/20 bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
              Download Base Engine
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#050505] rounded-[2.5rem] p-10 border border-[#10b981]/50 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#10b981] to-emerald-300" />

            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  IRIS Pro <Sparkles className="w-5 h-5 text-[#10b981]" />
                </h3>
              </div>
              <div className="text-4xl font-black text-white mb-4 flex items-end gap-3">
                <span>$5 / ₹500</span>
                <span className="text-lg font-normal text-gray-500 tracking-normal mb-1">
                  one-time
                </span>
              </div>
              <p className="text-sm text-gray-400 h-10">
                Unlock the complete autonomous ecosystem. Private repository
                access forever.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-[#10b981]/5 border border-[#10b981]/20 font-mono text-xs relative z-10">
              <div className="text-[#10b981] mb-2 uppercase tracking-widest font-bold">
                Deployment Protocol
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>License Type:</span>{" "}
                  <span className="text-[#10b981]">Lifetime Perpetual</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivery Method:</span>{" "}
                  <span className="text-[#10b981]">Private GitHub Repo</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 flex-1 relative z-10">
              <FeatureItem text="Everything in Base Engine, plus:" pro />
              <FeatureItem text="Passive Offline Wake Word Activation" pro />
              <FeatureItem text="Mobile Bridge (ADB Telemetry & Control)" pro />
              <FeatureItem text="Autonomous Deep Web Research" pro />
              <FeatureItem text="Localhost Wormholes (Port Exposure)" pro />
              <FeatureItem text="WhatsApp & Email Automation" pro />
              <FeatureItem text="Biometric OS Vault Encryption" pro />
            </div>

            <button className="group w-full flex justify-center items-center gap-2 mt-10 py-4 rounded-xl bg-[#10b981] text-black font-bold hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] relative z-10">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Sponsor on GitHub to Unlock
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deep Architecture Comparison
          </h2>
          <p className="text-gray-400">
            A precise technical breakdown of system access per tier.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-widest text-gray-500">
                <th className="py-4 px-6 font-bold">Capability</th>
                <th className="py-4 px-6 font-bold text-center">
                  Base Engine (Free)
                </th>
                <th className="py-4 px-6 font-bold text-center text-[#10b981]">
                  Pro ($5 Lifetime)
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
              <TableRow
                title="Native File System & Directory Control"
                free="Yes"
                pro="Yes"
              />
              <TableRow
                title="Terminal & OS Script Execution"
                free="Yes"
                pro="Yes"
              />
              <TableRow
                title="Desktop Window Management"
                free="Yes"
                pro="Yes"
              />
              <TableRow title="Live DOM Manipulation" free="Yes" pro="Yes" />
              <TableRow
                title="Bring Your Own Key (BYOK) Logic"
                free="Yes"
                pro="Yes"
              />

              <TableRow title="Offline Passive Wake Word" free="No" pro="Yes" />
              <TableRow
                title="Mobile Device Bridge (ADB Integration)"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Autonomous Deep Research Crawlers"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Deploy Localhost Wormholes"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="WhatsApp & Email Automation"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Biometric Security & System Lockdown"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Private GitHub Repository Access"
                free="No"
                pro="Yes"
              />
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const FeatureItem = ({
  text,
  pro = false,
}: {
  text: string;
  pro?: boolean;
}) => (
  <div className="flex items-start gap-3">
    {pro ? (
      <Zap className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
    ) : (
      <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
    )}
    <span className={pro ? "text-gray-200 font-medium" : "text-gray-400"}>
      {text}
    </span>
  </div>
);

const TableRow = ({
  title,
  free,
  pro,
}: {
  title: string;
  free: string;
  pro: string;
}) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
    <td className="py-4 px-6 font-medium text-gray-200">{title}</td>
    <td className="py-4 px-6 text-center text-gray-400">{free}</td>
    <td className="py-4 px-6 text-center font-medium text-[#10b981]">{pro}</td>
  </tr>
);
