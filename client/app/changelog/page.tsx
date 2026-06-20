"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  Terminal,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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

// ── 1. The Original Changelog Data (Preserved Exactly) ──
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
          "Pixel ratio capped at 1.5x",
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
          "Provisioned new secure Node.js/Express backend",
          "Restored frontend UI",
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
        title: "🎨 Telemetry HUD",
        items: [
          "Replaced flat metric boxes with glassmorphic hardware telemetry HUD",
          "Each node (CPU, RAM, Temp, OS) has isolated color-coded gradient mesh background",
          "Added animated CSS cyber-grid patterns per metric card",
          "Added giant faded background iconography (140px) with hover scale animation",
          "Laser-edge hover glow — color-matched per hardware node",
          "Live progress bars in darkened track with backdrop blur",
        ],
      },
      {
        title: "🛠️ Ghost Process Eradication",
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
          "Expanded Electron session permission handler to approve all Chromium hardware strings",
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
        title: "⚡ Zero-Latency Voice Engine",
        items: [
          "Fixed 8–10 second audio latency — root cause was AudioWorklet flooding WebSocket 60x/sec with micro-packets",
          "Audio now buffered into 4096-frame (250ms) chunks — drops latency to near-zero",
          "Added native VAD and interruption support",
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
          "Fixed critical pathing bug — Face ID now works in compiled .exe",
          "Added 2.8-second cinematic decryption sequence on Face ID unlock",
          "Webcam light turns off instantly on successful Face ID match",
          "New live boot terminal on login screen with simulated OS sequence",
        ],
      },
      {
        title: "⚡ Low-End Device Optimization",
        items: [
          "Eliminated new THREE.Color() inside render loop",
          "Switched array reductions to fast-path math loops — CPU usage reduced by 40%+",
          "WebGL canvas now detects and caps pixel ratio",
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
          "Added macOS systemPreferences prompts for Camera and Microphone",
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
        title: "📱 ADB Mobile Bridge",
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
        title: "🖥️ Ghost Control",
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
    desc: "The public release of the IRIS native execution engine.",
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
  const [activeVersion, setActiveVersion] = useState(changelogData[0].version);

  // Use a native IntersectionObserver for buttery smooth scroll tracking
  // without the lag or jank of GSAP pinning
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveVersion(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }, // Triggers when the card hits the upper quarter of the screen
    );

    const items = document.querySelectorAll(".changelog-entry");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToVersion = (version: string) => {
    const element = document.getElementById(version);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#39FF14]/30 pt-24 overflow-hidden relative">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="py-16 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest mb-6">
            <Activity className="w-3 h-3 text-[#39FF14]" />
            VERSION HISTORY
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase">
            RELEASE <span className="text-[#39FF14]">NOTES.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-mono">
            A chronological record of system iterations, feature deployments,
            and architectural upgrades to the IRIS execution engine.
          </p>
        </motion.div>
      </section>

      {/* ── MAIN LAYOUT (STICKY SIDEBAR + TIMELINE) ── */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 relative z-10">
        {/* LEFT SIDEBAR (Sticky Version Navigation) */}
        <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 font-mono">
                Versions
              </h3>
              <nav className="flex flex-col gap-1 border-l border-white/10">
                {changelogData.map((item) => {
                  const isActive = activeVersion === item.version;
                  return (
                    <button
                      key={item.version}
                      onClick={() => scrollToVersion(item.version)}
                      className={`text-left px-4 py-2 text-sm font-mono transition-all duration-200 border-l-[3px] -ml-[2px] ${
                        isActive
                          ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/5"
                          : "border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      {item.version}
                      <span className="block text-[10px] text-zinc-600 mt-0.5">
                        {item.date}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tech Info Box */}
            <div className="p-4 bg-[#050505] border border-white/10 rounded-xl">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                <Terminal className="w-3 h-3 text-[#39FF14]" /> Update Method
              </h4>
              <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                The IRIS Desktop Application checks for updates automatically on
                boot. Headless CLI users must run{" "}
                <code className="text-[#39FF14]">npm update -g iris-mini</code>{" "}
                to fetch the latest builds.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT (Vertical Timeline) */}
        <div className="flex-1 pb-32">
          {/* Open Core Disclaimer */}
          <div className="bg-[#050505] border border-[#39FF14]/30 rounded-2xl p-6 mb-16 flex items-start gap-4 shadow-[0_0_20px_rgba(57,255,20,0.05)]">
            <div className="p-3 bg-[#39FF14]/10 rounded-xl shrink-0">
              <GitBranch className="w-5 h-5 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2 font-mono uppercase tracking-widest text-sm">
                Licensing Architecture Notice
              </h3>
              <p className="text-zinc-400 text-sm font-mono leading-relaxed">
                As of <strong className="text-white">v1.1.0</strong>, IRIS
                operates on an Open Core model. The public repository contains
                the visual layout configuration and context-isolated preloads.
                To protect intellectual property, the core reasoning
                orchestrator, dynamic tool execution, and automated security
                locks are packaged inside encrypted V8 bytecode and require an
                active IRIS Pro license.
              </p>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="space-y-16 lg:space-y-24">
            {changelogData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.version}
                  id={item.version}
                  className="changelog-entry relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12"
                >
                  {/* Date & Version Block (Desktop left, Mobile top) */}
                  <div className="md:sticky md:top-32 h-max">
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="text-2xl font-black text-white font-mono">
                        {item.version}
                      </span>
                      <span className="text-sm text-zinc-500 font-mono">
                        {item.date}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border font-mono ${
                          item.type === "Major"
                            ? "bg-[#39FF14]/10 border-[#39FF14]/20 text-[#39FF14]"
                            : "bg-white/5 border-white/10 text-zinc-400"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Main Card Content */}
                  <div className="bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#39FF14]/30 transition-colors shadow-lg">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#39FF14]/10 rounded-lg">
                        <Icon className="w-5 h-5 text-[#39FF14]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {item.categories.map((cat, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2 font-mono">
                            {cat.title}
                          </h4>
                          <ul className="space-y-3">
                            {cat.items.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-[#39FF14] font-bold mt-0.5 shrink-0">
                                  +
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
