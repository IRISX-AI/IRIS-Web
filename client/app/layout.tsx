import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Closed | IRIS AI",
  description: "This version of IRIS has been shut down and relocated.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased bg-[#000000] text-white">
        {children}
      </body>
    </html>
  );
}
