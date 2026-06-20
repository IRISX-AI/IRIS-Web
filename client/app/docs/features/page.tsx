"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FolderOpen,
  Brain,
  Terminal,
  MousePointer,
  Database,
  Globe,
  MessageSquare,
  Smartphone,
  Search,
  ShieldAlert,
  Mic,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ToolDetail {
  name: string;
  desc: string;
  commands: string[];
}

interface FeatureCategory {
  title: string;
  icon: any;
  desc: string;
  tools: ToolDetail[];
}

const featuresData: FeatureCategory[] = [
  {
    title: "System & File Management",
    icon: FolderOpen,
    desc: "Complete native file system and directory access with app process lifecycle controls.",
    tools: [
      {
        name: "Open App",
        desc: "Native application lifecycle initialization.",
        commands: ['"Open Spotify"', '"Launch VS Code"', '"Start Google Chrome"'],
      },
      {
        name: "Close App",
        desc: "Instant process termination hook.",
        commands: ['"Close Photoshop"', '"Kill the Chrome process"', '"Stop Node"'],
      },
      {
        name: "Create Folder",
        desc: "Directory structure generator.",
        commands: ['"Create a folder named assets in my current directory"', '"Make folder UI under components"'],
      },
      {
        name: "Read & Write Files",
        desc: "Disk file writing and code extraction.",
        commands: ['"Read the index.js file inside the root"', '"Write a server.js file with simple express setup"'],
      },
      {
        name: "Smart Drop Zones",
        desc: "Autonomous sorting algorithms for system files.",
        commands: ['"Sort my downloads folder"', '"Organize my chaotic project directories"'],
      },
    ],
  },
  {
    title: "Vector Search & Local Knowledge",
    icon: Brain,
    desc: "Semantic ingestion using local Vector databases and direct multimodal vision APIs.",
    tools: [
      {
        name: "Index Folder",
        desc: "Index folder contents into a local semantic database.",
        commands: ['"Index my src folder"', '"Embed my docs folder for search"'],
      },
      {
        name: "Smart File Search",
        desc: "Vector-based local file retrieval.",
        commands: ['"Find files related to user authentication"', '"Search for codebase configuration hooks"'],
      },
      {
        name: "Analyze Photo & Gallery",
        desc: "OCR and direct multimodal layout processing.",
        commands: ['"Scan my screenshot folder"', '"Analyze this error screenshot and find a solution"'],
      },
    ],
  },
  {
    title: "Developer & Terminal Tools",
    icon: Terminal,
    desc: "Globally accessible NPM package with tunneling and secure CLI execution.",
    tools: [
      {
        name: "Run Terminal",
        desc: "Native shell script/CLI executor.",
        commands: ['"Run npm run build"', '"Execute git status"', '"Run typescript checker"'],
      },
      {
        name: "Deploy Wormhole",
        desc: "Localhost tunnels exposing local servers to the public internet.",
        commands: ['"Expose port 3000 to the public internet"', '"Open local server to external connection"'],
      },
      {
        name: "Execute Sequence / Macro",
        desc: "JSON-based workflow sequence triggering.",
        commands: ['"Run the development startup sequence"', '"Execute my custom deploy macro"'],
      },
    ],
  },
  {
    title: "Desktop UI & Automation",
    icon: MousePointer,
    desc: "AI-driven coordinate cursor control, scroll tracking, and screen peeler OCR.",
    tools: [
      {
        name: "Teleport Windows",
        desc: "Desktop window movement, resizing, and alignment.",
        commands: ['"Move this active window to the left side"', '"Minimize active window"', '"Maximize terminal"'],
      },
      {
        name: "Click & Scroll on Screen",
        desc: "Cursor control with AI coordinate calculation.",
        commands: ['"Click the login button"', '"Scroll down fifty percent"', '"Click at coordinates 800 by 600"'],
      },
      {
        name: "Screen Peeler & Phantom Typer",
        desc: "Instant OCR extraction to code editor.",
        commands: ['"Extract code from active window"', '"Type my secure email address in the active input box"'],
      },
    ],
  },
  {
    title: "Memory & Information",
    icon: Database,
    desc: "Persistent identity tracking, note management, and remote inbox integrations.",
    tools: [
      {
        name: "Core Memory Ingestion",
        desc: "Saves details into permanent memory database.",
        commands: ['"Remember that my API host is port 5000"', '"Forget my old server address"'],
      },
      {
        name: "Retrieve Memory",
        desc: "Retrieves context parameters from past workflows.",
        commands: ['"What is my current project setup?"', '"What wake word configs did I set earlier?"'],
      },
      {
        name: "Read Emails",
        desc: "Gmail inbox scanning and key data extraction.",
        commands: ['"Read my latest unread emails"', '"Summarize my last developer newsletters"'],
      },
    ],
  },
  {
    title: "Web, Media & Financials",
    icon: Globe,
    desc: "Real-time web browsing, music control, market analytics, and image generators.",
    tools: [
      {
        name: "Tavily Search & Web Agent",
        desc: "Browses the web for active reference information.",
        commands: ['"Search for the latest NextJS 16 stable features"', '"Get today\'s weather in San Francisco"'],
      },
      {
        name: "Spotify & Media Controls",
        desc: "Instant audio playback control.",
        commands: ['"Play synthwave music on Spotify"', '"Pause playback"', '"Skip to next track"'],
      },
      {
        name: "Market Analytics",
        desc: "Ticker checks and dual stock comparison.",
        commands: ['"Get current stock price of Apple"', '"Compare NVIDIA and AMD performance charts"'],
      },
      {
        name: "Generate Image & Live Website",
        desc: "Image rendering and dynamic CSS/DOM injections.",
        commands: ['"Generate an image of a neon forest"', '"Inject a cyber-green background to the current site"'],
      },
    ],
  },
  {
    title: "Communications",
    icon: MessageSquare,
    desc: "WhatsApp scheduling, contact message queues, and mail composing.",
    tools: [
      {
        name: "WhatsApp Integration",
        desc: "Automate messaging and files sending.",
        commands: ['"Send WhatsApp message to Harsh saying: Build is online!"', '"Schedule a WhatsApp message for tomorrow morning"'],
      },
      {
        name: "Mail Drafting & Direct Send",
        desc: "Email composition and delivery dispatch.",
        commands: ['"Draft an email to client about project submission"', '"Send email containing build report"'],
      },
    ],
  },
  {
    title: "Mobile Telekinesis",
    icon: Smartphone,
    desc: "ADB remote control, coordinate touch, notifications reading, and toggle hardware.",
    tools: [
      {
        name: "Remote Android Control",
        desc: "Open applications and read hardware status remotely.",
        commands: ['"Open Slack on my Android device"', '"Get my phone\'s battery level"', '"Toggle phone flashlight"'],
      },
      {
        name: "Remote Action Touch & Swipe",
        desc: "Interactive Android touch executions.",
        commands: ['"Swipe down on my phone screen"', '"Remote click coordinate 400 and 800"'],
      },
      {
        name: "Push & Pull Files",
        desc: "Transfers data seamlessly between phone and workstation.",
        commands: ['"Push my screenshot to my Android phone"', '"Pull documents from mobile directory"'],
      },
    ],
  },
  {
    title: "Deep RAG & Autonomous Research",
    icon: Search,
    desc: "Autonomous Llama 3 agents crawling databases and codebase oracle RAG.",
    tools: [
      {
        name: "Deep Research",
        desc: "Multimodal agentic crawlers executing deep research cycles.",
        commands: ['"Research current breakthroughs in quantum computing and sync it to Notion"'],
      },
      {
        name: "Codebase Oracle & RAG",
        desc: "Ingests entire repositories for semantic queries.",
        commands: ['"Ingest my codebase into database"', '"Ask Oracle: how does the routing layout hook together?"'],
      },
    ],
  },
  {
    title: "Security & OS Vault",
    icon: ShieldAlert,
    desc: "OS-level biometric encryption and multi-face recognition locks.",
    tools: [
      {
        name: "Vault Lockdown",
        desc: "PIN validation system lock.",
        commands: ['"Lock the system vault"', '"Activate biometric lockdown mode"'],
      },
    ],
  },
];

export default function DocsFeaturesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-10">
      
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5" />
          Command references
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          CORE <span className="text-[#39FF14]">FEATURES.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-mono">
          IRIS features an extensible toolset. Check all system operations below along with the exact voice triggers that execute them.
        </p>
      </div>

      <div className="space-y-4">
        {featuresData.map((category, index) => {
          const Icon = category.icon;
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300"
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-all ${isExpanded ? "bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14]" : "bg-white/5 text-zinc-400 group-hover:text-white"}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-all ${isExpanded ? "text-[#39FF14]" : "text-white"}`}>
                      {category.title}
                    </h3>
                    <p className="text-zinc-500 text-xs mt-0.5 line-clamp-1">
                      {category.desc}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-zinc-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-white shrink-0 transition-transform" />
                )}
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-6">
                  {category.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="space-y-3 pl-2 border-l border-[#39FF14]/30">
                      <h4 className="text-white font-bold tracking-tight text-sm font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                        {tool.name}
                      </h4>
                      <p className="text-zinc-400 text-xs font-mono">
                        {tool.desc}
                      </p>

                      {/* Commands block */}
                      <div className="space-y-1.5 bg-black/60 p-3 rounded-xl border border-white/5">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-[#39FF14]" />
                          Voice Commands
                        </div>
                        <div className="space-y-1 pl-1">
                          {tool.commands.map((cmd, cIdx) => (
                            <code key={cIdx} className="block text-xs font-mono text-[#39FF14]/80 hover:text-[#39FF14] transition-colors leading-relaxed">
                              {cmd}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
