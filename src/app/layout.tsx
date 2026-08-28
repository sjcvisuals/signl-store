import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIGNL.ONE | Wireless Motorized OSC Controller",
  description: "A compact motorized controller you can walk the room with. Three 100mm motorized faders, bidirectional OSC over Wi-Fi. Preorder now.",
  keywords: ["OSC controller", "motorized fader", "wireless controller", "virtual production", "live events", "Unreal Engine", "TouchDesigner"],
  openGraph: {
    title: "SIGNL.ONE | Wireless Motorized OSC Controller",
    description: "A compact motorized controller you can walk the room with. Three 100mm motorized faders, bidirectional OSC over Wi-Fi.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
