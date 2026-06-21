"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, FileText, HelpCircle } from "lucide-react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function NotFound() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.8 },
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
    <div className="min-h-screen flex flex-col mt-16 bg-[#050505] text-white  selection:bg-[#39FF14] selection:text-black overflow-hidden">
      <Header />

      <main className="flex-1 relative flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-[#39FF14]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="uppercase tracking-widest  font-semibold">
                Error 404
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-linear-to-b from-white via-white/80 to-white/20 select-none drop-shadow-2xl"
          >
            404
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase mb-6 text-[#39FF14] text-center "
          >
            System Pathway Not Found
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-zinc-200 text-center max-w-lg mb-12 text-sm md:text-base"
          >
            The directory or file you requested is missing from the core index.
            It may have been relocated, deleted, or you might have used an
            invalid pointer.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            <Link href="/" className="group block h-full">
              <div className="h-full flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 group-hover:text-[#39FF14] transition-colors text-zinc-200">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#39FF14] transition-colors">
                  Return Home
                </h3>
                <p className="text-xs text-zinc-500">Back to the IRIS PRO</p>
              </div>
            </Link>

            <Link href="/docs" className="group block h-full">
              <div className="h-full flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 group-hover:text-[#39FF14] transition-colors text-zinc-200">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#39FF14] transition-colors">
                  Documentation
                </h3>
                <p className="text-xs text-zinc-500">Read the manual</p>
              </div>
            </Link>

            <Link href="/support" className="group block h-full">
              <div className="h-full flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 group-hover:text-[#39FF14] transition-colors text-zinc-200">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#39FF14] transition-colors">
                  Support
                </h3>
                <p className="text-xs text-zinc-500">Get technical help</p>
              </div>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group block h-full w-full cursor-pointer"
            >
              <div className="h-full flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors text-zinc-200">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-white mb-1">Go Back</h3>
                <p className="text-xs text-zinc-500">Return to previous page</p>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
