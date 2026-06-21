"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Loader2,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

function RedirectLogic() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<
    "initializing" | "redirecting" | "fallback"
  >("initializing");

  const tokensRef = useRef({
    access: searchParams.get("accessToken") || "",
    refresh: searchParams.get("refreshToken") || "",
  });

  useEffect(() => {
    // Hide tokens from URL immediately to secure them
    if (tokensRef.current.access || tokensRef.current.refresh) {
      const url = new URL(window.location.href);
      url.searchParams.delete("accessToken");
      url.searchParams.delete("refreshToken");
      window.history.replaceState({}, document.title, url.toString());
    }
  }, []);

  const buildDeepLink = () => {
    let link = "iris://dashboard";
    const { access, refresh } = tokensRef.current;
    if (access && refresh) {
      link += `?accessToken=${access}&refreshToken=${refresh}`;
    }
    return link;
  };

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setStatus("redirecting");
      window.location.href = buildDeepLink();
    }, 2000);

    const fallbackTimer = setTimeout(() => {
      setStatus("fallback");
    }, 6000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleManualTrigger = () => {
    window.location.href = buildDeepLink();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#39FF14] selection:text-black font-mono">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#39FF14]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] pointer-events-none" />
      

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-lg relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#050505]/80 backdrop-blur-xl border border-[#39FF14]/30 rounded-[2.5rem] p-10 shadow-[0_0_80px_rgba(57,255,20,0.07)] relative overflow-hidden text-center flex flex-col items-center"
        >
          {/* Top Progress Bar */}
          <div
            className={`absolute top-0 left-0 w-full h-1 opacity-80 transition-all duration-1000 ${status === "redirecting" ? "bg-linear-to-r from-transparent via-[#39FF14] to-[#39FF14]" : "bg-linear-to-r from-transparent via-[#39FF14]/30 to-transparent"}`}
          />

          <div className="relative w-32 h-32 flex items-center justify-center mb-10 mt-4">
            <AnimatePresence mode="wait">
              {status === "initializing" && (
                <motion.div
                  key="init"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="absolute inset-0 border-2 border-dashed border-[#39FF14]/40 rounded-full animate-[spin_3s_linear_infinite]" />
                  <div className="absolute inset-2 border border-[#39FF14]/20 rounded-full animate-[spin_4s_linear_infinite_reverse]" />
                  <div className="absolute inset-4 border-2 border-[#39FF14]/10 rounded-full animate-ping opacity-30" />
                  <Terminal className="w-12 h-12 text-[#39FF14] animate-pulse drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]" />
                </motion.div>
              )}

              {status === "redirecting" && (
                <motion.div
                  key="redirect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="absolute inset-0 border-[3px] border-[#39FF14] rounded-full animate-spin border-t-transparent shadow-[0_0_20px_rgba(57,255,20,0.4)_inset]" />
                  <ExternalLink className="w-12 h-12 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]" />
                </motion.div>
              )}

              {status === "fallback" && (
                <motion.div
                  key="fallback"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-[#39FF14]/10 border border-[#39FF14]/40 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.2)]"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-28">
            <AnimatePresence mode="wait">
              {status === "initializing" && (
                <motion.div
                  key="text-init"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-3xl font-black mb-3 tracking-tight">
                    VERIFYING <span className="text-[#39FF14]">ACCESS...</span>
                  </h2>
                  <p className="text-zinc-400 text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#39FF14]" />{" "}
                    Please Wait
                  </p>
                </motion.div>
              )}

              {status === "redirecting" && (
                <motion.div
                  key="text-redirect"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-3xl font-black mb-3 tracking-tight">
                    OPENING <span className="text-[#39FF14]">APP</span>
                  </h2>
                  <p className="text-[#39FF14] text-xs tracking-[0.2em] uppercase animate-pulse">
                    Please confirm the browser prompt
                  </p>
                </motion.div>
              )}

              {status === "fallback" && (
                <motion.div
                  key="text-fallback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-black mb-3 tracking-tight">
                    VERIFICATION{" "}
                    <span className="text-[#39FF14]">COMPLETE</span>
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed px-4">
                    Verification successful. You can safely close this window
                    and proceed in the app.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {status === "fallback" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                className="w-full flex flex-col gap-4 overflow-hidden pt-4 border-t border-[#39FF14]/10"
              >
                <button
                  onClick={handleManualTrigger}
                  className="w-full py-4 rounded-xl border border-[#39FF14]/30 bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] uppercase tracking-wider"
                >
                  <ExternalLink className="w-4 h-4" /> Try Opening Again
                </button>

                <Link href="/download">
                  <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer uppercase tracking-wider">
                    <Download className="w-4 h-4" /> Download Local Engine
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function DesktopRedirectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#39FF14] tracking-widest text-sm uppercase">
          Loading...
        </div>
      }
    >
      <RedirectLogic />
    </Suspense>
  );
}
