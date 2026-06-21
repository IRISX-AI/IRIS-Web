"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/users/google`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#39FF14] selection:text-black">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#044a33]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none mix-blend-overlay" />

      <motion.div className="w-full max-w-md relative z-10">
        <motion.div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-6">
            <Cpu className="w-8 h-8 text-[#39FF14]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
            Authenticate{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#39FF14] to-green-200">
              IRIS
            </span>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Secure Access Required
          </p>
        </motion.div>

        <motion.div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#39FF14]/50 to-transparent opacity-50" />

          <div className="mb-8 flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-[#39FF14] mb-4 opacity-80" />
            <h2 className="text-xl font-bold mb-2 text-white">
              Identity Verification
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
              IRIS Pro requires a secure identity check. We use Google
              Authentication to provision your unique system instance.
            </p>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="cursor-pointer group relative w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-[#050505] border border-white/10 hover:border-[#39FF14]/40 hover:bg-white/5 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <FcGoogle className="w-6 h-6 relative z-10" />
            <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors relative z-10">
              Continue With Google
            </span>
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-mono">
            SSL ENCRYPTED CONNECTION
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
