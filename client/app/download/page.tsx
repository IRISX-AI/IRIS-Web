"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Download,
  Monitor,
  Apple,
  Command,
  ShieldCheck,
  Cpu,
  AlertTriangle,
  Info,
  Terminal,
  Smartphone,
  Layers,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LightRays from "../Components/utils/LightRays";
import LightPillar from "../utils/LightPillar";

export default function DownloadPage() {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleDownload = () => {
    setShowWarning(true);
    let counter = 5;
    setCountdown(counter);

    const interval = setInterval(() => {
      counter -= 1;
      setCountdown(counter);
      if (counter <= 0) {
        clearInterval(interval);
        window.location.href =
          "https://github.com/IRISX-AI/IRIS-AI/releases/download/v1.3.0/iris-ai-1.3.0-setup.exe";
        setTimeout(() => setShowWarning(false), 5000);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#39FF14]/30 overflow-hidden relative">
      <Header />

      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-950 border border-[#39FF14]/30 rounded-2xl p-8 max-w-md w-full relative overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4 text-[#39FF14]">
                <AlertTriangle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Installation Notice</h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Because IRIS is an open-source project without a corporate code
                certificate, Windows Defender might flag the installer.
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-zinc-400 font-mono flex flex-col gap-2">
                  <span className="text-white">
                    When the blue popup appears:
                  </span>
                  <span>
                    1. Click{" "}
                    <strong className="text-[#39FF14]">"More info"</strong>
                  </span>
                  <span>
                    2. Click{" "}
                    <strong className="text-[#39FF14]">"Run anyway"</strong>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Downloading shortly...
                </span>
                <span className="font-mono font-bold text-[#39FF14] text-xl drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                  00:0{countdown}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full relative z-10">
        <motion.section
          initial="hidden"
          animate="show"
          className="relative py-20 flex flex-col justify-center items-center text-center min-h-screen w-full"
        >
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 20%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 20%, transparent 70%)",
              opacity: 0.8,
            }}
          >
            <LightPillar
              topColor="#4be90a"
              bottomColor="#26ff01"
              intensity={1}
              rotationSpeed={0.3}
              glowAmount={0.002}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={25}
              interactive={false}
              mixBlendMode="lighten"
              quality="high"
            />
          </div>

          <motion.div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
            </span>
            PUBLIC BETA V1.3.0 LIVE
          </motion.div>

          <motion.h1 className="relative z-10 text-6xl md:text-8xl font-black tracking-tight mb-6 uppercase">
            DOWNLOAD{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#39FF14] to-[#ccffcc] drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]">
              IRIS.
            </span>
          </motion.h1>

          <motion.p className="relative z-10 max-w-2xl text-zinc-300 text-lg md:text-xl mb-12 leading-relaxed">
            Install the primary desktop client. Execute local file management,
            deep research, and system automation directly from your workstation.
          </motion.p>

          <motion.div className="relative z-10 flex flex-col items-center gap-6 mb-12 w-full">
            <button
              onClick={handleDownload}
              className="cursor-pointer group relative flex items-center justify-center gap-3 w-full md:w-80 h-16 bg-[#39FF14] hover:bg-[#32e612] text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)] hover:shadow-[0_0_60px_rgba(57,255,20,0.5)] hover:-translate-y-1"
            >
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              Download for Windows
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </button>

            <Link
              href="/download/cli"
              className="text-zinc-500 hover:text-[#39FF14] font-mono text-sm underline underline-offset-4 transition-colors"
            >
              Looking for the Headless CLI Engine?
            </Link>
          </motion.div>

          <motion.div className="relative z-10 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-zinc-500 font-mono text-xs tracking-widest bg-black/50 px-6 py-3 rounded-full border border-white/5 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3 h-3" /> Win 10/11
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" /> 100% BYOK
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3" /> Local Execution
            </span>
          </motion.div>
        </motion.section>

        <motion.section className="py-20 border-t border-white/5 relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
              The Ecosystem
            </h2>
            <p className="text-zinc-500 mt-2">
              Native integrations designed for your preferred platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Windows */}
            <div className="bg-[#0a0a0a] border border-[#39FF14]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#39FF14]/60 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Monitor className="w-32 h-32 text-[#39FF14]" />
              </div>
              <Monitor className="w-10 h-10 text-[#39FF14] mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
              <h3 className="text-xl font-bold text-white mb-2">Windows</h3>
              <p className="text-zinc-400 text-sm mb-8">
                Full OS integration. Deep Windows API hooks for file management
                and system automation.
              </p>
              <span className="inline-block px-3 py-1 bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 rounded text-xs font-bold tracking-widest">
                AVAILABLE NOW
              </span>
            </div>

            {/* Headless CLI */}
            <div className="bg-[#0a0a0a] border border-[#39FF14]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#39FF14]/60 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Command className="w-32 h-32 text-[#39FF14]" />
              </div>
              <Terminal className="w-10 h-10 text-[#39FF14] mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
              <h3 className="text-xl font-bold text-white mb-2">CLI Core</h3>
              <p className="text-zinc-400 text-sm mb-8">
                Global NPM package. Blazing fast, headless terminal access
                tailored for power users.
              </p>
              <Link
                href="/download/cli"
                className="inline-block px-3 py-1 bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/20 rounded text-xs font-bold tracking-widest transition-colors cursor-pointer"
              >
                VIEW CLI DOCS
              </Link>
            </div>

            {/* macOS */}
            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Apple className="w-32 h-32 text-white" />
              </div>
              <Apple className="w-10 h-10 text-zinc-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">macOS</h3>
              <p className="text-zinc-500 text-sm mb-8">
                Apple Silicon (M-Series) and Intel support. Deep integration
                with Apple Keychain.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-zinc-400 border border-white/10 rounded text-xs font-bold tracking-widest">
                <Cpu className="w-3 h-3" /> IN DEVELOPMENT
              </span>
            </div>

            {/* IRIS-X Mobile */}
            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-[#39FF14]/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smartphone className="w-32 h-32 text-[#39FF14]" />
              </div>
              <Layers className="w-10 h-10 text-zinc-400 group-hover:text-[#39FF14] transition-colors mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                IRIS-X Mobile
              </h3>
              <p className="text-zinc-500 text-sm mb-8">
                Agentic Android control featuring an edge-to-edge portrait
                interface, powered by the experimental React Compiler.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r from-[#39FF14]/20 to-[#003300] text-[#39FF14] border border-[#39FF14]/30 rounded text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                <Smartphone className="w-3 h-3" /> COMING SOON
              </span>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
