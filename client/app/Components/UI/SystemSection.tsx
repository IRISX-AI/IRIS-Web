import {
  Terminal,
  Smartphone,
  MessageSquare,
  Globe,
  Code,
  ScanLine,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "../core/bento-grid";

const Skeleton = ({
  glowPosition,
}: {
  glowPosition: "left" | "right" | "center";
}) => {
  const positionClass =
    glowPosition === "left"
      ? "justify-start"
      : glowPosition === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div
      className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black/40 border border-white/10 overflow-hidden relative items-center ${positionClass}`}
    >
      <div className="absolute w-32 h-32 bg-[#10b981]/20 rounded-full blur-3xl animate-pulse" />
      <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const items = [
  {
    title: "Deep System & File Execution",
    description:
      "Total file system access. IRIS creates folders, reads code files, executes terminal scripts, and manages your local drives without lifting a finger.",
    header: <Skeleton glowPosition="center" />,
    icon: <Terminal className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Bypass the browser. Schedule and dispatch WhatsApp messages and emails autonomously via background services.",
    header: <Skeleton glowPosition="right" />,
    icon: <MessageSquare className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Mobile Telekinesis",
    description:
      "Absolute Android integration. Read incoming notifications, push files, launch apps, and trigger remote swipes directly from your PC.",
    header: <Skeleton glowPosition="left" />,
    icon: <Smartphone className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Autonomous Deep Research",
    description:
      "Deploys autonomous crawlers to scrape live web data, digest massive documentation, and synthesize full reports directly into your workspace.",
    header: <Skeleton glowPosition="center" />,
    icon: <Globe className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Live Web & Browser Control",
    description:
      "Hack the DOM. IRIS manipulates live websites, extracts visual UI into raw code, and generates Tailwind components on the fly.",
    header: <Skeleton glowPosition="center" />,
    icon: <Code className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Screen Peeling & Optics",
    description:
      "IRIS sees your monitor. It extracts text via OCR, targets UI coordinates, and injects phantom keystrokes system-wide.",
    header: <Skeleton glowPosition="left" />,
    icon: <ScanLine className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
];

export default function SystemsSection() {
  return (
    <section
      id="systems"
      className="min-h-screen w-full px-6 md:px-20 py-32 flex flex-col justify-center relative overflow-hidden bg-black"
    >
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
