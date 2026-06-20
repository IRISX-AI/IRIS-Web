"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  Zap,
  Cpu,
  GitBranch,
  ShieldCheck,
  Smartphone,
  Star,
  Calendar,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ChangelogCategory {
  title: string;
  items: string[];
}

interface ChangelogItem {
  version: string;
  date: string;
  type: "Major" | "Minor" | "Patch";
  title: string;
  desc: string;
  categories: ChangelogCategory[];
  icon: any;
}

const changelogData: ChangelogItem[] = [
  {
    version: "v1.5.1",
    date: "June 25, 2026",
    type: "Major",
    title: "The Voice Rewrite",
    desc: "A complete overhaul of the communication and voice logic, rebuilding the agent on Google's Gemini Live SDK via native WebRTC.",
    icon: Zap,
    categories: [
      {
        title: "🎙️ Voice Architecture",
        items: [
          "Rebuilt entire voice engine using the Gemini Live SDK",
          "Removed legacy WebSocket-heavy communication layer entirely",
          "Fixed speaker feedback loop — mic is now muted while IRIS speaks (software AEC)",
          "Configured VAD sensitivity (START_SENSITIVITY_LOW) to prevent speaker audio being picked up as user speech",
          "Added audioStreamEnd flush after IRIS finishes speaking",
          "Microphone now blocked during AI playback via irisIsSpeaking gate",
        ],
      },
      {
        title: "🧠 Agent & Memory",
        items: [
          "Improved memory context handling across sessions",
          "Refactored tool execution pipeline for cleaner routing",
          "Vision support improved — push-to-Gemini now works mid-session",
        ],
      },
      {
        title: "🎨 UI",
        items: [
          "Rebuilt 3D AI orb (AICore.tsx) — particle count reduced from 5,600 → 900 (−84%)",
          "Switched to Fibonacci sphere distribution (deterministic, no rejection loop)",
          "Zero per-frame heap allocations (all THREE.Color, THREE.Vector3 moved to module scope)",
          "Precomputed inverse radius — eliminated per-particle Math.sqrt in render loop",
          "Canvas GL: antialias: false, depth: false, stencil: false, precision: 'lowp' — halved GPU memory",
          "Pixel ratio capped at 1.5x (dpr={Math.min(window.devicePixelRatio, 1.5)})",
          "Torus ring segments reduced 96 → 48, rings reduced 3 → 2",
          "Orbital rings now phase-offset to avoid synchronized pulse",
        ],
      },
      {
        title: "📱 Mobile (ADB)",
        items: [
          "Fixed executeCameraControl — camera no longer reopens if already running",
          "Fixed front/back lens switching using IMAGE_CAPTURE / VIDEO_CAPTURE intents",
          "Video mode now opens camera in video intent directly (no mode toggle needed)",
          "Added file type validation in polling loop — waits for correct .mp4 / .jpg extension",
          "Extended polling to 15 attempts for long videos",
          "Mux buffer dynamically scaled (duration > 30s → 5s buffer, else 3.5s)",
          "Camera always returns to home screen on failure",
        ],
      },
    ],
  },
  {
    version: "v1.3.0",
    date: "June 2, 2026",
    type: "Minor",
    title: "Stability & Interface Update",
    desc: "Refined window controls, title bar design, and resolved multiple voice playback and desktop workflow bugs.",
    icon: Smartphone,
    categories: [
      {
        title: "🛠️ Bug Fixes",
        items: [
          "Fixed voice interaction glitch causing interruptions during speech playback",
          "Improved voice response consistency for real-time interaction",
          "Resolved multiple internal bugs affecting desktop workflow",
          "Reduced edge-case UI inconsistencies",
        ],
      },
      {
        title: "🎨 UI",
        items: [
          "Redesigned title bar with cleaner, more polished layout",
          "Improved window controls and visual consistency",
          "Refined hidden internal app behavior and access flow",
          "Enhanced system navigation across modules",
          "General interface polish across the desktop experience",
        ],
      },
      {
        title: "⚙️ Core",
        items: [
          "Improved performance across multiple interactions",
          "Cleaner system behavior during extended usage",
          "Behind-the-scenes refinements for future IRIS upgrades",
        ],
      },
    ],
  },
  {
    version: "v1.2.4",
    date: "May 24, 2026",
    type: "Patch",
    title: "Infrastructure & Autonomy Update",
    desc: "Secure backend migrations and crucial builder compilation hotfixes to exclude heavy local neural weights.",
    icon: GitBranch,
    categories: [
      {
        title: "🚨 Critical Hotfixes",
        items: [
          "Fixed API blackout caused by accidental deletion of primary Vercel production environment",
          "Provisioned new secure Node.js/Express backend: https://iris-web-xi.vercel.app/",
          "Restored frontend UI: https://irisaiw.vercel.app/",
          "Added Vercel delete protection and strict CORS configuration",
          "Fixed fatal ERR_ELECTRON_BUILDER_CANNOT_EXECUTE (mmap) crash during npm run build:win",
        ],
      },
      {
        title: "📦 Build",
        items: [
          "Root cause: makensis.exe (32-bit) hitting 2GB limit compressing 4.4GB of local AI models + LanceDB indexes",
          "Fix: set compression: store in electron-builder.yml",
          "Explicitly excluded models/**/*, vectordb/**/*, lancedb/**/* from installer packaging",
          "Windows installer now builds cleanly with lightweight final bundle",
        ],
      },
    ],
  },
  {
    version: "v1.2.2",
    date: "May 23, 2026",
    type: "Patch",
    title: "Telemetry & Stability Patch",
    desc: "Complete hardware telemetry HUD overhaul and automated installers' ghost helper process kills.",
    icon: Cpu,
    categories: [
      {
        title: "🎨 Telemetry HUD (Full Redesign)",
        items: [
          "Replaced flat metric boxes with glassmorphic hardware telemetry HUD",
          "Each node (CPU, RAM, Temp, OS) has isolated color-coded gradient mesh background (Emerald, Cyan, Orange, Purple)",
          "Added animated CSS cyber-grid patterns per metric card",
          "Added giant faded background iconography (140px) with hover scale animation",
          "Laser-edge hover glow — color-matched per hardware node",
          "Live progress bars in darkened track with backdrop blur",
        ],
      },
      {
        title: "🛠️ Ghost Process Eradication (Auto-Updater Fix)",
        items: [
          "Root cause: hidden background helper processes blocking installer on restart",
          "Fix: wrapped update execution in setImmediate, stripped all window-all-closed listeners before installer fires",
          "App now aggressively kills own process tree — guarantees 100% update install success",
        ],
      },
      {
        title: "🎙️ Universal Microphone Fix",
        items: [
          "Fixed microphone silence on specific Windows machines",
          "Expanded Electron session permission handler to approve all Chromium hardware strings: audioCapture, media, microphone, camera",
          "IRIS now has guaranteed audio access regardless of OS build",
        ],
      },
    ],
  },
  {
    version: "v1.2.1",
    date: "May 23, 2026",
    type: "Patch",
    title: "Quantum Core & UI Overhaul",
    desc: "High-frequency AudioWorklet packeter fix to eliminate latency, and new automated update check triggers.",
    icon: ShieldCheck,
    categories: [
      {
        title: "⚡ Zero-Latency Voice Engine (Full Rewrite)",
        items: [
          "Fixed 8–10 second audio latency — root cause was AudioWorklet flooding WebSocket 60x/sec with micro-packets",
          "Audio now buffered into 4096-frame (250ms) chunks — drops latency to near-zero",
          "Added native VAD and interruption support — speaking while IRIS talks now instantly flushes playback queue",
          "Parallel tool execution via Promise.all — multi-step tool calls now run simultaneously",
        ],
      },
      {
        title: "🎛️ Interactive Auto-Updater",
        items: [
          "New SYSTEM firmware tab in Command Center",
          "Manual check for updates, real-time patch notes inside app, download progress UI",
          "Disabled forced silent downloads — update now waits for explicit user authorization",
        ],
      },
      {
        title: "🔐 Biometric Vault & Auth",
        items: [
          "Fixed critical pathing bug (/models → ./models) — Face ID now works in compiled .exe",
          "Added 2.8-second cinematic decryption sequence on Face ID unlock (rotating rings + vault progress bar)",
          "Webcam light turns off instantly on successful Face ID match",
          "New live boot terminal on login screen with simulated OS sequence and glassmorphic OAuth portal",
        ],
      },
      {
        title: "⚡ Low-End Device Optimization",
        items: [
          "Eliminated new THREE.Color() inside render loop — moved to module scope",
          "Switched array reductions to fast-path math loops — CPU usage reduced by 40%+",
          "WebGL canvas now detects and caps pixel ratio (dpr={[1, 1.5]})",
          "Disabled depth-write for transparent particles — freed GPU bandwidth",
        ],
      },
    ],
  },
  {
    version: "v1.1.4",
    date: "May 20, 2026",
    type: "Patch",
    title: "Firmware Control Patch",
    desc: "Reorganized Command Center UI, introducing user-consented updates logic.",
    icon: RefreshCw,
    categories: [
      {
        title: "🎛️ System Updates UI",
        items: [
          "New SYSTEM tab in Command Center for firmware management",
          "Manual update check with in-app patch notes display",
          "Animated download progress UI",
          "Disabled silent forced downloads — all updates require explicit user authorization",
          "Command Center reorganized — System tab now primary landing zone",
        ],
      },
    ],
  },
  {
    version: "v1.1.2",
    date: "May 14, 2026",
    type: "Patch",
    title: "Telemetry & Vault Patch",
    desc: "Real-time socket data graph and native hardware check prompt permissions.",
    icon: Activity,
    categories: [
      {
        title: "📊 Network Telemetry",
        items: [
          "Rebuilt Dashboard Neural Uplink panel from scratch",
          "Real-time WSS latency (ping), packet transfer rates (MB/s), routing status (Local/Global)",
          "Animated TX/RX data bars with live fluctuation",
        ],
      },
      {
        title: "🔐 Security",
        items: [
          "Fixed face-api.js neural network pathing failure in compiled .exe — Face ID now works in production",
          "Added macOS systemPreferences prompts for Camera and Microphone — fixes silent hardware blocks on Apple Silicon and Intel",
        ],
      },
    ],
  },
  {
    version: "v1.1.0",
    date: "May 2026",
    type: "Minor",
    title: "The Agentic Core",
    desc: "LangGraph StateGraph multi-step loops integration and native ADB command execution shell.",
    icon: GitBranch,
    categories: [
      {
        title: "🧠 Agent System",
        items: [
          "Integrated LangGraph StateGraph for autonomous multi-step task orchestration",
          "Tool routing system with dynamic tool registry",
          "Agent interrupt and resume support",
          "Parallel tool execution foundation",
        ],
      },
      {
        title: "📱 ADB Mobile Bridge (Initial)",
        items: [
          "Wireless Android device connection over TCP/IP",
          "Device telemetry (battery, storage, model, OS version)",
          "Screenshot capture and pull to PC",
          "App open/close, wake/lock/home, swipe and tap",
          "Notification reader (dumpsys notification)",
          "Hardware toggle: WiFi, Bluetooth, Mobile Data, Airplane Mode, Location",
          "File push/pull (/sdcard/Download/)",
          "APK deploy and launch",
          "Camera control (photo + video, front + back lens)",
        ],
      },
      {
        title: "🖥️ Ghost Control (Initial)",
        items: [
          "Ghost keyboard: type, paste, key press with modifiers",
          "Human-curve mouse movement (Bezier path generation)",
          "Click, double-click, scroll up/down",
          "Volume control via loudness",
          "Screenshot capture to Pictures folder",
        ],
      },
    ],
  },
  {
    version: "v1.0.1",
    date: "April 2026",
    type: "Patch",
    title: "Hotfix",
    desc: "Fixed auto-updater yml configurations and preserved environment keys across local client updates.",
    icon: Star,
    categories: [
      {
        title: "🔧 Fixes",
        items: [
          "Fixed auto-updater latest.yml 404 on fresh installs",
          "Resolved .env key loss on reinstall — keys now preserved across updates",
          "Fixed LanceDB memory graph wipe on reinstall",
        ],
      },
    ],
  },
  {
    version: "v1.0.0",
    date: "February 2026",
    type: "Major",
    title: "Initial Release",
    desc: "The public birth of the IRIS voice-first Neural OS ecosystem layer.",
    icon: Star,
    categories: [
      {
        title: "🚀 Core",
        items: [
          "First public release of IRIS AI for Windows",
          "Electron + Vite + React + TypeScript desktop application",
          "Real-time voice interaction via Gemini 2.5 Flash (WebRTC)",
          "Local LanceDB vector memory with persistent context",
          "Face ID biometric lock via face-api.js",
          "Secure API key vault using Electron safeStorage",
          "Auto-updater via electron-updater + GitHub Releases",
          "NSIS Windows installer with silent update support",
        ],
      },
      {
        title: "🎙️ Voice",
        items: [
          "Bidirectional real-time audio with Gemini Live API",
          "System instruction injection with user context and memory",
          "Voice Activity Detection (initial implementation)",
          "Persistent conversation memory across sessions",
        ],
      },
      {
        title: "🛠️ Tools (Initial Set)",
        items: [
          "File system read/write/search",
          "App launcher",
          "Web search via Tavily",
          "WhatsApp messaging (ghost control)",
          "Spotify control (ghost control)",
          "Screenshot capture",
          "Clipboard management",
          "System volume control",
        ],
      },
      {
        title: "🎨 UI",
        items: [
          "Glassmorphic desktop interface",
          "3D AI orb (Three.js particle system)",
          "Real-time transcript overlay",
          "System telemetry HUD (CPU, RAM, Temp, Network)",
          "Command Center settings panel",
        ],
      },
    ],
  },
];

export default function ChangelogPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Line progress tracks scroll position of timeline container
      gsap.fromTo(
        lineProgressRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 30%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );

      // 2. Focus/Highlight ScrollTrigger per card
      changelogData.forEach((item, idx) => {
        const idSafe = item.version.replace(/\./g, "-");
        const cardSelector = `#card-${idSafe}`;
        const dotSelector = `#dot-${idSafe}`;

        // Initialize state on render: card 0 active, others dimmed
        if (idx === 0) {
          gsap.set(cardSelector, {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            borderColor: "rgba(57, 255, 20, 0.4)",
            boxShadow: "0 0 25px rgba(57, 255, 20, 0.05)",
          });
          gsap.set(dotSelector, {
            borderColor: "#39FF14",
            backgroundColor: "#39FF14",
            boxShadow: "0 0 15px rgba(57, 255, 20, 0.8)",
            color: "#000000",
            scale: 1.15,
          });
        } else {
          gsap.set(cardSelector, {
            scale: 0.97,
            opacity: 0.25,
            filter: "blur(2.5px)",
            borderColor: "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
          });
          gsap.set(dotSelector, {
            borderColor: "rgba(255, 255, 255, 0.1)",
            backgroundColor: "#000000",
            boxShadow: "none",
            color: "#4b5563",
            scale: 1,
          });
        }

        ScrollTrigger.create({
          trigger: cardSelector,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            setActiveIndex(idx);
            gsap.to(cardSelector, {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              borderColor: "rgba(57, 255, 20, 0.4)",
              boxShadow: "0 0 25px rgba(57, 255, 20, 0.05)",
              duration: 0.3,
            });
            gsap.to(dotSelector, {
              borderColor: "#39FF14",
              backgroundColor: "#39FF14",
              boxShadow: "0 0 15px rgba(57, 255, 20, 0.8)",
              color: "#000000",
              scale: 1.15,
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            setActiveIndex(idx);
            gsap.to(cardSelector, {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              borderColor: "rgba(57, 255, 20, 0.4)",
              boxShadow: "0 0 25px rgba(57, 255, 20, 0.05)",
              duration: 0.3,
            });
            gsap.to(dotSelector, {
              borderColor: "#39FF14",
              backgroundColor: "#39FF14",
              boxShadow: "0 0 15px rgba(57, 255, 20, 0.8)",
              color: "#000000",
              scale: 1.15,
              duration: 0.3,
            });
          },
          onLeave: () => {
            gsap.to(cardSelector, {
              scale: 0.97,
              opacity: 0.25,
              filter: "blur(2.5px)",
              borderColor: "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              duration: 0.3,
            });
            gsap.to(dotSelector, {
              borderColor: "rgba(255, 255, 255, 0.1)",
              backgroundColor: "#000000",
              boxShadow: "none",
              color: "#4b5563",
              scale: 1,
              duration: 0.3,
            });
          },
          onLeaveBack: () => {
            gsap.to(cardSelector, {
              scale: 0.97,
              opacity: 0.25,
              filter: "blur(2.5px)",
              borderColor: "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              duration: 0.3,
            });
            gsap.to(dotSelector, {
              borderColor: "rgba(255, 255, 255, 0.1)",
              backgroundColor: "#000000",
              boxShadow: "none",
              color: "#4b5563",
              scale: 1,
              duration: 0.3,
            });
          },
        });
      });
    },
    { scope: containerRef },
  );

  const scrollToVersion = (versionStr: string, idx: number) => {
    const idSafe = versionStr.replace(/\./g, "-");
    const element = document.getElementById(`card-${idSafe}`);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#39FF14] selection:text-black"
    >
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
            <Activity className="w-3 h-3 text-[#39FF14]" />
            <span className="uppercase tracking-widest">
              Ecosystem Momentum
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            RELEASE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#39FF14] to-[#044a33]">
              CHANGELOG.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Review the structural iterations, feature extensions, and
            performance upgrades of IRIS.
          </p>
        </motion.div>
      </section>

      {/* Open Core Transition Statement Section (Scrolls naturally above timeline) */}
      <section className="pt-20 pb-10 px-6 relative z-20 max-w-5xl mx-auto">
        <div className="bg-[#0a0a0a] border border-[#39FF14]/20 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#39FF14]/15 shadow-[0_0_15px_#39FF14] pointer-events-none" />
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
            <GitBranch className="w-5 h-5 text-[#39FF14]" />
            Transition to Sustainable Open Core Model
          </h3>
          <div className="text-zinc-400 text-xs font-mono leading-relaxed space-y-3">
            <p>
              In our earlier iterations (pre-v1.1.0), IRIS was developed as a
              100% free and open-source project. However, to fund continuous
              engineering cycles, integrate low-latency SDK solutions (Gemini
              Live API), and construct advanced tools, IRIS has transitioned to
              an <strong>Open Core model</strong>.
            </p>
            <p>
              <strong>What remains open-source?</strong> The public repository
              contains the visual layout configuration, context-isolated
              preloads, visual React components, and general community
              templates.
            </p>
            <p>
              <strong>What is protected?</strong> The core reasoning
              orchestrator, dynamic tool execution main structures, and
              automated security locks are packaged inside unreadable V8
              bytecode.
            </p>
            <div className="p-4 rounded-xl bg-[#39FF14]/5 border border-[#39FF14]/10 text-[#39FF14]/90 space-y-2 mt-2 font-semibold">
              <span className="font-bold block">Sponsorship Inclusions:</span>
              <ul className="space-y-1 pl-2 text-zinc-400">
                <li>
                  • **$15/mo Sponsor (Insider)**: Unlocks read access to
                  `iris-insiders` containing functional hooks and code snippets.
                  *Sponsorship at this level does not provide the full code.*
                </li>
                <li>
                  • **$30/mo Sponsor (Builder)**: Access to testing prompts,
                  logs, and workflow macros.
                </li>
                <li>
                  • **$50/mo Sponsor (Alpha)**: Full read access to the raw,
                  unprotected, uncompiled source code, precompiled releases, and
                  commercial licenses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stacking Timeline Section */}
      <section
        className="py-16 px-6 relative z-20 max-w-7xl mx-auto"
        ref={timelineRef}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Sticky active version display widget) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-36 space-y-6">
              <div
                id="pin-panel"
                className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 hover:border-[#39FF14]/20 rounded-2xl p-6 space-y-6 transition-all duration-300"
              >
                <div className="space-y-1.5">
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] font-mono">
                    SYSTEM CORE: OPERATIONAL
                  </div>
                  <div className="text-xs text-[#39FF14] font-bold font-mono flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
                    </span>
                    CHRONOLOGY MONITOR
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <div className="space-y-3">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">
                    Currently Viewing
                  </div>
                  <div className="text-4xl font-black font-mono tracking-tighter text-white flex items-baseline gap-2">
                    {changelogData[activeIndex].version}
                    <span className="text-[9px] text-[#39FF14] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/20 font-mono">
                      {changelogData[activeIndex].type}
                    </span>
                  </div>
                  <div className="text-white font-bold text-sm tracking-tight font-mono">
                    {changelogData[activeIndex].title}
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed font-mono">
                    {changelogData[activeIndex].desc}
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div className="space-y-2.5">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">
                    Ecosystem Versions Index
                  </div>
                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 iris-scrollbar">
                    {changelogData.map((item, idx) => (
                      <button
                        key={item.version}
                        onClick={() => scrollToVersion(item.version, idx)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-between border ${
                          activeIndex === idx
                            ? "bg-[#39FF14]/10 text-[#39FF14] border-[#39FF14]/30 shadow-[0_0_15px_rgba(57,255,20,0.03)]"
                            : "text-zinc-400 hover:text-white bg-transparent border-transparent hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              activeIndex === idx
                                ? "bg-[#39FF14]"
                                : "bg-zinc-700"
                            }`}
                          />
                          {item.version}
                        </span>
                        <span className="text-[9px] text-zinc-500 font-normal">
                          {item.date.split(",")[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/docs"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-400 font-mono hover:text-[#39FF14] hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 transition-all w-full text-center"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Return to Documentation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 relative pl-12 lg:pl-20">
            <div className="absolute left-6 lg:left-8 top-4 bottom-4 w-0.5 bg-zinc-800/40 rounded-full z-0 pointer-events-none">
              <div
                ref={lineProgressRef}
                className="absolute top-0 left-0 w-full bg-linear-to-b from-[#39FF14] to-emerald-500 origin-top h-0 shadow-[0_0_15px_rgba(57,255,20,0.6)]"
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div
              id="timeline-window"
              className="relative w-full space-y-24 bg-transparent"
            >
              {changelogData.map((item, idx) => {
                const Icon = item.icon;
                const isMajor = item.type === "Major";
                const idSafe = item.version.replace(/\./g, "-");
                return (
                  <div
                    key={item.version}
                    id={`card-${idSafe}`}
                    className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between w-full h-auto lg:h-180 overflow-visible lg:overflow-y-auto transition-all duration-300 iris-scrollbar"
                  >
                    <div
                      id={`dot-${idSafe}`}
                      className="absolute -left-9 lg:-left-16 top-7.5] w-6 h-6 lg:w-8 lg:h-8 rounded-full border bg-black flex items-center justify-center z-20 transition-all duration-300"
                    >
                      <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xl font-bold font-mono ${
                            isMajor ? "text-[#39FF14]" : "text-white"
                          }`}
                        >
                          {item.version}
                        </span>
                        <span className="text-zinc-500 text-xs font-mono font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                      </div>
                      <span
                        className={`
                          text-[9px] font-black uppercase font-mono px-2 py-0.5 rounded tracking-widest border
                          ${
                            isMajor
                              ? "bg-[#39FF14]/10 border-[#39FF14]/20 text-[#39FF14]"
                              : "bg-white/5 border-white/10 text-zinc-400"
                          }
                        `}
                      >
                        {item.type} Release
                      </span>
                    </div>

                    <div className="space-y-1.5 my-4">
                      <h3 className="text-lg font-bold text-white font-mono leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 flex-1 overflow-y-auto iris-scrollbar pr-2">
                      {item.categories.map((cat, catIdx) => (
                        <div key={catIdx} className="category-block space-y-3">
                          <h4 className="text-xs font-bold text-white flex items-center gap-2 border-b border-white/5 pb-1 font-mono uppercase tracking-wider">
                            {cat.title}
                          </h4>
                          <ul className="space-y-2 pl-1 font-mono text-[11px] text-zinc-400">
                            {cat.items.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-[#39FF14] mt-1 shrink-0">
                                  •
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
