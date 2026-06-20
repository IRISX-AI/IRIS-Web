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
import Particles from "../utils/Particles";

const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The OS Layer",
    text: "IRIS doesn't just chat; it controls. It natively manages your file system, opens applications, and sorts your messy directories into categorized drop zones automatically.",
    icon: <Database className="w-24 h-24 text-gray-400" />,
    visualTitle: "SYSTEM CONTROL",
    visualSub: "Native OS Access",
  },
  {
    num: "02",
    title: "Voice First",
    text: "Typing is friction. By stripping out HTTP overhead and streaming audio binaries directly over WebSockets, IRIS achieves sub-second latency for real-time conversation.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "ZERO LATENCY",
    visualSub: "WebSocket Audio",
  },
  {
    num: "03",
    title: "Biometric Vault",
    text: "Security isn't just a password. IRIS uses Local Face Recognition to verify your physical presence before executing sensitive OS-level commands or unlocking the system vault.",
    icon: <Fingerprint className="w-24 h-24 text-emerald-400" />,
    visualTitle: "VISION SECURITY",
    visualSub: "Multi-Face Encryption",
  },
  {
    num: "04",
    title: "The Mobile Bridge",
    text: "Your PC and phone are now one. IRIS connects via ADB to read notifications, toggle hardware like Wi-Fi, and even swipe or tap specific coordinates on your mobile screen.",
    icon: <Smartphone className="w-24 h-24 text-purple-400" />,
    visualTitle: "ECOSYSTEM LINK",
    visualSub: "Android Telemetry",
  },
  {
    num: "05",
    title: "Neural Communication",
    text: "Dictate and dispatch. IRIS can instantly draft emails, send WhatsApp messages, or even schedule delayed cron-based texts without you ever touching the keyboard.",
    icon: <MessageCircle className="w-24 h-24 text-green-400" />,
    visualTitle: "AUTONOMOUS COMMS",
    visualSub: "WhatsApp & Email",
  },
  {
    num: "06",
    title: "Deep Research Agent",
    text: "Need a report? IRIS deploys an autonomous Llama 3 web crawler to scour the internet, synthesize data, and seamlessly sync the final research report directly to your Notion.",
    icon: <Search className="w-24 h-24 text-orange-400" />,
    visualTitle: "RAG ENGINE",
    visualSub: "Llama 3 Web Crawl",
  },
  {
    num: "07",
    title: "UI Teleportation",
    text: 'Command your workspace. Tell IRIS to "move code to the left and browser to the right." It physically resizes and stacks your application windows for ultimate flow state.',
    icon: <LayoutTemplate className="w-24 h-24 text-cyan-400" />,
    visualTitle: "WORKSPACE MGR",
    visualSub: "Window Teleportation",
  },
  {
    num: "08",
    title: "The Live Forge",
    text: "Describe a website, and watch it build. IRIS spawns a live window and generates fully animated React and GSAP components in real-time right before your eyes.",
    icon: <Code2 className="w-24 h-24 text-pink-400" />,
    visualTitle: "AGENTIC BUILDER",
    visualSub: "Tailvy Integration",
  },
  {
    num: "09",
    title: "The Local Brain",
    text: "Complete privacy. IRIS indexes your massive project folders into a local Vector Database, allowing you to semantically search and interact with your data completely offline.",
    icon: <HardDrive className="w-24 h-24 text-yellow-400" />,
    visualTitle: "VECTOR MEMORY",
    visualSub: "Semantic Indexing",
  },
  {
    num: "10",
    title: "Visual Hacking",
    text: 'A viral party trick with real power. Command IRIS to "Hack Apple," and it injects custom JavaScript to visually mutate live websites with your own cinematic text and themes.',
    icon: <Braces className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "DOM MUTATION",
    visualSub: "Live CSS/JS Injection",
  },
  {
    num: "11",
    title: "Network Wormholes",
    text: "Need to share localhost? IRIS can autonomously open a secure tunnel, exposing your local dev server to the public internet so clients can see your work instantly.",
    icon: <Globe className="w-24 h-24 text-indigo-400" />,
    visualTitle: "PORT EXPOSURE",
    visualSub: "Localhost Tunnels",
  },
  {
    num: "12",
    title: "The Cognitive Core",
    text: "Powered by a dual-brain architecture. Groq LPUs handle split-second tool chaining and logic, while Gemini 2.5 Flash manages massive context and complex reasoning.",
    icon: <Brain className="w-24 h-24 text-white" />,
    visualTitle: "DUAL INTELLIGENCE",
    visualSub: "Gemini + Groq",
  },
  {
    num: "13",
    title: "Absolute Automation",
    text: "IRIS thinks in steps. It can execute complex JSON arrays of keyboard shortcuts, mouse movements, and UI clicks to automate your most repetitive daily tasks.",
    icon: <MousePointer2 className="w-24 h-24 text-red-500" />,
    visualTitle: "MACRO ENGINE",
    visualSub: "Ghost Typing & Clicks",
  },
  {
    num: "14",
    title: "The Architect",
    text: "Built from the ground up by Harsh Pandey to push the boundaries of what frontend performance, AI infrastructure, and system-level desktop automation can achieve together.",
    icon: <Shield className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "PROJECT JARVIS",
    visualSub: "The Next OS Standard",
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
          <Particles
            particleColors={["#34d399"]}
            particleCount={1000}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
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
              BEYOND <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-[#10b981]/20 blur-lg opacity-50 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
                  PASSIVE CHAT
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Web wrappers are dead. <br className="hidden md:block" />
              <span className="text-white font-bold border-b border-[#10b981]">
                IRIS is a native execution engine
              </span>{" "}
              that gives you raw access to your file system, local NPU, and
              mobile hardware.
            </motion.p>
          </motion.div>
        </div>

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
