"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import {
  Mic,
  MousePointer2,
  Smartphone,
  Cpu,
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
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

// ── 1. The Elite Story Content ──
const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The Chatbot Flaw",
    text: "Traditional AI waits in a browser tab. You type, wait, and copy-paste. We realized the world doesn't need another chatbot. It needs an executor.",
    icon: <User className="w-24 h-24 text-gray-500" />,
    visualTitle: "PASSIVE AI",
    visualSub: "The Browser Trap",
  },
  {
    num: "02",
    title: "Zero-Latency Wake Word",
    text: "Powered by a 100% offline acoustic engine, IRIS listens passively and triggers instantly. No clicking microphones. Just speak from across the room.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "VOICE FIRST",
    visualSub: "Instant Handoff",
  },
  {
    num: "03",
    title: "Deep System Execution",
    text: "IRIS doesn't just give you a summary. It writes files, reads directories, executes shell scripts, and manages your local drives without you lifting a finger.",
    icon: <Terminal className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "EXECUTION",
    visualSub: "Native Control",
  },
  {
    num: "04",
    title: "Multi-Model Core",
    text: "Built for speed and reasoning. We route instantaneous tasks through fast LPUs and offload massive context handling to the Gemini Live streaming architecture.",
    icon: <Brain className="w-24 h-24 text-purple-500" />,
    visualTitle: "THE BRAIN",
    visualSub: "Dynamic Routing",
  },
  {
    num: "05",
    title: "Local Knowledge & RAG",
    text: "IRIS embeds your codebase and syncs with your Notion databases locally, allowing for instant semantic vector search and perfect context recall.",
    icon: <Database className="w-24 h-24 text-orange-500" />,
    visualTitle: "LOCAL AI",
    visualSub: "Vector Memory",
  },
  {
    num: "06",
    title: "Live Screen Optics",
    text: "IRIS physically sees your monitor. It extracts text via OCR, targets UI coordinates, and injects phantom keystrokes system-wide.",
    icon: <ScanFace className="w-24 h-24 text-cyan-400" />,
    visualTitle: "VISION",
    visualSub: "Screen Peeling",
  },
  {
    num: "07",
    title: "Native Desktop OS",
    text: "Escaping the browser sandbox. Built on Electron, IRIS operates natively on your machine with raw, unhindered access to system APIs.",
    icon: <HardDrive className="w-24 h-24 text-pink-500" />,
    visualTitle: "DESKTOP OS",
    visualSub: "Electron Core",
  },
  {
    num: "08",
    title: "Mobile Telekinesis",
    text: "Your desktop and phone, unified. IRIS reads Android notifications, pushes files, and launches mobile apps remotely directly from your PC.",
    icon: <Smartphone className="w-24 h-24 text-green-400" />,
    visualTitle: "MOBILE BRIDGE",
    visualSub: "Deep Link",
  },
  {
    num: "09",
    title: "WebSocket Streaming",
    text: "By stripping out HTTP overhead and streaming binary audio directly over persistent WebSockets, response latency drops below human perception.",
    icon: <Zap className="w-24 h-24 text-yellow-400" />,
    visualTitle: "ZERO LATENCY",
    visualSub: "Binary Streams",
  },
  {
    num: "10",
    title: "Autonomous Workflows",
    text: "Hack the DOM, scrape live web data, and dispatch WhatsApp messages autonomously. IRIS chains system tools together to execute complex macros.",
    icon: <Workflow className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "AUTOMATION",
    visualSub: "Tool Chaining",
  },
  {
    num: "11",
    title: "Cinematic Interface",
    text: "While voice is primary, visual feedback is absolute. Built with React, Tailwind, and GSAP, the UI breathes and reacts to live system telemetry perfectly.",
    icon: <Layers className="w-24 h-24 text-indigo-400" />,
    visualTitle: "UI LAYER",
    visualSub: "React + GSAP",
  },
  {
    num: "12",
    title: "Engineered for Scale",
    text: "Engineered by Harsh Pandey. Built from the ground up to push the absolute limits of frontend performance, AI infrastructure, and OS-level execution.",
    icon: <Code2 className="w-24 h-24 text-white" />,
    visualTitle: "ARCHITECT",
    visualSub: "Harsh Pandey",
  },
  {
    num: "13",
    title: "Secure OS Vault",
    text: "Protected by multi-face recognition and local encryption, IRIS strictly locks down your secure data before executing sensitive commands.",
    icon: <Shield className="w-24 h-24 text-red-500" />,
    visualTitle: "COMPANION",
    visualSub: "Digital Security",
  },
  {
    num: "14",
    title: "Total Control",
    text: "The era of typing is ending. The era of pure execution has begun. Prepare to upgrade your operating system to true intelligence.",
    icon: <Globe className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "THE ERA",
    visualSub: "Future of OS",
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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      Draggable.create(".draggable-code", {
        bounds: heroRef.current,
        inertia: true,
        edgeResistance: 0.65,
        type: "x,y",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-[#10b981] selection:text-black font-sans overflow-x-hidden"
    >
      <Header />

      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 perspective-1000 bg-black"
      >
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
              <span>PROJECT JARVIS • THE AUTONOMOUS AGENT</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl">
              NOT A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#10b981] to-[#044a33]">
                CHATBOT.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              IRIS is an{" "}
              <span className="text-white font-bold border-b border-[#10b981]">
                Autonomous Executor
              </span>{" "}
              that controls your desktop, mobile, and workflow entirely
              hands-free.
            </p>
          </motion.div>
        </div>

        {/* ── The Authentic Code Block Update ── */}
        <div className="draggable-code absolute z-20 top-[20%] right-[10%] cursor-grab active:cursor-grabbing hidden md:block">
          <div className="w-80 md:w-96 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:border-[#10b981]/50">
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center justify-between px-3 cursor-grab active:cursor-grabbing">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
                <Cpu className="w-3 h-3" /> iris-core.ts
              </div>
            </div>
            <div className="p-4 font-mono text-xs text-gray-400 leading-relaxed pointer-events-none select-none">
              <p>
                <span className="text-purple-400">import</span>{" "}
                {"{ GoogleGenAI }"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'@google/genai'</span>;
              </p>
              <br />
              <p>
                <span className="text-blue-400">const</span> session ={" "}
                <span className="text-purple-400">await</span> ai.live.connect(
                {"{"}
              </p>
              <p className="pl-4 text-gray-300">
                model:{" "}
                <span className="text-green-400">'gemini-3.1-flash'</span>,
              </p>
              <p className="pl-4 text-gray-300">
                tools: [systemToolDeclarations]
              </p>
              <p>{"});"}</p>
              <br />
              <p className="text-[#10b981] animate-pulse">{`> Acoustic Wake Word Online...`}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-0 py-12 relative overflow-hidden flex flex-col items-center z-20">
        <p className="text-[#10b981] text-sm tracking-widest uppercase mb-8 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          Built with a bleeding-edge modern stack
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
          READY TO <span className="text-[#10b981]">AUTOMATE?</span>
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
