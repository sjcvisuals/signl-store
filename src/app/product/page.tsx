import { Metadata } from "next";
import { FaderAnimation } from "@/components/FaderAnimation";
import { PreorderButton } from "@/components/PreorderButton";
import { 
  Sliders, 
  Wifi, 
  Battery, 
  Radio, 
  Monitor, 
  Layers,
  Usb,
  Box,
  Gauge
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Specifications | SIGNL.ONE",
  description: "SIGNL.ONE technical specifications: 3× 100mm motorized faders, bidirectional OSC, Wi-Fi, 8+ hour battery, 520g compact chassis.",
};

export default function ProductPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                SIGNL.ONE
              </h1>
              <p className="mt-4 text-xl text-muted">
                Compact handheld wireless OSC controller with motorized faders
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-card border border-border">
                  <p className="text-2xl font-bold">520g</p>
                  <p className="text-sm text-muted">Weight</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-card border border-border">
                  <p className="text-2xl font-bold">8h+</p>
                  <p className="text-sm text-muted">Battery</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-card border border-border">
                  <p className="text-2xl font-bold">3×</p>
                  <p className="text-sm text-muted">Motorized Faders</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <FaderAnimation />
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold">SIGNL.ONE</p>
                  <p className="text-sm text-muted">Bidirectional OSC Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature: Bidirectional */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Faders that chase the show</h2>
            <p className="mt-4 text-lg text-muted">
              Unlike traditional controllers that only send data, SIGNL.ONE receives OSC messages 
              and physically moves the faders to match your software. When a parameter changes 
              in Unreal, on a lighting desk, or in TouchDesigner—the faders follow.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Faders */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Motorized Faders</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• 3× 100mm Alps-class faders</li>
                <li>• Bidirectional motor drive</li>
                <li>• Send AND receive OSC</li>
                <li>• High-resolution position sensing</li>
              </ul>
            </div>

            {/* Connectivity */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Wireless</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• 2.4GHz Wi-Fi</li>
                <li>• OSC over UDP</li>
                <li>• Direct to workstation</li>
                <li>• No dongles or bridges required</li>
              </ul>
            </div>

            {/* Power */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Battery</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• 8+ hours runtime</li>
                <li>• USB-C charging</li>
                <li>• Charge while configuring</li>
                <li>• LED status indicator</li>
              </ul>
            </div>

            {/* Controls */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Controls</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• 2× mechanical keys</li>
                <li>• Rotary encoder with push</li>
                <li>• All controls assignable via OSC</li>
                <li>• Tactile feedback</li>
              </ul>
            </div>

            {/* Display */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Display</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• OLED screen</li>
                <li>• Current page indicator</li>
                <li>• Connection status</li>
                <li>• Parameter values</li>
              </ul>
            </div>

            {/* Pages */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Page System</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Multiple configurable pages</li>
                <li>• Independent OSC maps per page</li>
                <li>• Quick page switching</li>
                <li>• Context switching without hardware swaps</li>
              </ul>
            </div>

            {/* Physical */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Physical</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• 520g total weight</li>
                <li>• Compact handheld chassis</li>
                <li>• Designed for one-hand operation</li>
                <li>• Walk-around friendly</li>
              </ul>
            </div>

            {/* Interface */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Usb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Interface</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• USB-C port</li>
                <li>• Charging via USB-C</li>
                <li>• Wired config via SIGNL Dock</li>
                <li>• Firmware updates</li>
              </ul>
            </div>

            {/* Protocol */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Protocol</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Standard OSC (Open Sound Control)</li>
                <li>• UDP transport</li>
                <li>• Configurable addresses</li>
                <li>• Works with any OSC-capable software</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Compatibility</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted text-center mb-8">
              SIGNL.ONE uses standard OSC over UDP. If your software speaks OSC, it works with SIGNL.ONE.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-3">Virtual Production</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Unreal Engine</li>
                  <li>• Pixera</li>
                  <li>• disguise</li>
                  <li>• ASSIMILATE Live FX</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-3">Creative Tools</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• TouchDesigner</li>
                  <li>• Resolume</li>
                  <li>• Any OSC-capable software</li>
                  <li>• Custom applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNL Dock */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">SIGNL Dock Companion App</h2>
            <p className="text-lg text-muted text-center mb-8">
              Configure your SIGNL.ONE without writing code. The Dock app handles Wi-Fi setup, 
              OSC mapping, presets, and firmware updates.
            </p>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Platform Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Windows 10+ (64-bit)</span>
                  <span className="text-accent text-sm font-medium">Available now</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>macOS 12+</span>
                  <span className="text-muted text-sm">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to preorder?</h2>
            <p className="mt-4 text-lg text-muted">
              £499 excl. VAT. Your preorder funds the first production run.
            </p>
            <div className="mt-8">
              <PreorderButton size="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
