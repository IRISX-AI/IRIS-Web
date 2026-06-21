"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Activity,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-xs  mb-8 backdrop-blur-md">
            <Activity className="w-3 h-3" />
            <span className="uppercase tracking-widest">
              Pricing & Licensing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            SIMPLE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              PRICING.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            One-time payment. Zero complicated setups or monthly subscriptions.
            Secure a lifetime license to the IRIS Pro engine instantly via our
            secure direct checkout.
          </p>

          <Link href="/refund-policy" className="inline-block">
            <button className="cursor-pointer group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs  text-orange-400/80 hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]">
              <ShieldAlert className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <span>Strict No-Refund Policy (License Delivery)</span>
            </button>
          </Link>
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

            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5  text-xs">
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
              <FeatureItem text="WhatsApp Messaging & Broadcast Automation" />
              <FeatureItem text="Push-to-Talk Voice Activation" />
              <FeatureItem text="Standard PIN-only OS Vault lockdown" />
            </div>

            <Link href="/download">
              <button className="cursor-pointer w-full mt-10 py-4 rounded-xl border border-white/20 bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                Download Base Engine
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#050505] rounded-[2.5rem] p-10 border border-[#39FF14]/50 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#39FF14] to-green-300" />

            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  IRIS Pro <Sparkles className="w-5 h-5 text-[#39FF14]" />
                </h3>
              </div>
              <div className="text-4xl font-black text-white mb-4 flex items-end gap-3">
                <span>₹499</span>
                <span className="text-lg font-normal text-gray-500 tracking-normal mb-1">
                  one-time
                </span>
              </div>
              <p className="text-sm text-gray-400 h-10">
                Unlock the complete autonomous ecosystem. Instant License
                Activation and Direct Pro Access forever.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-[#39FF14]/5 border border-[#39FF14]/20  text-xs relative z-10">
              <div className="text-[#39FF14] mb-2 uppercase tracking-widest font-bold">
                Deployment Protocol
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>License Type:</span>{" "}
                  <span className="text-[#39FF14]">Lifetime Perpetual</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivery Method:</span>{" "}
                  <span className="text-[#39FF14]">
                    Instant License Activation
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 flex-1 relative z-10">
              <FeatureItem text="Everything in Base Engine, plus:" pro />
              <FeatureItem
                text="Passive Offline Wake Word Activation ('Hey, IRIS')"
                pro
              />
              <FeatureItem
                text="ScreenPeeler Multimodal AI OCR (Ctrl + Alt + X)"
                pro
              />
              <FeatureItem
                text="Phantom Control Ghost Keyboard (Ctrl + Alt + Space)"
                pro
              />
              <FeatureItem text="Gmail Integration & Email Automation" pro />
              <FeatureItem
                text="Mobile Device Bridge (ADB Telemetry & Control)"
                pro
              />
              <FeatureItem
                text="AI Image Generation (DALL-E / Midjourney)"
                pro
              />
              <FeatureItem text="Autonomous Deep Web Research Crawlers" pro />
              <FeatureItem
                text="Localhost Wormholes (Secure Port Tunneling)"
                pro
              />
              <FeatureItem
                text="Biometric OS Vault Encryption (Face Recognition)"
                pro
              />
            </div>

            <div className="mt-10 flex flex-col items-center">
              <button className="cursor-pointer group w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-[#39FF14] text-black font-bold hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] relative z-10">
                Upgrade via Secure Checkout
              </button>
              <p className="mt-3 text-xs text-gray-500 font-medium">
                Secure SSL Checkout. Authentication powered by Google.
              </p>
            </div>
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
              <tr className="border-b border-white/10 text-xs  uppercase tracking-widest text-gray-500">
                <th className="py-4 px-6 font-bold">Capability</th>
                <th className="py-4 px-6 font-bold text-center">
                  Base Engine (Free)
                </th>
                <th className="py-4 px-6 font-bold text-center text-[#39FF14]">
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
              <TableRow
                title="WhatsApp Messaging Automation"
                free="Yes"
                pro="Yes"
              />

              <TableRow
                title="Offline Passive Wake Word Activation"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="ScreenPeeler Multimodal AI OCR"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Phantom Control Ghost Keyboard"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Gmail Integration & Email Automation"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Mobile Device Bridge (ADB Integration)"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="AI Image Generation (DALL-E/Midjourney)"
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
                title="Biometric Security & Face Lockdown"
                free="No (PIN Only)"
                pro="Yes (Face Match + PIN)"
              />
              <TableRow title="Direct Pro Access" free="No" pro="Yes" />
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
      <Zap className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
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
    <td className="py-4 px-6 text-center font-medium text-[#39FF14]">{pro}</td>
  </tr>
);
