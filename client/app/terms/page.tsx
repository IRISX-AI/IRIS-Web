"use client";

import { motion } from "framer-motion";
import {
  Scale,
  AlertTriangle,
  Ban,
  Coins,
  HardDrive,
  Users,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function TermsOfServicePage() {
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
            <Scale className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">Legal Agreement & Terms</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            TERMS OF <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              SERVICE.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before deploying the IRIS Pro Engine.
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
          {/* Card 1: Assumption of Risk (Native OS Execution) - CRITICAL SHIELD */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-all duration-300 animate-pulse"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Assumption of Risk (Native OS Execution)</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS performs advanced system-level actions including reading/writing local files, manipulating active windows, executing shell commands, and controlling your cursor coordinates.
            </p>
            <div className="p-4 rounded-xl border border-red-500/15 bg-red-500/5 text-red-400 text-xs leading-relaxed font-semibold">
              CRITICAL NOTICE: By running IRIS, you assume 100% of the risk. We are not liable for any data loss, corrupted directories, process disruptions, file deletions, operating system damage, or unintended terminal script outcomes. You are solely responsible for verifying the actions you prompt the engine to execute.
            </div>
          </motion.div>

          {/* Card 2: Individual & Non-Commercial Limit */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Individual, Non-Commercial License Limit</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The $5 Pro engine tier is strictly licensed for individual, personal, non-production usage.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Deploying IRIS within a corporate workspace, commercial enterprise, or team production setup without an Enterprise license is a violation of our terms and will lead to an immediate ban. Contact <code className="text-[#39FF14]">irisaidevop@gmail.com</code> for commercial pricing.
            </p>
          </motion.div>

          {/* Card 3: API Cost Liability */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <HardDrive className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">3. API Usage Fees & Costs Liability</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Because IRIS operates under a Bring Your Own Key (BYOK) paradigm, you are solely responsible for configuring keys and paying for your queries.
            </p>
            <ul className="space-y-2 text-zinc-500 text-xs">
              <li>• We are not liable for bills, tokens overages, or rate limit fees incurred on Google AI Studio, Groq Cloud, or Tavily Search accounts.</li>
              <li>• Any account locks, suspension, or developer key bans issued by third-party API providers are the sole responsibility of the user.</li>
            </ul>
          </motion.div>

          {/* Card 4: Strict No-Refund Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Coins className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Strict No-Refund Policy</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS Pro is distributed as a digital package consisting of compiled bytecode binaries delivered via GitHub Sponsors.
            </p>
            <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs text-zinc-400 leading-relaxed">
              Because we cannot verify the deletion of offline code files once pulled, all sponsorships are final, permanent, and 100% non-refundable. Please test core actions using the Free engine version prior to sponsoring.
            </div>
          </motion.div>

          {/* Card 5: Access Revocation Conditions */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Ban className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Repository Access Revocation</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We reserve the right to permanently terminate your developer access to the private GitHub repository network, updates stream, and Discord network for the following offenses:
            </p>
            <ul className="space-y-2.5 text-zinc-500 text-xs pl-2 border-l border-red-500/20">
              <li>• Initiating payment chargebacks or bank payment disputes via GitHub Sponsors.</li>
              <li>• Sharing, redistributing, or publishing the proprietary compiled binary packages (.exe / .jsc / ASAR archives).</li>
              <li>• Violating the non-commercial deployment boundaries.</li>
              <li>• Reverse engineering bytecode files.</li>
            </ul>
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
