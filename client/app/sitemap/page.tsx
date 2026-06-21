"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Download,
  CreditCard,
  FileText,
  Settings,
  HelpCircle,
  Users,
  Shield,
  Scale,
  Terminal,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const sitemapData = [
  {
    category: "Core Platform",
    links: [
      { name: "Home", path: "/", icon: Home },
      { name: "Download", path: "/download", icon: Download },
      { name: "CLI Core", path: "/download/cli", icon: Terminal },
      { name: "Pricing", path: "/pricing", icon: CreditCard },
    ],
  },
  {
    category: "Documentation",
    links: [
      { name: "Documentation Overview", path: "/docs", icon: FileText },
      { name: "Features", path: "/docs/features", icon: FileText },
      { name: "Installation Guide", path: "/how-to-install", icon: Settings },
      { name: "CLI Setup", path: "/how-to-install/cli", icon: Terminal },
      { name: "API Config Guide", path: "/guide", icon: FileText },
    ],
  },
  {
    category: "Support & Community",
    links: [
      { name: "Support Center", path: "/support", icon: HelpCircle },
      { name: "Changelog", path: "/changelog", icon: FileText },
      { name: "About IRIS", path: "/about", icon: Users },
    ],
  },
  {
    category: "Legal & Compliance",
    links: [
      { name: "Refund Policy", path: "/refund-policy", icon: Shield },
      { name: "Privacy Policy", path: "/privacy", icon: Shield },
      { name: "Terms of Service", path: "/terms", icon: Scale },
    ],
  },
];

export default function SitemapPage() {
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

      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-xs mb-8 backdrop-blur-md">
            <FileText className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest ">Sitemap</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            SYSTEM <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              DIRECTORY.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto ">
            Complete index of the IRIS ecosystem and documentation.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 relative z-20 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sitemapData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-[#050505] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#39FF14]/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#39FF14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-6  flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#39FF14]/50" />
                {category.category}
              </h2>
              <ul className="space-y-4">
                {category.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="flex items-center gap-3 text-zinc-200 hover:text-[#39FF14] transition-colors duration-300 group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-[#39FF14]/10 group-hover/link:border-[#39FF14]/20 transition-all duration-300 shrink-0">
                          <Icon className="w-4 h-4 text-zinc-500 group-hover/link:text-[#39FF14] transition-colors" />
                        </div>
                        <span className=" text-sm group-hover/link:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
