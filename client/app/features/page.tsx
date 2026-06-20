"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Mic,
  MousePointer2,
  Brain,
  HardDrive,
  Database,
  Smartphone,
  Code2,
  Shield,
  Globe,
  Fingerprint,
  MessageCircle,
  Search,
  LayoutTemplate,
  Braces,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import Hyperspeed from "../Components/core/HyperSpeed";

// ── 1. The Elite Feature Data (Zero Fluff, 100% Technical Accuracy) ──
const storyData: StoryContent[] = [
  {
    num: "01",
    title: "Native File System Access",
    text: "IRIS executes local read/write operations autonomously. It navigates directories, structures project folders, and manages your hard drive without requiring manual input.",
    icon: <Database className="w-24 h-24 text-gray-400" />,
    visualTitle: "SYSTEM CONTROL",
    visualSub: "OS-Level Access",
  },
  {
    num: "02",
    title: "Acoustic WebSocket Engine",
    text: "Typing is friction. By stripping HTTP overhead and streaming audio binaries directly over WebSockets, IRIS achieves sub-second latency for real-time voice execution.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "ZERO LATENCY",
    visualSub: "Binary Streams",
  },
  {
    num: "03",
    title: "Hardware Security Vault",
    text: "Security requires physical verification. IRIS utilizes local facial recognition algorithms to cryptographically verify your presence before executing sensitive terminal commands.",
    icon: <Fingerprint className="w-24 h-24 text-emerald-400" />,
    visualTitle: "BIOMETRICS",
    visualSub: "Face Authentication",
  },
  {
    num: "04",
    title: "Android Telemetry",
    text: "Your PC and mobile device, unified. IRIS interfaces via ADB to read local notifications, toggle hardware states, and execute remote coordinate taps on your mobile display.",
    icon: <Smartphone className="w-24 h-24 text-purple-400" />,
    visualTitle: "ECOSYSTEM",
    visualSub: "ADB Integration",
  },
  {
    num: "05",
    title: "Autonomous Communications",
    text: "Direct API integration. IRIS drafts emails, dispatches WhatsApp messages, and schedules cron-based background notifications without manual UI interaction.",
    icon: <MessageCircle className="w-24 h-24 text-green-400" />,
    visualTitle: "COMMS",
    visualSub: "WhatsApp & Email",
  },
  {
    num: "06",
    title: "Automated Data Scraping",
    text: "Deploy automated web crawlers to scour live internet data, synthesize documentation, and format structured reports directly into your local Notion databases.",
    icon: <Search className="w-24 h-24 text-orange-400" />,
    visualTitle: "RAG ENGINE",
    visualSub: "Web Crawling",
  },
  {
    num: "07",
    title: "Window Management",
    text: "IRIS interfaces directly with your OS window manager to physically resize, stack, and align your active application windows based on your current workflow context.",
    icon: <LayoutTemplate className="w-24 h-24 text-cyan-400" />,
    visualTitle: "WORKSPACE",
    visualSub: "Process Control",
  },
  {
    num: "08",
    title: "Live Code Generation",
    text: "IRIS spawns local instances to generate, render, and execute React and GSAP components in real-time, bridging the gap between prompt and compiled code.",
    icon: <Code2 className="w-24 h-24 text-pink-400" />,
    visualTitle: "COMPILER",
    visualSub: "Live Rendering",
  },
  {
    num: "09",
    title: "Local Vector Memory",
    text: "Complete privacy. IRIS embeds your project directories into a local LanceDB vector database, enabling instant, offline semantic search across your entire file system.",
    icon: <HardDrive className="w-24 h-24 text-yellow-400" />,
    visualTitle: "VECTOR DB",
    visualSub: "Semantic Indexing",
  },
  {
    num: "10",
    title: "Live DOM Manipulation",
    text: "IRIS injects JavaScript locally to mutate live website Document Object Models (DOM), extracting visual UI layouts into raw code for immediate iteration.",
    icon: <Braces className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "DOM INJECTION",
    visualSub: "Live CSS/JS",
  },
  {
    num: "11",
    title: "Localhost Tunnels",
    text: "IRIS autonomously configures and deploys secure public endpoints, exposing your local development servers to the internet for instant client previews.",
    icon: <Globe className="w-24 h-24 text-indigo-400" />,
    visualTitle: "NETWORKING",
    visualSub: "Port Exposure",
  },
  {
    num: "12",
    title: "Dual-Compute Architecture",
    text: "Groq LPUs handle split-second JSON tool-chaining, while the Gemini Flash streaming architecture manages massive context windows and complex reasoning.",
    icon: <Brain className="w-24 h-24 text-white" />,
    visualTitle: "INTELLIGENCE",
    visualSub: "Gemini + Groq",
  },
  {
    num: "13",
    title: "Macro Execution",
    text: "IRIS processes complex JSON arrays to inject global keyboard shortcuts, mouse coordinates, and UI clicks, automating repetitive desktop workflows natively.",
    icon: <MousePointer2 className="w-24 h-24 text-red-500" />,
    visualTitle: "MACROS",
    visualSub: "Ghost Typing",
  },
  {
    num: "14",
    title: "Engineered for Scale",
    text: "Built by Harsh Pandey. Architected to push the absolute limits of local AI infrastructure, frontend performance, and native desktop execution.",
    icon: <Shield className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "ARCHITECTURE",
    visualSub: "Harsh Pandey",
  },
];

export default function FeaturesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#10b981] selection:text-black"
    >
      <Header />

      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 bg-[#050505] perspective-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x0ac529,
                brokenLines: 0x0ac529,
                leftCars: [0x00ff66, 0x0ac529, 0x39ff14],
                rightCars: [0x00ffaa, 0x0ac529, 0x00ff66],
                sticks: 0x0ac529,
              },
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <Terminal className="w-3 h-3 animate-pulse" />
              <span className="tracking-widest uppercase">
                Autonomous Capabilities
              </span>
            </motion.div>

            {/* Replaced 'PASSIVE CHAT' with 'NATIVE EXECUTION' to sound like a real engine */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              CORE <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-[#10b981]/20 blur-lg opacity-50 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
                  FEATURES
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              A complete technical breakdown of the IRIS engine.{" "}
              <span className="text-[#10b918] font-bold border-b border-[#10b981]">
                Direct file system access,
              </span>{" "}
              Android device bridging, automated workflows, and local vector
              memory.
            </motion.p>
          </motion.div>
        </div>

        {/* This Status Bar looks incredible. I left it exactly as you built it. */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></div>
                WEBSOCKET: STREAMING
              </span>
              <span className="hidden md:block">LATENCY: {"<"}1.0s</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#10b981]">SYSTEM WRITE: ENABLED</span>
              <span className="hidden md:block">LOCAL MEM: INDEXED</span>
            </div>
          </div>
        </div>
      </section>

      <StoryChapter content={storyData} />

      <Footer />
    </div>
  );
}
