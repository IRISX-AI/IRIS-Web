"use client";

import { motion } from "framer-motion";
import { AlertOctagon, ArrowRight, Zap, Lock, Sparkles, Cpu, Shield } from "lucide-react";
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
  const [incomingFeatures, setIncomingFeatures] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setIncomingFeatures(prev => {
        const newIndex = Math.floor(Math.random() * features.length);
        return [...prev.slice(-3), newIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-black to-slate-900 text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-6 selection:bg-cyan-400 selection:text-black">
      {/* Premium animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Scanning beam */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        className="absolute left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.8)] z-0 pointer-events-none"
      />

      {/* Floating particles */}
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
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center"
      >
        {/* Status icon */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-3xl bg-linear-to-br from-red-500/20 to-orange-500/20 border border-red-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
            <AlertOctagon className="w-12 h-12 text-red-400 relative z-10" />
          </motion.div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-500/50 bg-red-500/10 backdrop-blur-md text-red-400 text-xs mb-8 tracking-widest uppercase font-bold shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Status: Offline
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          THIS WEBSITE IS{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-red-600 animate-pulse">
            POWERED DOWN.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-6"
        >
          The legacy IRIS system has been taken offline. Preparing next-generation platform with enhanced security and performance.
        </motion.p>

        {/* Incoming features stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
              ⚡
            </motion.span>
            Incoming Features Stream
          </p>
          
          <div className="relative h-32 bg-linear-to-r from-cyan-500/5 via-transparent to-cyan-500/5 rounded-2xl border border-cyan-500/20 backdrop-blur-md overflow-hidden p-4 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            {/* Feature cards */}
            {features.map((Feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 300, y: 0 }}
                animate={incomingFeatures.includes(idx) ? 
                  { opacity: [0, 1, 0], x: [-300, 0, 300], y: [0, -20, 0] } 
                  : { opacity: 0, x: 300 }
                }
                transition={{ duration: 3, ease: "easeInOut" }}
                className="absolute left-0 top-1/2 -translate-y-1/2"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <Feature.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{Feature.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium feature list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full mb-12"
        >
          {features.map((Feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + Feature.delay }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative flex flex-col items-center gap-3 px-4 py-5 rounded-xl bg-slate-900 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-500/50 transition-all">
                <Feature.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition" />
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white text-center transition">{Feature.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full sm:w-auto"
        >
          <a 
            href="#"
            className="group relative flex items-center justify-between sm:justify-center gap-6 px-8 py-6 rounded-2xl bg-linear-to-r from-slate-900 to-slate-800 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] w-full overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
            
            <div className="relative z-10 flex flex-col text-left sm:text-center">
              <span className="text-white font-bold text-xl uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                Initializing New Platform
              </span>
              <span className="text-zinc-400 text-xs uppercase tracking-widest mt-1 group-hover:text-zinc-300 transition-colors">
                Coming Soon — Enhanced & Secure
              </span>
            </div>
            
            <div className="relative z-10 w-12 h-12 rounded-full bg-linear-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center group-hover:from-cyan-500/60 group-hover:to-blue-500/60 transition-all text-cyan-400 group-hover:text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Premium corner accents */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
}
