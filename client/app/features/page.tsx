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
  Globe,
  Fingerprint,
  MessageCircle,
  Search,
  LayoutTemplate,
  ScanFace,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import Hyperspeed from "../Components/core/HyperSpeed";

const storyData: StoryContent[] = [
  {
    num: "01",
    title: "Offline Wake Word",
    text: "IRIS runs a localized acoustic engine. It listens passively with sub-second latency and triggers instantly without requiring a mouse click or keyboard shortcut.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "HEY, IRIS",
    visualSub: "Zero-Click Trigger",
  },
  {
    num: "02",
    title: "System & File Management",
    text: "Complete local drive access. IRIS can read directories, create folder structures, extract code from files, and autonomously write scripts directly to your disk.",
    icon: <HardDrive className="w-24 h-24 text-gray-400" />,
    visualTitle: "FILESYSTEM",
    visualSub: "Read/Write Access",
  },
  {
    num: "03",
    title: "Mobile Telekinesis",
    text: "Deep Android link via ADB. Read incoming phone notifications, track battery telemetry, push files, and remotely launch or close mobile apps from your PC.",
    icon: <Smartphone className="w-24 h-24 text-purple-400" />,
    visualTitle: "MOBILE BRIDGE",
    visualSub: "Cross-Device Control",
  },
  {
    num: "04",
    title: "WhatsApp & Email Automation",
    text: "Direct communication dispatch. Command IRIS to instantly draft emails, send WhatsApp messages, or schedule delayed cron-based text automation.",
    icon: <MessageCircle className="w-24 h-24 text-green-400" />,
    visualTitle: "COMMS",
    visualSub: "Background Dispatch",
  },
  {
    num: "05",
    title: "Screen Optics & OCR",
    text: "Visual extraction. IRIS scans your active monitor, peels text via OCR, targets precise UI coordinates, and injects phantom keystrokes across the system.",
    icon: <ScanFace className="w-24 h-24 text-cyan-400" />,
    visualTitle: "VISION",
    visualSub: "Screen Peeling",
  },
  {
    num: "06",
    title: "Terminal & CLI Execution",
    text: "Native shell access. Open projects, trigger build sequences, and run complex terminal commands entirely through voice input.",
    icon: <Terminal className="w-24 h-24 text-emerald-400" />,
    visualTitle: "DEVELOPER TOOLS",
    visualSub: "Shell Execution",
  },
  {
    num: "07",
    title: "Vector Search & Local Knowledge",
    text: "IRIS embeds your project directories into a LanceDB vector database, enabling instant, offline semantic searches across your entire codebase.",
    icon: <Database className="w-24 h-24 text-orange-400" />,
    visualTitle: "MEMORY",
    visualSub: "Semantic Indexing",
  },
  {
    num: "08",
    title: "Localhost Wormholes",
    text: "Expose your local development server to the public internet autonomously. IRIS deploys secure tunnels so clients can view your live work instantly.",
    icon: <Globe className="w-24 h-24 text-indigo-400" />,
    visualTitle: "NETWORKING",
    visualSub: "Port Exposure",
  },
  {
    num: "09",
    title: "Autonomous Deep Research",
    text: "Deploys Llama 3 web crawlers to scrape live internet data, analyze search results via Tavily, and sync structured reports directly to your Notion.",
    icon: <Search className="w-24 h-24 text-yellow-400" />,
    visualTitle: "RAG ENGINE",
    visualSub: "Web Crawling",
  },
  {
    num: "10",
    title: "Live DOM Manipulation",
    text: "Inject custom JavaScript to mutate live website Document Object Models (DOM). Extract visual layouts and generate Tailwind/GSAP components on the fly.",
    icon: <Code2 className="w-24 h-24 text-pink-400" />,
    visualTitle: "WEB CONTROL",
    visualSub: "Live JS Injection",
  },
  {
    num: "11",
    title: "Desktop UI Automation",
    text: "IRIS physically manages your workspace. It dynamically resizes windows, spawns floating desktop widgets, and manages global keyboard shortcuts.",
    icon: <LayoutTemplate className="w-24 h-24 text-blue-500" />,
    visualTitle: "WORKSPACE",
    visualSub: "Window Teleportation",
  },
  {
    num: "12",
    title: "Macro Sequence Triggering",
    text: "Automate repetitive tasks. IRIS triggers named JSON-based workflow sequences to execute chains of clicks, scrolls, and ghost typing autonomously.",
    icon: <MousePointer2 className="w-24 h-24 text-red-500" />,
    visualTitle: "MACROS",
    visualSub: "JSON Sequences",
  },
  {
    num: "13",
    title: "Biometric OS Vault",
    text: "System lockdown protocols. IRIS utilizes multi-face recognition and standard PIN validation to cryptographically lock your secure data and system controls.",
    icon: <Fingerprint className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "SECURITY",
    visualSub: "Face Authentication",
  },
  {
    num: "14",
    title: "Dual-Compute Core",
    text: "Groq LPUs handle split-second tool logic, while Gemini Flash streaming architecture manages massive context windows and complex reasoning.",
    icon: <Brain className="w-24 h-24 text-white" />,
    visualTitle: "INTELLIGENCE",
    visualSub: "Gemini + Groq",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent z-10"></div>

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

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              CORE <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-[#10b981]/20 blur-lg opacity-50 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
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

        <div className="absolute bottom-0 w-full border-t border-white/10 bg-[#050505]/80 backdrop-blur-md z-30">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="flex items-center gap-2 text-[#10b981] font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                BACKGROUND_DAEMON: RUNNING
              </span>
              <span className="hidden sm:block border-l border-white/10 pl-4 md:pl-6">
                WAKE_WORD: LISTENING
              </span>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <span className="hidden md:block">ADB_LINK: SECURE</span>
              <span className="hidden lg:block border-l border-white/10 pl-6">
                VECTOR_DB: MOUNTED
              </span>
              <span className="text-white border-l border-white/10 pl-4 md:pl-6">
                DISK_ACCESS: <span className="text-[#10b981]">GRANTED</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <StoryChapter content={storyData} />

      <Footer />
    </div>
  );
}