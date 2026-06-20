"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Activity, TerminalSquare } from "lucide-react";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { TextHoverEffect } from "./TextHoverEffect";
import Link from "next/link";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <footer className="bg-black pt-16 pb-6 px-6 md:px-20 border-t border-white/5 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-[#39FF14]/40 to-transparent" />

      <div className="hidden md:flex w-full justify-center items-center py-12 md:py-20 mb-12 border-b border-white/5 relative">
        <div className="absolute inset-0 pointer-events-none" />
        <TextHoverEffect text="IRIS AI" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-sm relative z-10"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border border-[#39FF14]/30 bg-[#39FF14]/10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              <Cpu className="text-[#39FF14]" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-widest text-lg">
                IRIS
              </h3>
              <p className="text-[#39FF14] text-[10px] tracking-[0.2em] uppercase">
                Voice First AI Assistant
              </p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed pr-4 font-light">
            A native desktop client for local file management, deep research,
            and OS-level automation.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              target="_blank"
              href="https://www.instagram.com/irisx.ai/"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              target="_blank"
              href="https://github.com/IRISX-AI"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@irisx-ai"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2 flex items-center gap-2">
            <TerminalSquare size={16} className="text-[#39FF14]" /> RESOURCES
          </h5>
          {[
            { name: "About IRIS", path: "/about" },
            { name: "Documentation", path: "/docs" },
            { name: "Refund Policy", path: "/refund-policy" },
            { name: "Privacy Policy", path: "/privacy" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="group flex items-center text-gray-400 hover:text-white transition-colors w-max"
            >
              <span className="text-[#39FF14] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2">
                <ArrowUpRight size={16} />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2 flex items-center gap-2">
            <Activity size={16} className="text-[#39FF14]" /> ECOSYSTEM
          </h5>
          {[
            { name: "Pricing & Tiers", path: "/pricing" },
            { name: "Desktop Client", path: "/download" },
            { name: "CLI Core", path: "/download/cli" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="group flex items-center text-gray-400 hover:text-white transition-colors w-max"
            >
              <span className="text-[#39FF14] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2">
                <ArrowUpRight size={16} />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          ))}
          {/* <a
            href="#"
            className="group flex items-center text-gray-400 hover:text-white transition-colors w-max mt-2"
          >
            <span className="w-8 h-8 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-colors mr-3">
              <FaWhatsapp size={16} />
            </span>
            <span>WhatsApp Community</span>
          </a> */}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2">
            SYSTEM STATUS
          </h5>
          <div className="p-5 border border-white/5 bg-[#0a0a0a] rounded-xl space-y-4 relative overflow-hidden group hover:border-[#39FF14]/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#39FF14]/20 shadow-[0_0_15px_#39FF14] opacity-0 group-hover:opacity-100 animate-scan pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-xs uppercase tracking-wider ">
                Network
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
                </span>
                <span className="text-[#39FF14] text-[10px] font-bold tracking-widest uppercase">
                  Operational
                </span>
              </div>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1 ">
                IRIS Version
              </p>
              <p className="text-white font-bold tracking-wider">
                IRIS Desktop v1.5.1
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300 relative z-10 ">
        <p>© {new Date().getFullYear()} IRIS AI. All rights reserved.</p>
        <p className="tracking-widest uppercase">
          Engineered with ❤️ by{" "}
          <a
            href="https://www.instagram.com/201harshs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#39FF14] hover:text-green-400 transition-colors font-bold"
          >
            Harsh Pandey
          </a>
        </p>
      </div>
    </footer>
  );
}
