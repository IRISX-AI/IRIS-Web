import {
  Terminal,
  Smartphone,
  MessageSquare,
  Globe,
  Code,
  ScanLine,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "../core/bento-grid";
import Image from "next/image";

// ── 1. The Premium Image Container ──
// This perfectly frames your screenshots and adds a dark cinematic fade to the bottom
const ImageHeader = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative border border-white/5 group-hover/bento:border-[#10b981]/50 transition-colors duration-300">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top opacity-80 group-hover/bento:opacity-100 transition-all duration-500 group-hover/bento:scale-105"
        unoptimized
      />
      {/* Cinematic shadow gradient so it blends with the dark card */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

// ── 2. The Hardcore Features Array (Now with Images) ──
const items = [
  {
    title: "Deep System & File Execution",
    description:
      "Total file system access. IRIS creates folders, reads code files, executes terminal scripts, and manages your local drives without lifting a finger.",
    icon: <Terminal className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Bypass the browser. Schedule and dispatch WhatsApp messages and emails autonomously via background services.",

    icon: <MessageSquare className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Mobile Telekinesis",
    description:
      "Absolute Android integration. Read incoming notifications, push files, launch apps, and trigger remote swipes directly from your PC.",
    icon: <Smartphone className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Autonomous Deep Research",
    description:
      "Deploys autonomous crawlers to scrape live web data, digest massive documentation, and synthesize full reports directly into your workspace.",
    icon: <Globe className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Live Web & Browser Control",
    description:
      "Hack the DOM. IRIS manipulates live websites, extracts visual UI into raw code, and generates Tailwind components on the fly.",
    icon: <Code className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Screen Peeling & Optics",
    description:
      "IRIS sees your monitor. It extracts text via OCR, targets UI coordinates, and injects phantom keystrokes system-wide.",
    icon: <ScanLine className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
];

// ── 3. The Main Section Wrapper ──
export default function SystemsSection() {
  return (
    <section
      id="systems"
      className="min-h-screen w-full px-6 md:px-20 py-32 flex flex-col justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-4 px-4 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 border border-[#10b981]/20 bg-[#10b981]/5 shadow-[0_0_15px_rgba(16,185,129,0.05)] rounded-sm">
            <span className="w-1.5 h-1.5 bg-[#10b981] animate-pulse rounded-full"></span>
            <span className="text-[#10b981] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 select-none">
            Absolute Control. <br />
            <span className="text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              Zero Friction.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-sans tracking-tight">
            IRIS hooks directly into your operating system. It sees your screen,
            manages your files, automates your terminal, and commands your
            mobile device. No wrappers. Just raw execution.
          </p>
        </div>

        {/* The Bento Grid Rendering */}
        <BentoGrid className="max-w-6xl mx-auto w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
