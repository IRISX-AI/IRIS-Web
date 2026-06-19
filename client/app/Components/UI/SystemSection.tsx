import {
  Eye,
  Terminal,
  Smartphone,
  Zap,
  Database,
  ShieldAlert,
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

export default function SystemsSection() {
  return (
    <section
      id="systems"
      className="min-h-screen w-full px-6 md:px-20 py-32 flex flex-col justify-center relative overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Area */}
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
            mobile device.
          </p>
        </div>

        {/* The Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
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

// The Data Array driving the Grid
const items = [
  {
    title: "Live Screen Vision",
    description:
      "IRIS sees your screen in real-time. It can extract UI into code, find specific buttons, and type directly into your active windows.",
    header: <Skeleton glowPosition="center" />,
    icon: <Eye className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Deep OS Execution",
    description:
      "Create folders, run terminal sequences, and build codebase files entirely hands-free.",
    header: <Skeleton glowPosition="right" />,
    icon: <Terminal className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Mobile Device Link",
    description:
      "Read phone notifications, launch Android apps, and push files back and forth between PC and Mobile.",
    header: <Skeleton glowPosition="left" />,
    icon: <Smartphone className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Instant Automation",
    description:
      "Trigger complex workflows. Tell IRIS to build a site, and watch it generate Tailwind and GSAP live.",
    header: <Skeleton glowPosition="center" />,
    icon: <Zap className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Perfect Local Memory",
    description:
      "IRIS reads your codebase and Notion docs. It remembers everything you do so you never repeat yourself.",
    header: <Skeleton glowPosition="center" />,
    icon: <Database className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-2 border-white/10 hover:border-[#10b981]/50",
  },
  {
    title: "Biometric Vault",
    description:
      "Lock down your operating system instantly with multi-face recognition and military-grade encryption.",
    header: <Skeleton glowPosition="left" />,
    icon: <ShieldAlert className="h-5 w-5 text-[#10b981]" />,
    className: "md:col-span-1 border-white/10 hover:border-[#10b981]/50",
  },
];
