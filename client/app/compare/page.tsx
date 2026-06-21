"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function ComparePage() {
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
            <Zap className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">
              Capabilities Matrix
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            FREE <span className="text-zinc-500 font-light italic">vs</span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              PRO
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A precise technical breakdown of system access per tier. Understand
            why unlocking the IRIS PRO is the ultimate upgrade.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <button className="cursor-pointer px-8 py-3 rounded-full bg-[#39FF14] text-black font-bold hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                Upgrade to Pro (₹499)
              </button>
            </Link>
            <Link href="/docs/tiers">
              <button className="cursor-pointer px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                View Licensing Details
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-[#39FF14]/5 to-transparent pointer-events-none" />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-xs uppercase tracking-widest text-gray-500">
                  <th className="py-6 px-8 font-bold">Feature Capability</th>
                  <th className="py-6 px-8 font-bold text-center border-l border-white/5">
                    Base Engine (Free)
                  </th>
                  <th className="py-6 px-8 font-bold text-center text-[#39FF14] border-l border-white/5 bg-[#39FF14]/5">
                    Pro Engine (₹499)
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

                {/* PRO EXCLUSIVE FEATURES */}
                <tr className="bg-white/5">
                  <td
                    colSpan={3}
                    className="py-3 px-8 text-xs font-black uppercase tracking-widest text-zinc-500 border-y border-white/10"
                  >
                    Pro Exclusive Architecture
                  </td>
                </tr>

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
        </div>

        <div className="mt-16 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Unlock the IRIS PRO?
          </h3>
          <p className="text-zinc-200 mb-8 max-w-lg mx-auto">
            Upgrade your base engine into a fully autonomous OS controller.
            Secure checkout, lifetime access, zero subscriptions.
          </p>
          <Link href="/pricing">
            <button className="cursor-pointer group w-full max-w-sm flex justify-center items-center gap-2 py-4 px-3 rounded-xl bg-[#39FF14] text-black font-bold hover:bg-green-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]">
              Get Pro License Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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
    <td className="py-5 px-8 font-medium text-gray-200">{title}</td>
    <td className="py-5 px-8 text-center text-gray-400 border-l border-white/5">
      {free === "Yes" ? (
        <CheckCircle2 className="w-5 h-5 text-gray-500 mx-auto" />
      ) : (
        free
      )}
    </td>
    <td className="py-5 px-8 text-center font-bold text-[#39FF14] border-l border-white/5 bg-[#39FF14]/5">
      {pro === "Yes" ? <Zap className="w-5 h-5 text-[#39FF14] mx-auto" /> : pro}
    </td>
  </tr>
);
