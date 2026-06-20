"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrainCircuit,
  Target,
  ShieldCheck,
  Rocket,
  Sparkles,
  Download,
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
import RippleGrid from "../constants/RippleGrid";
import Image from "next/image";
import { Cover } from "../Components/core/Cover";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The Origin",
    text: "IRIS was born from a simple frustration: AI assistants talk too much and do too little. We were tired of passive chatbots that just generated text. We wanted an active participant—an intelligence that could actually use a computer.",
    icon: <Target className="w-24 h-24 text-red-500" />,
    visualTitle: "THE PROBLEM",
    visualSub: "Passive AI",
  },
  {
    num: "02",
    title: "The Architect",
    text: "Engineered entirely by Harsh Pandey, IRIS AI was built from the ground up to push the boundaries of what local software can do. Every line of code is optimized for raw speed and deep operating system integration.",
    icon: (
      <Image
        src="/author/master.jpeg"
        alt="IRIS LOGO"
        width={10}
        height={10}
        unoptimized
        className="w-36 h-36 object-contain rounded-full"
      />
    ),
    visualTitle: "THE CREATOR",
    visualSub: "Harsh Pandey",
  },
  {
    num: "03",
    title: "The Core Brain",
    text: "To make IRIS truly intelligent, it had to understand context like a human. Powered by the Gemini ecosystem, IRIS is capable of deep reasoning, visual screen analysis, and maintaining a massive memory of your workflow.",
    icon: <BrainCircuit className="w-24 h-24 text-purple-500" />,
    visualTitle: "INTELLIGENCE",
    visualSub: "Gemini Core",
  },
  {
    num: "04",
    title: "The Mission",
    text: "Our goal is total friction elimination. Whether it is organizing local files, writing code directly to your disk, or controlling your mobile device remotely, IRIS exists to execute your will instantaneously.",
    icon: <Rocket className="w-24 h-24 text-yellow-400" />,
    visualTitle: "THE MISSION",
    visualSub: "Zero Friction",
  },
  {
    num: "05",
    title: "Uncompromising Privacy",
    text: "True power requires trust. IRIS is designed with a strict local-first philosophy, utilizing offline wake words and biometric facial recognition to ensure your desktop vault remains entirely yours.",
    icon: <ShieldCheck className="w-24 h-24 text-cyan-400" />,
    visualTitle: "SECURITY",
    visualSub: "Local First",
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
          <RippleGrid
            enableRainbow={false}
            gridColor="#0f8218"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={5}
            mouseInteraction={true}
            mouseInteractionRadius={2}
            opacity={0.8}
            fadeDistance={1.5}
            vignetteStrength={5}
            glowIntensity={0.9}
            gridRotation={0}
          />
        </div>

        <motion.div className="absolute z-0 w-200 h-200 bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-3 h-3" />
              <span>THE STORY BEHIND THE SOFTWARE</span>
            </div>

            <h1
              className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tight mb-2 leading-none text-white"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}
            >
              MEET <br />
              <span
                style={{
                  filter:
                    "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                }}
                className="text-transparent bg-clip-text bg-linear-to-b from-[#051a00] to-[#091a09]"
              >
                IRIS AI.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A true system-level intelligence. IRIS bypasses the browser to
              read your screen, manage your local files, and execute complex
              desktop workflows entirely hands-free.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 md:px-0 py-12 relative overflow-hidden flex flex-col items-center z-20">
        <p className="text-[#0ac529] text-sm tracking-widest uppercase mb-8 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
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

      <section className="py-40 bg-black text-center border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-20 flex flex-col items-center gap-10 px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-5xl mx-auto text-center tracking-tight text-white drop-shadow-2xl">
            Take absolute command of your <br className="hidden md:block" />
            <Cover>Operating System.</Cover>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-mono tracking-tight">
            Install the IRIS Engine and transform your PC into an autonomous
            execution environment.
          </p>

          <Link href="/download">
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#10b981] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              Download IRIS For Desktop
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IRISAbout;
