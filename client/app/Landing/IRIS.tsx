"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Lock,
  Sparkles,
  Cpu,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  { icon: Zap, label: "Lightning Fast", delay: 0.2 },
  { icon: Lock, label: "Enterprise Security", delay: 0.4 },
  { icon: Sparkles, label: "Premium Design", delay: 0.6 },
  { icon: Cpu, label: "Advanced AI", delay: 0.8 },
  { icon: Shield, label: "Full Protection", delay: 1.0 },
];

export default function DeprecatedSite() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black to-green-950/40 text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-6 selection:bg-green-400 selection:text-black">
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        className="absolute left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-400/60 to-transparent shadow-[0_0_30px_rgba(0,255,0,0.8)] z-0 pointer-events-none"
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${120 + i * 10}, 100%, 60%)`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur-md text-green-400 text-xs mb-8 tracking-widest uppercase font-bold shadow-[0_0_20px_rgba(0,255,0,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          Status: Offline
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          This Website Has Been{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-lime-500 to-green-600 animate-pulse">
            CLOSED
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-6"
        >
          We’re rebuilding something incredible. A brand‑new, enhanced
          experience is launching soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <p className="text-green-400 text-xs uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            What’s Coming Next
          </p>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full sm:w-auto"
        >
          <a
            href="#"
            className="group relative flex items-center justify-between sm:justify-center gap-6 px-8 py-6 rounded-2xl bg-linear-to-r from-black to-black border border-green-500/40 hover:border-green-400/80 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:shadow-[0_0_60px_rgba(0,255,0,0.4)] w-full overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />

            <button
              onClick={() => {
                window.open("https://github.com/IRISX-AI");
              }}
              className="relative z-10 flex flex-col text-left sm:text-center"
            >
              <span className="text-white font-bold text-xl uppercase tracking-wider group-hover:text-green-300 transition-colors">
                Launching Soon
              </span>
              <span className="text-zinc-400 text-xs uppercase tracking-widest mt-1 group-hover:text-zinc-300 transition-colors">
                Get notified when we’re live
              </span>
            </button>

            <div className="relative z-10 w-12 h-12 rounded-full bg-linear-to-br from-green-500/30 to-lime-500/30 flex items-center justify-center group-hover:from-green-500/60 group-hover:to-lime-500/60 transition-all text-green-400 group-hover:text-green-200 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-green-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-lime-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      ></motion.div>
    </div>
  );
}
