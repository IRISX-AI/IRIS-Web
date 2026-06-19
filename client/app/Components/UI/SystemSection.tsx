import {
  Terminal,
  Smartphone,
  MessageSquare,
  Globe,
  Code,
  ScanLine,
} from "lucide-react";
import Image from "next/image";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/app/lib/utils"; // Ensure this path is correct

// ── 1. The Modern Bento Components ──
interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-black transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className,
    )}
    {...props}
  >
    {/* Background sits absolutely behind the content */}
    <div>{background}</div>

    {/* Content Area */}
    <div className="p-6 relative z-10 flex flex-col h-full justify-end">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-4">
        {/* Enforced Emerald icon color in dark mode */}
        <Icon className="h-10 w-10 origin-left transform-gpu text-neutral-700 dark:text-[#10b981] transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-bold text-neutral-700 dark:text-white tracking-tight">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400 font-mono text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
  </div>
);

// ── 2. The Absolute Cinematic Background ──
// This frames the screenshots and ensures text readability using a deep linear.
const ImageHeader = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
    </div>
  );
};

const items = [
  {
    name: "Deep System & File Execution",
    description:
      "Total file system access. IRIS creates folders, reads code files, executes terminal scripts, and manages your local drives without lifting a finger.",
    background: <ImageHeader src="/bento/iris.png" alt="Terminal Execution" />,
    Icon: Terminal,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-2 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
  {
    name: "WhatsApp Automation",
    description:
      "Bypass the browser. Schedule and dispatch WhatsApp messages autonomously.",
    background: (
      <ImageHeader src="/bento/whatsapp.png" alt="WhatsApp Automation" />
    ),
    Icon: MessageSquare,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-1 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
  {
    name: "Mobile Telekinesis",
    description:
      "Absolute Android integration. Read incoming notifications, push files, and launch apps directly from your PC.",
    background: <ImageHeader src="/bento/bento-mobile.png" alt="Mobile Link" />,
    Icon: Smartphone,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-1 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
  {
    name: "Autonomous Deep Research",
    description:
      "Deploys crawlers to scrape live web data, digest documentation, and synthesize full reports directly into your workspace.",
    background: (
      <ImageHeader src="/bento/deep-research.png" alt="Deep RAG Search" />
    ),
    Icon: Globe,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-2 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
  {
    name: "Live Web & Browser Control",
    description:
      "Hack the DOM. IRIS manipulates live websites, extracts visual UI into raw code, and generates Tailwind on the fly.",
    background: <ImageHeader src="/bento/web.png" alt="Live DOM Hacking" />,
    Icon: Code,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-2 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
  {
    name: "Screen Peeling & Optics",
    description:
      "IRIS sees your monitor. It targets UI coordinates, reads OCR text, and injects phantom keystrokes system-wide.",
    background: <ImageHeader src="/bento/peeler.png" alt="Screen Peeling" />,
    Icon: ScanLine,
    href: "#",
    cta: "View Module",
    className:
      "md:col-span-1 border-white/5 hover:border-[#10b981]/50 bg-black",
  },
];

export default function SystemsSection() {
  return (
    <section
      id="systems"
      className="min-h-screen w-full px-6 md:px-20 py-32 flex flex-col justify-center relative overflow-hidden bg-black dark"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

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
            <BentoCard
              key={i}
              name={item.name}
              description={item.description}
              background={item.background}
              Icon={item.Icon}
              href={item.href}
              cta={item.cta}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
