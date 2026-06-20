"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cpu,
  Layers,
  Network,
  ArrowRight,
  Code,
  Terminal,
  Sparkles,
  Zap,
  Laptop,
  CheckCircle,
} from "lucide-react";

interface StackItem {
  name: string;
  desc: string;
}

interface StackCategory {
  title: string;
  items: StackItem[];
}

const techStackData: StackCategory[] = [
  {
    title: "Core Desktop & UI Framework",
    items: [
      { name: "Electron & Vite", desc: "High-performance desktop compilation & fast bundler lifecycle." },
      { name: "React 19", desc: "Component-based, optimized virtual DOM frontend engine." },
      { name: "Tailwind CSS v4", desc: "Utility-first styling matching modern HSL palettes." },
      { name: "Framer Motion & GSAP", desc: "Hardware-accelerated animations and scroll synchronization." },
      { name: "Three.js & React Three Fiber", desc: "3D neural network visualizers and active orb renderers." },
      { name: "Zustand", desc: "Lightweight, centralized state management." },
    ],
  },
  {
    title: "AI & Neural Orchestration Layer",
    items: [
      { name: "Gemini 3.1 Live API", desc: "Bidirectional real-time WebRTC audio stream + vision intelligence." },
      { name: "Groq SDK", desc: "Sub-100ms ultra-fast inference routing & fallback processing." },
      { name: "LangGraph", desc: "Agentic state loop orchestration & cyclic tool selectors (Protected)." },
      { name: "LanceDB", desc: "High-speed local vector database for persistent RAG and memory." },
    ],
  },
  {
    title: "OS Control & Automation",
    items: [
      { name: "Nut.js", desc: "Native OS mouse coordinate targeting, keyboard typing injection." },
      { name: "Puppeteer & Stealth", desc: "Headless browser scraping, automated form fill, web agent." },
      { name: "Node Window Manager", desc: "Active application window resizing, repositioning, and alignment." },
      { name: "Tesseract.js", desc: "Optical Character Recognition (OCR) for screen peeling code extraction." },
    ],
  },
];

export default function DocsArchitecturePage() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "split-process" | "ipc-bridge">("pipeline");

  const containerVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest uppercase">
          <Cpu className="w-3.5 h-3.5" />
          Systems Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          SYSTEM <span className="text-[#39FF14]">ARCHITECTURE.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-mono">
          IRIS maps natural audio input directly into OS-level instructions. Explore the neural execution cycle, process isolation boundary, and complete system stack.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex border-b border-white/10 gap-2 font-mono text-xs overflow-x-auto pb-px">
        {[
          { id: "pipeline", label: "Execution Pipeline", icon: Network },
          { id: "split-process", label: "Split-Process Isolation", icon: Layers },
          { id: "ipc-bridge", label: "Secure IPC Bridge", icon: Code },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                flex items-center gap-2 px-5 py-3 border-b-2 font-bold cursor-pointer whitespace-nowrap transition-all duration-200
                ${
                  isActive
                    ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/5"
                    : "border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }
              `}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Tab Contents */}
      <motion.div variants={itemVariants} className="min-h-[300px]">
        {activeTab === "pipeline" && (
          <div className="space-y-6">
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#39FF14]" />
                Real-Time Voice-To-System Pipeline
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl font-mono">
                IRIS establishes a persistent full-duplex WebRTC connection with Gemini Live. Audio streams continuously; when intent is matched, the state-machine locks and executes actions, feeding the output instantly back as audio.
              </p>

              {/* Execution Flow Diagram */}
              <div className="space-y-4 pt-4">
                {[
                  { step: "01", name: "WebRTC Audio Stream", source: "User Speech Input", desc: "Persistent bidirectional live stream (<500ms latency)." },
                  { step: "02", name: "Gemini 3.1 Live API", source: "Intent Recognition & Parsing", desc: "Processes speech, outputs structured function call payloads." },
                  { step: "03", name: "LangGraph State Machine", source: "Cyclic Tool Selection", desc: "Protected backend process orchestrates required system operations." },
                  { step: "04", name: "Native OS Execution", source: "Protected Tools System", desc: "Nut.js cursor events, CLI executions, filesystem operations take action." },
                  { step: "05", name: "Feedback Synthesis", source: "Audio & UI Update Loop", desc: "System output returned to Gemini Live; synthesizes response back to speaker." },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-black/60 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                    <div className="text-xs font-mono font-bold px-2 py-1 rounded bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14]">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm font-mono">{item.name}</div>
                      <div className="text-zinc-500 text-xs font-mono mt-0.5">{item.source}</div>
                    </div>
                    <div className="hidden md:block text-zinc-500"><ArrowRight className="w-4 h-4" /></div>
                    <div className="text-zinc-400 text-xs font-mono md:w-1/3">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "split-process" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#39FF14]">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Frontend Render Process</h3>
              </div>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                The frontend operates as a standard Chromium view. It is completely isolated and lacks direct access to the Node.js runtime or direct filesystem endpoints.
              </p>
              <ul className="space-y-2 text-zinc-500 font-mono text-xs pl-2 border-l border-[#39FF14]/30">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  React 19 UI & Zustand Stores
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  Three.js WebGL & Audio Nodes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  Preload secure scripts injection
                </li>
              </ul>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Backend Main Process
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 uppercase">
                    Protected
                  </span>
                </h3>
              </div>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                The main process executes system operations. It compiles directly into binary V8 bytecode, meaning reverse engineering requires substantial resources.
              </p>
              <ul className="space-y-2 text-zinc-500 font-mono text-xs pl-2 border-l border-[#39FF14]/30">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  LangGraph Voice Orchestration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  Active OS Automation (Nut.js/Shell)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#39FF14]" />
                  ASAR Hashing & local keystore logic
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "ipc-bridge" && (
          <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-[#39FF14]" />
                Secure Context-Isolated IPC Tunnel
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl font-mono">
                Frontend render frames trigger tools through a strict, whitelisted Inter-Process Communication (IPC) bridge. No direct Node calls are made in client modules.
              </p>
            </div>

            {/* Code Block */}
            <div className="bg-black/80 rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
              <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-zinc-500 text-[10px] uppercase font-bold tracking-widest flex items-center justify-between">
                <span>IPC Bridge Signature</span>
                <span className="text-[#39FF14]">ipc-bridge.ts</span>
              </div>
              <pre className="p-5 overflow-x-auto text-zinc-300 leading-relaxed">
{`// 1. FRONTEND CALL (React Component)
const handleAction = async (payload: { tool: string; args: any }) => {
  try {
    // Invoke secure channel without exposure to direct require/electron elements
    const result = await window.electron.ipcRenderer.invoke('execute-tool', payload);
    console.log("OS Execution complete:", result);
  } catch (error) {
    console.error("Action execution blocked:", error);
  }
};

// 2. PRELOAD SCRIPTS (Isolated bridge contract)
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    invoke: (channel: string, data: any) => {
      // Validate channel name to prevent access injection
      const whitelistedChannels = ['execute-tool', 'system-telemetry', 'auth-keychain'];
      if (whitelistedChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, data);
      }
      return Promise.reject(new Error("Unauthorized IPC channel call blocked"));
    }
  }
});

// 3. BACKEND HANDLER (Obfuscated & compiled inside V8 bytecode main process)
ipcMain.handle('execute-tool', async (event, { tool, args }) => {
  // Validate token signature and run internal LangGraph decision cycle
  const result = await LangGraphRunner.trigger(tool, args);
  return result;
});`}
              </pre>
            </div>
          </div>
        )}
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div variants={itemVariants} className="space-y-6 pt-6 border-t border-white/10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#39FF14]" />
          Technical Stack Inventory
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStackData.map((category, idx) => (
            <div key={idx} className="bg-[#050505] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/15 transition-all">
              <h4 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider font-mono">
                {category.title}
              </h4>
              <div className="space-y-3 font-mono text-xs">
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className="space-y-0.5">
                    <span className="text-white font-bold block">{item.name}</span>
                    <span className="text-zinc-500 block leading-normal">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
