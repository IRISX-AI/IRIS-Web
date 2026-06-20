"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
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
import IrisHero from "../Components/UI/IrisHero";
import React, { useRef, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

const MacbookScroll = dynamic(
  () => import("../constants/MacbookScroll").then((m) => m.MacbookScroll),
  { ssr: false },
);
const ContainerScroll = dynamic(
  () => import("../constants/ContainerScroll").then((m) => m.ContainerScroll),
  { ssr: false },
);
const IRISCompare = dynamic(
  () => import("../Components/UI/IRISCompare").then((m) => m.IRISCompare),
  { ssr: false },
);
const SystemsSection = dynamic(() => import("../Components/UI/SystemSection"), {
  ssr: false,
});

const NeonLoadingFallback = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden select-none">
      <style>{`
        @keyframes scanline {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      {/* Cool animated matrix grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,197,41,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,197,41,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Scanline */}
      <div className="absolute inset-x-0 h-[2px] bg-[#0ac529]/20 shadow-[0_0_10px_#0ac529] animate-scanline pointer-events-none" />

      {/* Loader */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-t-[#0ac529] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin shadow-[0_0_10px_rgba(10,197,41,0.5)]" />
          <div className="absolute w-8 h-8 border border-b-[#0ac529] border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin-reverse opacity-60" />
        </div>

        <div className="flex flex-col items-center gap-1 font-mono text-[9px] tracking-[0.25em] text-[#0ac529] uppercase">
          <span className="animate-pulse">LOADING COGNITIVE_LAYER...</span>
          <span className="text-gray-700 text-[7px] tracking-[0.15em]">
            Buffer state: suspended
          </span>
        </div>
      </div>
    </div>
  );
};

interface SuspenseInViewProps {
  children: React.ReactNode;
  minHeight?: string;
}

const SuspenseInView: React.FC<SuspenseInViewProps> = ({
  children,
  minHeight = "min-h-screen",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref} className={`w-full relative ${minHeight}`}>
      {inView ? (
        <Suspense fallback={<NeonLoadingFallback />}>
          <div className="animate-fade-in w-full h-full">{children}</div>
        </Suspense>
      ) : (
        <NeonLoadingFallback />
      )}
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHeroActive, setIsHeroActive] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isHeroVisible) {
      setIsHeroActive(true);
    } else {
      timeout = setTimeout(() => setIsHeroActive(false), 700);
    }
    return () => clearTimeout(timeout);
  }, [isHeroVisible]);

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
    { node: <FaYahoo className="text-4xl text-white" />, title: "Yahoo" },
  ];

  useGSAP(
    () => {
      gsap.to(heroTextRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1,
        },
      });

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top top",
        onEnter: () => setIsHeroVisible(false),
        onLeaveBack: () => setIsHeroVisible(true),
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="bg-black text-white relative">
      <Header />
      <IrisHero
        heroTextRef={heroTextRef}
        isHeroVisible={isHeroVisible}
        isHeroActive={isHeroActive}
      />

      <div
        ref={contentRef}
        className="relative z-10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      >
        <SuspenseInView minHeight="md:flex hidden min-h-screen">
          <section className="md:flex hidden min-h-screen bg-black justify-center items-start">
            <MacbookScroll
              title={
                <div className="text-center z-20 px-4 flex flex-col items-center">
                  <h1
                    className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent mb-4 pb-2 select-none"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                    }}
                  >
                    Total System Control.
                  </h1>
                  <h2
                    className="text-2xl md:text-4xl lg:text-5xl text-gray-100 font-normal tracking-tight max-w-5xl"
                    style={{ textShadow: "0 0 10px rgba(0,0,0,0.8)" }}
                  >
                    Run terminals, automate UI, link your phone, and execute
                    deep OS tasks hands-free.
                  </h2>
                </div>
              }
              badge={
                <a href="https://www.instagram.com/irisx.ai/">
                  <Image
                    src="/img/Logo.png"
                    alt="Badge"
                    width={100}
                    height={100}
                  />
                </a>
              }
              src={`/iris.png`}
              showGradient={false}
            />
          </section>
        </SuspenseInView>

        <SuspenseInView minHeight="hidden md:block min-h-screen">
          <section className="hidden md:block min-h-screen bg-black relative z-20">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-gray-200">
                    Total command over your <br />
                    <span
                      className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent inline-block pb-2"
                      style={{
                        filter:
                          "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                      }}
                    >
                      Mobile Device.
                    </span>
                  </h1>
                  <p className="mt-4 mb-8 text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto tracking-tight">
                    Read notifications, push files, and launch Android
                    applications directly from your desktop.
                  </p>
                </>
              }
            >
              <img
                src={`/img/mobile-link.png`}
                alt="IRIS Mobile Telekinesis"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-top-left border border-[#10b981]/20 shadow-[0_0_40px_rgba(16,185,129,0.1)]"
                draggable={false}
              />
            </ContainerScroll>
          </section>
        </SuspenseInView>

        <SuspenseInView minHeight="min-h-[180px] py-12">
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
        </SuspenseInView>

        <SuspenseInView minHeight="min-h-screen">
          <section className="min-h-screen bg-black flex flex-col items-center pt-24 pb-20 relative overflow-hidden font-sans px-4">
            <div className="text-center z-20 flex flex-col items-center mb-12">
              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent mb-4 select-none"
                style={{
                  filter: "drop-shadow(0px 0px 15px rgba(57, 255, 20, 0.8))",
                }}
              >
                Rewritten for Speed.
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-normal tracking-tight max-w-3xl">
                v1.3 was a buggy prototype. The new engine is instantaneous,
                stable, and completely native.
              </h2>
            </div>

            <div className="w-full max-w-6xl relative z-10">
              <IRISCompare />
            </div>
          </section>
        </SuspenseInView>

        <SuspenseInView minHeight="min-h-screen">
          <section
            id="systems"
            className="min-h-screen w-full px-6 md:px-20 py-32 border-b border-white/5 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="w-full">
              <SystemsSection />
            </div>
          </section>
        </SuspenseInView>

        <SuspenseInView minHeight="min-h-screen">
          <section className="min-h-screen bg-black flex flex-col items-center pt-32 relative overflow-hidden font-sans">
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-150 h-150 bg-[#10b981]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-200 h-100 bg-[#16a34a]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="text-center z-20 px-4 flex flex-col items-center">
              <h1
                className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent mb-4 pb-2 select-none shadow"
                style={{
                  filter:
                    "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                }}
              >
                Built to Execute.
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-100 font-normal tracking-tight">
                Lightning-fast voice response and massive context memory.
              </h2>
            </div>
            <div className="absolute left-6 sm:left-44 top-52 sm:top-90 w-24 sm:w-64 h-auto pointer-events-none">
              <Image
                src="/img/iris-future.png"
                alt="Try IRIS AI"
                width={300}
                height={300}
                priority
                className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                style={{
                  filter:
                    "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
                }}
              />
            </div>

            <div className="relative w-full max-w-6xl mt-20 flex justify-center z-10 group">
              <Image
                src="/img/graphic.webp"
                alt="3D tech elements"
                width={1400}
                height={900}
                priority
                className="w-[85%] h-[85%] object-contain mask-image-b relative z-20 transition-transform duration-1000 ease-out"
                style={{
                  filter:
                    "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
                }}
              />
            </div>

            <div className="w-full max-w-4xl mx-auto flex justify-center relative z-20 mt-12 mb-20">
              <div className="flex gap-4 sm:gap-6 relative">
                <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                  <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                    IRIS
                  </span>
                  <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                    Wake Word
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                  <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                    &lt;1s
                  </span>
                  <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                    Voice Latency
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                  <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                    1M+
                  </span>
                  <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                    Context Window
                  </span>
                </div>

                <div className="absolute -right-12 sm:-right-96 -top-36 sm:-top-24 w-24 sm:w-64 h-auto pointer-events-none">
                  <Image
                    src="/img/tryiris.png"
                    alt="Try IRIS AI"
                    width={300}
                    height={300}
                    priority
                    className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </SuspenseInView>

        <Footer />
      </div>
    </div>
  );
};

export default IRIS;
