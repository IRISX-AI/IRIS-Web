"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  Scale,
  AlertTriangle,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#10b981] selection:text-black">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        {/* Deep ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-mono mb-8 backdrop-blur-md">
            <Scale className="w-3 h-3 text-[#10b981]" />
            <span className="uppercase tracking-widest">
              Legal & Compliance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            REFUND <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#10b981] to-[#044a33]">
              POLICY.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Clear, transparent licensing terms. Please read carefully before
            securing your IRIS Pro license.
          </p>
        </motion.div>
      </section>

      {/* ── POLICY CONTENT ── */}
      <section className="py-20 px-6 relative z-20 max-w-4xl mx-auto">
        {/* Strictly No Refunds Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] pointer-events-none" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <ShieldAlert className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Strict No-Refund Policy
            </h2>
          </div>

          <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed">
            <p>
              Due to the nature of perpetual software licenses and the delivery
              mechanism utilized via{" "}
              <strong className="text-white">GitHub Sponsors</strong>, all
              transactions for the IRIS Pro Engine are 100% final and
              non-refundable.
            </p>
            <p>
              GitHub Sponsors does not natively support partial or one-time
              payment refunds for digital goods. Furthermore, because purchasing
              IRIS Pro grants immediate, lifetime access to a private repository
              containing compiled binaries and proprietary automation tools, we
              cannot revoke physical possession of downloaded software.
            </p>
            <p className="text-orange-400/80 mt-4 border-l-2 border-orange-500/50 pl-4">
              By proceeding with the $5 / ₹500 GitHub Sponsorship, you
              explicitly acknowledge and agree to this no-refund clause.
            </p>
          </div>
        </motion.div>

        {/* The "Try Before You Buy" Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black border border-white/10 rounded-2xl p-8 md:p-10 mb-12 hover:border-white/20 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/20">
              <Terminal className="w-6 h-6 text-[#10b981]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Test Before Deployment
            </h2>
          </div>

          <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
            We do not want your money if the software does not work on your
            specific hardware configuration. To ensure maximum compatibility, we
            offer the{" "}
            <strong className="text-white">
              IRIS Base Engine entirely for free
            </strong>
            .
          </p>

          <ul className="space-y-3 font-mono text-xs text-gray-400">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>We strongly advise downloading the Free tier first.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>
                Verify that IRIS can read your file system and execute terminal
                commands.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>
                Verify your BYOK (Bring Your Own Key) APIs connect successfully.
              </span>
            </li>
          </ul>

          <p className="text-gray-400 font-mono text-sm leading-relaxed mt-6">
            Only upgrade to the Pro Engine once you are confident the Base
            Engine runs flawlessly on your workstation.
          </p>
        </motion.div>

        {/* Chargebacks & Access Revocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Disputes & Revocation
            </h2>
          </div>

          <p className="text-gray-400 font-mono text-sm leading-relaxed">
            In the event of an unwarranted bank chargeback or payment dispute
            via GitHub Sponsors, your access to the private IRIS Pro repository
            will be immediately and permanently revoked. Future updates, bug
            fixes, and access to the community discord will be terminated
            without notice.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
              Last Updated: June 2026
            </span>
            <a
              href="/pricing"
              className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold transition-colors"
            >
              Return to Pricing
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
