"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mic,
  MousePointer2,
  Smartphone,
  Zap,
  Workflow,
  Brain,
  Shield,
  HardDrive,
  Globe,
  User,
  ScanFace,
  Layers,
  Sparkles,
  Code2,
  Database,
  Terminal,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import LogoLoop from "../utils/LogoLoop";
import {
  SiHuggingface,
  SiNotion,
  SiElectron,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGreensock,
  SiFramer,
  SiOllama,
} from "react-icons/si";
import { FaYahoo } from "react-icons/fa6";
import { PiOpenAiLogo } from "react-icons/pi";
import { RiGeminiFill } from "react-icons/ri";
import { BsAnthropic } from "react-icons/bs";
import { TbBrandSocketIo } from "react-icons/tb";
import { GridScan } from "../utils/GridScan";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── 1. The Ultra-Precise Story Content (Zero Fluff) ──
const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The Execution Engine",
    text: "Chatbots output text. IRIS outputs action. We built a native engine that translates human intent directly into local system commands.",
    icon: <User className="w-24 h-24 text-gray-500" />,
    visualTitle: "CORE FOCUS",
    visualSub: "System Execution",
  },
  {
    num: "02",
    title: "Offline Wake Engine",
    text: "IRIS runs a local acoustic model. It listens passively without latency, requiring zero physical input to initiate complex workflows.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "VOICE I/O",
    visualSub: "Zero Latency",
  },
  {
    num: "03",
    title: "Native File Control",
    text: "IRIS bypasses the browser. It writes code directly to disk, manages local directories, and executes terminal scripts natively.",
    icon: <Terminal className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "SYSTEM",
    visualSub: "Disk Access",
  },
  {
    num: "04",
    title: "Dual-Engine Logic",
    text: "Tasks are routed dynamically. High-speed logic hits LPU hardware, while massive context operations route through Gemini streaming APIs.",
    icon: <Brain className="w-24 h-24 text-purple-500" />,
    visualTitle: "COMPUTE",
    visualSub: "Dynamic Routing",
  },
  {
    num: "05",
    title: "Vector Retrieval",
    text: "IRIS embeds your codebase into a local vector database. It searches your files and Notion workspaces instantly via semantic RAG.",
    icon: <Database className="w-24 h-24 text-orange-500" />,
    visualTitle: "MEMORY",
    visualSub: "Local RAG",
  },
  {
    num: "06",
    title: "Screen Optics",
    text: "IRIS analyzes your active display. It reads UI elements, extracts visual text, and executes precise cursor and keyboard inputs.",
    icon: <ScanFace className="w-24 h-24 text-cyan-400" />,
    visualTitle: "VISION",
    visualSub: "UI Extraction",
  },
  {
    num: "07",
    title: "Cross-Device Link",
    text: "IRIS bridges your PC and Android. It intercepts mobile notifications, transfers files, and launches phone applications remotely.",
    icon: <Smartphone className="w-24 h-24 text-green-400" />,
    visualTitle: "MOBILE",
    visualSub: "Android Bridge",
  },
  {
    num: "08",
    title: "Macro Automation",
    text: "IRIS strings single actions into automated macros. Tell it to research a topic, build a UI, and deploy it to localhost in one command.",
    icon: <Workflow className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "MACROS",
    visualSub: "Multi-Step Sequences",
  },
  {
    num: "09",
    title: "Real-Time UI",
    text: "Built on React and GSAP, the visual interface acts as a live telemetry dashboard, providing instant feedback on background operations.",
    icon: <Layers className="w-24 h-24 text-indigo-400" />,
    visualTitle: "DASHBOARD",
    visualSub: "Live Telemetry",
  },
  {
    num: "10",
    title: "Biometric Lockdown",
    text: "IRIS secures your data. Critical file access and terminal commands are locked behind local face recognition and PIN authentication.",
    icon: <Shield className="w-24 h-24 text-red-500" />,
    visualTitle: "SECURITY",
    visualSub: "Vault Encryption",
  },
];

const actualTechLogos = [
  {
    node: <RiGeminiFill className="text-4xl text-white cursor-pointer" />,
    title: "Gemini",
  },
  {
    node: <SiOllama className="text-4xl text-white cursor-pointer" />,
    title: "Llama",
  },
  {
    node: <BsAnthropic className="text-4xl text-white cursor-pointer" />,
    title: "Anthropic",
  },
  {
    node: <PiOpenAiLogo className="text-4xl text-white cursor-pointer" />,
    title: "OpenAI",
  },
  {
    node: <SiHuggingface className="text-4xl text-white cursor-pointer" />,
    title: "Hugging Face",
  },
  {
    node: (
      <span className="text-2xl font-bold tracking-tighter text-white cursor-pointer">
        Tavily
      </span>
    ),
    title: "Tavily",
  },
  {
    node: <SiReact className="text-4xl text-white cursor-pointer" />,
    title: "React",
  },
  {
    node: <SiNextdotjs className="text-4xl text-white cursor-pointer" />,
    title: "Next.js",
  },
  {
    node: <SiNodedotjs className="text-4xl text-white cursor-pointer" />,
    title: "Node.js",
  },
  {
    node: <SiExpress className="text-4xl text-white cursor-pointer" />,
    title: "Express",
  },
  {
    node: <TbBrandSocketIo className="text-4xl text-white cursor-pointer" />,
    title: "WebSockets",
  },
  {
    node: <SiGreensock className="text-4xl text-white cursor-pointer" />,
    title: "GSAP",
  },
  {
    node: <SiFramer className="text-4xl text-white" />,
    title: "Framer Motion",
  },
  { node: <SiElectron className="text-4xl text-white" />, title: "Electron" },
  { node: <SiNotion className="text-4xl text-white" />, title: "Notion" },
  { node: <FaYahoo className="text-4xl text-white" />, title: "Yahoo Finance" },
];

const IRISAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-[#10b981] selection:text-black font-sans overflow-x-hidden"
    >
      <Header />

      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 perspective-1000 bg-black">
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#10b981"
            gridScale={0.1}
            scanColor="#34d399"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>

        <motion.div className="absolute z-0 w-[800px] h-[800px] bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-3 h-3" />
              <span>IRIS KERNEL • DESKTOP EDITION</span>
            </div>

            {/* ── Updated, Hard-Hitting Hero Text ── */}
            <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl">
              SYSTEM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#10b981] to-[#044a33]">
                OVERRIDE.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              IRIS connects natural language directly to your operating system.
              Navigate files, automate terminals, and execute desktop workflows
              completely hands-free.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 md:px-0 py-12 relative overflow-hidden flex flex-col items-center z-20">
        <p className="text-[#10b981] text-sm tracking-widest uppercase mb-8 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          Core Technology Stack
        </p>
        <LogoLoop
          logos={actualTechLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover={false}
          ariaLabel="IRIS Technology Stack"
        />
      </section>

      <StoryChapter content={storyData} />

      <section className="py-40 bg-black text-center border-t border-[#10b981]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#10b981]/5 blur-3xl pointer-events-none"></div>
        <h2 className="text-5xl md:text-8xl font-bold mb-8 relative z-10 text-white tracking-tighter">
          INITIATE <span className="text-[#10b981]">SYSTEM.</span>
        </h2>
        <button className="relative z-10 px-12 py-5 bg-[#10b981] text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(16,185,129,0.4)]">
          Download IRIS Desktop
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default IRISAbout;
