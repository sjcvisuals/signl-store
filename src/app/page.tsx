import Link from "next/link";
import { FaderAnimation } from "@/components/FaderAnimation";
import { PreorderButton } from "@/components/PreorderButton";
import { SpecCard } from "@/components/SpecCard";
import { 
  Wifi, 
  Battery, 
  Sliders, 
  Radio, 
  Monitor,
  Zap 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                A compact motorized controller you can{" "}
                <span className="gradient-text">walk the room with.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl">
                Three 100mm motorized faders, bidirectional OSC over Wi-Fi, and a page system—so 
                the surface chases the look on Unreal, a live cue stack, or an install.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <PreorderButton size="large" />
              </div>
              <p className="mt-6 text-sm text-muted">
                Preorders fund the first production run. We email you from sales@signl.store when units ship.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-glow" />
                <div className="relative bg-card rounded-2xl p-8 border border-border">
                  <FaderAnimation />
                  <div className="mt-8 text-center">
                    <p className="text-2xl font-bold">SIGNL.ONE</p>
                    <p className="text-sm text-muted mt-1">520g · Wireless OSC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Faders that chase the show
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              SIGNL.ONE sends OSC and receives it. The motors move to match what's happening 
              in your software—not the other way around.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecCard
              icon={<Sliders className="w-6 h-6" />}
              title="3× 100mm Motorized Faders"
              description="Alps-class 100mm faders with bidirectional motor drive. They move when your software moves."
              detail="Send AND receive OSC"
            />
            <SpecCard
              icon={<Wifi className="w-6 h-6" />}
              title="2.4GHz Wi-Fi OSC/UDP"
              description="Direct wireless OSC to your workstation. No dongles, no MIDI translation, no cables."
              detail="Standard OSC protocol"
            />
            <SpecCard
              icon={<Battery className="w-6 h-6" />}
              title="8+ Hour Battery"
              description="All-day runtime on a single charge. USB-C charging keeps you topped up."
              detail="USB-C charging & setup"
            />
            <SpecCard
              icon={<Radio className="w-6 h-6" />}
              title="2 Mechanical Keys"
              description="Assignable keys for cues, triggers, or page switching. Tactile feedback you can feel."
            />
            <SpecCard
              icon={<Monitor className="w-6 h-6" />}
              title="OLED + Rotary Encoder"
              description="See your current page and settings at a glance. Dial through values with precision."
            />
            <SpecCard
              icon={<Zap className="w-6 h-6" />}
              title="Configurable Pages"
              description="Multiple pages with independent OSC maps. Switch contexts without switching hardware."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Three jobs, one controller
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Whether you're on an LED volume, in a live venue, or installing in a gallery—SIGNL.ONE 
              gives you tactile control without being tethered to a desk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/30 transition-all">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Virtual Production</h3>
                <p className="text-muted">
                  Adjust Unreal Engine lighting, camera rigs, or environment parameters while standing 
                  on the volume. No hunting for sliders in the UI.
                </p>
                <p className="mt-4 text-sm text-muted/70">
                  Works with Unreal Engine, Pixera, disguise
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/30 transition-all">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎤</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Events</h3>
                <p className="text-muted">
                  Trigger looks, bump cues, or ride FX levels from the floor. Walk the room while 
                  the faders follow what's actually playing.
                </p>
                <p className="mt-4 text-sm text-muted/70">
                  OSC into your lighting or media software
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/30 transition-all">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Installations</h3>
                <p className="text-muted">
                  Control media servers, projection mapping, or interactive work without a rack 
                  console in the gallery.
                </p>
                <p className="mt-4 text-sm text-muted/70">
                  TouchDesigner, media servers, custom OSC
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/use-cases"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium"
            >
              Explore use cases →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Early Testing */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8">Early Testing</h2>
            <blockquote className="text-lg text-muted italic">
              "Wireless OSC direct into ASSIMILATE Live FX on stage—the faders chase the grade 
              while I'm standing right where I need to be."
            </blockquote>
            <p className="mt-4 text-sm text-muted/70">
              — Internal testing, VP stage
            </p>
          </div>
        </div>
      </section>

      {/* SIGNL Dock */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                SIGNL Dock companion app
              </h2>
              <p className="mt-4 text-lg text-muted">
                Configure your SIGNL.ONE without writing code. Set up Wi-Fi, map OSC addresses, 
                save presets, and update firmware.
              </p>
              <ul className="mt-6 space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  No-code OSC routing and mapping
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  Wi-Fi network configuration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  Save and load presets
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  Firmware updates
                </li>
              </ul>
              <div className="mt-8 p-4 rounded-lg bg-card border border-border">
                <p className="text-sm">
                  <span className="font-medium">Windows 10+ (64-bit)</span>
                  <span className="text-muted"> — Available now</span>
                </p>
                <p className="text-sm mt-2">
                  <span className="font-medium">macOS 12+</span>
                  <span className="text-muted"> — Coming soon</span>
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-2">⚙️</p>
                  <p className="text-muted">SIGNL Dock</p>
                  <p className="text-sm text-muted/70">Configuration Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join the first production run
            </h2>
            <p className="mt-4 text-lg text-muted">
              Your preorder funds the manufacturing of the first SIGNL.ONE units. We'll email you 
              from sales@signl.store when first production units exist—no fake ship dates, no 
              manufactured scarcity.
            </p>
            <div className="mt-10">
              <PreorderButton size="large" />
            </div>
            <p className="mt-8 text-sm text-muted">
              Questions? <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">sales@signl.store</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
