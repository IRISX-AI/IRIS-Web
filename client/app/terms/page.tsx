"use client";

import { motion } from "framer-motion";
import {
  Scale,
  AlertTriangle,
  Ban,
  Coins,
  HardDrive,
  Users,
  Cpu,
  Gavel,
  ShieldAlert,
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
    <div className="min-h-screen bg-[#050505] text-white  selection:bg-[#39FF14] selection:text-black">
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
            <Scale className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">
              Legal Agreement & Terms
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            TERMS OF <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              SERVICE.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Governed under Indian laws. Please read these terms carefully before
            deploying the IRIS Pro Engine.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 relative z-20 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-[#39FF14]/25 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/45 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/5 blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Gavel className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                EULA Governing Law & Indian Jurisdiction
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              This End User License Agreement (EULA) is governed, construed, and
              enforced in accordance with the laws of the **Republic of India**
              pursuant to the **Indian Contract Act, 1872** and the
              **Information Technology Act, 2000**.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Any dispute, controversy, or litigation arising out of or related
              to this licensing model, payment gateway, or engine deployment
              shall be subject to the exclusive jurisdiction of the courts
              located in **New Delhi, India**.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Cpu className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                IRIS Pro Licensing Ceiling & Validation
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Sponsoring the IRIS Pro Engine grants you a non-transferable,
              single-user license to deploy the software on a maximum of **two
              (2) separate devices** simultaneously.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-200 leading-relaxed">
              <strong>Anti-Piracy Enforcement:</strong> Licensing limits are
              enforced using cryptographic hashing of your motherboard's
              Hardware ID (HWID). The system logs your HWID and verifies your IP
              address dynamically at the time of installation and license
              upgrade. Attempting to run a single license key across more than
              two devices will result in automatic license verification
              suspension.
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                3. Assumption of Risk & System Damage Disclaimer
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS performs advanced system-level actions including executing
              terminal scripts, directory manipulation, window controls, and
              keyboard macro injections. While IRIS is **not harmful** to
              install and contains no malicious code, local automation carries
              inherent risks.
            </p>
            <div className="p-4 rounded-xl border border-red-500/15 bg-red-500/5 text-red-400 text-xs leading-relaxed font-semibold">
              DEVELOPER EXEMPTION CLAUSE: You assume 100% of the risk. We are
              not liable or legally accountable for any data loss, file
              deletion, system failures, OS corruption, hardware damage,
              financial loss, or mis-happenings. By installing and
              authenticating the IRIS Desktop client application, you explicitly
              agree to this absolute waiver of liability, which is also
              presented during authentication.
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <ShieldAlert className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                4. Exemption of Liability for AI Misuse
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS is a productivity execution system. Any misuse of the
              integrated AI engine, including generating harmful commands,
              executing hacking macros, or conducting illegal system tasks, is
              **strictly the responsibility of the user**.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              The creator (Harsh Pandey) and project contributors maintain no
              oversight over your local prompts and hold zero legal
              responsibility or accountability for the commands executed by the
              user.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                5. Individual, Non-Commercial License Limit
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The ₹499 Pro engine tier is strictly licensed for individual,
              personal, non-production usage.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Deploying IRIS within a corporate workspace, commercial
              enterprise, or team production setup without an Enterprise license
              is a violation of our terms and will lead to an immediate ban.
              Contact{" "}
              <code className="text-[#39FF14]">irisaidevop@gmail.com</code> for
              commercial pricing.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <HardDrive className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                6. Third-Party API Liability Exemption
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Because IRIS operates under a Bring Your Own Key (BYOK) paradigm,
              you are solely responsible for configuring keys and paying for
              your queries.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed mb-2">
              IRIS is not responsible or legally accountable for data policies,
              server connectivity, overage fees, rate limits, or billing
              disputes on third-party integrations: **Google Gemini**, **Groq**,
              **Tavily**, or **Hugging Face**.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Coins className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                7. Strict No-Refund Policy
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IRIS Pro is distributed as a digital package consisting of
              compiled bytecode binaries delivered securely upon license
              activation. You agree to one-time billing via our authorized
              merchant of record, and access is tied to your authenticated
              Google Account.
            </p>
            <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs text-zinc-200 leading-relaxed">
              Because we cannot verify the deletion of offline code files once
              downloaded, all license purchases are final, permanent, and 100%
              non-refundable. Please test core actions using the Free engine
              version prior to purchasing.
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20">
                <Ban className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                8. Repository Access Revocation
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We reserve the right to permanently terminate your developer
              access to the private IRIS Pro systems, updates stream, and
              Discord network for the following offenses:
            </p>
            <ul className="space-y-2.5 text-zinc-500 text-xs pl-2 border-l border-red-500/20">
              <li>
                • Initiating payment chargebacks or bank payment disputes.
              </li>
              <li>
                • Sharing, redistributing, or publishing the proprietary
                compiled binary packages (.exe / .jsc / ASAR archives).
              </li>
              <li>
                • Violating the non-commercial deployment boundaries or device
                activation limits.
              </li>
              <li>• Reverse engineering bytecode files.</li>
            </ul>
          </motion.div>
        </motion.div>

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
