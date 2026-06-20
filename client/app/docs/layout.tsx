"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, ReactNode } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  BookOpen,
  Terminal,
  Cpu,
  ShieldCheck,
  Coins,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: any;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const sidebarNavItems: NavGroup[] = [
  {
    title: "Getting Started",
    items: [{ name: "Overview", href: "/docs", icon: BookOpen }],
  },
  {
    title: "Features & Operations",
    items: [
      { name: "Core Features", href: "/docs/features", icon: Terminal },
      { name: "System Architecture", href: "/docs/architecture", icon: Cpu },
    ],
  },
  {
    title: "Security & Licensing",
    items: [
      { name: "Code Protection", href: "/docs/security", icon: ShieldCheck },
      { name: "Sponsorship Tiers", href: "/docs/tiers", icon: Coins },
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#39FF14]/30 flex flex-col mt-12">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full pt-32 px-6 flex gap-10 relative">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#39FF14] text-black shadow-lg hover:scale-105 transition-transform"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <aside
          className={`
            fixed md:sticky top-32 h-[calc(100vh-10rem)] w-65 shrink-0 overflow-y-auto border-r border-white/5 pr-6 z-40 bg-black/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
            transition-all duration-300 ease-in-out
            ${mobileOpen ? "left-6" : "-left-full md:left-0"}
          `}
        >
          <div className="space-y-8">
            {sidebarNavItems.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ">
                  {group.title}
                </h4>
                <nav className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group
                          ${
                            isActive
                              ? "bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
                              : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                          }
                        `}
                      >
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-[#39FF14]" : "text-zinc-500 group-hover:text-white"}`}
                        />
                        <span>{item.name}</span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 ml-auto text-[#39FF14] shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 min-w-0 pb-20 relative">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
