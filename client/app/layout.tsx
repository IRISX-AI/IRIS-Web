import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./Components/SmoothScroll";

const manrope = localFont({
  src: "../public/fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IRIS AI — The Autonomous Neural OS Agent",
    template: "%s | IRIS AI",
  },
  description:
    "IRIS is a local-first AI Operating System layer that executes real-world actions across your system, apps, and devices. Turn intent into execution.",
    "AI Assistant",
    "IRIS AI Assistant",
    "IRIS AI",
    "iris ai",
    "neural os",
    "autonomous agent",
    "AI automation",
    "local AI assistant",
    "desktop AI agent",
    "IRIS Neural OS",
    "AI OS layer",
    "Harsh Pandey",
    "system automation AI",
    "AI agent",
    "OS automation",
    "local LLM",
    "WebRTC voice AI",
    "desktop controller",
  ],
  authors: [{ name: "Harsh Pandey", url: "https://irisaiw.vercel.app" }],
  creator: "Harsh Pandey",
  metadataBase: new URL("https://irisaiw.vercel.app"),

  openGraph: {
    title: "IRIS AI — Autonomous Neural OS Execution",
    description:
      "Beyond conversation: A local-first AI system that controls your OS, automates workflows, and manages files with neural precision.",
    url: "https://irisaiw.vercel.app",
    siteName: "IRIS AI",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "IRIS AI Neural Engine",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://irisaiw.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRIS AI — Autonomous Neural OS Execution",
    description:
      "Beyond conversation: A local-first AI system that controls your OS, automates workflows, and manages files with neural precision.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "IRIS AI",
              operatingSystem: "Windows, macOS",
              applicationCategory: "UtilitiesApplication",
              description:
                "IRIS is a local-first AI Operating System layer that executes real-world actions across your system, apps, and devices.",
              offers: {
                "@type": "Offer",
                price: "5.00",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#050505] text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
