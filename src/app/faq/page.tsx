import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | SIGNL.ONE",
  description: "Frequently asked questions about SIGNL.ONE wireless motorized OSC controller. OSC vs MIDI, compatibility, shipping, and more.",
};

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is OSC, and why not MIDI?",
    answer: (
      <>
        <p>
          OSC (Open Sound Control) is a network protocol designed for real-time communication 
          between computers, sound synthesizers, and other multimedia devices. Unlike MIDI, 
          OSC runs over standard networking (Wi-Fi, Ethernet) and supports:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>High-resolution floating-point values (not just 0-127)</li>
          <li>Human-readable addresses (like <code className="text-accent">/lighting/master/intensity</code>)</li>
          <li>Native networking without USB cables or dongles</li>
          <li>Bidirectional communication (send AND receive)</li>
        </ul>
        <p className="mt-2">
          SIGNL.ONE uses OSC because virtual production tools (Unreal, Pixera, disguise), media 
          servers (TouchDesigner, Resolume), and many live event systems speak OSC natively. 
          No translation layer, no MIDI-to-OSC bridges.
        </p>
      </>
    ),
  },
  {
    question: "How is this different from TouchOSC?",
    answer: (
      <>
        <p>
          TouchOSC is excellent software—it's been wireless OSC since 2008. The difference is 
          physical: SIGNL.ONE gives you three real 100mm motorized faders that you can feel, 
          move, and that move back when your software sends values.
        </p>
        <p className="mt-2">
          A touchscreen can show a fader, but it can't push back. SIGNL.ONE faders chase the 
          show—when someone at the workstation changes a value, your physical fader moves to 
          match. You always know where you are by feel.
        </p>
      </>
    ),
  },
  {
    question: "How is this different from Stream Deck?",
    answer: (
      <>
        <p>
          Stream Deck is a button grid—fantastic for cue triggering, scene switching, and macros 
          in streaming and live production. SIGNL.ONE is a fader controller.
        </p>
        <p className="mt-2">
          If you need continuous control (intensity, opacity, speed, position), you need something 
          you can ride. That's what 100mm faders are for. SIGNL.ONE also has two mechanical keys 
          for triggers, but the core is continuous control with bidirectional feedback.
        </p>
      </>
    ),
  },
  {
    question: "Why not a FaderPort or other USB MIDI controller?",
    answer: (
      <>
        <p>
          Devices like the PreSonus FaderPort 8 are great motorized fader controllers—but they're 
          USB MIDI desk controllers designed to sit next to your workstation. They need a cable, 
          need MIDI-to-OSC translation for non-DAW software, and aren't designed for walk-around use.
        </p>
        <p className="mt-2">
          SIGNL.ONE is battery-powered, wireless, and speaks OSC natively. It's designed for 
          being on the LED volume floor, walking the venue, or adjusting an installation without 
          being tethered to a desk.
        </p>
      </>
    ),
  },
  {
    question: "What about Tangent panels?",
    answer: (
      <>
        <p>
          Tangent (particularly the Wave2) owns the Unreal Engine grading panel space. They're 
          excellent desk controllers for color work. SIGNL.ONE isn't trying to replace a Tangent 
          on your desk.
        </p>
        <p className="mt-2">
          SIGNL.ONE is for when you need to leave the desk—stand on the volume, walk the venue, 
          or control an installation without a visible console. Different tool, different job.
        </p>
      </>
    ),
  },
  {
    question: "What software does it work with?",
    answer: (
      <>
        <p>
          Any software that speaks OSC over UDP. This includes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Unreal Engine (via OSC plugin)</li>
          <li>Pixera</li>
          <li>disguise</li>
          <li>TouchDesigner</li>
          <li>Resolume</li>
          <li>ASSIMILATE Live FX</li>
          <li>Many lighting consoles and media servers</li>
          <li>Custom applications using any OSC library</li>
        </ul>
        <p className="mt-2">
          If your software has OSC input, SIGNL.ONE can talk to it. The SIGNL Dock app lets you 
          configure OSC addresses without writing code.
        </p>
      </>
    ),
  },
  {
    question: "Is SIGNL Dock available for Mac?",
    answer: (
      <>
        <p>
          Not yet. SIGNL Dock is currently Windows 10+ (64-bit) only. macOS 12+ support is in 
          development and listed as "coming soon."
        </p>
        <p className="mt-2">
          We won't say it's shipping until it actually is. If you're Mac-only, you can still use 
          SIGNL.ONE once it's configured—but initial setup currently requires Windows.
        </p>
      </>
    ),
  },
  {
    question: "When will my preorder ship?",
    answer: (
      <>
        <p>
          We don't have a specific ship date, and we won't pretend we do. Here's what we know:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>There is no contracted manufacturer yet</li>
          <li>Preorders fund the first production run</li>
          <li>First assembled articles are typically 6–10 weeks after a complete factory pack</li>
          <li>We will email you from sales@signl.store when units are ready to ship</li>
        </ul>
        <p className="mt-2">
          This is an honest preorder, not fake urgency with a countdown timer.
        </p>
      </>
    ),
  },
  {
    question: "How does VAT work?",
    answer: (
      <>
        <p>
          The listed price (£499) is excluding VAT. For UK customers, UK VAT (20%) will be 
          calculated at checkout via Stripe, bringing the total to approximately £598.80.
        </p>
        <p className="mt-2">
          For customers outside the UK, your local import duties and taxes may apply on delivery. 
          We ship from the UK (SJCVisuals Ltd, London).
        </p>
      </>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <>
        <p>
          Contact us at{" "}
          <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
            sales@signl.store
          </a>
          . We'll work with you directly on refund requests.
        </p>
        <p className="mt-2">
          Please understand that preorder funds go toward manufacturing. We'll be fair, but 
          this isn't the same as returning an in-stock product.
        </p>
      </>
    ),
  },
  {
    question: "What is SIGNL.LINK?",
    answer: (
      <>
        <p>
          SIGNL.LINK is a separate product in development. It's not part of this preorder 
          and isn't available yet. We'll announce it properly when it's ready.
        </p>
      </>
    ),
  },
  {
    question: "How do I contact you?",
    answer: (
      <>
        <p>
          Email:{" "}
          <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
            sales@signl.store
          </a>
        </p>
        <p className="mt-2">
          This inbox handles sales questions, preorder inquiries, support, and general questions. 
          We're a small team (SJCVisuals Ltd, London) and we read everything.
        </p>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl mx-auto">
            Common questions about SIGNL.ONE, OSC, preorders, and compatibility.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <h2 className="text-lg font-semibold mb-3">{faq.question}</h2>
                <div className="text-muted text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Still have questions?</h2>
            <p className="mt-4 text-muted">
              We're happy to help. Reach out and we'll get back to you.
            </p>
            <a 
              href="mailto:sales@signl.store"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Contact sales@signl.store
            </a>
          </div>
        </div>
      </section>

      {/* Ready to order */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Ready to preorder?</h2>
            <p className="mt-4 text-muted">
              £499 excl. VAT. Join the first production run.
            </p>
            <Link 
              href="/preorder"
              className="inline-flex items-center justify-center mt-6 px-8 py-4 bg-accent text-background font-semibold text-lg rounded-lg hover:bg-accent-hover transition-colors"
            >
              Preorder SIGNL.ONE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
