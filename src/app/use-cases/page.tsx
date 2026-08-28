import { Metadata } from "next";
import { PreorderButton } from "@/components/PreorderButton";

export const metadata: Metadata = {
  title: "Use Cases | SIGNL.ONE",
  description: "SIGNL.ONE for virtual production, live events, and installations. Wireless motorized OSC control where you need it.",
};

export default function UseCasesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Three jobs, one controller
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl mx-auto">
            SIGNL.ONE gives you tactile, wireless control in situations where you can't be 
            tethered to a desk.
          </p>
        </div>
      </section>

      {/* Virtual Production */}
      <section id="virtual-production" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
                Virtual Production
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Control from the volume floor
              </h2>
              <p className="mt-4 text-lg text-muted">
                On an LED volume, you're often standing where you need to see the shot—not at a 
                workstation. SIGNL.ONE lets you adjust lighting, camera parameters, and environment 
                settings while standing right where the action is.
              </p>
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Unreal Engine Control</h3>
                  <p className="text-sm text-muted">
                    Map faders to any OSC-exposed parameter. Adjust virtual lighting intensity, 
                    color temperature, sun angle, fog density—whatever your project needs. 
                    The faders chase the current values when something else changes them.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Camera & Environment</h3>
                  <p className="text-sm text-muted">
                    Control camera rigs, focus pulls, or HDRI rotation. Switch pages to access 
                    different parameter sets without going back to your desk.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Bidirectional Feedback</h3>
                  <p className="text-sm text-muted">
                    When someone at the workstation changes a value, your faders move to match. 
                    You always know where you are.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted">
                Works with: Unreal Engine, Pixera, disguise, ASSIMILATE Live FX
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-5xl mb-4">🎬</p>
                  <p className="text-lg font-semibold">LED Volume</p>
                  <p className="text-sm text-muted">Walk-around control</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Fader 1</span>
                  <span>Virtual Sun Intensity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 2</span>
                  <span>Sky Color Temperature</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 3</span>
                  <span>Fog Density</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Key 1</span>
                  <span>Trigger Look A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Key 2</span>
                  <span>Trigger Look B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Events */}
      <section id="live-events" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-2xl border border-border p-8">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-5xl mb-4">🎤</p>
                  <p className="text-lg font-semibold">Live Venue</p>
                  <p className="text-sm text-muted">Floor-level control</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Fader 1</span>
                  <span>Master Intensity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 2</span>
                  <span>FX Level</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 3</span>
                  <span>Haze Amount</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Key 1</span>
                  <span>Next Cue</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Key 2</span>
                  <span>Blackout</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                Live Events
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Work the room, not the booth
              </h2>
              <p className="mt-4 text-lg text-muted">
                On the floor of a live event, you see what the audience sees. SIGNL.ONE gives you 
                real faders for intensity, FX, and cue triggering—without being stuck at FOH.
              </p>
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Ride the Show</h3>
                  <p className="text-sm text-muted">
                    Bump cues, ride master levels, or adjust FX intensity with real 100mm faders. 
                    When the cue stack advances, the faders update to reflect current values.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Wireless Freedom</h3>
                  <p className="text-sm text-muted">
                    Walk the venue, stand with the performers, be where you need to be. 8+ hours 
                    of battery means you don't have to worry about charging mid-show.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Cue Triggering</h3>
                  <p className="text-sm text-muted">
                    The mechanical keys give you tactile cue triggers. Advance the show, fire 
                    effects, or emergency blackout—all from your hand.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted">
                Send OSC to: lighting consoles, media servers, show control systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installations */}
      <section id="installations" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
                Installations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Gallery-friendly control
              </h2>
              <p className="mt-4 text-lg text-muted">
                Permanent installations and gallery work often don't have room for a full console. 
                SIGNL.ONE gives you compact, wireless control over media servers, projection mapping, 
                and interactive exhibits.
              </p>
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Media Server Control</h3>
                  <p className="text-sm text-muted">
                    Map faders to layer opacity, playback speed, or effect parameters. Control 
                    Resolume, TouchDesigner, or custom media applications via OSC.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Projection Mapping</h3>
                  <p className="text-sm text-muted">
                    Adjust alignment, brightness, and blend zones while walking around the 
                    installation. See the result from every angle.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Interactive Exhibits</h3>
                  <p className="text-sm text-muted">
                    Quick parameter tweaks for sensor-driven or generative work. Test and tune 
                    without a visible control surface in the gallery space.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted">
                Works with: TouchDesigner, Resolume, custom OSC applications
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-5xl mb-4">🎨</p>
                  <p className="text-lg font-semibold">Gallery Install</p>
                  <p className="text-sm text-muted">Hidden control surface</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Fader 1</span>
                  <span>Layer A Opacity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 2</span>
                  <span>Layer B Opacity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Fader 3</span>
                  <span>Effect Intensity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Encoder</span>
                  <span>Playback Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Thread */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">The common thread</h2>
            <p className="mt-4 text-lg text-muted">
              Virtual production, live events, installations—they all share the same need: 
              tactile control without being stuck at a desk. SIGNL.ONE is a battery-powered 
              OSC remote with real motorized faders that chase the show.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">Walk-around</p>
                <p className="text-sm text-muted mt-1">Be where you need to be</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">Battery</p>
                <p className="text-sm text-muted mt-1">8+ hours, no cables</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-accent">Bidirectional</p>
                <p className="text-sm text-muted mt-1">Faders chase the show</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to preorder?</h2>
            <p className="mt-4 text-lg text-muted">
              £499 excl. VAT. Your preorder funds the first production run.
            </p>
            <div className="mt-8">
              <PreorderButton size="large" />
            </div>
            <p className="mt-6 text-sm text-muted">
              Questions about your use case?{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
