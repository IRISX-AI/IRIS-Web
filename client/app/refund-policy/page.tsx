"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  Scale,
  AlertTriangle,
  Terminal,
  CheckCircle2,
  Briefcase,
  Ban,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#10b981] selection:text-black">
      <Header />

      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
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
            LICENSING & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#10b981] to-[#044a33]">
              REFUNDS.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Clear, uncompromising deployment terms. Please review the
            architecture of our licensing before securing IRIS Pro.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 relative z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-orange-500/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <ShieldAlert className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                No-Refund Policy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-gray-400 font-mono text-sm leading-relaxed">
              <div>
                <p className="mb-4">
                  Due to the nature of perpetual software licenses and the{" "}
                  <strong className="text-white">GitHub Sponsors</strong>{" "}
                  platform architecture, all transactions for the IRIS Pro
                  Engine are 100% final and non-refundable.
                </p>
                <p>
                  GitHub Sponsors does not natively support partial or one-time
                  payment refunds for digital goods. We utilize this platform
                  specifically to keep overhead low and provide a single,
                  one-time payment structure instead of a subscription.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Upon sponsorship, you gain immediate, un-revocable physical
                  possession of the compiled binaries and access to the private
                  repository network. Because we cannot mathematically verify
                  the deletion of downloaded offline software,{" "}
                  <strong className="text-orange-400">
                    we cannot process refunds under any circumstances.
                  </strong>
                </p>
                <p className="text-orange-400/80 mt-4 border-l-2 border-orange-500/50 pl-4 py-1 bg-orange-500/5 rounded-r-md">
                  By executing the $5 / ₹500 transaction, you explicitly
                  acknowledge and agree to this permanent no-refund clause.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Briefcase className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Commercial Use Ban
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
              The IRIS $5 Pro license is strictly provisioned for{" "}
              <strong className="text-white">
                individual, non-commercial use
              </strong>
              .
            </p>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
              Deploying the IRIS Engine within a corporate, enterprise, or
              commercial production environment without explicit written
              authorization and an Enterprise License is a direct violation of
              our terms.
            </p>
            <div className="flex items-start gap-2 mt-6 text-red-400/90 font-mono text-xs bg-red-500/5 p-3 rounded-lg border border-red-500/10">
              <Ban className="w-4 h-4 shrink-0 mt-0.5" />
              <p>
                Unauthorized commercial deployment will result in immediate
                license termination and a permanent repository ban.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Disputes & Revocation
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
              We operate on a zero-tolerance policy for payment fraud and
              unwarranted chargebacks.
            </p>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              In the event of a bank chargeback or payment dispute via GitHub
              Sponsors, your GitHub account will be flagged. Access to the
              private IRIS Pro repository, future updates, bug fixes, and the
              community network will be{" "}
              <strong className="text-red-400">
                permanently revoked without notice
              </strong>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-linear-to-br from-[#0a0a0a] to-[#050505] border border-[#10b981]/20 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 blur-[80px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/20">
                <Terminal className="w-6 h-6 text-[#10b981]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Test Before Deployment
              </h2>
            </div>

            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6 max-w-3xl">
              We do not want your money if the software does not execute
              properly on your specific hardware configuration. To ensure
              absolute compatibility, we offer the{" "}
              <strong className="text-white">
                IRIS Base Engine entirely for free
              </strong>
              .
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                <span className="text-xs font-mono text-gray-300">
                  Test core file system reading and terminal execution.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                <span className="text-xs font-mono text-gray-300">
                  Verify BYOK (Bring Your Own Key) APIs connect successfully.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                <span className="text-xs font-mono text-gray-300">
                  Only upgrade to Pro when you verify your system runs
                  perfectly.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
            Last Updated: June 2026
          </span>
          <Link
            href="/pricing"
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold transition-colors"
          >
            Return to Pricing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
