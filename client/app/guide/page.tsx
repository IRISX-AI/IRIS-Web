"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Key,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const apiKeysData = [
  {
    id: "gemini",
    name: "Google Gemini API",
    status: "Required",
    description:
      "Primary LLM provider required for core execution and natural language processing.",
    steps: [
      "Navigate to Google AI Studio.",
      "Sign in with your Google Account.",
      "Click 'Get API Key' in the left sidebar.",
      "Create a key in a new or existing project.",
    ],
    link: "https://aistudio.google.com/app/apikey",
    envVar: "GEMINI_API_KEY",
    buttonText: "Get Gemini Key",
  },
  {
    id: "groq",
    name: "Groq API",
    status: "Required",
    description:
      "Required for high-speed LPU inference and split-second tool-calling logic.",
    steps: [
      "Go to the Groq Cloud Console.",
      "Log in or create an account.",
      "Navigate to the 'API Keys' section.",
      "Click 'Create API Key' and copy it immediately.",
    ],
    link: "https://console.groq.com/keys",
    envVar: "GROQ_API_KEY",
    buttonText: "Get Groq Key",
  },
  {
    id: "tavily",
    name: "Tavily Search API",
    status: "Optional",
    description:
      "Required for autonomous web crawling and real-time search data extraction.",
    steps: [
      "Sign up at the Tavily Developer Portal.",
      "Navigate to your dashboard.",
      "Generate a new API key (Free tier available).",
    ],
    link: "https://app.tavily.com/home",
    envVar: "TAVILY_API_KEY",
    buttonText: "Get Tavily Key",
  },
  {
    id: "huggingface",
    name: "Hugging Face Token",
    status: "Optional",
    description:
      "Required for accessing open-source visual models and local image generation.",
    steps: [
      "Create a Hugging Face account.",
      "Go to Settings > Access Tokens.",
      "Create a new token with 'Read' permissions.",
    ],
    link: "https://huggingface.co/settings/tokens",
    envVar: "HUGGINGFACE_API_KEY",
    buttonText: "Get Hugging Face Token",
  },
];

export default function ApiKeysGuide() {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVar(text);
    setTimeout(() => setCopiedVar(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] mt-16 text-zinc-100 font-sans selection:bg-[#39FF14]/30 pt-24">
      <Header />

      <main className="grow max-w-6xl mx-auto w-full px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-xs font-mono tracking-widest mb-6 mt-8">
            <ShieldCheck className="w-3 h-3" />
            BYOK DOCUMENTATION
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            API <span className="text-[#39FF14]">Configuration.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            IRIS operates on a strictly local Bring Your Own Key (BYOK)
            architecture. Configure the required API keys below to enable
            external inference and data extraction. All keys are encrypted and
            stored solely on your local disk.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {apiKeysData.map((key) => (
            <motion.div
              key={key.id}
              variants={itemVariants}
              className="group relative bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#39FF14]/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Key
                    size={20}
                    className="text-zinc-500 group-hover:text-[#39FF14] transition-colors"
                  />
                  {key.name}
                </h2>
                <span
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 ${
                    key.status === "Required"
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                  }`}
                >
                  {key.status === "Required" ? (
                    <AlertTriangle size={12} />
                  ) : (
                    <CheckCircle2 size={12} />
                  )}
                  {key.status}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">
                {key.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-black border border-white/10 rounded-lg p-3 hover:border-zinc-700 transition-colors">
                  <code className="text-xs font-mono text-zinc-300">
                    <span className="text-zinc-500 mr-2">ENV</span> {key.envVar}
                  </code>
                  <button
                    onClick={() => handleCopy(key.envVar)}
                    className="text-zinc-500 hover:text-[#39FF14] transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedVar === key.envVar ? (
                      <Check size={16} className="text-[#39FF14]" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Instructions List */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-zinc-500 mb-3 uppercase tracking-widest font-mono">
                  Acquisition Steps
                </h3>
                <ul className="space-y-3 min-h-[120px]">
                  {key.steps.map((step, index) => (
                    <li
                      key={index}
                      className="text-sm text-zinc-300 flex items-start gap-3"
                    >
                      <span className="text-[#39FF14] font-mono text-xs mt-0.5">
                        {index + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={key.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-[#39FF14] text-zinc-300 hover:text-black border border-white/10 hover:border-[#39FF14] py-3 px-4 rounded-xl transition-all duration-200 text-sm font-bold"
              >
                {key.buttonText} <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
